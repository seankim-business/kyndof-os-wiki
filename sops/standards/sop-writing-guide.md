---
layout: default
title: "SOP Writing Guide"
parent: "Standards"
grand_parent: "SOP Library"
---

# SOP Writing Guide

## Purpose

This guide ensures all Kyndof SOPs maintain consistent quality, structure, and usability. Well-written SOPs are the foundation of operational excellence and organizational knowledge retention.

## Core Principles

### 1. Clarity Over Brevity
SOPs should be comprehensive and unambiguous. It's better to over-explain than leave room for interpretation.

### 2. Actionable Instructions
Every step must be executable by someone with the required training. Avoid vague language like "handle appropriately" or "use good judgment."

### 3. RABSIC Accountability
Every SOP must clearly define who is Responsible, Accountable, Backup, Support, Informed, and Consulted. No action without ownership.

### 4. Evidence-Based Quality Gates
Quality checkpoints must have objective pass/fail criteria. "Looks good" is not a quality gate; "All pieces within 1/8 inch of grain" is.

### 5. Future-Proof Documentation
Write for the person who will execute this 3 years from now, without you available to explain.

## SOP Structure Requirements

Every SOP must include these sections in this order:

### 1. Frontmatter (Required)
```yaml
---
layout: default
title: "[SOP Title]"
parent: "[Category]"
grand_parent: "[Department]"
sop_id: "SOP-XXX"
version: "1.0"
effective_date: "YYYY-MM-DD"
owner_position: "[Position Role]"
review_date: "YYYY-MM-DD"
status: "Active|Draft|Revised|Archived"
---
```

### 2. Document Control Table
Metadata for version tracking and ownership.

### 3. Purpose
**What to include:**
- What this SOP accomplishes
- Why it exists (business need)
- What happens if this SOP is not followed
- Quantify impact when possible ($X saved, Y% fewer errors, Z hours saved)

**Bad Example:**
> This SOP describes how to cut fabric.

**Good Example:**
> This SOP establishes standardized procedures for cutting fabric to ensure accurate pattern placement, minimal waste (target ≤15%), and prevention of costly errors (averaging $50-$500 per cutting error). Cutting is the most critical and irreversible step in production.

### 4. Scope
**In Scope:**
- Specific scenarios covered
- Geographic or organizational boundaries
- Conditions when this SOP applies

**Out of Scope:**
- Explicitly state what is NOT covered
- Reference alternative SOPs for excluded scenarios

### 5. RABSIC Responsibility Matrix
Must have exactly ONE Accountable. All other roles as needed.

| Role | Position | Responsibility |
|------|----------|---------------|
| R | [Position] | [What they execute] |
| A | [Position] | [What they approve/own] |
| B | [Position] | [When they step in] |
| S | [Position] | [How they help] |
| I | [Position] | [What they receive] |
| C | [Position] | [What expertise they provide] |

### 6. Prerequisites
What must be in place BEFORE someone can execute this SOP.

- **Required Tools/Systems:** Specific tools, software, equipment
- **Required Training:** Certifications, workshops, skill levels
- **Required Documents:** Templates, reference materials, input data
- **Access/Permissions:** System access, authorization levels

### 7. Step-by-Step Procedure
The heart of the SOP. Each step must include:

**Step Template:**
```markdown
### Step X: [Step Name]

**Objective:** [What this step accomplishes]

**Actions:**
1. [Detailed action with specific instructions]
2. [Include exact button names, field names, system paths]
3. [Specify exact wording for communications]

**Decision Point:** (if applicable)
- **IF** [condition], **THEN** [action/next step]
- **ELSE** [alternative action]

**Quality Checkpoint:**
- [ ] [Objective verification criterion 1]
- [ ] [Objective verification criterion 2]

**Estimated Time:** [X minutes/hours]

**Responsible Role:** [From RABSIC matrix]
```

**Action Writing Guidelines:**
- Use active voice: "Click Submit button" not "Submit button is clicked"
- Be specific: "Send email to client@example.com with Subject: Project Update" not "Email the client"
- Include exact paths: "Navigate to Notion > Projects > Active Projects database" not "Go to the projects page"
- Specify tools: "Using fabric shears (not rotary cutter)" not "Cut the fabric"

### 8. Quality Standards & Checkpoints
**Mandatory Quality Gates Table:**

| Checkpoint | Criteria | Responsible | Pass/Fail |
|------------|----------|-------------|-----------|
| [Name] | [Specific measurable criterion] | [Role] | [How to determine pass/fail] |

**Final Verification Checklist:**
Comprehensive checklist someone can use to verify completion.

### 9. Exceptions & Edge Cases
Document known deviations from standard process.

**Exception Template:**
```markdown
### Exception X: [Scenario Name]

**When This Occurs:** [Trigger conditions]

**Modified Procedure:**
1. [How standard procedure changes]
2. [Additional steps or approvals]

**Additional Approvals Required:** [Specific roles]
```

### 10. Escalation & Problem Resolution
**Common Issues Table:**

| Problem | Likely Cause | Resolution | Escalate To |
|---------|--------------|------------|-------------|
| [Issue] | [Root cause] | [How to fix] | [Role if unresolved] |

**Escalation Path:**
1. First Level: [Role]
2. Second Level: [Role]
3. Final Level: [Role]

