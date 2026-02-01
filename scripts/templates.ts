/**
 * Entity-specific Markdown Templates
 *
 * Templates for converting each of the 19 database types into Obsidian-compatible markdown.
 */

// Type definitions inlined to avoid ESM/CJS module issues
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

export interface Entity {
  id: string;
  [key: string]: unknown;
}

/**
 * Known title fields by database type
 */
export const TITLE_FIELDS: Partial<Record<GraphDatabaseName, string>> = {
  goals: 'goals',
  projects: 'projectName',
  tasks: 'task',
  positions: 'positionName',
  departments: 'deptName',
  functions: 'functionName',
  strategies: 'strategyName',
  hypothesis: 'hypothesisName',
  meetings: 'meetingName',
  processes: 'processName',
  results: 'resultName',
  kpis: 'kpiName',
  issues: 'issueName',
  decisions: 'decisionName',
  'value-streams': 'streamName',
  'use-cases': 'useCaseName',
  'rabsic-matrix': 'matrixName',
  businessModels: 'modelName',
  companyWiki: 'title',
};

/**
 * Status fields by database type
 */
export const STATUS_FIELDS: Partial<Record<GraphDatabaseName, string>> = {
  goals: 'status',
  projects: 'status',
  tasks: 'status',
  issues: 'status',
  decisions: 'status',
  hypothesis: 'status',
  strategies: 'status',
};

/**
 * Relation fields to convert to wikilinks, by database type
 * Maps db -> relation field -> target database
 */
export const RELATION_FIELDS: Record<string, Record<string, GraphDatabaseName | null>> = {
  goals: {
    parentItem: 'goals',
    subItem: 'goals',
    ownerPosition: 'positions',
    projects: 'projects',
    strategies: 'strategies',
    results: 'results',
    businessModel: 'businessModels',
    kPIs: 'kpis',
    hypothesis: 'hypothesis',
  },
  projects: {
    goals: 'goals',
    tasks: 'tasks',
    processes: 'processes',
    department: 'departments',
    'r)': 'positions',
    'a)': 'positions',
    'b)': 'positions',
    's)': 'positions',
    'i)': 'positions',
    'c)': 'positions',
  },
  tasks: {
    parentItem: 'tasks',
    subItem: 'tasks',
    blockedBy: 'tasks',
    project: 'projects',
    goals: 'goals',
    functions: 'functions',
    kPI: 'kpis',
    kPIs: 'kpis',
    context: null, // General context
    'r)': 'positions',
    'a)': 'positions',
    'b)': 'positions',
    's)': 'positions',
    'i)': 'positions',
    'c)': 'positions',
  },
  positions: {
    reportsTo: 'positions',
    manages: 'positions',
    department: 'departments',
    goals: 'goals',
    'r)': 'tasks',
    'a)': 'tasks',
    'b)': 'tasks',
    's)': 'tasks',
    'i)': 'tasks',
    'c)': 'tasks',
  },
  departments: {
    positions: 'positions',
    head: 'positions',
    functions: 'functions',
    projects: 'projects',
    goals: 'goals',
  },
  functions: {
    positions: 'positions',
    department: 'departments',
    subFunctions: 'functions',
    tasks: 'tasks',
    processes: 'processes',
  },
  strategies: {
    goals: 'goals',
    projects: 'projects',
    hypothesis: 'hypothesis',
    kPIs: 'kpis',
    ownerPosition: 'positions',
  },
  hypothesis: {
    strategies: 'strategies',
    goals: 'goals',
    results: 'results',
  },
  meetings: {
    projects: 'projects',
    tasks: 'tasks',
    attendees: 'positions',
    decisions: 'decisions',
  },
  processes: {
    functions: 'functions',
    projects: 'projects',
    tasks: 'tasks',
    inputStreams: 'value-streams',
    outputStreams: 'value-streams',
  },
  results: {
    goals: 'goals',
    kPIs: 'kpis',
    hypothesis: 'hypothesis',
  },
  kpis: {
    goals: 'goals',
    strategies: 'strategies',
    ownerPosition: 'positions',
  },
  issues: {
    relatedProjects: 'projects',
    relatedTasks: 'tasks',
    ownerPosition: 'positions',
    decisions: 'decisions',
  },
  decisions: {
    issues: 'issues',
    projects: 'projects',
    'r)': 'positions',
    'a)': 'positions',
    'b)': 'positions',
    's)': 'positions',
    'i)': 'positions',
    'c)': 'positions',
  },
  'value-streams': {
    startPosition: 'positions',
    endPosition: 'positions',
    processes: 'processes',
  },
  'use-cases': {
    actor: 'positions',
    functions: 'functions',
    processes: 'processes',
  },
  'rabsic-matrix': {
    decision: 'decisions',
    project: 'projects',
    task: 'tasks',
    responsible: 'positions',
    accountable: 'positions',
    backup: 'positions',
    support: 'positions',
    informed: 'positions',
    consulted: 'positions',
  },
  businessModels: {
    goals: 'goals',
    strategies: 'strategies',
    valueStreams: 'value-streams',
  },
  companyWiki: {
    relatedDocs: 'companyWiki',
    projects: 'projects',
    functions: 'functions',
  },
};

