---
title: RABSIC Framework
layout: default
nav_order: 1
parent: Making Decisions
grand_parent: How We Work
has_children: true
---

# RABSIC Framework
{: .no_toc }

> One person is Accountable. Everyone else knows their role. That's clarity.

When someone asks "who decides this?" the answer should be immediate and unambiguous. RABSIC is our framework for making that happen.

It's a simple system: every decision assigns six possible roles. Some decisions use all six. Some use just two. But every decision has **exactly one Accountable** person—the single point of ownership.

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What Is RABSIC?

RABSIC stands for **Responsible, Accountable, Backup, Support, Informed, Consulted.**

It's an extended version of the RACI matrix (a common business framework), with one critical addition: the **Backup** role. We added it because real work involves real people who take vacations, get sick, or leave the company.

**Purpose:** Eliminate confusion about who does what in organizational decisions.

---

## The Six Roles

| Role | Definition | Key Rule |
|------|-----------|----------|
| **R** (Responsible) | Does the work and delivers output | Multiple allowed, one is primary |
| **A** (Accountable) | Final authority, approves, owns outcome | **Exactly ONE per decision** |
| **B** (Backup) | Stand-in if Responsible is unavailable | Only activated when R cannot perform |
| **S** (Support) | Helps Responsible complete work | Actively assists, shares workload |
| **I** (Informed) | Notified AFTER decision is made | Passive recipient, no input required |
| **C** (Consulted) | Provides input BEFORE decision is made | Two-way communication, expertise sought |

### Quick Definitions

**Responsible (R)** — The person doing the actual work. They own execution quality.

**Accountable (A)** — The person whose name is on the outcome. When something goes wrong, they answer for it.

**Backup (B)** — The stand-in when the Responsible person is unavailable. They don't participate otherwise.

**Support (S)** — Provides resources, removes blockers, helps the Responsible person succeed.

**Informed (I)** — Gets notified after the decision. They need to know, but don't shape the decision.

**Consulted (C)** — Provides expertise before the decision. Their input matters.

[See detailed role definitions →](./roles/)

---

## The Golden Rule: Exactly ONE Accountable

**Every decision must have exactly ONE Accountable person.**

Not two. Not zero. One.

### Why This Matters

- **Prevents diffusion of responsibility** — "We all decided" means no one did
- **Ensures clear ownership** — Someone's name is on the outcome
- **Enables escalation** — When things go wrong, we know who to talk to
- **Avoids "too many cooks"** — Decisions get made, not debated endlessly

### Invalid Examples

```
❌ A: CEO, CTO (two Accountable)
❌ A: (none) (zero Accountable)
```

### Valid Example

```
✓ A: CTO (exactly one Accountable)
```

If you find yourself trying to assign two Accountable people, one is truly Accountable and the other is Consulted.

---

## Roles Are Separate from Titles

**RABSIC roles are orthogonal to organizational titles.**

What does that mean? A CTO might be:
- **Responsible** on implementation decisions (doing the work)
- **Accountable** on architecture decisions (owning the outcome)
- **Consulted** on product decisions (providing expertise)
- **Informed** on marketing decisions (just needs to know)

The role depends on the decision, not the job title.

**Example:**
- **Decision:** Migrate to microservices architecture
- **Accountable:** CTO (owns technical architecture)
- **Responsible:** Senior Architect (does the design work)
- **Consulted:** Security Team (provides security expertise)
- **Informed:** Product Team (affected by potential downtime)

---

## Timing Is Critical

Two roles have strict timing requirements:

| Role | When | Communication |
|------|------|--------------|
| **Consulted (C)** | BEFORE decision | Two-way: Provide input |
| **Informed (I)** | AFTER decision | One-way: Receive notification |

Never confuse these. Consulted shapes the decision. Informed just needs to know.

If you need someone's input **before** deciding, they're Consulted, not Informed.

---

## Active vs. Passive Roles

Four roles are active (they participate). One is passive.

| Active Roles | Passive Role |
|-------------|--------------|
| Responsible (R) | Informed (I) |
| Accountable (A) | |
| Support (S) | |
| Consulted (C) | |

Active roles do work, provide input, or approve. Informed just receives updates.

---

## How to Use RABSIC

### Step 1: Identify the Decision

Be specific. Vague decisions lead to vague accountability.

```
❌ BAD: "Improve product"
✓ GOOD: "Add user authentication to mobile app"
```

### Step 2: Assign Roles

**Required:**
- Exactly ONE Accountable (A)
- At least ONE Responsible (R)

**Optional** (assign as needed):
- Backup (B)
- Support (S)
- Informed (I)
- Consulted (C)

### Step 3: Execute the Workflow

1. **Consult Phase:** Gather input from all Consulted parties
2. **Decision Phase:** Responsible prepares recommendation; Accountable approves
3. **Execution Phase:** Responsible (with Support) implements
4. **Notification Phase:** Inform all Informed parties

---

## Example: Hiring a New Engineer

**Decision:** Hire a new backend engineer

| Role | Assignment | Rationale |
|------|-----------|-----------|
| **R** | Hiring Manager | Runs the interview process, evaluates candidates |
| **A** | CTO | Owns the hiring outcome and final approval |
| **B** | Senior Engineer | Backup interviewer if Hiring Manager unavailable |
| **S** | HR, Finance | Provide interview logistics and budget approval |
| **I** | Engineering Team | Notified when hire is confirmed |
| **C** | Lead Architect | Provides technical assessment input |

**Workflow:**
1. Hiring Manager consults Lead Architect on technical requirements
2. Hiring Manager runs interviews with HR support
3. Hiring Manager recommends a candidate to CTO
4. CTO approves (as Accountable)
5. Team is informed of the new hire

[See more examples →](./examples/)

---

## RABSIC in Practice

### When to Create a RABSIC Matrix

Use RABSIC for:
- **Strategic decisions** — Affects company direction
- **Cross-team work** — Multiple stakeholders involved
- **High-risk decisions** — Significant impact if wrong
- **External actions** — Notion, Slack, GitHub writes
- **Unclear ownership** — Prevents confusion

Don't need RABSIC for:
- Trivial daily tasks
- Personal work with no dependencies
- Already-clear single-person ownership

### Common Mistakes

| Mistake | Fix |
|---------|-----|
| Multiple Accountable | Assign exactly ONE Accountable |
| Confusing Informed and Consulted | Consulted = BEFORE (input), Informed = AFTER (notification) |
| No Backup for critical work | Assign Backup for time-sensitive tasks |
| Support doing core work | If doing substantial work, they're Responsible, not Support |

---

## How CompanyOS Uses RABSIC

The **RABSIC-Engine** agent automatically:
- Determines which roles must be assigned for decisions
- Generates RABSIC matrices from decision context
- Validates matrices follow all rules (exactly ONE Accountable, etc.)
- Enforces the "exactly ONE Accountable" constraint
- Validates Consulted engaged BEFORE, Informed notified AFTER
- Tracks accountability assignments and escalates when Accountable is unresponsive

This means RABSIC isn't just a concept—it's enforced by the system.

---

## Learn More

### Deep Dives
- [RABSIC Role Definitions](./roles/) — Detailed definitions for all 6 roles
- [RABSIC Examples](./examples/) — Real-world scenarios from Kyndof
- [Matrix Template](./matrix-template/) — Step-by-step guide to create matrices

### Related Pages
- [How We Approve Decisions](../) — The approval workflow using RABSIC
- [Our Teams](../../../our-teams/) — See how positions use RABSIC

---

**Last Updated:** 2026-02-02
**Maintained By:** Orchestrator
