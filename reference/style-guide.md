---
title: Style Guide
---

# Kyndof Writing Style Guide

How we write documentation, memos, and internal communications at Kyndof.

## Core Philosophy

**Write for humans first.** Documentation should feel like a helpful colleague explaining something, not a legal document.

Good Kyndof writing is:
- **Clear** - No jargon without explanation
- **Conversational** - Like you're talking to a teammate
- **Practical** - Tells people what to DO, not just what to know
- **Honest** - Admits when things are unclear or imperfect

---

## Voice and Tone

### Conversational, Not Corporate

**❌ Corporate speak:**
> "Stakeholders are advised to leverage the integrated management system to optimize workflow efficiency and ensure alignment with organizational objectives."

**✓ Kyndof style:**
> "Use the IMS (our Notion workspace) to track your work. This keeps everyone aligned on what needs to get done."

### Active Voice

**❌ Passive:**
> "The decision was made by the leadership team..."

**✓ Active:**
> "The leadership team decided..."

### Direct and Honest

**❌ Vague:**
> "We aim to improve processes going forward."

**✓ Specific:**
> "We're changing the approval process because the current one takes too long. Starting Monday, you'll get approvals within 24 hours instead of 3 days."

---

## Structure

### Start with Why

Always explain the purpose before diving into details.

**Example:**

```
# Corporate Card Policy

## Why This Policy Exists

Corporate cards are company money, not personal money. This policy ensures
expenses are legitimate and properly documented.

## What You Can Use It For
[details...]
```

### Use Headings Generously

Break content into scannable sections. People skim before they read.

**Good heading structure:**
- H1: Page title
- H2: Major sections
- H3: Subsections
- H4: Rare, only if absolutely needed

### Front-Load Important Information

Put critical info at the top, details at the bottom.

**❌ Detail-first:**
> "The financial accounting process involves multiple stakeholders across departments utilizing various systems including Notion, Gowid, and bank interfaces. Manufacturing expenses, which historically were processed through Hana Bank, have been migrated to Kookmin Bank as of July 2024..."

**✓ Important-first:**
> **New as of July 2024:**
> - Manufacturing expenses → Kookmin Bank (contact Seung-yeon)
> - General expenses → Hana Bank (contact Da-eun)
>
> [details below if you need them]

---

## Language

### Korean and English

**When to use Korean:**
- Company-specific terms (서클, 눈덩이 원칙)
- Names of Korean entities
- When the Korean term is more commonly used

**When to use English:**
- Technical terms (API, database)
- International business terms (KPI, SOP)
- When English is clearer

**Always provide translation on first use:**
- "서클 (Circle) - a business unit or team within Kyndof"
- "SOP (Standard Operating Procedure) - step-by-step documentation..."

### Define Jargon

Every time you introduce a specialized term, define it immediately.

**❌ Assumes knowledge:**
> "Submit your expense in the Tasks DB and tag the appropriate granter."

**✓ Defines terms:**
> "Submit your expense in the Tasks DB (our Notion task database) and tag the project in the granter field (so accounting knows which project to charge)."

### Avoid These Words

| Don't Use | Use Instead |
|-----------|-------------|
| "Utilize" | "Use" |
| "Leverage" | "Use" or "Take advantage of" |
| "Facilitate" | "Help" or "Enable" |
| "Stakeholder" | "Person," "Team," or specific role |
| "Going forward" | "Starting [date]" or "From now on" |
| "Synergy" | Be specific about what you mean |

---

## Formatting

### Lists for Clarity

Use lists when presenting multiple items or steps.

**For steps (ordered list):**
1. First step
2. Second step
3. Third step

**For options or categories (unordered list):**
- Option one
- Option two
- Option three

### Tables for Comparison

When comparing options or showing structured data:

| Before | After | Why |
|--------|-------|-----|
| Hana Bank for all expenses | Kookmin for manufacturing | Better cost tracking |

