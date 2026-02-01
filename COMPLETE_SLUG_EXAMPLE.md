# Complete [...slug].astro Example

This file shows the complete modified version of `[...slug].astro` with external sources integrated.

## Diff View

**Changes to make:**
1. Add `ExternalSources` import (line 4)
2. Add data loading code (lines 67-82)
3. Add component to template (lines 122-128)

## Complete Modified File

```astro
---
import WikiLayout from '@layouts/WikiLayout.astro';
import Backlinks from '@components/Backlinks.astro';
import ExternalSources from '@components/ExternalSources.astro';  // 👈 ADD THIS
import { getCollection, type CollectionEntry } from 'astro:content';

// Generate static paths for all content
export async function getStaticPaths() {
  // Collect entries from all collections
  const collections = [
    'businessModels', 'companyWiki', 'departments', 'entities', 'functions',
    'goals', 'hypothesis', 'kpis', 'meetings', 'people', 'positions',
    'processes', 'projects', 'results', 'strategies', 'tasks', 'companies'
  ];
  const allEntries: { params: { slug: string }; props: { entry: CollectionEntry<any>; collection: string } }[] = [];

  for (const collectionName of collections) {
    try {
      const entries = await getCollection(collectionName as any);
      for (const entry of entries) {
        allEntries.push({
          params: { slug: entry.slug },
          props: { entry, collection: collectionName },
        });
      }
    } catch {
      // Collection might not exist yet, skip
    }
  }

  // If no content yet, return empty array (will 404)
  if (allEntries.length === 0) {
    return [];
  }

  return allEntries;
}

type Props = {
  entry: CollectionEntry<
    | 'businessModels'
    | 'companyWiki'
    | 'departments'
    | 'entities'
    | 'functions'
    | 'goals'
    | 'hypothesis'
    | 'kpis'
    | 'meetings'
    | 'people'
    | 'positions'
    | 'processes'
    | 'projects'
    | 'results'
    | 'strategies'
    | 'tasks'
    | 'companies'
  >;
  collection: string;
};

const { entry, collection } = Astro.props;
const { Content } = await entry.render();

// Extract frontmatter data
const { title, type, lastSynced, description, relations = [], tags = [] } = entry.data;

// 👇 ADD: Load external sources data
let slackThreads = [];
let emailThreads = [];
let driveDocuments = [];

try {
  const slackData = await import('../data/slack-threads.json');
  slackThreads = slackData.default[entry.slug] || [];
} catch {}

try {
  const emailData = await import('../data/email-threads.json');
  emailThreads = emailData.default[entry.slug] || [];
} catch {}

try {
  const docsData = await import('../data/drive-documents.json');
  driveDocuments = docsData.default[entry.slug] || [];
} catch {}
// 👆 END ADD

// Type badge colors
const typeColors: Record<string, { bg: string; text: string }> = {
  person: { bg: 'var(--type-person-bg)', text: 'var(--type-person)' },
  company: { bg: 'var(--type-company-bg)', text: 'var(--type-company)' },
  project: { bg: 'var(--type-project-bg)', text: 'var(--type-project)' },
  meeting: { bg: 'var(--type-meeting-bg)', text: 'var(--type-meeting)' },
  task: { bg: 'var(--type-task-bg)', text: 'var(--type-task)' },
  document: { bg: 'var(--type-document-bg)', text: 'var(--type-document)' },
};

const colors = typeColors[type] || { bg: 'var(--bg-tertiary)', text: 'var(--text-muted)' };

// Mock backlinks (in production, would be computed at build time)
const backlinks: { slug: string; title: string; type?: string }[] = [];
---

<WikiLayout title={title} description={description} lastSynced={lastSynced}>
  <article class="entity-page">
    <header class="entity-header">
      <div class="entity-meta">
        <span class="entity-type" style={`background: ${colors.bg}; color: ${colors.text}`}>
          {type}
        </span>
        {tags.length > 0 && (
          <div class="entity-tags">
            {tags.map((tag: string) => (
              <span class="entity-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <h1 class="entity-title">{title}</h1>
      {description && <p class="entity-description">{description}</p>}
    </header>

    {relations.length > 0 && (
      <section class="entity-relations">
        <h2>Connections</h2>
        <ul class="relations-list">
          {relations.map((rel: { type: string; target: string; label?: string }) => (
            <li class="relation-item">
              <span class="relation-type">{rel.type}</span>
              <a href={`/${rel.target}`} class="relation-link">
                {rel.label || rel.target}
              </a>
            </li>
          ))}
        </ul>
      </section>
    )}

    <section class="entity-content">
      <Content />
    </section>

    {/* 👇 ADD: External Sources Section */}
    <ExternalSources
      entityId={entry.slug}
      slackThreads={slackThreads}
      emails={emailThreads}
      documents={driveDocuments}
    />
    {/* 👆 END ADD */}

    <Backlinks currentSlug={entry.slug} backlinks={backlinks} />
  </article>
</WikiLayout>

<style>
  .entity-page {
    max-width: 100%;
  }

  .entity-header {
    margin-bottom: var(--spacing-xl);
    padding-bottom: var(--spacing-lg);
    border-bottom: 1px solid var(--border-color);
  }

  .entity-meta {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
    margin-bottom: var(--spacing-sm);
  }

  .entity-type {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 4px 10px;
    border-radius: var(--radius-sm);
  }

  .entity-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .entity-tag {
    font-size: 12px;
    padding: 2px 8px;
    background: var(--bg-tertiary);
    color: var(--text-muted);
    border-radius: var(--radius-sm);
  }

  .entity-title {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--text-2xl);
    line-height: 1.2;
  }

  .entity-description {
    margin: 0;
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.5;
  }

  /* Relations */
  .entity-relations {
    margin-bottom: var(--spacing-xl);
    padding: var(--spacing-md);
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
  }

  .entity-relations h2 {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 var(--spacing-sm);
  }

  .relations-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .relation-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .relation-type {
    font-size: 12px;
    color: var(--text-muted);
    min-width: 100px;
  }

  .relation-link {
    color: var(--link-color);
    text-decoration: none;
    font-weight: 500;
  }

  .relation-link:hover {
    text-decoration: underline;
  }

  /* Content */
  .entity-content {
    line-height: 1.7;
  }
</style>
```

