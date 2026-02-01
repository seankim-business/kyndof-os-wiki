#!/usr/bin/env tsx
/**
 * Markdown Generator
 *
 * Converts all 19 JSON databases into Obsidian-compatible markdown files.
 *
 * Usage:
 *   cd wiki && pnpm generate
 *
 * Output:
 *   wiki/src/content/{dbtype}/{id}.md
 *   wiki/src/content/{dbtype}/_index.md
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  RELATION_FIELDS,
  getEntityTitle,
  getEntityStatus,
  getRelationLabel,
  dbTypeToSingular,
  dbTypeToDirectory,
  formatDate,
  generateFrontmatter,
} from './templates.js';

// ============================================================================
// Types (inlined from runtime/src/graph/types.ts to avoid module issues)
// ============================================================================

/**
 * All 19 database types in the World Model
 */
export type GraphDatabaseName =
  | 'businessModels'
  | 'companyWiki'
  | 'decisions'
  | 'departments'
  | 'functions'
  | 'goals'
  | 'hypothesis'
  | 'issues'
  | 'kpis'
  | 'meetings'
  | 'positions'
  | 'processes'
  | 'projects'
  | 'rabsic-matrix'
  | 'results'
  | 'strategies'
  | 'tasks'
  | 'use-cases'
  | 'value-streams';

/**
 * Base entity interface
 */
export interface Entity {
  id: string;
  [key: string]: unknown;
}

/**
 * Wrapper structure for database JSON files
 */
interface DatabaseFile<T extends Entity = Entity> {
  $schema: string;
  version: string;
  lastSynced: string;
  data: T[];
}

/**
 * Main index structure for fast entity lookups
 */
export interface GraphIndex {
  entities: Map<string, Entity>;
  byDatabase: Map<GraphDatabaseName, Entity[]>;
  entityToDatabase: Map<string, GraphDatabaseName>;
  metadata: {
    buildTime: number;
    entityCount: number;
    databaseCount: number;
  };
}

// ============================================================================
// Graph functions (inlined from runtime/src/graph to avoid module issues)
// ============================================================================

/** All database names */
const ALL_DATABASES: GraphDatabaseName[] = [
  'businessModels',
  'companyWiki',
  'decisions',
  'departments',
  'functions',
  'goals',
  'hypothesis',
  'issues',
  'kpis',
  'meetings',
  'positions',
  'processes',
  'projects',
  'rabsic-matrix',
  'results',
  'strategies',
  'tasks',
  'use-cases',
  'value-streams',
];

/**
 * Load a single database file
 */
function loadDatabase(basePath: string, dbName: GraphDatabaseName): DatabaseFile | null {
  const filePath = path.join(basePath, `${dbName}.json`);

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as DatabaseFile;
  } catch (error) {
    console.warn(`[graph] Failed to load database '${dbName}': ${error instanceof Error ? error.message : 'Unknown error'}`);
    return null;
  }
}

/**
 * Build the graph index from database files
 */
export function buildIndex(basePath: string): GraphIndex {
  const startTime = performance.now();

  const entities = new Map<string, Entity>();
  const byDatabase = new Map<GraphDatabaseName, Entity[]>();
  const entityToDatabase = new Map<string, GraphDatabaseName>();

  for (const dbName of ALL_DATABASES) {
    const db = loadDatabase(basePath, dbName);

    if (db && Array.isArray(db.data)) {
      const dbEntities: Entity[] = [];

      for (const entity of db.data) {
        if (entity && typeof entity.id === 'string') {
          entities.set(entity.id, entity);
          entityToDatabase.set(entity.id, dbName);
          dbEntities.push(entity);
        }
      }

      byDatabase.set(dbName, dbEntities);
    } else {
      byDatabase.set(dbName, []);
    }
  }

  const buildTime = performance.now() - startTime;

  return {
    entities,
    byDatabase,
    entityToDatabase,
    metadata: {
      buildTime,
      entityCount: entities.size,
      databaseCount: byDatabase.size,
    },
  };
}

/**
 * Flatten potentially nested arrays of IDs
 */
