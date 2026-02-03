---
title: Project Lifecycle
layout: default
parent: Projects
grand_parent: Execution
nav_order: 3
---

# Project Lifecycle

{: .highlight }
> How projects start, execute, and close at Kyndof with defined phases and quality gates

## 개요

Every Kyndof project follows a structured lifecycle that balances execution speed with quality control. This lifecycle provides consistent frameworks while allowing flexibility for different project types. Understanding the lifecycle helps teams navigate from initial concept through successful closure without unnecessary bureaucracy or missed quality checkpoints.

The lifecycle consists of five distinct phases: Ideation, Planning, Execution, Closure, and Operations. Each phase has specific deliverables, quality gates, and decision points. Projects advance through phases based on completion criteria rather than elapsed time, ensuring readiness before commitment escalates.

This structured approach prevents common failure modes: premature execution before adequate planning, scope creep from unclear requirements, resource waste on misaligned initiatives, and knowledge loss when projects finish without proper handoff.

## Phase 1: Ideation

Ideation transforms rough concepts into validated opportunities worth planning. This lightweight phase quickly filters ideas, focusing planning effort on initiatives likely to deliver value.

### Entry Criteria
Any team member can propose project ideas through informal conversation, written proposals, or ideation sessions. There are no formal barriers to entry—Kyndof values diverse perspectives and encourages bottom-up innovation.

Ideas should articulate the problem being solved, why it matters, and rough scope. A few paragraphs suffice; detailed specifications come later.

### Key Activities

**Problem Validation**
Before investing in solutions, validate that the problem matters. Talk to affected stakeholders, quantify pain points, confirm the issue warrants dedicated project resources. Many ideas die here upon discovering the problem isn't significant enough or already has adequate workarounds.

Problem validation prevents building excellent solutions to unimportant problems.

**Strategic Alignment Check**
Evaluate whether solving this problem advances Kyndof's strategic goals. Projects consuming resources without strategic contribution create organizational drag. The Orchestrator agent maps proposed projects to active goals, surfacing alignment or gaps.

Strategic misalignment doesn't automatically kill ideas—sometimes they reveal missing goals or strategic blind spots. But misaligned projects require explicit executive sponsorship acknowledging the strategic tradeoff.

**Feasibility Assessment**
Roughly assess technical feasibility, resource availability, and timeline realism. This isn't detailed estimation—just sanity checking that the project is possible with Kyndof's current capabilities and constraints.

Feasibility assessment identifies fatal blockers early: missing critical capabilities, unavailable key personnel, conflicting technical constraints, or impossible deadlines.

**Stakeholder Identification**
Identify who cares about this project: who benefits, who provides input, who makes decisions, and who does the work. Building the initial RABSIC matrix happens here, ensuring clear accountability before deeper investment.

Unclear stakeholder structure signals insufficient understanding to proceed with planning.

### Exit Criteria
Ideas graduate to Planning when they demonstrate:
- Validated problem significance
- Strategic alignment (or explicit executive sponsorship)
- Reasonable feasibility
- Identified stakeholders and initial RABSIC matrix
- Executive approval to invest planning resources

Ideas failing these criteria get documented in the idea backlog for potential future consideration. Not every good idea deserves immediate execution—timing matters.

### Duration
Ideation typically takes 1-3 weeks depending on validation complexity. Strategic experiments move faster; platform changes require more validation.

## Phase 2: Planning

Planning transforms validated ideas into executable project plans with defined scope, approach, resources, and success criteria.

### Entry Criteria
- Completed ideation phase with documented validation
- Executive approval to invest planning resources
- Identified project owner willing to drive planning
- Available planning capacity (max 3 concurrent planning efforts)

### Key Activities

**Scope Definition**
Clearly articulate what the project includes and excludes. Good scope statements define success criteria, acceptance conditions, and boundaries. Poor scope statements create ambiguity that later becomes scope creep.

Scope definition involves the Planner agent for strategic projects, ensuring consideration of alternatives and edge cases. The Critic agent reviews scope for clarity and completeness.

**Approach Selection**
Evaluate different approaches to solving the problem, considering tradeoffs in cost, speed, quality, and risk. Capture evaluated alternatives and rationale for the chosen approach. This prevents future second-guessing and provides context for adaptation decisions during execution.

Technical approach selection involves the Architect agent for complex systems work.

**Resource Allocation**
Identify required resources: people, budget, infrastructure, and external dependencies. Confirm availability and resolve conflicts with other projects. Resource allocation creates the initial project schedule and identifies staffing constraints.

