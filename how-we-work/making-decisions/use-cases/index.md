---
layout: default
title: Common Decision Use Cases
---

# Common Decision Use Cases

**Navigation:** [How We Work](../../index.md) > [Making Decisions](../index.md) > **Use Cases**

This guide covers the 10 most common situations where decisions need to be made and accountability assigned. Each use case includes triggers, steps, and RABSIC guidance.

---

## UC-001: Task Creation

**When someone says:** "Let's do X" or "Can you handle Y?"

### Trigger Examples
- "Can you draft the product spec?"
- "Let's update the pricing page"
- "Schedule a review with the design team"

### Required Steps

1. **Find the Value Stream** - Which workflow does this task belong to?
2. **Auto-assign RABSIC** - Use existing roles from the Value Stream when possible
3. **Fill required fields:**
   - Name (verb + object, under 15 characters)
   - R (Responsible) - who does it
   - A (Accountable) - who owns the outcome
   - Due date
   - Priority
   - Parent Project or Function

### Example Output

**Task Created:**
- Name: Draft season concept board
- R: Fashion Design Lead
- A: Brand Lead
- Due: 2026-02-10
- Priority: High (Q1 Goal: Concept confirmation)
- Parent: Design Development Function

---

## UC-002: Meeting Notes

**When a meeting ends:** Someone captures decisions, action items, and next steps.

### Trigger Examples
- "Can you summarize what we decided?"
- "What were the action items?"
- Meeting ends without clear next steps

### Required Steps

1. **Create Meeting Task** (Type: Meeting)
2. **Tag participants**
3. **Extract from discussion:**
   - **Decisions** - What was decided? (goes to Decisions DB)
   - **Issues** - What problems surfaced? (goes to Issues DB)
   - **Action Items** - What needs to be done? (goes to Tasks DB)
   - **Next Agenda** - What to discuss next time?

### RABSIC for Meeting Notes

| Element | How to Assign |
|---------|--------------|
| Who spoke about it | Candidate for R |
| Who approved or decided | Candidate for A |
| Unclear? | Mark as "TBD - from participant list" |

### Example Output

**Meeting: Product Planning 2026-02-05**
- Participants: Design Lead, Marketing Lead, Production Lead
- Decisions: Launch new line in March (A: Brand Lead)
- Action Items:
  - Finalize samples (R: Production Lead, Due: Feb 15)
  - Create marketing brief (R: Marketing Lead, Due: Feb 10)
- Next Meeting: Feb 12, review samples

---

## UC-003: OKR/Goal Creation

**When someone says:** "We need a goal for Q2" or "Let's track this as an OKR"

### Trigger Examples
- "What's our goal for next quarter?"
- "Let's create an OKR for customer retention"
- Quarterly planning sessions

### Required Steps

1. **Check Goals DB** - Is there a similar goal already?
2. **Link to Value Stream** - Which stream does this goal improve?
3. **Propose KPIs** - How will we measure success?
4. **Recommend Owner** - Which role should own this goal?

### Required Fields

| Field | Description |
|-------|-------------|
| Goal Name | What outcome do we want? |
| Owner Role | Who's accountable for achieving it? |
| Timeline | When should this be achieved? |
| KPIs | How do we measure progress? |
| Parent Strategy | What strategic initiative does this support? |

### Example Output

**Goal Created:**
- Name: Increase repeat purchase rate to 25%
- Owner: Brand Lead
- Timeline: Q2 2026
- KPI: Repeat purchase rate (current: 18%)
- Parent Strategy: Customer retention improvement

---

## UC-004: Issue to Decision Workflow

**When someone says:** "We have a problem" and a decision is needed.

### Trigger Examples
- "We need to decide how to handle X"
- "This is blocking us - what should we do?"
- "Two options, which one?"

### Required Steps

1. **Create Issue** in Issues DB
   - Problem definition
   - Background and context
   - Impact assessment
2. **Propose 2-3 Options**
   - For each: pros, cons, risks
3. **Recommend one option** with reasoning
4. **Request approval** from Accountable party
5. **Record Decision** when approved

### RABSIC for Decisions

| Role | Assignment |
|------|------------|
| R | Person who analyzes options and recommends |
| A | Person who approves the final decision |
| C | Experts who provide input before deciding |
| I | People who need to know the outcome |

### Example Output

**Issue:** Sample delivery 2 weeks delayed
**Options:**
1. Push launch back (Risk: Miss market timing)
2. Launch with partial inventory (Risk: Stockouts)
3. Source from backup supplier (Risk: Quality variance)

**Recommendation:** Option 3 - Backup supplier has passed QC before
**A:** Production Lead
**Decision:** Approved - Source 40% from backup supplier

---

## UC-005: Project Creation

**When someone says:** "Let's start a new project" or "This is big enough to track separately"

### Required Steps

1. **Create in Projects DB**
2. **Link to Goal** - Which goal does this serve?
3. **Link KPIs** - How will success be measured?
4. **Create initial Tasks** (3-5 skeleton tasks)
5. **Assign Owner and Manager**

