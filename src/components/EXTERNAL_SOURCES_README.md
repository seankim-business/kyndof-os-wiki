# External Sources Components

Components for displaying linked Slack threads, email threads, and Google Drive documents on entity pages.

## Components

### 1. LinkedSlackThreads.astro
Displays Slack conversation threads linked to an entity.

**Props:**
```typescript
{
  entityId: string;          // Entity identifier
  threads?: SlackThread[];   // Array of Slack threads
}
```

**SlackThread Interface:**
```typescript
{
  threadId: string;          // Slack thread ID
  channelName: string;       // Channel name (without #)
  channelId: string;         // Slack channel ID
  timestamp: string;         // ISO timestamp
  participants: string[];    // Array of participant emails
  replyCount: number;        // Number of replies in thread
  preview: string;           // First message snippet
  url: string;              // Slack permalink to thread
}
```

### 2. LinkedEmails.astro
Displays email threads linked to an entity.

**Props:**
```typescript
{
  entityId: string;         // Entity identifier
  emails?: EmailThread[];   // Array of email threads
}
```

**EmailThread Interface:**
```typescript
{
  threadId: string;         // Gmail thread ID
  subject: string;          // Email subject line
  participants: string[];   // Array of email addresses
  date: string;            // ISO timestamp
  snippet: string;         // Short preview (NOT full body)
  url: string;            // Gmail URL to thread
  unread?: boolean;       // Unread status
  hasAttachments?: boolean; // Has attachments
}
```

### 3. LinkedDocuments.astro
Displays Google Drive documents linked to an entity.

**Props:**
```typescript
{
  entityId: string;            // Entity identifier
  documents?: DriveDocument[]; // Array of Drive documents
}
```

**DriveDocument Interface:**
```typescript
{
  documentId: string;    // Google Drive file ID
  name: string;          // Document name
  mimeType: string;      // MIME type (determines icon/color)
  url: string;          // Drive URL to document
  lastModified: string; // ISO timestamp
  owner?: string;       // Owner email (optional)
}
```

**Supported MIME Types:**
- `application/vnd.google-apps.document` - Google Docs (blue)
- `application/vnd.google-apps.spreadsheet` - Google Sheets (green)
- `application/vnd.google-apps.presentation` - Google Slides (yellow)
- `application/pdf` - PDF files (red)
- `application/vnd.google-apps.folder` - Folders (gray)

### 4. ExternalSources.astro
Wrapper component that combines all three source types with collapsible sections.

**Props:**
```typescript
{
  entityId: string;
  slackThreads?: SlackThread[];
  emails?: EmailThread[];
  documents?: DriveDocument[];
  defaultExpanded?: boolean;  // Default: true
}
```

## Usage

### Basic Usage in Entity Pages

```astro
---
// In wiki/src/pages/[...slug].astro
import ExternalSources from '@components/ExternalSources.astro';

// Load data from JSON files
let slackThreads = [];
let emails = [];
let documents = [];

try {
  const slackData = await import('../data/slack-threads.json');
  slackThreads = slackData.default[entry.slug] || [];
} catch {}

try {
  const emailData = await import('../data/email-threads.json');
  emails = emailData.default[entry.slug] || [];
} catch {}

try {
  const docsData = await import('../data/drive-documents.json');
  documents = docsData.default[entry.slug] || [];
} catch {}
---

<ExternalSources
  entityId={entry.slug}
  slackThreads={slackThreads}
  emails={emails}
  documents={documents}
/>
```

### Individual Component Usage

```astro
---
import LinkedSlackThreads from '@components/LinkedSlackThreads.astro';
import LinkedEmails from '@components/LinkedEmails.astro';
import LinkedDocuments from '@components/LinkedDocuments.astro';

// Load only what you need
const slackThreads = [...];
---

<LinkedSlackThreads entityId="entity-123" threads={slackThreads} />
<LinkedEmails entityId="entity-123" emails={emails} />
<LinkedDocuments entityId="entity-123" documents={documents} />
```

## Data File Structure

Data files should be stored in `wiki/src/data/`:

### slack-threads.json
```json
{
  "entity-id": [
    {
      "threadId": "1234567890.123456",
      "channelName": "engineering",
      "channelId": "C01234567",
      "timestamp": "2025-01-28T10:30:00Z",
      "participants": ["alice@example.com", "bob@example.com"],
      "replyCount": 12,
      "preview": "Thread preview text...",
      "url": "https://workspace.slack.com/archives/C01234567/p1234567890123456"
    }
  ]
}
```

### email-threads.json
```json
{
  "entity-id": [
    {
      "threadId": "thread_abc123",
      "subject": "Meeting: Project Planning",
      "participants": ["alice@example.com", "bob@example.com"],
      "date": "2025-01-29T09:15:00Z",
      "snippet": "Email preview snippet...",
      "url": "https://mail.google.com/mail/u/0/#inbox/thread_abc123",
      "unread": true,
      "hasAttachments": false
    }
  ]
}
```

### drive-documents.json
```json
{
  "entity-id": [
    {
      "documentId": "1a2b3c4d5e6f",
      "name": "Project Roadmap - Draft v3",
      "mimeType": "application/vnd.google-apps.document",
      "url": "https://docs.google.com/document/d/1a2b3c4d5e6f/edit",
      "lastModified": "2025-01-29T15:45:00Z",
      "owner": "alice@example.com"
    }
  ]
}
```

## Features

### Visual Design
- **Brand Colors**: Slack purple (#611f69), Gmail red (#EA4335), Drive blue (#4285F4)
- **Compact Cards**: Space-efficient card layout with hover effects
- **External Link Indicators**: Appear on hover to indicate external navigation
- **Empty States**: Friendly messages when no data is available
- **Type Badges**: Color-coded document type indicators

### User Experience
- **Collapsible Sections**: ExternalSources wrapper supports expand/collapse
- **Smart Truncation**: Text preview with intelligent truncation
- **Relative Timestamps**: "Today", "Yesterday", "3 days ago" formatting
- **Participant Formatting**: Smart participant list display
- **Responsive Design**: Mobile-friendly layout

### Accessibility
- **Semantic HTML**: Proper use of sections, headings, lists
- **ARIA Labels**: Toggle buttons have proper labels
- **Keyboard Navigation**: Fully keyboard accessible
- **Focus States**: Clear focus indicators

## Customization

### Styling
All components use CSS custom properties from the wiki's design system:

```css
--bg-primary, --bg-secondary, --bg-tertiary
--text-primary, --text-secondary, --text-muted
--border-color, --border-hover
--spacing-xs, --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl
--radius-sm, --radius-md, --radius-lg
--shadow-sm, --shadow-md
```

### Extending
To add new external source types:

1. Create a new component following the existing pattern
2. Add it to `ExternalSources.astro`
3. Update data file structures
4. Update this README

## Future Enhancements

- [ ] Real-time sync status indicators
- [ ] Filtering and sorting options
- [ ] Search within external sources
- [ ] Inline previews (expand to show more context)
- [ ] Batch actions (open multiple links)
- [ ] Custom date range filtering
- [ ] Integration with sync status from connectors
