# Kyndof Wiki Philosophy

**Last Updated:** 2026-02-02
**Purpose:** Guide all agents and humans in creating human-first, deeply organized, discoverable wiki content.

---

## Purpose

The Kyndof Wiki exists to **onboard humans into the organizational mind**—not to catalog metadata. Every page should answer:

- **Why am I reading this?** (Purpose)
- **What do I do with this information?** (Action)
- **Where do I go next?** (Navigation)

This is an internal employee wiki. Write for **new team members on day one**, not for systems or machines.

---

## Core Philosophy

### 1. Human-First Content

**People read wikis, not machines.**

**DO:**
- Start with "Why this matters to you"
- Use conversational tone
- Explain concepts before showing structure
- Include real examples from actual work

**DON'T:**
- Lead with metadata tables (Type, Status, ID, Owner)
- Use system terminology without explanation
- Assume reader knows organizational context
- Write in passive voice or bureaucratic language

**Before (Bad):**
```markdown
# Project Alpha

**Type:** Strategic Initiative
**Status:** Active
**Owner:** CTO
**Priority:** P1

## Description
Project Alpha is a strategic initiative...
```

**After (Good):**
```markdown
# Project Alpha: Rebuilding Our Customer Onboarding

We're redesigning how new customers experience Kyndof in their first 30 days. Currently, 40% of customers don't complete setup—this project aims to fix that.

**Why you should care:** If you work in customer success, engineering, or product, this changes your workflow starting Q2 2026.

**Current status:** Active development, launching March 2026.

## What We're Building
...
```

### 2. Deep Hierarchy Over Wide Sprawl

**One concept = One page. Always subdivide.**

**DO:**
- Create folders for every concept with 3+ sub-topics
- Keep files under 300 lines
- Split related concepts into siblings
- Use index files as navigation hubs

**DON'T:**
- Create monolithic files (e.g., "all-projects.md")
- Mix multiple concepts in one page
- Use sections when subpages would be clearer
- Hoard information in a single file

**Before (Bad):**
```
projects.md (2000 lines covering 15 projects)
```

**After (Good):**
```
projects/
├── index.md (Overview + navigation)
├── active/
│   ├── project-alpha/
│   │   ├── index.md
│   │   ├── goals.md
│   │   ├── team.md
│   │   └── timeline.md
│   └── project-beta/
│       └── ...
└── completed/
    └── ...
```

### 3. Organic Connections

**No page is an island.**

Every page must include:
- **Parent link:** Where did I come from?
- **Sibling links:** What else is at this level?
- **Child links:** What's inside this topic?
- **Related links:** What concepts connect to this?

**DO:**
- Add navigation section at top and bottom
- Link to related concepts in body text
- Use relative paths (`../sibling/page.md`)
- Create bidirectional links when possible

**DON'T:**
- Leave pages without parent/sibling context
- Use absolute paths unless necessary
- Link only downward (parent → child) without reverse
- Assume reader knows where they are in structure

**Template:**
```markdown
# Page Title

**Navigation:** [Parent Section](../index.md) → **This Page**

[Content...]

---

## Related Pages
- [Sibling Topic](../sibling-topic/index.md)
- [Child Topic 1](./child-topic-1.md)
- [Child Topic 2](./child-topic-2.md)
- [Related Concept](../../other-section/related.md)

**Back to:** [Parent Section](../index.md) | [Wiki Home](../../index.md)
```

### 4. Onboarding-Centric Structure

**The most important reader is someone on their first day.**

**Information Architecture Priority:**
1. **Start Here** (Onboarding paths)
2. **Core Concepts** (What you need to know)
3. **How We Work** (Processes and workflows)
4. **Reference** (Look-up information)
5. **Archive** (Historical context)

**DO:**
- Put most critical information in `/start-here/`
- Assume zero organizational knowledge
- Include "Prerequisites" section for advanced topics
- Provide learning paths, not just reference

**DON'T:**
- Bury critical information in deep hierarchies
- Assume reader knows acronyms or jargon
- Start with edge cases or exceptions
- Make onboarding an afterthought

