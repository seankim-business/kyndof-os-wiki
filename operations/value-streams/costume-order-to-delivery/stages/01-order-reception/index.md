---
title: 01. Order Reception
layout: default
parent: Stages
grand_parent: Costume Order to Delivery
nav_order: 1
has_children: true
---

# Stage 1: Order Reception

**Duration:** 1 day
**Owner:** Client Relations Manager
**Trigger:** Client inquiry received (email, phone, or meeting request)
**Completion:** Signed agreement with documented brief and timeline

## Purpose

Capture all client requirements, set realistic expectations, and establish the foundation for a successful project.

## Process Flow

```
Client Inquiry
     │
     ▼
Receive Brief ──────▶ Document Requirements
     │                      │
     │                      ▼
     │               Assess Feasibility
     │                      │
     ▼                      ▼
Estimate Timeline ◀─── Estimate Cost
     │
     ▼
Present Proposal ──────▶ Client Decision
     │                      │
     ▼                      ▼
Sign Agreement         [YES] Project Starts
                       [NO]  Archive inquiry
```

## Inputs

| Input | Source | Required Information |
|-------|--------|---------------------|
| Client Inquiry | Client | Contact info, event type, rough timeline |
| Character Brief | Client | Character description, reference images, event context |
| Budget Range | Client | Approximate budget or price expectations |

## Activities

### [1. Receive Brief](activities/receive-brief.md)
Initial consultation to understand client needs.

**Key Questions:**
- Who is the character?
- What is the event (film, theatre, cosplay, etc.)?
- When is the costume needed?
- What is the approximate budget?
- Any specific requirements (movement, durability, etc.)?

### [2. Timeline Estimation](activities/timeline-estimation.md)
Calculate realistic delivery timeline based on complexity.

**Factors:**
- Design complexity (simple/moderate/complex)
- Material availability
- Current production queue
- Special techniques required (armor, embroidery, etc.)

### [3. Client Communication](activities/client-communication.md)
Present proposal and finalize agreement.

**Deliverables:**
- Timeline estimate (best/typical/worst case)
- Cost estimate (itemized)
- Payment terms (deposit/milestones)
- Communication plan (update frequency)

## Outputs

| Output | Format | Delivered To |
|--------|--------|-------------|
| Documented Brief | PDF/Notion | Creative Director |
| Timeline Estimate | Gantt chart or date ranges | Client + Production Manager |
| Signed Agreement | PDF contract | Client + Finance |

## RABSIC Matrix

| Role | Position | Specific Responsibility |
|------|----------|------------------------|
| **A** (Accountable) | Client Relations Manager | Owns complete and accurate brief capture |
| **R** (Responsible) | Client Relations Manager | Conducts consultation, documents requirements |
| **S** (Support) | Production Assistant | Schedules meetings, prepares templates |
| **C** (Consulted) | Creative Director | Advises on design feasibility |
| **C** (Consulted) | Production Manager | Advises on timeline feasibility |
| **I** (Informed) | Finance | Receives signed agreement for invoicing |

## Quality Gate

**Pass Criteria:**
- [ ] All brief questions answered
- [ ] Client budget and timeline align with our capacity
- [ ] Agreement signed by both parties
- [ ] Brief document uploaded to project folder
- [ ] Production Manager notified of new project

**Failure Action:**
If requirements are unclear or infeasible, schedule follow-up consultation before proceeding.

## Standard Operating Procedures

See [SOPs](sops/) for detailed step-by-step procedures:
- **[Brief Intake SOP](sops/sop-brief-intake.md)** - Standard questions and documentation

## Common Issues

| Issue | Frequency | Mitigation |
|-------|-----------|------------|
| Vague character description | 40% | Use standard questionnaire |
| Unrealistic timeline expectations | 30% | Show example timelines early |
| Budget misalignment | 25% | Present tiered options (basic/standard/premium) |
| Incomplete measurements | 20% | Schedule dedicated measurement session |

## Success Metrics

- **Brief Completeness:** Target >95% (all required fields filled)
- **Timeline Accuracy:** Actual vs. estimated within ±2 days (target >80%)
- **Client Satisfaction:** Agreement process satisfaction >9/10

## Related Links

- [Design Development Stage](../02-design-development/) - Next stage
- [Brief Template](sops/sop-brief-intake.md) - Standard questionnaire

---

**Last Updated:** 2026-02-02
**Stage Owner:** Client Relations Manager
