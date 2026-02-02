---
title: Wiki Style Guide
layout: default
nav_order: 1
parent: Reference
nav_exclude: true
---

# Wiki Style Guide

> A handbook about writing the handbook. This guide helps writers create content that feels human, intentional, and valuable.

**Purpose:** Transform mechanical facts into genuine onboarding experiences. New team members should finish a page feeling smarter, not more confused.

**Last Updated:** 2026-02-02
**Maintained By:** Orchestrator
**Review Frequency:** Quarterly

---

## Quick Philosophy

Before the rules, understand the mindset:

1. **Write for the new person**, not the system. They don't know what they don't know.
2. **Show context first**, then details. Start with "why" before "what."
3. **Prefer examples over abstractions.** One good example beats ten bullet points.
4. **Link generously.** Your page is a waypoint, not a destination.
5. **Use positions, not names.** "The CTO" not "Sean." People change, positions remain.

---

## Document Tone & Voice

### Core Voice Attributes

| Attribute | Yes | No |
|-----------|-----|-----|
| **Confidence** | Authoritative but humble | Uncertain or wishy-washy |
| **Clarity** | Direct and specific | Vague or over-technical |
| **Warmth** | Conversational, human-centered | Cold, mechanical, robotic |
| **Contextualization** | "Here's why this matters" | Just facts, no meaning |
| **Accessibility** | Explains jargon on first use | Assumes full knowledge |

### Tone Examples

**GOOD: Conversational + Contextual**
```
Brand Ops owns every moment your customer experiences Kyndof.
We design those moments—from first email to unboxing to support conversation.

When someone wears Kyndof, they're wearing our decisions.
That's why this team exists: to make those decisions intentional, not accidental.
```

**AVOID: Mechanical + Faceless**
```
Brand Operations Department
Type: Department
Status: Active
Key Functions: MD, Sales, Marketing, PR, CS, Logistics, Supply Chain
```

**GOOD: Explains the "why"**
```
We use positions (CTO, CFO) not names (Sean, Elena) in this handbook.
Here's why: when Sean leaves and Alex takes over, every document still makes sense.
The role is permanent. The person fills it.
```

**AVOID: Just rules**
```
Always use position titles in formal documentation. Do not hardcode individual names.
```

---

## Headers & Structure

### Header Hierarchy

Use clear, scannable hierarchy. Every page should be skimmable in 30 seconds.

```markdown
# Page Title
> One-line vision/purpose (see "Taglines" section below)

## Top-Level Section
Text explaining context and importance.

### Subsection
Supporting details and examples.

#### Sub-subsection
Avoid going deeper. If you need this, reorganize.
```

### Taglines (The `>` Rule)

Every major section opens with a tagline—a single-line summary that answers: "Why should I read this?"

**Format:**
```markdown
# Page Title
> One sentence that explains the value or purpose.
```

**Examples:**
```markdown
# Brand Ops
> Every customer moment is a design decision. We make them intentional.

# RABSIC Framework
> One person is Accountable. Everyone else knows their role. That's clarity.
```

**Tagline Principles:**
- Answer "Why does this matter?"—not "What is this?"
- Be human. This isn't a database label.
- One sentence. Period.
- If you can't write a good tagline, the page lacks a clear purpose.

---

## Link Patterns

### Link Architecture

Kyndof handbook uses four link types to help readers find context:

| Link Type | Direction | Purpose | Example |
|-----------|-----------|---------|---------|
| **Parent** | Up | "I'm part of X" | Departments link to Organization page |
| **Children** | Down | "Here are my sub-areas" | Department links to Positions |
| **Related** | Horizontal | "This is similar/relevant" | RABSIC links to Accountability |
| **Timeline** | Temporal | "This happened because..." | Decision links to prior interaction |

### Using Internal Links

**Syntax:**
```markdown
[Link Text](../relative/path/) - for same-site links
[Link Text](#heading-id) - for anchors on same page
```

**Guidelines:**

1. **Link 3-5 times per 500 words**, not more.
2. **First mention gets a link** if relevant (e.g., first mention of "CTO role" links to that position).
3. **Link at decision points** when reader might ask "wait, what's RABSIC?"
4. **Link sparingly to avoid cognitive overload.** If every other word links, no word stands out.

---

## Common Content Patterns

### Department Page Pattern

```markdown
# [Department Name]
> [One-line mission]

## What We Do
[2-3 paragraphs explaining purpose and impact]

### [Key Areas or Functions]
Brief description of each.

## How We Work
[Relationships to other teams, decision process]

## Quick Reference
[Metadata table]

## Related Pages
[Parent, children, siblings]
```