**Start-Here Example:**
```
start-here/
├── index.md (Welcome message + choose your path)
├── first-day/
│   ├── index.md
│   ├── tools-setup.md
│   ├── key-people.md (roles, not names)
│   └── first-week-checklist.md
├── by-role/
│   ├── engineering.md
│   ├── product.md
│   └── operations.md
└── glossary.md
```

### 5. Position > Person

**Roles outlive individuals.**

**DO:**
- Reference positions: "CTO", "Product Lead", "Customer Success Manager"
- Use role-based contact patterns: "Contact the [Operations Lead]"
- Structure by function, not by current team member
- Document responsibilities, not personalities

**DON'T:**
- Use individual names in wiki structure or permalinks
- Create pages like "Sean's Notes" (use role-based ownership)
- Hardcode email addresses (use position references)
- Make organizational structure dependent on current people

**Before (Bad):**
```markdown
Contact Sean (sean@kyndof.com) for architecture questions.
```

**After (Good):**
```markdown
Contact the **CTO role** for architecture questions. (See [current position holder](../positions/cto.md))
```

### 6. Sisyphus Mode (No Incomplete Work)

**Do not publish unfinished pages.**

Before marking any wiki work complete:

**Verification Checklist:**
- [ ] Page has clear purpose statement
- [ ] Navigation links work (parent, siblings, children)
- [ ] No placeholder text or "TODO" sections
- [ ] Tone is conversational and human
- [ ] No metadata tables at top
- [ ] At least one real example included
- [ ] Related pages are bidirectionally linked
- [ ] Index files are updated with new page
- [ ] Mobile-readable (no wide tables)
- [ ] Spell-checked and proofread

**If ANY checkbox is unchecked → work is not done.**

---

## Writing Rules

### Tone and Style

| DO | DON'T |
|-----|-------|
| "You'll use this to..." | "This is used to..." |
| "We decided to..." | "A decision was made to..." |
| "This helps you ship faster" | "This increases velocity" |
| Real example from actual work | Generic placeholder example |
| "Contact the CTO role" | "Contact Sean" |
| Short paragraphs (3-4 lines) | Wall-of-text paragraphs |
| Active voice | Passive voice |
| Plain language | Corporate jargon |

### Structure Patterns

**Index File Pattern:**
```markdown
# Section Name

[One-sentence explanation of what this section covers]

## Why This Section Exists
[Explain purpose before listing contents]

## Key Topics
- **[Topic 1](./topic-1/index.md)** - One-line description
- **[Topic 2](./topic-2/index.md)** - One-line description

## Common Questions
- [How do I...?](./topic-1/how-to.md)
- [What is the process for...?](./topic-2/process.md)

## Related Sections
[Links to sibling/cousin sections]
```

**Topic Page Pattern:**
```markdown
# Topic Name

[1-2 sentence summary of what this is]

## Why This Matters
[Explain relevance before diving into details]

## How It Works
[Conceptual explanation with examples]

## When to Use This
[Practical guidance]

## Common Pitfalls
[What goes wrong and how to avoid it]

## Example
[Real-world example from actual work]

## Related Topics
[Links to related concepts]
```

### Visual Hierarchy

**DO:**
- Use only H1 (`#`) for page title
- Use H2 (`##`) for major sections
- Use H3 (`###`) for subsections
- Use **bold** for emphasis, not headers
- Use lists for scannable content
- Use tables sparingly (max 4 columns)

**DON'T:**
- Skip heading levels (H1 → H3)
- Use H4-H6 (if you need that depth, split the page)
- Use horizontal rules (`---`) excessively
- Use blockquotes for regular content
- Make tables wider than 4 columns

---

## File Structure

### Standard Layout