Insufficient resources trigger prioritization conversations—either delay the project, adjust scope, or deprioritize other work.

**Risk Assessment**
Systematically identify risks: technical, organizational, market, and execution risks. For each significant risk, develop mitigation strategies and ownership. High-risk projects require explicit executive acceptance of risk exposure before proceeding.

Risk assessment prevents surprises and forces upfront thinking about failure modes.

**Success Metrics**
Define how the organization will know the project succeeded. Metrics should be measurable, time-bound, and directly connected to the problem being solved. Avoid vanity metrics that don't reflect actual value delivery.

Success metrics establish accountability and provide objective completion criteria.

**RABSIC Matrix Finalization**
Complete the accountability matrix: Responsible (who does work), Accountable (who owns outcomes), Backup (coverage for unavailability), Support (active helpers), Informed (passive recipients), and Consulted (input providers).

The RABSIC-Engine validates matrix completeness and consistency. Every project must have exactly one Accountable party.

### Exit Criteria
Projects graduate to Execution when they have:
- Clear, documented scope with success criteria
- Selected approach with documented alternatives
- Committed resources and schedule
- Identified and mitigated major risks
- Defined success metrics
- Complete RABSIC matrix
- Approval from the Accountable party to proceed with execution

Planning artifacts get reviewed by the Critic agent for completeness before advancement.

### Duration
Planning typically takes 1-4 weeks depending on project complexity. Strategic experiments plan faster with lighter documentation; platform changes require thorough planning with extensive stakeholder input.

## Phase 3: Execution

Execution delivers the project scope through iterative development, continuous validation, and adaptive adjustment.

### Entry Criteria
- Completed planning phase with approved plan
- Resources confirmed and available
- Initial sprint/iteration planned
- Risk register established and owned

### Key Activities

**Iterative Development**
Most Kyndof projects execute through iterative cycles (typically 2 weeks) rather than waterfall stages. Iterations include planning, execution, review, and adaptation. This rhythm enables early feedback, continuous validation, and incremental delivery.

The Executor agent handles implementation for technical projects, working from documented requirements and design decisions.

**Progress Monitoring**
Projects track progress against plan through milestone completion, burn-down charts, and deliverable acceptance. Progress monitoring identifies slippage early, enabling corrective action before minor delays become major problems.

The Orchestrator agent monitors cross-project progress and flags resource conflicts or dependency issues.

**Risk Management**
Active risk management throughout execution: monitoring identified risks, triggering mitigation strategies, and identifying new risks as they emerge. High-impact risks receive weekly review; standard risks get monthly attention.

Materialized risks trigger escalation to the Accountable party for decision support.

**Scope Management**
Scope changes happen on every project—the question isn't whether, but how to manage them. All scope changes require analysis of impact, updated estimates, and approval from the Accountable party. This prevents uncontrolled scope creep while allowing beneficial adaptations.

Significant scope changes may trigger planning phase re-entry to update resources and timeline.

**Quality Assurance**
Continuous quality validation through testing, review, and stakeholder feedback prevents late-stage quality issues. Quality standards vary by project type, but all projects define acceptance criteria during planning and validate against them during execution.

The QA-Tester agent provides systematic quality validation for technical projects.

**Stakeholder Communication**
Regular stakeholder updates maintain alignment, gather feedback, and surface issues. Communication frequency and format depend on project type and stakeholder needs. Core product projects typically do weekly updates; strategic experiments might update monthly.

The Back-Writer agent handles external communication and status publication to Notion and Slack.

### Exit Criteria
Projects complete Execution when they:
- Deliver all in-scope functionality meeting acceptance criteria
- Pass quality validation
- Complete required testing and documentation
- Receive stakeholder acceptance
- Address all high-priority issues
- Update knowledge systems (databases, wiki, knowledge graph)

Execution completion requires explicit sign-off from the Accountable party confirming deliverable acceptance.

### Duration
Execution duration varies widely by project type: strategic experiments might execute in 2-4 weeks; major platform changes could take 3-6 months. Duration matters less than milestone-based progress and quality validation.

## Phase 4: Closure

Closure ensures clean project completion through systematic handoff, learning capture, and resource release.

### Entry Criteria
- Completed execution with stakeholder acceptance
- All deliverables accepted and deployed
- Outstanding issues resolved or transitioned to operations
- Documentation complete

### Key Activities

**Retrospective Session**
Structured reflection on what worked, what didn't, and what to improve. Retrospectives focus on systemic patterns and transferable lessons rather than individual performance. The Analyst agent facilitates retrospectives and extracts reusable patterns.

Retrospective outputs feed process improvements and organizational learning.