### Position/Role Page Pattern

```markdown
# [Position Title]
> [One sentence about the impact of this role]

## About This Role
[Who is this person? What do they do? Why does this role matter?]

## Key Responsibilities
- [Specific ownership area]
- [Specific accountability]

## What Success Looks Like
[How do we measure if this person is doing well?]

## Relationships
[Table showing who they work with]

## Related Pages
[Parent department, sibling roles, related functions]
```

### Process/SOP Page Pattern

```markdown
# [Process Name]
> [What outcome does this process create?]

## Why This Process Exists
[The problem it solves, or the value it creates]

## Step-by-Step
1. **[Step Name]** — [What happens, who does it, why]
   - Typical time: X minutes/hours
   - Owner: [Role]

## Decision Gates
[Are there approval points? Who approves?]

## Common Questions
**Q: What if [edge case]?**
A: [Answer]

## Related Processes
[Link to similar processes]
```

---

## Anti-Patterns (What NOT to Do)

### ❌ Anti-Pattern 1: Mechanical Fact Lists

**BEFORE:**
```markdown
Positions in Brand Ops:
- Brand Ops Lead
- Merchandising Manager
- Sales Specialist
```

**AFTER:**
```markdown
## Team Structure

Our [8-person team](./positions/) spans five core areas:

- **Strategy & Execution** — Decide what customers love, plan the experience
- **Operations & Fulfillment** — Make sure products arrive on time, every time
- **Growth & Communication** — Tell Kyndof's story, build customer loyalty

[View all positions →](./positions/)
```

---

### ❌ Anti-Pattern 2: Hardcoding Names

**BEFORE:**
```markdown
Sean (CTO) decides on architecture.
Elena (CFO) decides on budgets.
```

**AFTER:**
```markdown
The CTO decides on architecture.
The CFO decides on budgets.

[See who currently fills each role →](../../our-teams/positions/)
```

---

### ❌ Anti-Pattern 3: No Tagline/Purpose

**BEFORE:**
```markdown
# RABSIC Framework

RABSIC is an acronym that stands for Responsible, Accountable, Backup, Support, Informed, Consulted...
```

**AFTER:**
```markdown
# RABSIC Framework

> One person is Accountable. Everyone else knows their role. That's clarity.

## What Is RABSIC?

RABSIC is our shorthand for assigning roles in any decision...
```

---

## Frontmatter (YAML Metadata)

Every page needs frontmatter—metadata that Jekyll uses to organize and display your page.

### Standard Frontmatter

```markdown
---
title: [Page Title]
layout: default
nav_order: [number]
parent: [Parent Section Title]
has_children: [true/false]
---
```

### Frontmatter Guide

| Field | Use Case | Examples |
|-------|----------|----------|
| `title` | Page title in navigation | `Brand Ops`, `RABSIC Framework` |
| `layout` | Page template | Always `default` for now |
| `nav_order` | Display order in parent menu | `1`, `2`, `3`... (integers) |
| `parent` | Parent section in nav tree | `Departments`, `Governance` |
| `has_children` | This page has sub-pages | `true` or `false` |
| `nav_exclude` | Hide from navigation | `true` for style guides, special pages |

---

## Review Checklist

Before publishing any handbook page:

### Content Checklist

- [ ] **Does it have a purpose?** Can you write a one-line tagline?
- [ ] **Is the tone human?** Would a new person feel welcome reading this?
- [ ] **Does it explain "why"?** Not just "what" and "how."
- [ ] **Are there examples?** Not just abstract rules.
- [ ] **Are links used sparingly?** 3-5 links per 500 words, not more.
- [ ] **Does it use positions, not names?** "The CTO" not "Sean."
- [ ] **Are headers scannable?** Can someone get the gist in 30 seconds?
- [ ] **Does it end with related pages?** Help readers navigate forward.

### Technical Checklist

- [ ] **Frontmatter is valid YAML?** Title, layout, nav_order, parent set?
- [ ] **Links are relative paths?** Use `../path/` not absolute URLs?
- [ ] **No typos or broken formatting?** Run through a spell-checker.
- [ ] **Tables render correctly?** Check alignment and spacing.
- [ ] **Updated the "Last Updated" date?**

---

## Parting Thought

> A great handbook feels less like documentation and more like a conversation with someone who knows the place and cares that you understand it.

Write that way. Your reader is a human, not a database. Treat them like one.

---

**Questions about this guide?** Contact the Orchestrator role.

**Last Updated:** 2026-02-02
**Next Review:** 2026-05-02
