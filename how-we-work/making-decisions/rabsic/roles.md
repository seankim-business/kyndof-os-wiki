---
title: Role Definitions
layout: default
nav_order: 1
parent: RABSIC Framework
grand_parent: Making Decisions
---

# RABSIC Role Definitions
{: .no_toc }

> Six roles. One principle: everyone knows what they're responsible for.

This page breaks down each of the six RABSIC roles in detail. When you're assigning roles to a decision, come here to understand exactly what each role means and when to use it.

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The Six Roles at a Glance

| Role | Definition | Key Rule |
|------|-----------|----------|
| **R** (Responsible) | Does the work and delivers output | Multiple allowed, but one is primary |
| **A** (Accountable) | Final authority, approves, owns the outcome | **Exactly ONE per decision** |
| **B** (Backup) | Stand-in if Responsible is unavailable | Only activated when R cannot perform |
| **S** (Support) | Helps Responsible complete work, provides resources | Actively assists, shares workload |
| **I** (Informed) | Notified of outcomes AFTER decision is made | Passive recipient, no input required |
| **C** (Consulted) | Provides input/advice BEFORE decision is made | Two-way communication, expertise sought |

---

## R — Responsible

**Definition:** The executor who does the work and delivers output.

### What They Do
- Perform the actual work
- Deliver the final output
- Own the quality of execution
- Request Support when needed

### Key Rules
- **Multiple people can be Responsible** (e.g., a team)
- **One person is designated as primary Responsible** (owns coordination)
- They execute, but don't approve (that's Accountable's job)

### When to Assign
- Someone needs to do concrete work
- Task requires hands-on execution
- Output needs to be delivered

### Examples
- Software engineer implementing a feature
- Designer creating mockups
- Analyst preparing a report
- Production team sewing a costume

---

## A — Accountable

**Definition:** Final authority, approver, owns the outcome.

### What They Do
- Approve or veto the final decision
- Own the outcome (success or failure)
- Escalate when blocked
- The buck stops here

### Key Rules
- **Exactly ONE per decision** (The Golden Rule)
- Cannot be shared or delegated
- Has veto power over the decision
- Can be different from the person doing the work

### When to Assign
- Someone needs to approve the final decision
- Clear ownership is required
- Escalation point must be defined

### Examples
- CTO approving technical architecture
- CEO approving strategic direction
- Manager approving team structure
- Creative Director approving final costume design

### Critical Rule
If you have zero Accountable or more than one Accountable, your RABSIC matrix is **invalid**.

---

## B — Backup

**Definition:** Stand-in if Responsible is unavailable.

### What They Do
- Step in when primary Responsible cannot perform
- Have similar skills/authority as Responsible
- Do NOT participate when Responsible is available

### Key Rules
- Only activated when Responsible is unavailable
- Not a secondary Responsible
- Should be kept in the loop (but not actively involved)

### When to Assign
- Risk of Responsible being unavailable
- Critical tasks that cannot wait
- Coverage needed for time-sensitive work

### Examples
- Backup on-call engineer
- Deputy manager when manager is on leave
- Secondary contact for critical system
- Backup pattern maker during production season

---

## S — Support

**Definition:** Actively helps Responsible complete work.

### What They Do
- Provide resources, tools, access
- Remove blockers
- Share workload with Responsible
- Actively assist (not passive)

### Key Rules
- Does NOT have decision authority
- Actively involved in the work
- Shares execution responsibility, but not ownership

### When to Assign
- Responsible needs help completing work
- Resources or access required
- Cross-functional assistance needed

### Examples
- HR supporting hiring process
- Finance providing budget data
- DevOps setting up infrastructure
- Logistics arranging fabric delivery

### Key Difference
**Support actively helps; Informed passively receives updates.**

If someone is doing substantial work (more than 30% of the effort), they're probably Responsible, not Support.

---

## I — Informed

**Definition:** Notified of outcomes AFTER decision is made.

### What They Do
- Receive notification AFTER decision
- Need to know for context
- Do not provide input

### Key Rules
- One-way communication
- No input required or expected
- Passive recipient
- Notified AFTER, not BEFORE

### When to Assign
- Stakeholders need awareness
- Decision impacts their work indirectly
- Transparency is important

### Examples
- Team notified of new policy
- Stakeholders informed of project status
- Department updated on strategic changes
- Client informed of production timeline