## What Changed?

### 1. Import Statement (Line 4)
```diff
  import WikiLayout from '@layouts/WikiLayout.astro';
  import Backlinks from '@components/Backlinks.astro';
+ import ExternalSources from '@components/ExternalSources.astro';
  import { getCollection, type CollectionEntry } from 'astro:content';
```

### 2. Data Loading (After line 66)
```diff
  const { title, type, lastSynced, description, relations = [], tags = [] } = entry.data;

+ // Load external sources data
+ let slackThreads = [];
+ let emailThreads = [];
+ let driveDocuments = [];
+
+ try {
+   const slackData = await import('../data/slack-threads.json');
+   slackThreads = slackData.default[entry.slug] || [];
+ } catch {}
+
+ try {
+   const emailData = await import('../data/email-threads.json');
+   emailThreads = emailData.default[entry.slug] || [];
+ } catch {}
+
+ try {
+   const docsData = await import('../data/drive-documents.json');
+   driveDocuments = docsData.default[entry.slug] || [];
+ } catch {}

  // Type badge colors
```

### 3. Component Usage (After entity-content section)
```diff
    <section class="entity-content">
      <Content />
    </section>

+   <ExternalSources
+     entityId={entry.slug}
+     slackThreads={slackThreads}
+     emails={emailThreads}
+     documents={driveDocuments}
+   />

    <Backlinks currentSlug={entry.slug} backlinks={backlinks} />
```

## Notes

### Safe to Deploy Now
- Components handle missing data files gracefully
- No breaking changes
- Will show "No external sources linked yet" until data files exist
- Build succeeds without data files

### When Data Files Are Ready
- Rename `*.example.json` files or create new ones
- Follow structure in example files
- Components will automatically display data

### Customization
```astro
<!-- Start collapsed -->
<ExternalSources
  entityId={entry.slug}
  slackThreads={slackThreads}
  emails={emailThreads}
  documents={driveDocuments}
  defaultExpanded={false}
/>
```

### Individual Components
If you only need specific sources:
```astro
import LinkedSlackThreads from '@components/LinkedSlackThreads.astro';

<LinkedSlackThreads entityId={entry.slug} threads={slackThreads} />
```