/**
 * RABSIC field names for human-readable labels
 */
export const RABSIC_LABELS: Record<string, string> = {
  'r)': 'Responsible',
  'a)': 'Accountable',
  'b)': 'Backup',
  's)': 'Support',
  'i)': 'Informed',
  'c)': 'Consulted',
};

/**
 * Get human-readable label for a relation field
 */
export function getRelationLabel(field: string): string {
  if (field in RABSIC_LABELS) {
    return RABSIC_LABELS[field];
  }
  // Convert camelCase to Title Case with spaces
  return field
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

/**
 * Get display title from an entity
 */
export function getEntityTitle(entity: Entity, dbType: GraphDatabaseName): string {
  const titleField = TITLE_FIELDS[dbType];
  if (titleField && entity[titleField]) {
    const title = entity[titleField];
    if (typeof title === 'string') {
      return title;
    }
  }

  // Fallback: try common title fields
  const commonFields = ['title', 'name', 'label', 'subject'];
  for (const field of commonFields) {
    if (entity[field] && typeof entity[field] === 'string') {
      return entity[field] as string;
    }
  }

  // Last resort: use ID
  return entity.id;
}

/**
 * Get status from an entity
 */
export function getEntityStatus(entity: Entity, dbType: GraphDatabaseName): string | null {
  const statusField = STATUS_FIELDS[dbType];
  if (statusField && entity[statusField]) {
    const status = entity[statusField];
    if (typeof status === 'string') {
      return status;
    }
  }
  return null;
}

/**
 * Convert database type to singular human-readable type name
 */
export function dbTypeToSingular(dbType: GraphDatabaseName): string {
  const singularMap: Record<string, string> = {
    goals: 'Goal',
    projects: 'Project',
    tasks: 'Task',
    positions: 'Position',
    departments: 'Department',
    functions: 'Function',
    strategies: 'Strategy',
    hypothesis: 'Hypothesis',
    meetings: 'Meeting',
    processes: 'Process',
    results: 'Result',
    kpis: 'KPI',
    issues: 'Issue',
    decisions: 'Decision',
    'value-streams': 'Value Stream',
    'use-cases': 'Use Case',
    'rabsic-matrix': 'RABSIC Matrix',
    businessModels: 'Business Model',
    companyWiki: 'Wiki Page',
  };
  return singularMap[dbType] || dbType;
}

/**
 * Get directory name for a database type (for output paths)
 */
export function dbTypeToDirectory(dbType: GraphDatabaseName): string {
  return dbType;
}

/**
 * Format date for display
 */
export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return 'Unknown';
  try {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  } catch {
    return dateStr;
  }
}

/**
 * Escape special characters for YAML frontmatter
 * Always quotes strings to avoid YAML parsing ambiguities
 */
export function escapeYaml(value: string): string {
  // Always quote strings to avoid YAML parsing issues with:
  // - UUIDs with hyphens (e.g., "29c4a6fb-8b06-80a2-b600-e08620e618a2")
  // - Strings starting with special chars (e.g., "@novycane_")
  // - Strings starting with numbers (e.g., "5_Done")
  // - Strings with colons, brackets, etc.
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
}

/**
 * Generate YAML frontmatter block
 */
export function generateFrontmatter(data: Record<string, unknown>): string {
  const lines: string[] = ['---'];

  for (const [key, value] of Object.entries(data)) {
    if (value === null || value === undefined) continue;

    if (typeof value === 'string') {
      lines.push(`${key}: ${escapeYaml(value)}`);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${escapeYaml(String(item))}`);
      }
    }
  }

  lines.push('---');
  return lines.join('\n');
}
