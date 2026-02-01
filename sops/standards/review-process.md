---
layout: default
title: "Review Process"
parent: "Standards"
grand_parent: "SOP Library"
---

# SOP Review Process

## Purpose

Regular SOP review ensures procedures remain current, accurate, and effective as the organization evolves. This document defines when and how SOPs are reviewed.

## Review Frequency

### Annual Review (Mandatory)
Every SOP must be reviewed at minimum once per year.

**Review Schedule by Department:**

| Quarter | Department | Categories | Owner |
|---------|------------|-----------|-------|
| **Q1** (Jan-Mar) | Corp Ops | HR, Finance, IT, Admin | COO |
| **Q2** (Apr-Jun) | Brand Ops | Sales, Marketing, Customer Success | Brand Ops Manager |
| **Q3** (Jul-Sep) | 2000atelier | Design, Pattern | Creative Director |
| **Q4** (Oct-Dec) | 2000atelier | Production, QA | Production Manager |

**Annual Review Deliverable:** Updated SOP with incremented version (if changes made) OR confirmation that SOP remains current (if no changes).

---

### Triggered Review (Immediate)
Review must occur immediately when any of these triggers occur:

| Trigger | Definition | Initiator | Timeline |
|---------|------------|-----------|----------|
| **Process Failure** | SOP followed correctly but led to error or undesired outcome | Anyone | Within 1 week |
| **Major System Change** | Software, equipment, or platform replaced/upgraded significantly | IT Manager or Department Owner | Before go-live |
| **Organizational Restructure** | Roles, departments, or reporting structure changes | HR Manager | Within 2 weeks of change |
| **Repeated Questions** | Same clarifying questions asked 3+ times | SOP Owner | Within 1 month |
| **Regulatory Change** | New compliance requirement or industry standard | CFO or Legal | Before effective date |
| **Performance Gap** | Process metrics consistently miss targets for 2+ months | Department Owner | Within 1 month |

---

## Review Process Steps

### Step 1: Review Notification

**Trigger:** Review due date approaching (30 days before)

**Actions:**
1. Operations Manager sends review notification to SOP Owner:
   ```
   Subject: SOP Review Due: [SOP-XXX]

   Your SOP is due for review:
   - SOP ID: [SOP-XXX]
   - Title: [SOP Title]
   - Current Version: [X.X]
   - Review Due Date: [Date]

   Please review the SOP and determine if updates are needed. Use the
   Review Checklist below to guide your assessment.

   Submit updated SOP or "No Changes" confirmation by [due date].
   ```

2. SOP Owner acknowledges notification (within 3 business days)

---

### Step 2: Review Execution

**Objective:** Assess SOP current state and identify needed updates.

**Review Checklist:**

**Process Accuracy:**
- [ ] All steps still reflect current process (no outdated procedures)
- [ ] Decision logic still valid (IF-THEN criteria accurate)
- [ ] Timelines realistic (estimates match actual execution time)
- [ ] Quality gates achievable (targets reasonable, criteria measurable)