**Knowledge Transfer**
If the project produces ongoing operational systems, formal handoff to operations teams includes training, documentation review, and support transition. Knowledge transfer prevents key-person dependencies and ensures sustainable operations.

The Writer agent documents operational handoff materials.

**Artifact Archival**
Critical project artifacts (requirements, design decisions, technical documentation, retrospective notes) get archived in organized locations: decision logs go to knowledge graph, technical docs to codebase, and project summaries to wiki.

Archival prevents knowledge loss and provides reference for future similar work.

**Resource Release**
Formally release project resources: return team members to resource pool, close budget accounts, decommission temporary infrastructure, and cancel external service contracts. Clean resource release prevents "zombie" resource allocation blocking future work.

**Success Validation**
Compare actual outcomes against planned success metrics. Did the project deliver expected value? Were assumptions validated? What unexpected outcomes emerged? Success validation provides empirical evidence for strategic learning and future estimation calibration.

The Analyst agent performs quantitative success analysis comparing planned vs. actual metrics.

**Celebration**
Acknowledge team contributions and celebrate completion. Project work involves sustained effort; recognition matters for morale and motivation. Successful teams deserve celebration; learning from failures also deserves recognition.

### Exit Criteria
Projects close when they have:
- Completed retrospective with documented learnings
- Transferred knowledge to operations (if applicable)
- Archived all critical artifacts
- Released all project resources
- Validated success against original metrics
- Published project summary to completed projects archive
- Celebrated team contributions

The Accountable party provides final sign-off confirming proper closure.

### Duration
Closure typically takes 1-2 weeks, though complex projects with significant operational handoff may need longer.

## Phase 5: Operations (Conditional)

Some projects produce ongoing operational systems requiring sustained maintenance, monitoring, and enhancement. These projects transition from project execution to operational sustainment.

### Entry Criteria
- Completed closure phase
- Identified operational requirements
- Operations team ready to assume ownership
- Documented operational procedures

### Key Activities

**Maintenance**
Ongoing system upkeep: bug fixes, security patches, dependency updates, and minor improvements. Maintenance sustains system value over time but doesn't expand core functionality.

**Monitoring**
Continuous observation of system health, performance, and usage. Monitoring detects issues early and informs optimization priorities.

**Support**
User support for operational systems: answering questions, troubleshooting issues, and training new users. Support quality directly impacts user adoption and satisfaction.

**Enhancement**
Incremental improvements beyond initial scope. Enhancements typically follow lighter processes than full projects unless scope justifies dedicated project treatment.

### Operations Ownership
Operations transfer ownership from project team to operations team. The RABSIC matrix shifts: project owner becomes Consulted or Informed while operations owner becomes Accountable.

Operations teams have discretion to evolve systems within operational boundaries. Major changes trigger new project initiation.

## Phase Gates and Governance

Each phase transition represents a decision point requiring explicit approval:

### Gate Criteria
Every gate has defined completion criteria—artifacts that must exist and quality standards that must be met. Gates prevent premature advancement while maintaining momentum for healthy projects.

### Approval Authority
The project's Accountable party approves phase transitions based on gate criteria. For strategic projects, executive approval applies at Execution and Closure gates.

### Fast-Track Provisions
Small, low-risk projects can fast-track through lighter gates with simplified artifacts. Fast-track doesn't skip phases—it adjusts rigor to match project risk and complexity.

### Re-Entry Conditions
Projects can re-enter previous phases when needed: execution discovering planning inadequacy, or closure identifying operational gaps. Re-entry isn't failure—it's adaptive project management responding to new information.

## Project Type Variations

Different project types apply the lifecycle differently:

### Core Product Projects
Full lifecycle with rigorous planning, formal gate reviews, comprehensive testing, and structured handoff. These projects justify process investment due to strategic importance and operational impact.

### Strategic Experiments
Lighter planning, faster iteration, explicit learning objectives, and flexible scope. Experiments optimize for learning velocity over predictable delivery.

### Internal Operations
Moderate rigor, focus on adoption and change management, heavier documentation requirements. Operations projects succeed only when people change behavior, not just when systems deploy.

### Partner Collaborations
Enhanced governance, formal stakeholder reviews, contractual milestone tracking, and relationship management emphasis. Partner projects balance delivery and relationship health.

---

## 관련 문서
- [Active Projects](active-projects) - Current projects in each phase
- [Completed Projects](completed-projects) - Historical project outcomes
- [RABSIC Framework](../governance/rabsic) - Accountability model for projects
- [Decision Making](../governance/decision-log) - Major project decisions