### When to Create a Project

Create a project when:
- Work has a clear start and end
- Multiple tasks spanning 2+ weeks
- Cross-functional coordination needed
- Budget or resources must be tracked

Don't create a project for:
- One-off tasks
- Ongoing operational work
- Work already covered by another project

---

## UC-006: Current Status Check

**When someone says:** "What should I work on?" or "What's my priority?"

### Required Steps

1. **Identify the requester's role** (Positions DB)
2. **Find their active tasks** where they are R
   - Status: ToDo, Doing, or Waiting
3. **Sort by:** Priority > Due Date
4. **Check dependencies** - Is anything blocked?
5. **Recommend focus** for today/this week

### Example Output

**Your Active Tasks (sorted by priority):**
1. [URGENT] Submit quarterly report - Due today
2. [HIGH] Review sample batch - Due Feb 8
3. [MEDIUM] Update style guide - Due Feb 15

**Blocked:** Task #2 waiting on Production team (pinged 2 days ago)

**Recommendation:** Focus on #1 today, follow up on #2 blocker

---

## UC-007: Progress Update

**When someone says:** "Done" or "I finished X"

### Required Steps

1. **Identify the task** (from context or conversation)
2. **Update status:**
   - Doing > Done
   - Add completion date
3. **Update parent** (if applicable)
   - Recalculate project progress
4. **Notify Informed parties** (if needed)
   - Draft notification message

### Status Transitions

| From | To | Additional Action |
|------|-----|------------------|
| Doing | Done | Record completion date |
| Waiting | Doing | Note what unblocked it |
| ToDo | Doing | Record start date |

---

## UC-008: Recurring Task Setup

**When someone says:** "We do this every week/month" or "This is a regular process"

### Required Steps

1. **Find related Function** or Value Stream
2. **Set Frequency:**
   - 1D (daily)
   - 1W (weekly)
   - 1M (monthly)
   - 1Q (quarterly)
   - 1Y (yearly)
   - Always On (continuous)
   - On Demand (triggered)
3. **Create Template Task**
4. **Assign RABSIC by Position** (not person)

### Why Position over Person?

When people change roles, tasks shouldn't break. Assign to "Design Lead" not "John" so handoffs are seamless.

---

## UC-009: Handoff/Transition

**When someone says:** "I'm leaving" or "Someone else needs to take over"

### Required Steps

1. **List active tasks** where departing person is R
2. **Verify replacement** - Check new person's status and capacity
3. **Bulk reassign R** to new person
4. **Create handoff meeting** task
   - Agenda: current state, open issues, remaining work
5. **Create handoff checklist** task
   - Document: passwords, access, contacts, context

### Handoff Checklist Template

1. Access and credentials transferred
2. Active tasks reassigned
3. Key contacts introduced
4. Open issues documented
5. Handoff meeting completed
6. Documentation updated

---

## UC-010: Customer Response (2000Archives B2C)

**When customer service needs to respond:** Draft professional, brand-aligned responses.

### Brand Tone Guidelines

| Do | Don't |
|-----|-------|
| Warm but professional | Cold or robotic |
| "Happy to help" | Overuse "sorry" |
| "Let's figure this out together" | Blame partners or systems |
| Be specific about next steps | Make vague promises |

### Response Structure

1. **Acknowledge** - Show you understand their issue (1 sentence)
2. **Empathize** - Recognize the inconvenience (1 sentence)
3. **Action** - What you can do right now
4. **Timeline** - When they'll hear back (if investigation needed)

### Example Response

> Thank you for reaching out about your order delay.
>
> I understand waiting longer than expected is frustrating, especially when you were looking forward to your purchase.
>
> I've checked your order status and found [specific issue]. Here's what I'm doing:
> - [Immediate action]
> - [If investigation needed: We're checking with our fulfillment team]
>
> You can expect an update within [timeframe].
>
> Thanks for your patience!

---

## Quick Reference Table

| Use Case | Trigger | Key Output |
|----------|---------|------------|
| UC-001 Task | "Do X" | Task with RABSIC |
| UC-002 Meeting | Meeting ends | Notes, decisions, action items |
| UC-003 OKR | "Goal for Q2" | Goal with KPIs |
| UC-004 Issue>Decision | "We need to decide" | Decision record |
| UC-005 Project | "Let's start project" | Project with initial tasks |
| UC-006 Status | "What's my priority?" | Sorted task list |
| UC-007 Progress | "I'm done" | Updated status |
| UC-008 Recurring | "Every week" | Template task |
| UC-009 Handoff | "Taking over" | Reassigned tasks, handoff meeting |
| UC-010 Customer | CS request | Brand-aligned response |

---

## Related Pages

- [RABSIC Framework](../rabsic/index.md) - How to assign accountability
- [SOPs](../../sops/index.md) - Documented processes
- [Our Teams](../../../our-teams/index.md) - Who owns what

---

**Back to:** [Making Decisions](../index.md) | [How We Work](../../index.md) | [Wiki Home](../../../index.md)
