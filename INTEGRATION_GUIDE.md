# External Sources Integration Guide

How to integrate the external sources components into entity detail pages.

## Quick Start

### Step 1: Add Import to [...slug].astro

```astro
---
import ExternalSources from '@components/ExternalSources.astro';
```

### Step 2: Load Data (optional - gracefully handles missing data)

Add this code after your existing frontmatter but before the template:

```astro
---
// ... existing imports and code ...

// Load external sources data
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
---
```

### Step 3: Add Component to Template

Add this where you want external sources to appear (recommended: after entity content, before backlinks):

```astro
<ExternalSources
  entityId={entry.slug}
  slackThreads={slackThreads}
  emails={emailThreads}
  documents={driveDocuments}
/>
```

## Full Integration Example

Here's what your modified `[...slug].astro` might look like:

```astro
---
import WikiLayout from '@layouts/WikiLayout.astro';
import Backlinks from '@components/Backlinks.astro';
import ExternalSources from '@components/ExternalSources.astro';  // ADD THIS
import { getCollection, type CollectionEntry } from 'astro:content';

// ... existing getStaticPaths() ...

const { entry, collection } = Astro.props;
const { Content } = await entry.render();
const { title, type, lastSynced, description, relations = [], tags = [] } = entry.data;

// ADD: Load external sources
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

// ... existing type colors, backlinks, etc. ...
---

<WikiLayout title={title} description={description} lastSynced={lastSynced}>
  <article class="entity-page">
    <header class="entity-header">
      <!-- existing header code -->
    </header>

    <!-- existing relations section -->

    <section class="entity-content">
      <Content />
    </section>

    <!-- ADD: External Sources Section -->
    <ExternalSources
      entityId={entry.slug}
      slackThreads={slackThreads}
      emails={emailThreads}
      documents={driveDocuments}
    />

    <Backlinks currentSlug={entry.slug} backlinks={backlinks} />
  </article>
</WikiLayout>

<!-- existing styles remain unchanged -->
```

## Data File Setup

### Creating Data Files

Create these files when you're ready to sync external sources:

1. `wiki/src/data/slack-threads.json`
2. `wiki/src/data/email-threads.json`
3. `wiki/src/data/drive-documents.json`

### Example Data Structure

See the example files:
- `wiki/src/data/slack-threads.example.json`
- `wiki/src/data/email-threads.example.json`
- `wiki/src/data/drive-documents.example.json`

You can rename these (remove `.example`) to test the components.

### Syncing Strategy

When implementing the actual sync connectors:

1. **Slack Connector** should generate `slack-threads.json` with structure:
   ```json
   {
     "entity-slug-1": [ ...threads... ],
     "entity-slug-2": [ ...threads... ]
   }
   ```

2. **Gmail Connector** should generate `email-threads.json` with same pattern

3. **Drive Connector** should generate `drive-documents.json` with same pattern

## Testing Without Data

The components gracefully handle missing data:

```astro
<!-- This works even if no data files exist -->
<ExternalSources entityId={entry.slug} />
```

Result: Shows "No external sources linked yet" message.

## Advanced Usage

### Controlling Expand/Collapse

```astro
<!-- Start collapsed -->
<ExternalSources
  entityId={entry.slug}
  defaultExpanded={false}
/>
```

### Using Individual Components

If you only need specific sources:

```astro
---
import LinkedSlackThreads from '@components/LinkedSlackThreads.astro';
---

<LinkedSlackThreads entityId={entry.slug} threads={slackThreads} />
```

### Conditional Rendering

Only show if data exists:

```astro
{(slackThreads.length > 0 || emailThreads.length > 0 || driveDocuments.length > 0) && (
  <ExternalSources
    entityId={entry.slug}
    slackThreads={slackThreads}
    emails={emailThreads}
    documents={driveDocuments}
  />
)}
```

## Styling Customization

The components use CSS custom properties from your wiki's design system. No additional styling needed, but you can override:

```css
.external-sources {
  /* Override container styles */
}

.thread-card:hover {
  /* Override hover effects */
}
```

See `src/components/EXTERNAL_SOURCES_README.md` for full styling documentation.

## Next Steps

1. ✅ Components are ready to use
2. ⏳ Implement sync connectors (Slack, Gmail, Drive)
3. ⏳ Generate data files from connectors
4. ⏳ Add the ExternalSources component to [...slug].astro
5. ⏳ Test with real data

## Troubleshooting

**Build errors about missing JSON files?**
- Components handle missing files gracefully
- Make sure your try/catch blocks are correct
- Don't import in getStaticPaths() - only in component body

**Not seeing data?**
- Check console logs for import errors
- Verify entity slug matches key in JSON file
- Check JSON file structure matches interfaces

**Styling looks off?**
- Verify CSS custom properties are defined in your theme
- Check that existing components use the same variables
- Components inherit from wiki design system

## Reference

- Full API docs: `src/components/EXTERNAL_SOURCES_README.md`
- Example data: `src/data/*.example.json`
- Component files: `src/components/Linked*.astro`