```
wiki/
├── index.md                    # Wiki home page
├── start-here/                 # Onboarding paths (highest priority)
│   ├── index.md
│   ├── who-we-are/             # Company overview and culture
│   ├── your-first-week/        # Day-by-day onboarding
│   │   └── day-1/
│   └── tools-we-use/           # Tools and systems
├── how-we-work/                # Processes and workflows
│   ├── index.md
│   ├── making-decisions/       # Decision frameworks
│   │   ├── rabsic/             # RABSIC accountability framework
│   │   └── use-cases/          # Decision examples
│   └── sops/                   # Standard Operating Procedures
├── what-we-make/               # Products and value delivery
│   ├── index.md
│   └── how-an-order-flows/     # Order lifecycle
├── our-teams/                  # Organization structure (positions, not people)
│   ├── index.md
│   ├── brand-ops/              # Brand Operations team
│   │   └── roles/
│   ├── corp-ops/               # Corporate Operations team
│   ├── ceo-office/             # CEO Office
│   ├── 2000atelier/            # 2000Atelier brand
│   └── 2000archives/           # 2000Archives brand
├── people/                     # Individual profiles (position-linked)
│   └── index.md
├── clients-partners/           # External relationships
│   ├── index.md
│   ├── clients/
│   └── partners/
├── reference/                  # Look-up information
│   ├── index.md
│   ├── glossary/
│   └── policies/
└── archive/                    # Historical context
    └── index.md
```

### Naming Conventions

**Files:**
- Use lowercase with hyphens: `project-alpha.md`
- Use `index.md` for section home pages
- Use descriptive names: `customer-onboarding-process.md` not `process-1.md`

**Folders:**
- Use singular for concepts: `project/` not `projects/` (except for plural concepts)
- Use plural for collections: `projects/`, `functions/`, `positions/`
- Group by concept, not by metadata (no `by-status/` or `by-owner/`)

**Navigation Priority (No IMS Numbering):**

Wiki uses semantic folder names with navigation order controlled by Jekyll front matter `nav_order`.

| Priority | Section | Purpose |
|----------|---------|---------|
| 1 | `start-here/` | Onboarding - first thing new hires see |
| 2 | `how-we-work/` | Processes, decisions, SOPs |
| 3 | `what-we-make/` | Products, services, value delivery |
| 4 | `our-teams/` | Team structures and roles |
| 5 | `people/` | Individual profiles (position-linked) |
| 6 | `clients-partners/` | External relationships |
| 7 | `reference/` | Glossary, policies, lookups |
| 99 | `archive/` | Historical content |

Control ordering via `nav_order` in frontmatter, NOT folder numbering.

---

## For Agents: Wiki Work Protocol

### Before Creating Any Wiki Page

**Mandatory Pre-Work Checklist:**

1. **Read existing structure:**
   ```bash
   ls -R wiki/
   cat wiki/index.md
   ```

2. **Check for duplicates:**
   - Search for similar page titles
   - Search for similar concepts in content
   - If duplicate exists, enhance it instead of creating new

3. **Identify parent section:**
   - Where does this concept belong?
   - Does the parent `index.md` need updating?
   - Are there sibling pages to link to?

4. **Plan navigation:**
   - List parent, siblings, children, related pages
   - Ensure bidirectional links are feasible

5. **Verify human-first purpose:**
   - Can you articulate "why this matters" in one sentence?
   - Do you have a real example to include?
   - Is this onboarding-friendly?

### Page Creation Protocol

**Step-by-step:**

1. **Create file with full content** (no stubs or TODOs)
2. **Add navigation section** at top and bottom
3. **Update parent index.md** to link to new page
4. **Update sibling pages** with related links (if applicable)
5. **Verify all links** work using relative paths
6. **Run verification checklist** (see Sisyphus Mode above)
7. **ONLY THEN** claim completion

### Prohibited Actions

**NEVER:**
- Create stub pages with "Coming soon" or "TODO"
- Generate metadata-first content (tables of Type/Status/ID)
- Use system terminology without plain-language explanation
- Link to pages that don't exist yet
- Skip navigation links
- Copy organizational data dumps without humanizing
- Use individual names in structure or permalinks
- Create pages deeper than 4 levels (split into new sections instead)
- Write in passive voice

### Quality Gates

**Before claiming wiki work is done:**

```bash
# 1. Check all links work
grep -r "\[.*\](.*\.md)" wiki/ | while read line; do
  # Extract and verify each link exists
done

# 2. Verify no TODO or placeholder text
grep -r "TODO\|Coming soon\|TBD" wiki/

# 3. Check for metadata tables (should be zero)
grep -r "^\*\*Type:\*\*\|^\*\*Status:\*\*\|^\*\*Owner:\*\*" wiki/

# 4. Verify navigation sections exist
grep -r "## Related" wiki/
grep -r "Back to:" wiki/
```

