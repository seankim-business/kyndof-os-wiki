/**
 * Generate graph visualization data from World Model entities
 *
 * Creates nodes and links for react-force-graph-3d visualization
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database paths
const DATABASES_PATH = path.resolve(__dirname, '../../world-model/databases');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/graph-data.json');

// Node color palette by entity type
const TYPE_COLORS: Record<string, string> = {
  departments: '#3b82f6',   // blue
  goals: '#22c55e',         // green
  tasks: '#f97316',         // orange
  projects: '#8b5cf6',      // purple
  kpis: '#06b6d4',          // cyan
  positions: '#ec4899',     // pink
  strategies: '#eab308',    // yellow
  processes: '#64748b',     // slate
  meetings: '#14b8a6',      // teal
  'use-cases': '#a855f7',  // violet
  decisions: '#f59e0b',     // amber
  issues: '#ef4444',        // red
  hypothesis: '#10b981',    // emerald
  functions: '#6366f1',     // indigo
  results: '#84cc16',       // lime
  'business-models': '#0ea5e9', // sky
  'value-streams': '#8b5cf6',  // purple
  'rabsic-matrix': '#9ca3af',  // gray
  'company-wiki': '#94a3b8',   // slate
};

// Known relation fields
const RELATION_FIELDS = [
  'r)', 'a)', 'b)', 's)', 'i)', 'c)',
  'tasks', 'projects', 'goals', 'kpis', 'strategies',
  'department', 'departments', 'positions', 'functions',
  'processes', 'issues', 'decisions', 'hypothesis',
  'meetings', 'results', 'reportsTo', 'manages',
  'blockedBy', 'context', 'subItem', 'self',
  'businessModel', 'kPI', 'kPIs', 'subFunctions',
];

interface Entity {
  id: string;
  title?: string;
  name?: string;
  [key: string]: any;
}

interface DatabaseFile {
  data: Entity[];
}

interface GraphNode {
  id: string;
  label: string;
  type: string;
  color: string;
  size: number;
}

interface GraphLink {
  source: string;
  target: string;
  relationship: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

/**
 * Flatten nested arrays of IDs
 */
function flattenIds(value: any): string[] {
  if (!value) return [];
  if (typeof value === 'string') return [value];
  if (!Array.isArray(value)) return [];

  const result: string[] = [];
  for (const item of value) {
    if (typeof item === 'string') {
      result.push(item);
    } else if (Array.isArray(item)) {
      result.push(...flattenIds(item));
    } else if (item && typeof item === 'object' && 'id' in item) {
      result.push(item.id);
    }
  }
  return result;
}

/**
 * Load a database file
 */
function loadDatabase(dbName: string): Entity[] {
  const filePath = path.join(DATABASES_PATH, `${dbName}.json`);

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const db = JSON.parse(content) as DatabaseFile;
    return db.data || [];
  } catch (error) {
    console.warn(`Failed to load ${dbName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return [];
  }
}

/**
 * Get entity label (title or name)
 */
function getEntityLabel(entity: Entity): string {
  return entity.title || entity.name || entity.id.slice(0, 8);
}

/**
 * Generate graph data
 */
function generateGraphData(): GraphData {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];
  const connectionCounts = new Map<string, number>();
  const entityTypes = new Map<string, string>();

  // Database names (matching runtime graph types)
  const databases = [
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

  // Load all entities and collect links
  for (const dbName of databases) {
    const entities = loadDatabase(dbName);
    const entityType = dbName.replace(/([A-Z])/g, '-$1').toLowerCase();

    for (const entity of entities) {
      if (!entity.id) continue;

      // Track entity type
      entityTypes.set(entity.id, entityType);

      // Extract relations and create links
      for (const fieldName of RELATION_FIELDS) {
        const value = entity[fieldName];
        if (!value) continue;

        const relatedIds = flattenIds(value);

        for (const targetId of relatedIds) {
          if (!targetId || targetId === entity.id) continue;

          // Add link
          links.push({
            source: entity.id,
            target: targetId,
            relationship: fieldName,
          });

          // Count connections
          connectionCounts.set(entity.id, (connectionCounts.get(entity.id) || 0) + 1);
          connectionCounts.set(targetId, (connectionCounts.get(targetId) || 0) + 1);
        }
      }
    }
  }

  // Create nodes with connection-based sizing
  for (const dbName of databases) {
    const entities = loadDatabase(dbName);
    const entityType = dbName.replace(/([A-Z])/g, '-$1').toLowerCase();

    for (const entity of entities) {
      if (!entity.id) continue;

      const connectionCount = connectionCounts.get(entity.id) || 0;
      const size = Math.max(5, Math.min(20, 5 + connectionCount * 0.5));

      nodes.push({
        id: entity.id,
        label: getEntityLabel(entity),
        type: entityType,
        color: TYPE_COLORS[entityType] || '#9ca3af',
        size,
      });
    }
  }

  console.log(`Generated ${nodes.length} nodes and ${links.length} links`);

  return { nodes, links };
}

/**
 * Main execution
 */
function main() {
  console.log('Generating graph data from World Model...');

  const graphData = generateGraphData();

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write graph data
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(graphData, null, 2));

  console.log(`Graph data written to ${OUTPUT_PATH}`);
  console.log(`  - Nodes: ${graphData.nodes.length}`);
  console.log(`  - Links: ${graphData.links.length}`);
}

main();
