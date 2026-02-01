import { defineCollection, z } from 'astro:content';

// NEW: Importance-based content schema for numbered folders
const importanceBasedSchema = z.object({
  title: z.string(),
  description: z.string(),
  priority: z.number().min(0).max(99),
  tags: z.array(z.string()).optional().default([]),
  lastUpdated: z.string(), // YYYY-MM-DD format
  relatedDocs: z.array(z.string()).optional().default([]),
});

// Base schema shared by all entity types (legacy database-generated content)
const baseEntitySchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum([
    'person',
    'company',
    'project',
    'document',
    'meeting',
    'task',
    'goal',
    'metric',
    'process',
    'system',
    'team',
    'role',
    'skill',
    'tool',
    'location',
    'event',
    'concept',
  ]),
  lastSynced: z.coerce.date(),
  relations: z
    .array(
      z.object({
        type: z.string(), // relation type (e.g., "works_at", "owns", "parent_of")
        target: z.string(), // target entity ID
        label: z.string().optional(), // display label
      })
    )
    .optional()
    .default([]),
  tags: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
  status: z.string().optional(),
  notionUrl: z.string().url().optional(),
});

// Entity-specific schemas extending the base
const personSchema = baseEntitySchema.extend({
  type: z.literal('person'),
  email: z.string().email().optional(),
  role: z.string().optional(),
  department: z.string().optional(),
});

const companySchema = baseEntitySchema.extend({
  type: z.literal('company'),
  industry: z.string().optional(),
  website: z.string().url().optional(),
  size: z.string().optional(),
});

const projectSchema = baseEntitySchema.extend({
  type: z.literal('project'),
  // Accept actual Notion status values from the database
  status: z.enum(['Done', 'Cancelled', 'In progress', 'Always On', 'Template', 'Planning', 'Backlog']).optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  owner: z.string().optional(),
});

const meetingSchema = baseEntitySchema.extend({
  type: z.literal('meeting'),
  date: z.coerce.date().optional(),
  attendees: z.array(z.string()).optional().default([]),
  agenda: z.string().optional(),
  notes: z.string().optional(),
});

const taskSchema = baseEntitySchema.extend({
  type: z.literal('task'),
  // Accept actual Notion status values from the database
  status: z.enum(['5_Done', '1_ToDo', '6_Cabinet', '3_Doing', 'Waiting', '2_Next']).optional(),
  assignee: z.string().optional(),
  dueDate: z.coerce.date().optional(),
  // Accept actual priority values from database (numeric strings)
  priority: z.string().optional(),
});

// Define collections for each entity type
export const collections = {
  // NEW: Importance-based collections (00-99 numbered folders)
  '00-company': defineCollection({
    type: 'content',
    schema: importanceBasedSchema,
  }),
  '01-projects': defineCollection({
    type: 'content',
    schema: importanceBasedSchema,
  }),
  '02-partners-clients': defineCollection({
    type: 'content',
    schema: importanceBasedSchema,
  }),
  '03-processes': defineCollection({
    type: 'content',
    schema: importanceBasedSchema,
  }),
  '04-teams': defineCollection({
    type: 'content',
    schema: importanceBasedSchema,
  }),
  '99-archive': defineCollection({
    type: 'content',
    schema: importanceBasedSchema,
  }),

  // LEGACY: Database-generated entity collections (backwards compatibility)
  entities: defineCollection({
    type: 'content',
    schema: baseEntitySchema,
  }),
  people: defineCollection({
    type: 'content',
    schema: personSchema,
  }),
  companies: defineCollection({
    type: 'content',
    schema: companySchema,
  }),
  projects: defineCollection({
    type: 'content',
    schema: projectSchema,
  }),
  meetings: defineCollection({
    type: 'content',
    schema: meetingSchema,
  }),
  tasks: defineCollection({
    type: 'content',
    schema: taskSchema,
  }),
};

// Export schemas for use in generators
// NEW: Importance-based types
export type ImportanceBasedContent = z.infer<typeof importanceBasedSchema>;

// LEGACY: Database entity types
export type BaseEntity = z.infer<typeof baseEntitySchema>;
export type Person = z.infer<typeof personSchema>;
export type Company = z.infer<typeof companySchema>;
export type Project = z.infer<typeof projectSchema>;
export type Meeting = z.infer<typeof meetingSchema>;
export type Task = z.infer<typeof taskSchema>;