### Examples and Non-Examples

Show both what to do AND what not to do.

**Format:**
```
❌ Wrong: "I need approval"
✓ Right: "I need approval from [specific person] for [specific thing] by [date]"
```

### Code Blocks for Technical Content

For commands, code, or anything that should be copied exactly:

```bash
railway status
railway logs --tail 50
```

---

## Document Types

### Policies

**Structure:**
1. Purpose (why this exists)
2. Who it applies to
3. Rules (what you can/cannot do)
4. Examples
5. Exceptions
6. FAQ
7. Contact for questions

**Tone:** Clear and firm, but not cold

### SOPs (Standard Operating Procedures)

**Structure:**
1. Purpose (what this accomplishes)
2. Prerequisites (what you need first)
3. Step-by-step instructions
4. Troubleshooting
5. Examples

**Tone:** Instructional, like a patient teacher

### Announcements

**Structure:**
1. What changed (in one sentence)
2. Why it changed
3. What you need to do
4. When it takes effect
5. Who to contact with questions

**Tone:** Direct and helpful

### Meeting Notes

**Structure:**
1. Attendees
2. Key decisions (bullet points)
3. Action items (who does what by when)
4. Open questions
5. Next meeting

**Tone:** Brief and actionable

---

## Common Mistakes

### Too Much Formality

**❌ Overly formal:**
> "Employees are hereby notified that the utilization of corporate assets for personal purposes is strictly prohibited and may result in disciplinary action."

**✓ Human:**
> "Don't use company credit cards for personal purchases. If you accidentally do, tell Finance immediately and we'll fix it."

### Burying the Lead

**❌ Details first:**
> "Following extensive deliberation among the leadership team and consultation with the finance department regarding the optimal allocation of resources across various organizational functions, a determination has been reached..."

**✓ Lead first:**
> "We're changing how expense budgets work. Starting next month, each team gets a fixed monthly budget instead of requesting approval for each expense."

### Unclear Action Items

**❌ Vague:**
> "Team members should familiarize themselves with the new process."

**✓ Specific:**
> "Read the [New Process SOP] by Friday. Reach out to your manager if you have questions."

---

## Templates

### Policy Template

```markdown
---
title: [Policy Name]
---

# [Policy Name]

[One-sentence description]

## Why This Policy Exists

[Explain the purpose]

## Who This Applies To

[Specific scope]

## Rules

### What You Can Do
[List allowed actions]

### What You Cannot Do
[List prohibited actions]

## Examples

[Real-world scenarios]

## Exceptions

[How to request exceptions]

## FAQ

[Common questions]

## Need Help?

[Contact information]
```

### Announcement Template

```markdown
# [Change Title]

**What changed:** [One sentence]

**Effective:** [Date]

## Why This Change

[Brief explanation]

## What You Need to Do

1. [Action item]
2. [Action item]

## Questions?

Contact [person/channel]
```

---

## Checklist Before Publishing

Before you publish any documentation:

- [ ] Explained WHY before WHAT
- [ ] Defined all jargon and acronyms
- [ ] Used headings to break up content
- [ ] Included examples
- [ ] Specified who to contact for questions
- [ ] Wrote in conversational tone
- [ ] Front-loaded important information
- [ ] Provided clear action items

---

## Examples of Good Kyndof Writing

**From this wiki:**
- [Glossary](./glossary/) - Defines terms in plain language with examples
- [Corporate Card Policy](./policies/corporate-card.md) - Explains WHY before listing rules
- [Expense Policy](./policies/expense-policy.md) - Uses before/after examples

---

## Need Help with Writing?

**Quick questions:** Ask in Slack #help
**Document review:** Ask your team lead or CEO Staff
**Style questions:** Reference this guide or ask

---

**Version:** 1.0
**Last Updated:** 2026-02-02

---

**Navigation:**
- [← Reference Home](./)
- [Glossary →](./glossary/)
- [← Wiki Home](../)