**Tools & Systems:**
- [ ] Software names and versions current (no deprecated tools)
- [ ] System navigation paths accurate (UI hasn't changed significantly)
- [ ] Access/permissions correct (security model unchanged)
- [ ] Templates and documents linked exist and are current

**Roles & Responsibilities:**
- [ ] RABSIC matrix reflects current org structure
- [ ] Position titles accurate (roles haven't been renamed or restructured)
- [ ] Escalation paths valid (reporting structure unchanged)

**References & Links:**
- [ ] All linked SOPs exist and are active (not archived)
- [ ] External standards/regulations current (no new versions or updates)
- [ ] Knowledge base links valid (articles not moved/deleted)

**Metrics & KPIs:**
- [ ] Targets still appropriate (adjusted for org growth or market changes)
- [ ] Measurement methods still feasible (data still available)
- [ ] Review frequency appropriate (not too frequent or infrequent)

**Usability:**
- [ ] No recurring questions from users (SOP clear and complete)
- [ ] Terminology still clear (no new jargon or confusing terms)
- [ ] Examples still relevant (not outdated or deprecated)

---

### Step 3: Update Decision

Based on review checklist, SOP Owner decides:

**Option A: No Changes Needed**
- All checklist items verified as current
- SOP Owner submits "No Changes" confirmation
- Review date updated to +1 year
- Version number unchanged

**Option B: Minor Updates Needed**
- Small clarifications, updated tool names, corrected typos
- Version increment: X.X → X.(X+1) (e.g., 1.0 → 1.1)
- Changes documented in Revision History
- Stakeholder review not required

**Option C: Major Updates Needed**
- Significant process changes, new steps, different workflow
- Version increment: X.X → (X+1).0 (e.g., 1.1 → 2.0)
- Stakeholder review required (see Step 4)
- Re-approval required (see Step 5)

---

### Step 4: Stakeholder Review (Major Updates Only)

**Objective:** Gather feedback from all RABSIC roles before finalizing major changes.

**Actions:**
1. SOP Owner drafts updated SOP with tracked changes visible
2. SOP Owner sends draft to all stakeholders from RABSIC matrix:
   ```
   Subject: Review Request: [SOP-XXX] v[X.0] (Major Update)

   I've updated [SOP Title] to reflect [brief description of changes].

   Please review the attached draft (tracked changes visible) and provide
   feedback by [date - 1 week from send].

   Key Changes:
   - [Change 1]
   - [Change 2]
   - [Change 3]

   If no feedback received by deadline, I'll assume approval to proceed.

   Attachment: [SOP-XXX]_v[X.0]_DRAFT.pdf
   ```

3. Stakeholders provide feedback (via email or comments on doc)
4. SOP Owner incorporates feedback and resolves conflicts
5. Final draft prepared for approval

---

### Step 5: Approval

**Minor Updates (X.X → X.(X+1)):**
- SOP Owner approval only
- Update published immediately

**Major Updates (X.X → (X+1).0):**
- Accountable role approval required
- **IF** cross-departmental impact → COO approval required
- **IF** financial/legal impact → CFO or Legal approval required
- Approval signatures documented in SOP

---

### Step 6: Publication & Notification

**Actions:**
1. SOP Owner updates SOP file in wiki repository
2. SOP Owner updates frontmatter:
   - Version number incremented
   - Effective date updated to publication date
   - Review date set to +1 year
3. SOP Owner adds entry to Revision History table
4. SOP Owner commits to GitHub with descriptive commit message:
   ```
   Update SOP-XXX to v[X.X]: [brief description]

   - [Change 1]
   - [Change 2]

   Reviewed by: [Stakeholders]
   Approved by: [Approver]
   ```

5. **IF** major update, SOP Owner sends change notification:
   ```
   Subject: SOP Updated: [SOP-XXX] v[X.0]

   [SOP Title] has been updated to reflect [changes summary].

   What Changed:
   - [Key change 1 and impact]
   - [Key change 2 and impact]

   Effective Date: [Date]
   Updated SOP: [Link to wiki page]

   Training Impact:
   - [If training needed, specify requirements]
   - [If no training needed, state "No training required"]

   Questions? Contact [SOP Owner].
   ```

6. SOP Owner updates SOP Registry with new version

---

## Review Metrics & Tracking

### Review Compliance Tracking

Operations Manager tracks review compliance monthly:

| Metric | Target | Measurement |
|--------|--------|-------------|
| On-Time Review Rate | 100% | Reviews completed by due date / total reviews due |
| Overdue Reviews | 0 | Count of SOPs past review due date |
| Average Review Cycle Time | ≤14 days | Notification date → publication date |

**Monthly Review Dashboard:**
- SOPs reviewed this month
- SOPs due next month (upcoming reviews)
- Overdue reviews (escalation needed)
- Review completion trend (past 12 months)

---

### Review Quality Assessment

Quarterly assessment of review effectiveness:

| Indicator | Measurement | Target |
|-----------|-------------|--------|
| Post-Review Issues | Process failures within 90 days of review | ≤5% of reviewed SOPs |
| Stakeholder Participation | % of stakeholders providing feedback (major updates) | ≥80% |
| Update Thoroughness | % of reviews resulting in version increment | 30-50% (healthy balance) |

---

## Escalation

### Overdue Review Escalation Path

**30 days overdue:**
- Operations Manager sends reminder to SOP Owner
- CC Department Owner

**60 days overdue:**
- Operations Manager escalates to Department Owner
- Department Owner assigns review to alternate staff member

**90 days overdue:**
- Operations Manager escalates to COO
- SOP marked as "Pending Review - Use with Caution"
- COO intervention to complete review

---

### Review Conflict Resolution

**IF** stakeholders disagree on proposed changes:

1. SOP Owner schedules review meeting with conflicting parties
2. Review meeting objectives:
   - Understand root of disagreement
   - Present data/evidence for each perspective
   - Identify compromise or path forward
3. **IF** consensus reached → Proceed with agreed changes
4. **IF** no consensus → Escalate to Accountable role for decision
5. **IF** still unresolved → Escalate to COO for final decision

---

## Special Review Scenarios

### Emergency Updates (Immediate Publication)

**When:** Critical issue requiring immediate SOP correction (safety, legal compliance, severe process failure)

**Process:**
1. SOP Owner makes necessary corrections immediately
2. SOP Owner notifies Accountable role and COO via Slack/email (urgent flag)
3. Emergency update published within 24 hours
4. Stakeholder review conducted retrospectively (within 1 week post-publication)
5. Version incremented per standard rules, flagged as "Emergency Update" in revision history

---

### Archived SOP Review

**Question:** Do archived SOPs get reviewed?

**Answer:** No. Once SOP status = "Archived", it is removed from review cycle. Archived SOPs are reference-only and should not be executed.

**Exception:** If archived SOP needs to be reactivated (e.g., reinstating a discontinued process), it must go through full stakeholder review and re-approval before returning to "Active" status.

---

## Review Process Metrics

Track review process health:

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Total Active SOPs | ~42 | - | - |
| SOPs Reviewed (Past 12 Months) | TBD | 100% | TBD |
| Average Review Cycle Time | TBD | ≤14 days | TBD |
| Overdue Reviews | TBD | 0 | TBD |
| Emergency Updates (Past 12 Months) | TBD | ≤3 | TBD |

---

## Continuous Improvement

**Annual Meta-Review (Once per Year):**
- COO and Operations Manager review the SOP Review Process itself
- Assess review cycle timing (is quarterly rotation optimal?)
- Evaluate review checklist effectiveness
- Gather feedback from SOP Owners on review burden
- Adjust process as needed to balance rigor and efficiency

---

**Document Owner:** Operations Manager
**Last Updated:** 2026-02-02
**Next Review:** 2027-02-02
