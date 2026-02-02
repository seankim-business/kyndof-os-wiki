---
title: Style Guide Quick Reference
layout: default
nav_order: 2
parent: Reference
nav_exclude: true
---

# Wiki Style Quick Reference

> One-page cheat sheet for handbook writers. Print this out or bookmark it.

---

## Page Template (Copy & Paste)

```markdown
---
title: [Page Title]
layout: default
nav_order: [1, 2, 3...]
parent: [Parent Section Name]
has_children: [true/false]
---

# [Page Title]
> [One-line purpose: What value does this page provide?]

## Section 1
[Content with 3-5 strategic links]

### Subsection
[Supporting details and examples]

## Related Pages

### Parent Section
- [Parent Title](../)

### Child Pages
- [Child 1](./child-1/)

### Sibling Pages
- [Sibling 1](../sibling-1/)

---

*Last Updated: 2026-02-02*
```

---

## Writing Checklist (Before Publishing)

**Content (Yes/No)**
- [ ] Has a strong tagline (the `>` line)?
- [ ] Explains "why" before "what"?
- [ ] Uses 3-5 strategic links (not more)?
- [ ] No hardcoded names (uses positions)?
- [ ] Headers are scannable (30-second read)?
- [ ] Includes examples, not just rules?

**Technical (Yes/No)**
- [ ] Frontmatter is valid (title, layout, nav_order, parent)?
- [ ] Links are relative paths (`../path/`)?
- [ ] No broken markdown?
- [ ] Updated "Last Updated" date?
- [ ] Includes "Related Pages" section?

---

## Tone in Three Sentences

1. **Write for the new person**, not the database.
2. **Be warm but authoritative.** "Here's why this matters."
3. **Use "we" language.** Show ownership, not detachment.

| AVOID | USE |
|-------|-----|
| "Brand Operations is responsible for..." | "We own every customer moment Kyndof creates." |
| "The CTO must decide architecture." | "The CTO decides architecture so teams have clarity." |
| "Database ID: 2e04a6fb" | [Remove this entirely] |

---

## Header Formula

```
# [Noun - what is this?]
> [Why does this matter? What value does it give?]

## [Action Verb or Noun Phrase]
[Context paragraph explaining the "why"]

### [Specific detail]
[Supporting information]
```

**Examples:**
- `# Brand Ops` → `> Every customer moment is a design decision.`
- `## How We Decide` → [Explains decision process]
- `## What Success Looks Like` → [Defines success metrics]

---

## Link Strategy

| Link Type | When | Example |
|-----------|------|---------|
| **First mention of important term** | Once per page | "See [RABSIC framework](../) for roles." |
| **Parent section** | In "Related Pages" | Link up to parent org |
| **Child pages** | In "Related Pages" | Link to sub-pages |
| **Related/sibling** | In "Related Pages" | Link across same level |

**Rule:** 3-5 links per 500 words. More = cognitive overload.

---

## Content Pattern Checklists

### Department Page
- [ ] Tagline explains impact ("customers experience...")
- [ ] Opening paragraph: Why does this department exist?
- [ ] 2-3 key function areas explained
- [ ] How this department collaborates with others
- [ ] Links to positions, goals, functions
- [ ] "Quick Reference" metadata box
- [ ] "Related Pages" section

### Position/Role Page
- [ ] Tagline explains the impact of this role
- [ ] "About This Role" section (2-3 paragraphs)
- [ ] Key Responsibilities (4-7 bullet points)
- [ ] What Success Looks Like
- [ ] Relationships table (who they work with)
- [ ] Current holder (name, start date)

### Process Page
- [ ] Opens with "Why This Process Exists"
- [ ] Step-by-step with ownership clear
- [ ] Decision gates/approval points
- [ ] Common Questions section (FAQ)
- [ ] Typical timeline/duration
- [ ] Links to related processes

---

## Frontmatter Cheat Sheet

**Standard page:**
```yaml
---
title: Page Title
layout: default
nav_order: 2
parent: Parent Section Name
---
```

**Parent section (has children):**
```yaml
---
title: Parent Section
layout: default
nav_order: 1
has_children: true
---
```

**Special (hidden from nav):**
```yaml
---
title: Style Guide (Example)
layout: default
nav_exclude: true
---
```

---

## Anti-Patterns (What NOT to Do)

| Pattern | Problem | Fix |
|---------|---------|-----|
| **No tagline** | Reader doesn't know why they should read it | Add `>` line with purpose |
| **Hardcoded names** | Page breaks when person leaves | Use "CTO role" not "Sean" |
| **Burying lead** | Important info lost in middle | Start with the insight |
| **Links everywhere** | Cognitive overload | Limit to 3-5 links per 500 words |
| **Mechanical facts** | Feels like database dump | Add context: "Why does this matter?" |
| **Orphaned page** | Reader can't navigate forward | Add "Related Pages" section |
| **Deeply nested** | Hard to scan | Split into separate pages with headers |

---

## Position vs. Name Rule

**Why:** People change, positions last. When Sean leaves and Alex takes over, handbook still makes sense.

| DON'T | DO |
|-------|-----|
| "Sean (CTO) decides..." | "The CTO decides..." |
| "Talk to Elena about finances" | "Talk to the CFO about finances" |
| "Ask the CEO (our founder)" | "Ask the CEO, who was our founder" |

---

## Testing Your Page

**30-Second Scan Test:** A new person should get the gist in 30 seconds.
- They read: Title, tagline, section headers, first paragraph
- They should understand: What is this? Why does it matter? Where do I go next?

**New-Person Test:** Read it pretending you know nothing about Kyndof.
- Are there unexplained terms? Add a link or explanation.
- Do you feel lost? Tagline or opening doesn't explain enough.
- Do you know what to do next? "Related Pages" should guide them.

---

**Bookmark this page. Print it out. Share it with new writers.**

**Last Updated:** 2026-02-02