**All checks must pass. Zero exceptions.**

---

## Wiki Management Workflow

### Agent Tiers Overview

The wiki is managed by a four-tier agent system operating in Sisyphus Mode—no work is marked complete until verification confirms success.

| Tier | Role | Purpose |
|------|------|---------|
| **Tier 0** | Wiki-Orchestrator | Routes requests, coordinates specialists, runs end-to-end verification |
| **Tier 1** | Domain Specialists | Own specific sections, maintain content accuracy and completeness |
| **Tier 2** | Cross-Functional Validators | Enforce quality standards (links, style, consistency) |
| **Tier 3** | Gatekeepers | Publish to GitHub Pages, sync with external systems (Notion) |

### Section Ownership Map

Each Domain Specialist owns a specific wiki section:

| Section | Domain Specialist | What They Maintain |
|---------|-------------------|-------------------|
| **Start Here** | Onboarding-Agent | `who-we-are/`, `your-first-week/`, `tools-we-use/` |
| **Our Teams** | Teams-Agent | `corp-ops/`, `ceo-office/`, team structures |
| **How We Work** | Process-Agent | `making-decisions/`, `sops/` |
| **What We Make** | Product-Agent | `how-an-order-flows/`, products, value streams |
| **People** | Directory-Agent | People directory, org chart |
| **Clients & Partners** | Relations-Agent | Client and partner pages |
| **Reference** | Glossary-Agent | Glossary, templates, resources |

### Verification Protocol (4 Phases)

Every wiki change goes through standardized verification before claiming completion:

**Phase 1: Specialist Verification**
- Domain Specialist verifies accuracy, completeness, links, and formatting
- Must provide evidence, not assumptions
- Confirms "Ready for validator review"

**Phase 2: Cross-Functional Validation**
- Link-Validator checks all internal and external links
- Style-Enforcer checks markdown formatting consistency
- Consistency-Checker validates organizational data alignment
- **All three must pass** before proceeding

**Phase 3: Orchestrator Verification**
- Orchestrator confirms no orphan pages, no broken links, proper metadata
- Verifies navigation is updated and no merge conflicts
- Makes final publish decision

**Phase 4: Publication**
- GitHub Sync Agent commits and publishes to GitHub Pages
- Notion Sync Agent syncs databases with Notion
- Verifies changes are live within 2 minutes

If **any phase fails**, work returns to Domain Specialist with specific issues. No exceptions.

### Common Workflows

**Add New Employee:**
1. Directory-Agent updates `/people/` with new person
2. Teams-Agent adds person to team roster
3. Onboarding-Agent reviews first-week schedule
4. Orchestrator verifies all links work
5. Notion Sync Agent syncs to Notion
6. GitHub Sync Agent publishes
7. ✓ Complete when visible on live wiki

**Process Changes (New SOP):**
1. Process-Agent creates SOP page in `/how-we-work/sops/`
2. Consistency-Checker reviews against actual execution
3. Orchestrator verifies discoverability and links
4. GitHub Sync Agent publishes
5. ✓ Complete when SOP is live and discoverable

**Tool Update:**
1. Onboarding-Agent updates `/start-here/tools-we-use/`
2. Link-Validator tests new tool links
3. Orchestrator spot-checks links
4. GitHub Sync Agent publishes
5. ✓ Complete when updated links are live

**Organizational Restructuring:**
1. Teams-Agent updates `/our-teams/` structure
2. Directory-Agent updates `/people/` team assignments
3. Process-Agent reviews SOPs for new escalation chains
4. Consistency-Checker validates no conflicts
5. Notion Sync Agent syncs org structure
6. GitHub Sync Agent publishes
7. ✓ Complete when changes visible across all systems

### Agent Coordination Rules

- All agents check RABSIC accountability before acting
- Agents verify they have appropriate role assignment (R, A, S, or C)
- External writes (Notion, GitHub) require approval from Accountable party
- 24-hour timeout: Requests escalate to Orchestrator if no response
- Agents operate by position (not individual names)
- No agent claims completion without fresh verification evidence

---

## Examples

