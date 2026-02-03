---
title: Standard Operating Procedures (SOP) Catalog
layout: default
parent: How We Work
---

# Standard Operating Procedures (SOP) Catalog

{: .highlight }
> Comprehensive index of all organizational SOPs with links, descriptions, and usage guidelines for repeatable workflows.

## 개요

Standard Operating Procedures (SOPs) document repeatable workflows that ensure consistency, reduce errors, and enable delegation. They're living documents that evolve as processes improve.

This catalog serves as the central index for all Kyndof SOPs. SOPs are organized by domain and maintained in the wiki at `wiki/sops/`. Each SOP includes step-by-step instructions, decision points, responsible parties (RABSIC), and success criteria.

## How to Use This Catalog

**Finding SOPs**: Browse by domain below or search wiki for specific keywords.

**Running SOPs**: Click through to the full SOP document. Follow steps sequentially. Mark completion criteria before moving to next step.

**Updating SOPs**: If a process changes, update the SOP and increment version. Note what changed and why in changelog.

**Creating New SOPs**: Use the SOP template at `wiki/sops/_template.md`. Follow the structure: Purpose, Scope, Roles (RABSIC), Prerequisites, Steps, Success Criteria, Troubleshooting.

## SOP Domains

SOPs are organized into functional domains:

### Operations & Processes

| SOP | Description | Link |
|-----|-------------|------|
| **Incident Response** | Handle outages, security breaches, and critical failures | [View SOP](../../sops/incident-response.md) |
| **Weekly Sync Workflow** | Synchronize organizational data across systems | [View SOP](../../sops/weekly-sync.md) |
| **Data Ingestion** | Process and import external data into knowledge graph | [View SOP](../../sops/data-ingestion.md) |
| **Decision Log Maintenance** | Document and archive organizational decisions | [View SOP](../../sops/decision-log.md) |
| **RABSIC Assignment** | Assign accountability matrix for new decisions | [View SOP](../../sops/rabsic-assignment.md) |

### People & HR

| SOP | Description | Link |
|-----|-------------|------|
| **Onboarding Checklist** | Welcome and equip new hires in first 30 days | [View SOP](../../sops/onboarding-checklist.md) |
| **Offboarding Checklist** | Transition departing employees safely and professionally | [View SOP](../../sops/offboarding-checklist.md) |
| **Performance Review Cycle** | Conduct fair and structured performance reviews | [View SOP](../../sops/performance-review.md) |
| **Interview Process** | Hire candidates consistently and without bias | [View SOP](../../sops/interview-process.md) |
| **PTO Request Workflow** | Request and approve paid time off | [View SOP](../../sops/pto-request.md) |

### Engineering & Development

| SOP | Description | Link |
|-----|-------------|------|
| **Code Review Standards** | Review code for quality, security, and maintainability | [View SOP](../../sops/code-review.md) |
| **Deployment Process** | Deploy code to production safely | [View SOP](../../sops/deployment.md) |
| **Hotfix Workflow** | Fast-track critical bug fixes to production | [View SOP](../../sops/hotfix.md) |
| **Database Migration** | Change database schema without downtime | [View SOP](../../sops/db-migration.md) |
| **Security Vulnerability Response** | Triage and patch security vulnerabilities | [View SOP](../../sops/security-vuln.md) |

### Product & Design

| SOP | Description | Link |
|-----|-------------|------|
| **Feature Specification** | Document feature requirements before building | [View SOP](../../sops/feature-spec.md) |
| **User Research Session** | Conduct user interviews and usability tests | [View SOP](../../sops/user-research.md) |
| **Design Review** | Review designs for usability, accessibility, feasibility | [View SOP](../../sops/design-review.md) |
| **Beta Testing Program** | Run controlled beta tests with early users | [View SOP](../../sops/beta-testing.md) |

### Sales & Customer Success

| SOP | Description | Link |
|-----|-------------|------|
| **Customer Escalation** | Handle urgent customer issues and complaints | [View SOP](../../sops/customer-escalation.md) |
| **Sales Demo Workflow** | Deliver consistent and effective product demos | [View SOP](../../sops/sales-demo.md) |
| **Contract Review** | Review and approve customer contracts | [View SOP](../../sops/contract-review.md) |
| **Churn Analysis** | Investigate why customers cancel and prevent churn | [View SOP](../../sops/churn-analysis.md) |