### 11. Related Documents
- Referenced SOPs (with links)
- Templates (with locations)
- External standards or regulations
- Knowledge base articles

### 12. Definitions & Terminology
Define specialized terms used in this SOP.

### 13. Metrics & KPIs
How to measure process performance.

| Metric | Target | Measurement Method | Review Frequency |
|--------|--------|-------------------|------------------|
| [Name] | [Target value] | [How to measure] | [When to review] |

### 14. Training Requirements
- Initial training (hours, topics, sign-off criteria)
- Refresher training (frequency, triggers)
- Competency assessment (how to verify proficiency)

### 15. Revision History
Track all changes to this SOP.

### 16. Approval Signatures
Document who approved this SOP.

## Writing Style Guidelines

### Language & Tone
- **Professional but accessible:** Write for clarity, not formality
- **Direct and concise:** Eliminate unnecessary words
- **Active voice:** "The cutter measures fabric" not "Fabric is measured by the cutter"
- **Consistent tense:** Use present tense for actions ("Click Submit", "Send email")
- **Position-based:** "Sales Manager approves" not "Sarah approves"

### Formatting Standards
- **Headings:** Use hierarchical headings (H2, H3, H4)
- **Lists:** Use numbered lists for sequential steps, bullets for non-sequential
- **Tables:** Use tables for structured data (matrices, comparison, multi-column)
- **Bold:** Use for emphasis on critical points, tool names, UI elements
- **Code blocks:** Use for exact wording of emails, scripts, system paths

### Common Pitfalls to Avoid

❌ **Vague Instructions:**
> "Handle the fabric carefully"

✅ **Specific Instructions:**
> "Hold fabric flat against table surface. Do not lift fabric while cutting."

---

❌ **Assumed Knowledge:**
> "Process the request normally"

✅ **Explicit Process:**
> "Log request in Notion > Leads database. Send acknowledgment email using Template A1. Set 4-hour response reminder."

---

❌ **Missing Decision Logic:**
> "Route to appropriate team"

✅ **Clear Decision Logic:**
> "IF budget >$5,000, route to Sales Manager. IF budget ≤$5,000 AND standard project, route to Sales Rep. IF out of scope, send decline email (Template A4)."

---

❌ **Subjective Quality Criteria:**
> "Ensure cutting quality is acceptable"

✅ **Objective Quality Criteria:**
> "Verify all edges smooth (no jagged cuts), grain alignment within 1/8 inch tolerance, all notches marked correctly."

---

❌ **Hardcoded Names:**
> "Send to Sarah for approval"

✅ **Position-Based:**
> "Send to Sales Manager for approval"

## Testing Your SOP

Before finalizing, test your SOP:

### 1. Comprehension Test
Give SOP to someone unfamiliar with the process. Can they execute it without asking clarifying questions?

### 2. Completeness Test
Review checklist:
- [ ] Every action has a responsible role
- [ ] Every decision point has clear criteria
- [ ] Every quality gate has pass/fail definition
- [ ] Every exception has modified procedure
- [ ] Every escalation has specific role

### 3. Accuracy Test
Have subject matter expert review:
- [ ] Technical accuracy (steps are correct)
- [ ] Realistic timelines (estimates match reality)
- [ ] Feasible quality targets (targets are achievable)

### 4. Future-Proof Test
Ask: "If I'm not available to explain this, will someone 3 years from now be able to execute it correctly?"

## SOP Maintenance

### Annual Review
Every SOP must be reviewed annually (minimum) to ensure:
- Process still current (no outdated steps)
- Tools/systems still accurate (software hasn't changed)
- Roles still correct (org structure changes)
- Metrics still relevant (targets adjusted for growth)

### Triggered Reviews
Review SOP immediately if:
- Process failure occurs (SOP led to error)
- Major tool/system change (new software, equipment)
- Organizational restructure (new roles, departments)
- Repeated questions about procedure (indicates unclear section)

### Version Control
- **Major version change (1.0 → 2.0):** Significant process overhaul
- **Minor version change (1.0 → 1.1):** Small improvements, clarifications
- **Patch version change (1.1 → 1.1.1):** Typo fixes, formatting updates

Document ALL changes in Revision History section.

## SOP Approval Process

1. **Draft:** Author creates initial SOP
2. **SME Review:** Subject matter expert reviews for technical accuracy
3. **Stakeholder Review:** All RABSIC roles review their responsibilities
4. **Management Approval:** Accountable role approves content
5. **Final Approval:** COO or CEO approves (depending on SOP scope)
6. **Publication:** SOP published to wiki with status "Active"

## Resources

- **SOP Template:** `/wiki/sops/_template.md`
- **Example SOPs:**
  - [SOP-001: Design Brief Intake](/wiki/sops/by-department/2000atelier/design/sop-001-design-brief-intake.html) (comprehensive example)
  - [SOP-020: Cutting Standards](/wiki/sops/by-department/2000atelier/production/sop-020-cutting-standards.html) (technical process example)
  - [SOP-100: Client Inquiry](/wiki/sops/by-department/brand-ops/sales/sop-100-client-inquiry.html) (customer-facing example)

- **Questions:** Contact Operations Manager

---

**Version:** 1.0
**Last Updated:** 2026-02-02
**Next Review:** 2027-02-02