export function flattenRelationIds(value: unknown): string[] {
  if (!value) return [];

  if (typeof value === 'string') {
    return [value];
  }

  if (!Array.isArray(value)) return [];

  const result: string[] = [];

  for (const item of value) {
    if (typeof item === 'string') {
      result.push(item);
    } else if (Array.isArray(item)) {
      result.push(...flattenRelationIds(item));
    } else if (item && typeof item === 'object' && 'id' in item && typeof item.id === 'string') {
      result.push(item.id);
    }
  }

  return result;
}

// ============================================================================
// Generator types and functions
// ============================================================================

/**
 * Generator configuration
 */
export interface GeneratorConfig {
  /** Path to world-model/databases */
  dbPath: string;
  /** Path to wiki/src/content */
  outputPath: string;
  /** Enable verbose logging */
  verbose: boolean;
}

/**
 * Statistics for generation run
 */
interface GeneratorStats {
  totalEntities: number;
  totalFiles: number;
  byDatabase: Record<string, number>;
  errors: string[];
  startTime: number;
  endTime?: number;
}

/**
 * Generate markdown for all databases
 */
export async function generateAllMarkdown(config: GeneratorConfig): Promise<GeneratorStats> {
  const stats: GeneratorStats = {
    totalEntities: 0,
    totalFiles: 0,
    byDatabase: {},
    errors: [],
    startTime: Date.now(),
  };

  if (config.verbose) {
    console.log('[generate] Building index from', config.dbPath);
  }

  // Build the graph index
  const index = buildIndex(config.dbPath);

  if (config.verbose) {
    console.log(`[generate] Loaded ${index.metadata.entityCount} entities from ${index.metadata.databaseCount} databases`);
  }

  // Process each database
  for (const [dbName, entities] of index.byDatabase.entries()) {
    if (entities.length === 0) continue;

    const dbType = dbName as GraphDatabaseName;
    const dirName = dbTypeToDirectory(dbType);
    const outputDir = path.join(config.outputPath, dirName);

    // Ensure output directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    if (config.verbose) {
      console.log(`[generate] Processing ${dbName}: ${entities.length} entities`);
    }

    let dbCount = 0;

    // Generate individual entity files
    for (const entity of entities) {
      try {
        const markdown = generateEntityMarkdown(entity, dbType, index);
        const filename = `${entity.id}.md`;
        const filepath = path.join(outputDir, filename);

        fs.writeFileSync(filepath, markdown, 'utf-8');
        dbCount++;
        stats.totalFiles++;
      } catch (error) {
        const errMsg = `Failed to generate ${dbName}/${entity.id}: ${error instanceof Error ? error.message : String(error)}`;
        stats.errors.push(errMsg);
        if (config.verbose) {
          console.error(`[generate] ${errMsg}`);
        }
      }
    }

    // Generate index page for this database
    try {
      const indexMarkdown = generateIndexPage(entities, dbType);
      const indexPath = path.join(outputDir, '_index.md');
      fs.writeFileSync(indexPath, indexMarkdown, 'utf-8');
      stats.totalFiles++;
    } catch (error) {
      const errMsg = `Failed to generate ${dbName}/_index.md: ${error instanceof Error ? error.message : String(error)}`;
      stats.errors.push(errMsg);
    }

    stats.byDatabase[dbName] = dbCount;
    stats.totalEntities += entities.length;
  }

  stats.endTime = Date.now();

  if (config.verbose) {
    const duration = (stats.endTime - stats.startTime) / 1000;
    console.log(`[generate] Complete: ${stats.totalFiles} files in ${duration.toFixed(2)}s`);
    if (stats.errors.length > 0) {
      console.log(`[generate] Errors: ${stats.errors.length}`);
    }
  }

  return stats;
}

/**
 * Generate markdown content for a single entity
 */