### Finance & Legal

| SOP | Description | Link |
|-----|-------------|------|
| **Expense Reimbursement** | Submit and approve employee expenses | [View SOP](../../sops/expense-reimbursement.md) |
| **Invoice Processing** | Process vendor invoices and payments | [View SOP](../../sops/invoice-processing.md) |
| **Budget Approval Workflow** | Request and approve budget allocations | [View SOP](../../sops/budget-approval.md) |
| **NDA Review** | Review and execute non-disclosure agreements | [View SOP](../../sops/nda-review.md) |

### Marketing & Communications

| SOP | Description | Link |
|-----|-------------|------|
| **Blog Post Publishing** | Write, review, and publish blog content | [View SOP](../../sops/blog-publishing.md) |
| **Social Media Posting** | Schedule and publish social media content | [View SOP](../../sops/social-media.md) |
| **Press Release Workflow** | Draft, approve, and distribute press releases | [View SOP](../../sops/press-release.md) |
| **Brand Asset Usage** | Use logos, colors, and brand guidelines correctly | [View SOP](../../sops/brand-assets.md) |

## SOP Lifecycle

SOPs evolve through a structured lifecycle:

### 1. Pattern Detection (Automated)

When Process Intelligence (see CLAUDE.md) detects a repeating pattern in organizational data (interactions, decisions, tasks), it flags it for SOP creation.

**Criteria for SOP Candidate**:
- Pattern occurs 3+ times with 70%+ confidence
- Pattern is predictable (similar steps, triggers, outcomes)
- Pattern involves multiple people or cross-functional coordination
- Current execution is ad-hoc and inconsistent

**Output**: Pattern logged in `.omc/patterns/process-patterns.json` with maturity level.

### 2. SOP Generation (Semi-Automated)

When a pattern reaches maturity level 1 (Repeatable), Orchestrator can generate an SOP draft:

**Generation Process**:
- Extract common steps, decision points, and roles from historical data
- Structure using SOP template
- Identify RABSIC roles based on past executions
- Define success criteria and troubleshooting tips

**Output**: Draft SOP in `wiki/sops/{pattern-name}.md` marked as DRAFT.

### 3. Review and Refinement (Manual)

Process owner reviews draft SOP:

**Review Checklist**:
- Are steps complete and sequenced correctly?
- Are decision points and edge cases covered?
- Are RABSIC roles accurate?
- Are success criteria measurable?
- Is troubleshooting section useful?

**Output**: Approved SOP moved from DRAFT to ACTIVE status.

### 4. Execution and Feedback

SOP is used for the process. Users provide feedback:

**Feedback Channels**:
- Inline comments in wiki
- Retrospectives noting where SOP didn't match reality
- Issue reports when SOP fails

**Output**: Feedback logged for next revision.

### 5. Iteration and Improvement

Based on feedback and changing processes, SOPs are updated:

**Update Triggers**:
- Process changes (new tools, new requirements)
- SOP doesn't match reality (steps outdated)
- Consistent user confusion (steps unclear)
- Performance issues (process too slow or error-prone)

**Output**: Updated SOP with version increment and changelog entry.

### 6. Deprecation

When a process is no longer relevant, SOPs are archived:

**Deprecation Criteria**:
- Process no longer performed
- Process fully automated (no human steps)
- Process replaced by different approach

**Output**: SOP moved to `wiki/99-archive/sops/` with deprecation notice.

## SOP Template Structure

All SOPs follow consistent structure for findability and usability:

```markdown
---
title: [SOP Name]
version: 1.0
last_updated: YYYY-MM-DD
status: ACTIVE | DRAFT | DEPRECATED
owner_role: [Role responsible for maintaining SOP]
---

# [SOP Name]

## Purpose
[Why this SOP exists, what problem it solves]

## Scope
[When to use this SOP, when not to use it]

## Roles (RABSIC)
| Role | Responsibility |
|------|----------------|
| R (Responsible) | [Who executes] |
| A (Accountable) | [Who approves] |
| B (Backup) | [Who covers if R unavailable] |
| S (Support) | [Who assists] |
| I (Informed) | [Who gets notified] |
| C (Consulted) | [Who provides input] |

## Prerequisites
[What must be true before starting]

## Steps
### Step 1: [Action]
[Detailed instructions]

**Decision Point**: [If applicable, decision criteria]

**Success Criteria**: [How to know this step succeeded]

### Step 2: [Action]
...

## Verification
[How to verify the entire process succeeded]

## Troubleshooting
| Problem | Solution |
|---------|----------|
| [Issue] | [Fix] |

## Changelog
| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | YYYY-MM-DD | Initial version | [Role] |
```