### Critical Timing
**Informed comes AFTER the decision, never BEFORE.**

If you need someone's input before deciding, they're Consulted, not Informed.

---

## C — Consulted

**Definition:** Provides input/advice BEFORE decision is made.

### What They Do
- Provide expertise BEFORE decision
- Shape the decision with their input
- Engage in two-way communication
- Act as subject matter expert

### Key Rules
- Input comes BEFORE the decision
- Two-way communication (not one-way)
- Does NOT have approval authority
- Can disagree with final decision

### When to Assign
- Expert opinion needed
- Domain knowledge required
- Risk assessment needed

### Examples
- Security expert consulted on architecture
- Legal team consulted on contract terms
- User research team consulted on design
- Pattern maker consulted on fabric choice

### Critical Timing
**Consulted comes BEFORE the decision, never AFTER.**

If you're just notifying them after the decision, they're Informed, not Consulted.

---

## Key Principles

### The One Accountable Rule

**Each decision must have exactly ONE Accountable** — the single point of ownership.

Why this matters:
- Prevents diffusion of responsibility
- Ensures clear ownership
- Enables escalation
- Avoids "too many cooks" syndrome

### Orthogonality with Titles

**RABSIC roles are orthogonal to organizational titles.**

A CTO may be:
- **Responsible** on implementation decisions (doing the work)
- **Accountable** on architecture decisions (owning the outcome)
- **Consulted** on product decisions (providing expertise)
- **Informed** on marketing decisions (just needs to know)

The role depends on the decision, not the job title.

### Timing Is Critical

| Role | When | Communication |
|------|------|--------------|
| **Consulted (C)** | BEFORE decision | Two-way: Provide input |
| **Informed (I)** | AFTER decision | One-way: Receive notification |

Never confuse these two. Consulted shapes the decision; Informed just needs to know.

### Active vs. Passive

| Active Roles | Passive Role |
|-------------|--------------|
| Responsible (R) | Informed (I) |
| Accountable (A) | |
| Support (S) | |
| Consulted (C) | |

Active roles participate in the work or decision. Informed is passive.

---

## Common Mistakes

### Mistake 1: Multiple Accountable

```
❌ WRONG:
A: CEO, CTO (shared accountability)
```

**Fix:** Assign exactly ONE Accountable. If both need involvement, one is Accountable, the other is Consulted.

```
✓ CORRECT:
A: CEO
C: CTO
```

---

### Mistake 2: Confusing Informed and Consulted

```
❌ WRONG:
Asking for input AFTER the decision from someone marked as Informed
```

**Fix:** If you need input BEFORE, they are Consulted, not Informed.

```
✓ CORRECT:
C: Subject matter expert (get input BEFORE)
I: Stakeholder (notify AFTER)
```

---

### Mistake 3: No Backup When Needed

```
❌ WRONG:
R: Single critical person, no backup
(on a time-sensitive critical decision)
```

**Fix:** Assign a Backup for critical or time-sensitive work.

```
✓ CORRECT:
R: Primary engineer
B: Backup engineer
```

---

### Mistake 4: Support vs. Responsible Confusion

```
❌ WRONG:
S: Person doing half the work
```

**Fix:** If they're doing substantial work, they're Responsible, not Support.

```
✓ CORRECT:
R: Primary engineer, Secondary engineer
S: DevOps (provides infrastructure)
```

---

## Minimum Requirements

Every decision must have **at least**:

| Role | Minimum Count |
|------|--------------|
| Accountable (A) | Exactly 1 |
| Responsible (R) | At least 1 |
| Others (B, S, I, C) | As needed |

Invalid matrix:
```
❌ No Accountable assigned
❌ No Responsible assigned
```

Valid minimal matrix:
```
✓ A: CTO (exactly one)
✓ R: Engineer (at least one)
```

---

## Related Pages

### RABSIC Framework
- [RABSIC Overview](../) — Introduction to RABSIC
- [RABSIC Examples](./examples/) — Real-world scenarios
- [Matrix Template](./matrix-template/) — Step-by-step guide

### How We Work
- [Making Decisions](../../) — The approval workflow using RABSIC
- [Our Teams](../../../../our-teams/) — See how positions use RABSIC

---

**Last Updated:** 2026-02-02
**Maintained By:** Orchestrator