export function generateEntityMarkdown(
  entity: Entity,
  dbType: GraphDatabaseName,
  index: GraphIndex
): string {
  const title = getEntityTitle(entity, dbType);
  const status = getEntityStatus(entity, dbType);
  const frontmatter = entityToFrontmatter(entity, dbType);
  const wikilinks = generateWikilinks(entity, dbType, index);

  const lines: string[] = [];

  // Frontmatter
  lines.push(generateFrontmatter(frontmatter));
  lines.push('');

  // Title
  lines.push(`# ${title}`);
  lines.push('');

  // Status and type info
  if (status) {
    lines.push(`**Status:** ${status}  `);
  }
  lines.push(`**Type:** ${dbTypeToSingular(dbType)}`);
  lines.push('');

  // Additional metadata section
  const metaFields = getMetadataFields(entity, dbType);
  if (metaFields.length > 0) {
    lines.push('## Metadata');
    lines.push('');
    for (const { label, value } of metaFields) {
      lines.push(`- **${label}:** ${value}`);
    }
    lines.push('');
  }

  // Relations
  if (wikilinks) {
    lines.push('## Relations');
    lines.push('');
    lines.push(wikilinks);
  }

  // Footer
  lines.push('---');
  const lastSynced = entity.lastEditedTime || entity.createdTime;
  if (lastSynced) {
    lines.push(`*Last synced: ${formatDate(lastSynced as string)}*`);
  }
  lines.push('');

  return lines.join('\n');
}

/**
 * Extract frontmatter data from an entity
 */
export function entityToFrontmatter(entity: Entity, dbType: GraphDatabaseName): Record<string, unknown> {
  const title = getEntityTitle(entity, dbType);
  const status = getEntityStatus(entity, dbType);

  const fm: Record<string, unknown> = {
    id: entity.id,
    title: title,
    type: dbTypeToSingular(dbType).toLowerCase().replace(/\s+/g, '-'),
  };

  // Add lastSynced from entity or fallback
  if (entity.lastEditedTime) {
    fm.lastSynced = entity.lastEditedTime;
  } else if (entity.createdTime) {
    fm.lastSynced = entity.createdTime;
  }

  // Add status if present
  if (status) {
    fm.status = status;
  }

  // Add other relevant metadata
  if (entity.dueDate) {
    fm.dueDate = entity.dueDate;
  }
  if (entity.completed !== undefined) {
    fm.completed = entity.completed;
  }
  if (entity.priority) {
    fm.priority = entity.priority;
  }

  return fm;
}

/**
 * Generate wikilinks section for an entity's relations
 */
