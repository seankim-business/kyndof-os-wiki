# Wiki Agent Convention Guide

This document instructs AI agents on how to autonomously create, organize, and expand wiki pages following established patterns. Use this guide when adding new content to the wiki.

**Table of Contents**
- [Depth Decision Rules](#depth-decision-rules)
- [Folder Naming Conventions](#folder-naming-conventions)
- [Frontmatter Templates](#frontmatter-templates)
- [Content Structure Rules](#content-structure-rules)
- [When to Create Deeper Levels](#when-to-create-deeper-levels)
- [Auto-Generation Triggers](#auto-generation-triggers)
- [File Templates](#file-templates)

---

## Depth Decision Rules

### When to Create a New Subfolder

Create a new subfolder when ANY of these conditions are true:

1. **Content Complexity:** Page content exceeds 1500 lines AND covers multiple distinct subtopics
2. **Child Content Exists:** You have 3+ related pages that should be grouped
3. **Navigation Structure:** Content should appear in the left sidebar as a collapsible section
4. **Reusability:** Subpages are referenced from multiple parent pages
5. **Domain Boundary:** A new functional domain, process, or value stream emerges

### When to Use Inline Content

Keep content inline (single page, no subfolder) when:

1. **Minimal Content:** Page is <1000 lines
2. **Single Topic:** Content covers one cohesive subject
3. **No Children:** No child pages are planned or needed
4. **Reference Only:** Page is mostly tables, definitions, or metadata
5. **Temporary:** Content is exploratory or will be merged later

### Minimum Content Threshold for New Pages

| Content Type | Min Lines | Min Sections | Decision |
|--------------|-----------|--------------|----------|
| Index page | 100+ | 3+ | Always create |
| Stage/Activity | 80+ | 2+ | Create subfolder |
| SOP | 50+ | 1+ | Create in `sops/` |
| Reference table | 30+ | 1 | Keep inline |
| Metadata only | <30 | 1 | Keep as part of parent |

### Maximum Depth Recommendation

**Hard limit:** No more than 5 levels deep. Recommended structure:
- Level 1: Layer (strategy, operations, execution, organization)
- Level 2: Domain (value-streams, functions, projects, etc.)
- Level 3: Entity (costume-order-to-delivery, hiring-process)
- Level 4: Decomposition (stages, processes, steps)
- Level 5: Work item (SOP, activity, metric)

**Current Maximum Used:** 5 levels (operations/functions/{function}/processes/{process}/steps/)

---

## Folder Naming Conventions

### Naming Rules

1. **Use kebab-case** (lowercase, hyphens, no spaces or underscores)
   - Good: `costume-order-to-delivery`, `client-onboarding`
   - Bad: `Costume Order to Delivery`, `costume_order_to_delivery`

2. **Use numbered prefixes for ordered content** (01-, 02-, 03-...)
   - Stages in a value stream: `01-order-reception/`, `02-design-development/`
   - Steps in a process: `01-define-scope/`, `02-gather-requirements/`
   - Functions in priority order: `01-finance/`, `02-hr/`, `03-it/`

3. **Standard subfolder names** (always use these exact names):
   - `stages/` - Stages within a value stream
   - `steps/` - Steps within a process
   - `activities/` - Activities within a stage
   - `metrics/` - Performance metrics and KPIs
   - `sops/` - Standard Operating Procedures
   - `processes/` - Processes within a function
   - `functions/` - Functions within operations
   - `work-items/` - Individual work items or tasks

### Naming Examples

**Value Stream Structure:**
```
operations/value-streams/
├── costume-order-to-delivery/
│   ├── stages/
│   │   ├── 01-order-reception/
│   │   ├── 02-design-development/
│   │   └── ...
│   ├── metrics/
│   └── index.md
```

**Function Structure:**
```
operations/functions/
├── sales/
│   ├── processes/
│   │   ├── client-onboarding/
│   │   │   ├── steps/
│   │   │   ├── sops/
│   │   │   └── index.md
│   │   └── order-management/
│   └── index.md
```

**By-Department SOP Structure:**
```
sops/by-department/
├── 2000atelier/
│   ├── design/
│   ├── pattern/
│   └── production/
└── brand-ops/
    ├── marketing/
    └── sales/
```

---

## Frontmatter Templates

### Template 1: Section Index (has_children: true)

Use this for pages that have child pages. Always include `has_children: true`.

```yaml
---
title: Section Title
layout: default
parent: Parent Section Title
nav_order: 1
has_children: true
description: "Brief description of this section"
permalink: /path/to/section/
---
```

**When to use:**
- `operations/` (parent sections)
- `operations/functions/sales/` (domain sections)
- `operations/value-streams/costume-order-to-delivery/` (value stream index)
- Any page with 3+ child pages

**Example:**
```yaml
---
title: Value Streams
layout: default
parent: Operations
nav_order: 3
has_children: true
---
```

### Template 2: Content Page (parent + grand_parent)

Use this for pages nested 2-3 levels deep.

```yaml
---
title: Page Title
layout: default
parent: Parent Section
grand_parent: Grandparent Section
nav_order: 1
has_children: false
---
```

**When to use:**
- Pages 2-3 levels deep in the hierarchy
- Has a parent AND grandparent
- No child pages planned

**Example:**
```yaml
---
title: Costume Order to Delivery
layout: default
parent: Value Streams
grand_parent: Operations
nav_order: 1
has_children: true
---
```

### Template 3: SOP Page

Use this for Standard Operating Procedures. Add `sop_type` metadata.

```yaml
---
title: SOP Name
layout: default
parent: Process Name
grand_parent: Function Name
nav_order: 1
sop_type: "process|activity|checklist"
owner_position: "Position Name"
last_verified: YYYY-MM-DD
---
```

**When to use:**
- Any SOP in `sops/` directory
- Procedures located in `processes/{process}/sops/`
- Work instructions and checklists

**SOP Types:**
- `process` - Complete workflow with steps
- `activity` - Single focused activity
- `checklist` - Verification or audit checklist
- `work-instruction` - Detailed how-to guide

**Example:**
```yaml
---
title: Design Approval Process
layout: default
parent: Design Development
grand_parent: Costume Order to Delivery
nav_order: 1
sop_type: "process"
owner_position: "Creative Director"
last_verified: 2026-02-02
---
```

### Template 4: Process Step Page

Use this for individual steps within a process.

```yaml
---
title: Step Name
layout: default
parent: Process Name
grand_parent: Value Stream or Function
nav_order: 1
step_type: "input|execution|validation|output"
owner_position: "Position Name"
---
```

**Step Types:**
- `input` - Data or material arrives
- `execution` - Work is performed
- `validation` - Quality or approval checks
- `output` - Deliverable is completed

**Example:**
```yaml
---
title: Receive and Document Brief
layout: default
parent: Order Reception
grand_parent: Costume Order to Delivery
nav_order: 1
step_type: "input"
owner_position: "Sales Manager"
---
```

### Template 5: Activity Page

Use this for activities within a stage or process.

```yaml
---
title: Activity Name
layout: default
parent: Stage Name
grand_parent: Value Stream Name
nav_order: 1
has_children: false
activity_type: "creation|review|approval|execution|measurement"
owner_position: "Position Name"
estimated_duration: "X hours/days"
---
```

**Activity Types:**
- `creation` - Creating or developing something new
- `review` - Examining or evaluating
- `approval` - Authorization or sign-off
- `execution` - Performing work
- `measurement` - Collecting metrics or data

**Example:**
```yaml
---
title: Sketch Concept Designs
layout: default
parent: Design Development
grand_parent: Costume Order to Delivery
nav_order: 1
activity_type: "creation"
owner_position: "Designer"
estimated_duration: "3 days"
---
```

### Template 6: Metrics Page

Use this for performance tracking pages.

```yaml
---
title: Metrics
layout: default
parent: Process or Value Stream Name
grand_parent: Parent Section
nav_order: 99
---
```

**When to use:**
- Performance tracking for value streams
- KPI dashboards for processes
- Quality metrics for activities

**Note:** Always use `nav_order: 99` to push metrics to the end of the section.

---

## Content Structure Rules

### Required Sections by Page Type

#### Section Index (has_children: true)

Required sections:
1. **Overview** - Brief intro to the section
2. **Content List** - Links to all child sections
3. **Key Concepts** - Main ideas/definitions
4. **Data Sources** - Where data comes from

```markdown
---
title: Operations
layout: default
nav_order: 2
has_children: true
---

# Operations

{: .highlight }
> **Layer 2**: How we create value.

## Overview
[1-2 sentences introducing this section]

## Core Components

| Name | Description | Links |
|------|-------------|-------|
| **Business Model** | How we create value | [View](business-model/) |
| **Value Streams** | Customer value delivery | [View](value-streams/) |

## Key Concepts

### [Concept Name]
[Definition and importance]

## Data Sources
- **Database Name**: `world-model/databases/name.json`
```

#### Value Stream Index

Required sections:
1. **Stream Overview** - Duration, owner, trigger, completion
2. **Process Flow** - Diagram of the flow
3. **Stages** - Links to all stages
4. **Key Metrics** - Performance targets
5. **RABSIC Ownership** - Accountability matrix

```markdown
---
title: Stream Name
layout: default
parent: Value Streams
grand_parent: Operations
nav_order: 1
has_children: true
---

# Stream Name

**Total Lead Time:** X-Y days
**Owner Position:** Position Name
**Trigger:** What starts this stream
**Completion:** What ends it

## Process Flow

[ASCII flow diagram]

## Stages

1. **[Stage Name](stages/01-stage-name/)** (X days)
   - What happens in this stage
   - Key deliverables

## Key Metrics

- **Lead Time:** Target X days
- **Quality Score:** Target >Y%
- **Customer Satisfaction:** Target >Z%

## RABSIC Ownership

| Role | Position | Responsibility |
|------|----------|----------------|
| **A** | Title | ... |
| **R** | Title | ... |

---

**Last Updated:** YYYY-MM-DD
**Stream Owner:** Position Name
```

#### Process/Activity Page

Required sections:
1. **Overview** - What this process/activity does
2. **Inputs** - What arrives
3. **Execution Steps** - How it's done (link to steps, or describe inline if <5 steps)
4. **Outputs** - What's delivered
5. **Success Criteria** - How to know it's done right
6. **Related SOPs** - Links to SOPs
7. **Owner & Accountability** - Who's responsible

```markdown
---
title: Process Name
layout: default
parent: Stage Name
grand_parent: Value Stream Name
nav_order: 1
has_children: true
---

# Process Name

[Brief description]

## Overview
[What this process does and why]

## Inputs
- Input 1 (source)
- Input 2 (source)

## Process Flow

[Steps 1-N, linked to individual step pages if many]

## Outputs
- Output 1
- Output 2

## Success Criteria

- Criterion 1
- Criterion 2

## Related SOPs

- [SOP Name](sops/sop-name.md)

## Ownership

| Role | Position |
|------|----------|
| **A** | Title |
| **R** | Title |

---

**Last Updated:** YYYY-MM-DD
**Owner:** Position Name
```

#### SOP Page

Required sections:
1. **Purpose** - Why this SOP exists
2. **Scope** - When/where it applies
3. **Prerequisites** - What must be true before starting
4. **Steps** - Numbered step-by-step instructions
5. **Verification** - How to verify it was done correctly
6. **Troubleshooting** - Common issues and solutions
7. **Related Resources** - Links to other SOPs, forms, systems
8. **Version History** - When was this last updated

```markdown
---
title: SOP Name
layout: default
parent: Process Name
grand_parent: Value Stream Name
nav_order: 1
sop_type: "process"
owner_position: "Position Name"
last_verified: 2026-02-02
---

# SOP: Name

## Purpose
Why this SOP exists.

## Scope
When/where this SOP applies.

## Prerequisites
- What must be true
- Before we start

## Steps

### Step 1: Do This
1. Detailed instruction
2. Another instruction
3. Decision point?

### Step 2: Then Do This
[Continue...]

## Verification

How to verify this was done correctly:
- Check 1
- Check 2

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Problem A | Do X |
| Problem B | Do Y |

## Related Resources

- [Other SOP](../other-sop.md)
- [Form Template](../../forms/template.xlsx)
- [System Link](https://system.example.com)

## Version History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-02-02 | 1.0 | Initial version | Position |

---

**Last Verified:** 2026-02-02
**Owner:** Position Name
**Next Review:** 2026-03-02
```

### Link Formatting Conventions

**Always use relative paths within the wiki:**

```markdown
# Good - Relative paths
[Value Streams](../value-streams/)
[Design Development Stage](../stages/02-design-development/)
[SOP Name](sops/sop-name.md)

# Bad - Absolute paths or wrong format
[Value Streams](/operations/value-streams/)
[Design Development Stage](https://github.com/...wiki/...)
```

**For cross-references between distant pages:**

```markdown
# Link to another domain
[Sales Processes](../../functions/sales/processes/)

# Link to SOP in different department
[Onboarding SOP](../../sops/by-department/corp-ops/hr/onboarding.md)
```

**For external references:**

```markdown
# External links (use full URLs with descriptive text)
See [Notion Board](https://notion.so/...) for execution status.
```

### Cross-Reference Patterns

**Reference a Stage from a Value Stream:**
```markdown
See [Design Development Stage](../stages/02-design-development/) for details on this process.
```

**Reference a Process from a Function:**
```markdown
The main process is documented in [Client Onboarding](../processes/client-onboarding/).
```

**Reference Related SOPs:**
```markdown
## Related SOPs

- [Initial Assessment](../sops/initial-assessment.md)
- [Client Setup](../sops/client-setup.md)
- [Handoff](../sops/handoff.md)
```

**Reference Metrics:**
```markdown
See [Metrics](../metrics/) for performance tracking and targets.
```

---

## When to Create Deeper Levels

### Value Stream Structure (5 levels maximum)

When you identify a new value stream, create this structure:

```
operations/value-streams/{stream-name}/
├── index.md              # Value Stream overview
├── stages/               # All stages in the stream
│   ├── 01-stage-one/
│   │   ├── index.md      # Stage overview
│   │   ├── activities/   # Activities within this stage
│   │   │   ├── 01-activity-name.md
│   │   │   └── 02-activity-name.md
│   │   └── sops/         # SOPs specific to this stage
│   │       └── activity-sop.md
│   ├── 02-stage-two/
│   └── ...
├── metrics/              # Performance metrics
│   └── index.md          # Metrics dashboard
└── overview.md           # Optional detailed diagram
```

**When to create each level:**

1. **Stream folder** (`costume-order-to-delivery/`) - Always
2. **stages/ subfolder** - Always (value streams have stages)
3. **Stage folders** (`01-order-reception/`) - Always
4. **activities/ subfolder** - When stage has 3+ distinct activities
5. **Activity pages** - When each activity needs >300 lines or is reused

### Function Structure (5 levels maximum)

When you add a new function, create this structure:

```
operations/functions/{function-name}/
├── index.md              # Function overview
├── processes/            # All processes in the function
│   ├── process-one/
│   │   ├── index.md      # Process overview
│   │   ├── steps/        # Steps within the process
│   │   │   ├── 01-step-name.md
│   │   │   ├── 02-step-name.md
│   │   │   └── ...
│   │   └── sops/         # SOPs for this process
│   │       ├── process-sop.md
│   │       └── step-sop.md
│   └── process-two/
└── metrics/              # Function KPIs
    └── index.md
```

**Creation triggers:**

1. **Function folder** - New function identified in CLAUDE.md
2. **processes/ subfolder** - When function has 2+ processes
3. **Process folders** - One for each process
4. **steps/ subfolder** - When process has 4+ sequential steps
5. **Step pages** - When each step needs documentation

### Department SOP Structure (3 levels maximum)

For SOPs organized by department:

```
sops/by-department/{department}/
├── {function-name}/
│   ├── sop-one.md
│   ├── sop-two.md
│   └── checklist-one.md
└── {function-name}/
    └── ...
```

For SOPs organized by process:

```
sops/by-process/{process-name}/
├── sop-one.md           # Pre-process SOP
├── step-sop.md          # For specific step
└── post-process-sop.md  # Follow-up SOP
```

---

## Auto-Generation Triggers

### Trigger 1: New Process Identified

**When:** A new process is documented in `world-model/databases/`

**Action:** Create process folder structure:

```
operations/functions/{function}/processes/{process-name}/
├── index.md          # Process overview
├── steps/            # If >3 steps
│   ├── 01-step.md
│   └── ...
├── sops/             # If SOPs exist
│   └── main-sop.md
└── metrics/          # If metrics tracked
    └── index.md
```

**Frontmatter for process index.md:**

```yaml
---
title: Process Name
layout: default
parent: Function Name
grand_parent: Functions
nav_order: 1
has_children: true
---

# Process Name

[Brief description of what this process does]

## Overview
[Detailed overview]

## Stages/Steps
[Links to stages or steps]

## Key Metrics
[Performance targets]

## Ownership
[RABSIC matrix]
```

### Trigger 2: New SOP Needs Documentation

**When:** A procedure is executed consistently (3+ times) without documentation

**Action:**

1. Create SOP in both locations:
   - `sops/by-department/{dept}/{function}/sop-name.md`
   - `operations/functions/{function}/processes/{process}/sops/sop-name.md`

2. Frontmatter template:
```yaml
---
title: SOP Name
layout: default
parent: Process Name
grand_parent: Function Name
nav_order: 1
sop_type: "process"
owner_position: "Position Name"
last_verified: YYYY-MM-DD
---
```

3. Required sections:
   - Purpose
   - Scope
   - Prerequisites
   - Steps (numbered)
   - Verification
   - Troubleshooting
   - Related Resources
   - Version History

### Trigger 3: New Function Added

**When:** New function created in CLAUDE.md positions database

**Action:** Create function folder structure:

```
operations/functions/{function-abbrev}/
├── index.md          # Function overview
└── processes/        # Placeholder for processes
    └── (empty - will be populated as processes identified)
```

**Function index.md template:**

```yaml
---
title: Function Name
layout: default
parent: Functions
grand_parent: Operations
nav_order: 1
has_children: true
---

# Function Name

Brief description of what this function does.

## Overview

What this function is responsible for.

## Processes

| Name | Description | Status |
|------|-------------|--------|
| Process 1 | Description | 📝 |
| Process 2 | Description | ✅ |

## Key Metrics

- Metric 1: Target X
- Metric 2: Target Y

## Positions

| Position | Reports To | Responsibilities |
|----------|-----------|------------------|
| Title 1 | Title 2 | ... |

---

**Last Updated:** YYYY-MM-DD
**Function Owner:** Position Name
```

### Trigger 4: Value Stream Expanded

**When:** New stage added to existing value stream

**Action:**

1. Add stage folder: `stages/0X-stage-name/`
2. Create `stages/0X-stage-name/index.md`
3. Update parent value stream `index.md` to reference new stage
4. Update flow diagram in value stream index

### Trigger 5: Missing Metrics Documentation

**When:** Process or value stream tracked but no metrics page exists

**Action:** Create `metrics/index.md`

```yaml
---
title: Metrics
layout: default
parent: Process or Value Stream Name
grand_parent: Parent
nav_order: 99
---

# Metrics

## Key Performance Indicators

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Lead Time | X days | Y days | 📊 |
| Quality | >95% | >90% | ⚠️ |

## Calculation Methods

### Metric 1
How it's calculated and what it means.

## Trending

[Brief description of trends over time]

## Review Cadence

Monthly review on [specific date]
```

---

## File Templates

### Template A: New Value Stream Index

```markdown
---
title: Value Stream Name
layout: default
parent: Value Streams
grand_parent: Operations
nav_order: 1
has_children: true
---

# Value Stream Name

Brief one-sentence description of this value stream.

## Stream Overview

**Total Lead Time:** X-Y days
**Owner Position:** Title Name
**Trigger:** What starts this stream
**Completion Criteria:** What defines successful completion

## Process Flow

```
[ASCII DIAGRAM OF FLOW]
Stage 1 → Stage 2 → Stage 3
```

## Stages

1. **[Stage Name](stages/01-stage-name/)** (X-Y days)
   - Brief description
   - Key deliverables
   - Owner role

2. **[Stage Name](stages/02-stage-name/)** (X-Y days)
   - Brief description
   - Key deliverables
   - Owner role

## Key Metrics

See [Metrics](metrics/) for detailed performance tracking:

- **Lead Time:** Target X days (range: Y-Z)
- **Quality Score:** Target >95%
- **Customer Satisfaction:** Target >90%
- **On-Time Delivery:** Target >85%

## RABSIC Ownership

| Role | Position | Responsibility |
|------|----------|----------------|
| **A** (Accountable) | Title | Owns entire value stream outcome |
| **R** (Responsible) | Title | Executes stage deliverables |
| **B** (Backup) | Title | Covers when primary R unavailable |
| **S** (Support) | Title | Provides resources and removes blockers |
| **C** (Consulted) | Title | Provides expertise before decisions |
| **I** (Informed) | Title | Notified after value stream completion |

## Related Documentation

- [Stages](stages/) - All value stream stages
- [Metrics](metrics/) - Performance measurement
- [Overview](overview.md) - Detailed process diagram (if exists)

---

**Last Updated:** YYYY-MM-DD
**Stream Owner:** Title Name
**Next Review:** YYYY-MM-DD
```

### Template B: New Stage Page

```markdown
---
title: Stage Name
layout: default
parent: Value Stream Name
grand_parent: Value Streams
nav_order: 1
has_children: true
---

# Stage Name

Brief description of what happens in this stage.

## Stage Overview

**Typical Duration:** X-Y days
**Owner Position:** Title
**Trigger:** What causes this stage to start
**Completion:** What defines successful completion

## Overview

Detailed explanation of this stage and why it matters.

## Inputs

What arrives at the start of this stage:
- Input 1 (source)
- Input 2 (source)

## Activities

The key activities performed in this stage:

1. **[Activity Name](activities/01-activity-name.md)**
   - Description
   - Owner role
   - Duration

2. **[Activity Name](activities/02-activity-name.md)**
   - Description
   - Owner role
   - Duration

## Outputs

What leaves this stage:
- Output 1 (destination)
- Output 2 (destination)

## Success Criteria

This stage is complete when:
- Criterion 1
- Criterion 2
- Criterion 3

## Key Metrics

- **Completion Time:** Target X days
- **Quality Gate:** Target >Y%
- **Rework Rate:** Target <Z%

## RABSIC Ownership

| Role | Position | Responsibility |
|------|----------|----------------|
| **R** (Responsible) | Title | Executes stage deliverables |
| **A** (Accountable) | Title | Owns stage outcome |
| **C** (Consulted) | Title | Provides input on decisions |
| **I** (Informed) | Title | Notified of completion |

## Related Resources

- [Metrics](metrics/) - Stage performance tracking
- [SOPs](sops/) - Standard procedures for this stage
- [Parent Stream](../) - Full value stream

---

**Last Updated:** YYYY-MM-DD
**Stage Owner:** Title Name
```

### Template C: New Process Page

```markdown
---
title: Process Name
layout: default
parent: Function Name
grand_parent: Functions
nav_order: 1
has_children: true
---

# Process Name

Brief one-sentence description.

## Overview

What this process does and why it exists.

## When It's Used

When is this process triggered?

## Inputs

What arrives to start this process:
- Input 1
- Input 2

## Process Steps

### Step 1: [Step Name]
[Description of step 1]
See [Step Details](steps/01-step-name.md) for full instructions.

### Step 2: [Step Name]
[Description of step 2]
See [Step Details](steps/02-step-name.md) for full instructions.

### Step 3: [Step Name]
[Description of step 3]
See [Step Details](steps/03-step-name.md) for full instructions.

## Outputs

What is delivered when this process completes:
- Output 1 (who receives it)
- Output 2 (who receives it)

## Success Criteria

This process is complete when:
- Criterion 1
- Criterion 2

## Key Metrics

- **Cycle Time:** Target X days
- **Quality:** Target >Y%
- **Defect Rate:** Target <Z%

## Standard Operating Procedures

- [SOP Name](sops/sop-name.md)
- [Checklist](sops/checklist.md)

## Ownership

| Role | Position |
|------|----------|
| **A** (Accountable) | Title |
| **R** (Responsible) | Title |

## Related Processes

- [Process Name](../other-process/)

---

**Last Updated:** YYYY-MM-DD
**Process Owner:** Title Name
```

### Template D: New SOP Page

```markdown
---
title: SOP Name
layout: default
parent: Process Name
grand_parent: Function Name
nav_order: 1
sop_type: "process"
owner_position: "Position Name"
last_verified: YYYY-MM-DD
---

# SOP: Name

## Purpose

Why this SOP exists and what problem it solves.

## Scope

When and where this SOP applies:
- Applies to: [What/Who]
- Frequency: [How often]
- Exceptions: [When it doesn't apply]

## Prerequisites

What must be true before starting:
- Prerequisite 1
- Prerequisite 2

## Step-by-Step Instructions

### Step 1: Description of First Action

1. First substep
2. Second substep
3. Decision point?
   - If [condition], go to Step 3
   - Otherwise, continue

### Step 2: Description of Second Action

1. Detailed instruction
2. Detailed instruction

### Step 3: Description of Third Action

1. Detailed instruction
2. Detailed instruction

## Verification

How to verify this was completed correctly:

- [ ] Check 1 (what to look for)
- [ ] Check 2 (what to look for)
- [ ] Check 3 (what to look for)

## Common Issues & Troubleshooting

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| Problem A | Why it happens | How to fix it |
| Problem B | Why it happens | How to fix it |
| Problem C | Why it happens | How to fix it |

## Related Resources

- [Related SOP](../related-sop.md)
- [Form/Template](../../forms/template.xlsx)
- [System Documentation](https://system.example.com/docs)

## Metrics

This SOP is measured by:
- Metric 1: [How it's tracked]
- Metric 2: [How it's tracked]

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | YYYY-MM-DD | Initial creation | Position |

---

**Last Verified:** YYYY-MM-DD
**Owner:** Position Name
**Next Review Date:** YYYY-MM-DD
```

### Template E: New Metrics Page

```markdown
---
title: Metrics
layout: default
parent: Process or Value Stream Name
grand_parent: Parent
nav_order: 99
---

# Metrics

Performance measurement and tracking for [Process/Value Stream Name].

## Key Performance Indicators

| Metric | Target | Current | Status | Trend |
|--------|--------|---------|--------|-------|
| Lead Time | X days | Y days | 📊 | ↗ |
| Quality Score | >95% | >90% | ⚠️ | ↙ |
| Customer Satisfaction | >90% | >85% | ⚠️ | → |
| On-Time Delivery | >85% | >80% | ⚠️ | ↗ |

## Metric Definitions

### Metric Name 1
**Definition:** What this metric measures
**Calculation:** Formula or method
**Frequency:** How often it's measured
**Owner:** Who tracks it
**Action Plan:** What we do if it falls below target

### Metric Name 2
[Same structure as above]

## Trending Analysis

### Trend 1
[Brief analysis of recent trend - positive or negative]

### Trend 2
[Brief analysis]

## Improvement Initiatives

| Initiative | Target | Expected Impact | Status |
|-----------|--------|-----------------|--------|
| Initiative 1 | X improvement | Y% gain | 🟢 |
| Initiative 2 | X improvement | Y% gain | 🟡 |

## Review Schedule

- **Frequency:** Weekly/Monthly/Quarterly
- **Review Date:** [Specific day/date]
- **Responsible Role:** [Title]

---

**Last Updated:** YYYY-MM-DD
**Metrics Owner:** Position Name
**Next Review:** YYYY-MM-DD
```

---

## Quick Reference: Navigation

### When Adding a New Item, Ask These Questions

**1. What type of content is this?**
   - Value stream? → Use Template A
   - Stage within value stream? → Use Template B
   - Process within function? → Use Template C
   - SOP/procedure? → Use Template D
   - Metrics/KPIs? → Use Template E

**2. Where does it belong?**
   - Strategic direction? → `strategy/`
   - Business operations? → `operations/`
   - Project execution? → `execution/`
   - Organizational? → `organization/`
   - Procedure? → `sops/`

**3. Does it have children?**
   - Yes (3+ child pages planned) → Add `has_children: true`
   - No → Add `has_children: false` or omit

**4. How deep is it?**
   - Level 1 (Layer: strategy, operations, etc.) → No parent
   - Level 2 (Domain: functions, value-streams, etc.) → parent: Layer
   - Level 3 (Entity: function name, process name) → parent: Domain, grand_parent: Layer
   - Level 4+ (Sub-entity: stage, step, activity) → Use grand_parent pattern

**5. Folder or inline?**
   - Will it have children? → Create folder with `index.md`
   - Single page only? → Create `.md` file inline with parent

---

## Maintenance & Updates

### Weekly Updates
- Check metrics pages for data freshness
- Update SOP `last_verified` dates when verified

### Monthly Updates
- Review all TODOs and 📝 status indicators
- Update trending data in metrics pages
- Verify all internal links still work

### Quarterly Updates
- Full structural review
- Archive completed processes/projects
- Update process documentation based on execution data

---

**Guide Last Updated:** 2026-02-02
**Maintained By:** Wiki Management System
**Next Review:** 2026-03-02