### Bad Page (Metadata-First)

```markdown
# Project Alpha

**Type:** Strategic Initiative
**Status:** Active
**Owner:** CTO
**Created:** 2026-01-15
**Priority:** P1
**Budget:** $500K

## Overview
Project Alpha is a strategic initiative to improve customer onboarding.

## Deliverables
- System redesign
- Documentation update
- Training materials
```

**Problems:**
- Metadata table at top (system-first, not human-first)
- No "why this matters" explanation
- No navigation links
- No real examples
- Passive voice
- Uses individual role instead of position
- No related topics

### Good Page (Human-First)

```markdown
# Project Alpha: Fixing Our Customer Onboarding Crisis

**Navigation:** [Projects](../index.md) → [Active Projects](../active/index.md) → **Project Alpha**

We're redesigning how new customers experience Kyndof in their first 30 days because **40% of customers don't complete setup**. This is costing us $2M annually in churn.

## Why This Matters to You

- **Customer Success:** Your onboarding workflow changes in March 2026
- **Engineering:** You're building 3 new features (see [technical spec](./technical-spec.md))
- **Product:** This is our #1 priority for Q1 2026

## The Problem

Right now, new customers face 12 separate tools, 47 configuration steps, and zero guidance. Our data shows:
- 60% get stuck on Step 3 (API key generation)
- 30% never connect their first integration
- 10% complete setup but don't understand what to do next

## What We're Building

A **guided onboarding wizard** that:
1. Walks customers through setup step-by-step
2. Auto-configures common integrations
3. Includes interactive tutorials for each feature
4. Celebrates milestones (gamification)

See [detailed product spec](./product-spec.md) for full requirements.

## Example: Current vs. New Experience

**Current (Bad):**
Customer lands on dashboard → sees 15 empty widgets → feels overwhelmed → churns

**New (Good):**
Customer lands on welcome screen → clicks "Start Setup" → completes 5-minute wizard → sees personalized dashboard → explores tutorials → becomes active user

## Timeline

- **Jan 2026:** Design and user research
- **Feb 2026:** Development
- **Mar 2026:** Beta testing with 10 customers
- **Apr 2026:** Full rollout

Current status: **Active development** (Track progress in [project board](./board.md))

## Team

This project is owned by the **Product Lead role** and built by the **Engineering team**. See [team structure](./team.md) for detailed roles and responsibilities.

For questions, contact the [Product Lead](../../positions/product-lead.md).

## Common Questions

- [How does this affect my workflow?](./impact-by-role.md)
- [What happens to existing customers?](./migration-plan.md)
- [Can I see the design mockups?](./designs.md)

---

## Related Pages

- [Project Beta: Mobile App Redesign](../project-beta/index.md) (sister project)
- [Customer Success Playbook](../../how-we-work/customer-success/playbook.md)
- [Our Onboarding Philosophy](../../what-we-do/products/onboarding-philosophy.md)

**Back to:** [Active Projects](../active/index.md) | [All Projects](../index.md) | [Wiki Home](../../index.md)
```

**Why this is good:**
- Human-first purpose statement
- Explains "why this matters" before details
- Real data and examples
- Clear navigation
- Position-based ownership (not individual names)
- Related links in multiple categories
- Conversational tone
- Scannable structure

---

## Related Documentation

- **[CLAUDE.md (root)](../CLAUDE.md)** - Overall CompanyOS philosophy and agent behavior
- **[Knowledge Graph Guide](../world-model/knowledge/README.md)** - Entity relationship management
- **[Style Guide](./style-guide.md)** - Detailed writing and formatting rules (if exists)

---

## Maintenance

This document should be reviewed whenever:
- Wiki structure changes significantly
- Agents repeatedly violate these principles
- User feedback indicates poor wiki usability
- New patterns emerge that should be codified

**Last Reviewed:** 2026-02-02
**Next Review:** 2026-03-02
**Maintained by:** Orchestrator Role
**Updated:** Merged AGENTS.md into CLAUDE.md for consolidated wiki management documentation

---

**Remember:** The wiki exists for **humans exploring organizational knowledge**, not for machines cataloging data. When in doubt, ask: "Would this help someone on their first day?"