## SOP Metrics

Track SOP effectiveness:

**Execution Frequency**: How often is each SOP used? Low usage might mean process is infrequent or SOP is ignored.

**Completion Rate**: Do people finish the SOP or abandon mid-way? Low completion suggests complexity issues.

**Error Rate**: How often does following the SOP result in errors or rework? High error rate means SOP is inaccurate or incomplete.

**Time to Complete**: How long does it take to execute? Track over time to identify improvement opportunities.

**Feedback Volume**: How many comments or questions does the SOP generate? High volume suggests unclear documentation.

## Integration with Process Intelligence

SOPs are connected to organizational data via Process Intelligence:

**Pattern → SOP**: Detected patterns (maturity 1+) generate SOP drafts automatically.

**SOP → Execution Tracking**: Each SOP execution is logged as an interaction in the knowledge graph.

**Execution → Pattern Refinement**: Execution data feeds back to pattern detector to improve future SOP generation.

**Delegation Readiness**: When a pattern reaches maturity 3 (Managed), Process Intelligence assesses whether it can be delegated to an agent. If yes, SOP is converted to agent workflow.

## Agent Delegation from SOPs

SOPs at maturity level 4 (Automated) are candidates for agent delegation:

**Delegation Assessment**:
- Are all steps automatable (no human judgment required)?
- Are inputs well-defined and structured?
- Are success criteria measurable programmatically?
- Is error handling straightforward?

**Delegation Process**:
1. Identify agent type (Back-Writer for sync, RABSIC-Engine for approvals, etc.)
2. Convert SOP steps to agent prompt/workflow
3. Test agent execution against historical cases
4. Deploy with human-in-the-loop for initial runs
5. Gradually reduce human oversight as confidence grows

**Monitoring**: Delegated processes are monitored for accuracy. If agent fails, escalate to human and revert to manual SOP temporarily.

## SOP Best Practices

**Keep SOPs Concise**: One page ideal, two pages maximum. If longer, break into sub-SOPs.

**Use Visuals**: Screenshots, flowcharts, and diagrams clarify complex steps better than paragraphs.

**Test SOPs with New Users**: Have someone unfamiliar with the process follow the SOP. If they get stuck, clarify.

**Version Control**: Track changes over time. Knowing what changed and why helps troubleshoot regressions.

**Link to Related Docs**: Cross-reference policies, templates, and systems referenced in the SOP.

**Assume Zero Context**: Write for someone who has never done this before. Don't assume implicit knowledge.

## Common SOP Anti-Patterns

**Too Vague**: "Review the data and make a decision" isn't actionable. Specify what to review and decision criteria.

**Too Rigid**: SOPs should guide, not constrain. Allow judgment for edge cases.

**Outdated**: SOPs that don't match reality create confusion. Review and update regularly.

**No Owner**: SOPs without clear owners stagnate. Assign role responsible for maintenance.

**No Feedback Loop**: If users can't report issues or suggest improvements, SOPs decay.

## Why SOPs Matter

Organizations without SOPs reinvent processes every time, creating inconsistency, errors, and knowledge silos. When the person who "knows how to do X" leaves, the process dies.

SOPs capture institutional knowledge. They enable delegation, scaling, and quality control. New hires can execute processes without shadowing someone for weeks. Contractors can contribute without months of context-building.

But SOPs fail when they're static documents no one reads. They succeed when they're living artifacts integrated into daily work. Process Intelligence makes SOPs dynamic—they evolve as processes change, suggest improvements based on execution data, and eventually delegate to agents.

The goal isn't to bureaucratize work with endless procedures. It's to capture what works, eliminate what doesn't, and continuously improve how we operate.

---

## 관련 문서

- [Communication Norms](../communication-norms.md) - SOPs for communication workflows
- [Meeting Guidelines](../meeting-guidelines.md) - SOPs for meeting types
- [RABSIC Framework](../../governance/rabsic-framework.md) - Accountability in SOPs
- [Process Intelligence](../../architecture/process-intelligence.md) - Automated pattern detection