export function generateWikilinks(
  entity: Entity,
  dbType: GraphDatabaseName,
  index: GraphIndex
): string {
  const relationDefs = RELATION_FIELDS[dbType] || {};
  const sections: Map<string, string[]> = new Map();

  for (const [fieldName, targetDb] of Object.entries(relationDefs)) {
    const value = entity[fieldName];
    if (!value) continue;

    const ids = flattenRelationIds(value);
    if (ids.length === 0) continue;

    const label = getRelationLabel(fieldName);
    const links: string[] = [];

    for (const id of ids) {
      const targetEntity = index.entities.get(id);
      if (targetEntity) {
        // Determine target database
        const actualDb = index.entityToDatabase.get(id) || targetDb;
        const linkTitle = getEntityTitle(targetEntity, actualDb as GraphDatabaseName);
        // Format: [[database/id|title]]
        links.push(`- [[${actualDb}/${id}|${linkTitle}]]`);
      } else {
        // Entity not found - still create link but note it
        const db = targetDb || 'unknown';
        links.push(`- [[${db}/${id}|${id}]]`);
      }
    }

    if (links.length > 0) {
      sections.set(label, links);
    }
  }

  if (sections.size === 0) {
    return '';
  }

  const lines: string[] = [];
  for (const [label, links] of sections) {
    lines.push(`### ${label}`);
    lines.push(...links);
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Generate index page for a database type
 */
export function generateIndexPage(entities: Entity[], dbType: GraphDatabaseName): string {
  const typeName = dbTypeToSingular(dbType);
  const pluralName = dbType.replace(/-/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');

  const frontmatter = generateFrontmatter({
    title: `${typeName} Index`,
    type: 'index',
    count: entities.length,
  });

  const lines: string[] = [];
  lines.push(frontmatter);
  lines.push('');
  lines.push(`# ${pluralName}`);
  lines.push('');
  lines.push(`Total: **${entities.length}** items`);
  lines.push('');

  // Group by status if available
  const statusGroups: Map<string, Entity[]> = new Map();
  const noStatus: Entity[] = [];

  for (const entity of entities) {
    const status = getEntityStatus(entity, dbType);
    if (status) {
      if (!statusGroups.has(status)) {
        statusGroups.set(status, []);
      }
      statusGroups.get(status)!.push(entity);
    } else {
      noStatus.push(entity);
    }
  }

  // Sort entities alphabetically by title for listing
  const sortByTitle = (a: Entity, b: Entity) => {
    const titleA = getEntityTitle(a, dbType);
    const titleB = getEntityTitle(b, dbType);
    return titleA.localeCompare(titleB);
  };

  if (statusGroups.size > 0) {
    for (const [status, items] of statusGroups) {
      lines.push(`## ${status}`);
      lines.push('');
      items.sort(sortByTitle);
      for (const entity of items) {
        const title = getEntityTitle(entity, dbType);
        lines.push(`- [[${dbType}/${entity.id}|${title}]]`);
      }
      lines.push('');
    }

    if (noStatus.length > 0) {
      lines.push('## Other');
      lines.push('');
      noStatus.sort(sortByTitle);
      for (const entity of noStatus) {
        const title = getEntityTitle(entity, dbType);
        lines.push(`- [[${dbType}/${entity.id}|${title}]]`);
      }
      lines.push('');
    }
  } else {
    // No status grouping - just list all
    lines.push('## All Items');
    lines.push('');
    const sorted = [...entities].sort(sortByTitle);
    for (const entity of sorted) {
      const title = getEntityTitle(entity, dbType);
      lines.push(`- [[${dbType}/${entity.id}|${title}]]`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Get additional metadata fields to display for an entity
 */
function getMetadataFields(
  entity: Entity,
  dbType: GraphDatabaseName
): Array<{ label: string; value: string }> {
  const fields: Array<{ label: string; value: string }> = [];

  // Common fields
  if (entity.dueDate) {
    fields.push({ label: 'Due Date', value: formatDate(entity.dueDate as string) });
  }
  if (entity.createdTime) {
    fields.push({ label: 'Created', value: formatDate(entity.createdTime as string) });
  }
  if (entity.progress !== undefined && typeof entity.progress === 'number') {
    fields.push({ label: 'Progress', value: `${Math.round(entity.progress * 100)}%` });
  }
  if (entity.priority) {
    fields.push({ label: 'Priority', value: String(entity.priority) });
  }
  if (entity.type && typeof entity.type === 'string') {
    fields.push({ label: 'Subtype', value: entity.type as string });
  }
  if (entity.location && typeof entity.location === 'string') {
    fields.push({ label: 'Location', value: entity.location as string });
  }
  if (entity.description && typeof entity.description === 'string' && entity.description.length > 0) {
    const desc = entity.description as string;
    const truncated = desc.length > 100 ? desc.substring(0, 100) + '...' : desc;
    fields.push({ label: 'Description', value: truncated });
  }

  return fields;
}

// Main execution
async function main() {
  const projectRoot = path.resolve(import.meta.dirname, '../..');
  const config: GeneratorConfig = {
    dbPath: path.join(projectRoot, 'world-model/databases'),
    outputPath: path.join(projectRoot, 'wiki/src/content'),
    verbose: true,
  };

  console.log('=== Markdown Generator ===');
  console.log(`Input:  ${config.dbPath}`);
  console.log(`Output: ${config.outputPath}`);
  console.log('');

  try {
    const stats = await generateAllMarkdown(config);

    console.log('');
    console.log('=== Summary ===');
    console.log(`Total entities: ${stats.totalEntities}`);
    console.log(`Files generated: ${stats.totalFiles}`);
    console.log('');

    console.log('By database:');
    for (const [db, count] of Object.entries(stats.byDatabase)) {
      console.log(`  ${db}: ${count} files`);
    }

    if (stats.errors.length > 0) {
      console.log('');
      console.log('Errors:');
      for (const err of stats.errors.slice(0, 10)) {
        console.log(`  - ${err}`);
      }
      if (stats.errors.length > 10) {
        console.log(`  ... and ${stats.errors.length - 10} more`);
      }
    }

    const duration = (stats.endTime! - stats.startTime) / 1000;
    console.log('');
    console.log(`Completed in ${duration.toFixed(2)} seconds`);

    process.exit(stats.errors.length > 0 ? 1 : 0);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
