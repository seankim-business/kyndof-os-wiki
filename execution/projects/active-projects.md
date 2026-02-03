---
title: Active Projects
layout: default
parent: Projects
grand_parent: Execution
nav_order: 1
---

# Active Projects

{: .highlight }
> Current initiatives driving Kyndof's strategic goals and operational improvements

## 개요

Active projects represent the current portfolio of work transforming Kyndof's vision into reality. Unlike ad-hoc tasks or ongoing operations, projects have defined scopes, timelines, and success criteria. This page provides a real-time view of all initiatives currently in flight, organized by strategic priority and execution status.

Understanding active projects is essential for coordination, resource allocation, and preventing duplicate work. Each project connects to specific strategic goals and contributes measurable value to the organization.

## Project Portfolio Structure

Kyndof organizes projects into four distinct types, each serving different strategic purposes:

### Core Product Development
Projects focused on building and enhancing the Kyndof IMS platform itself. These initiatives directly expand product capabilities, improve user experience, or strengthen technical foundations. Examples include new feature development, architectural upgrades, and performance optimization efforts.

Core product projects receive highest priority for engineering resources and typically follow agile methodologies with 2-week sprint cycles. Success is measured through feature adoption rates, technical debt reduction, and customer satisfaction metrics.

### Strategic Experiments
Exploratory initiatives testing new concepts, markets, or technologies. These projects carry higher uncertainty but offer potential breakthrough opportunities. They operate with lighter governance, shorter timeframes, and explicit learning objectives rather than pure execution goals.

Strategic experiments follow a "build-learn-pivot" approach with predefined success criteria established upfront. After completing experiments, teams decide whether to graduate to core product, pivot to a different approach, or sunset the initiative. This category enables Kyndof to explore innovation without committing to full production development prematurely.

### Internal Operations
Projects improving Kyndof's internal systems, processes, and infrastructure. These range from process automation and tool implementation to organizational redesign and knowledge management systems. While less visible externally, operations projects significantly impact team productivity and organizational effectiveness.

Internal projects often emerge from recurring friction points or scalability bottlenecks. They receive priority when they unlock significant efficiency gains or remove critical blockers to team performance.

### Partner Collaborations
Joint initiatives with external organizations, clients, or ecosystem partners. These projects involve coordinated delivery across organizational boundaries and require extra attention to communication, expectations, and contractual obligations.

Partner projects follow stricter governance than internal work, with formal kickoff processes, documented agreements, and regular stakeholder reviews. Success depends on both deliverable quality and relationship health.

## Current Active Projects

The following projects are currently in active execution as of February 2026:

### CompanyOS V2 - Knowledge Graph Implementation
**Type:** Core Product Development
**Status:** In Progress (Week 3 of 8)
**Strategic Goal:** Transform organizational intelligence capabilities
**Owner Role:** CTO

This foundational project establishes a markdown-based knowledge graph architecture for capturing and maintaining organizational knowledge. The system tracks entities (people, companies, projects, concepts) and their relationships over time, enabling temporal reasoning and sophisticated organizational intelligence.

The knowledge graph serves as the foundation for future AI-powered organizational capabilities, including automated decision support, pattern recognition across organizational history, and intelligent workflow assistance. Currently in the implementation phase with core entity templates completed and tooling development underway.

**Key Milestones:**
- ✅ Architecture design and decision documentation
- ✅ Entity template creation (companies, people, projects, concepts)
- ✅ Directory structure and naming conventions
- 🔄 Tooling development (validation, queries, link checking)
- ⏳ Integration with existing databases
- ⏳ Agent workflow automation

### Internal Wiki System
**Type:** Internal Operations
**Status:** In Progress (Week 1 of 4)
**Strategic Goal:** Centralize organizational knowledge and reduce onboarding friction
**Owner Role:** CTO

Establishing a comprehensive internal wiki using GitHub Pages and Jekyll to provide navigable, searchable organizational documentation. The wiki serves as the primary reference for employees covering everything from strategic vision to operational procedures.

Built on pure markdown without build tooling requirements, the wiki automatically deploys to GitHub Pages on every commit. Content organization follows IMS-based numbering (00-99) prioritizing importance over chronology, with sections covering strategy, operations, execution, and organization.

**Key Milestones:**
- ✅ Jekyll configuration and GitHub Pages setup
- 🔄 Content migration from scattered sources
- 🔄 Navigation structure and taxonomy
- ⏳ Search optimization
- ⏳ Contribution guidelines and maintenance workflows

### RABSIC Framework Implementation
**Type:** Internal Operations
**Status:** Planning
**Strategic Goal:** Establish clear accountability and decision-making processes
**Owner Role:** CEO

Implementing the RABSIC (Responsible, Accountable, Backup, Support, Informed, Consulted) decision accountability framework across all organizational processes. This project moves beyond traditional RACI by adding explicit backup roles and distinguishing between support (active help) and inform (passive notification) functions.

The framework ensures every decision has exactly one accountable party while clarifying supporting roles and communication flows. Implementation involves documenting decision types, creating accountability matrices, training teams, and integrating RABSIC into existing workflows.

**Key Milestones:**
- ✅ Framework design and documentation
- 🔄 Decision type taxonomy
- ⏳ Role assignment for common decisions
- ⏳ Team training and rollout
- ⏳ Integration with approval workflows

## Project Health Indicators

Kyndof tracks several key indicators to assess project health and identify early warning signs:

### Velocity and Timeline Health
Projects maintain expected velocity when they complete planned milestones on schedule. Timeline slippage beyond 10% triggers review and potential scope adjustment. Persistent velocity issues often indicate resource constraints, technical blockers, or scope creep requiring intervention.

### Risk Exposure
Each project maintains a documented risk register with identified risks, mitigation strategies, and ownership. High-risk projects receive weekly risk reviews, while standard projects review monthly. Unmitigated high-impact risks escalate to executive attention.

### Resource Allocation
Projects should have dedicated owners with sufficient time allocation to drive progress. Projects where owners spend less than 20% of their time typically stall or fail. Resource conflicts between projects trigger prioritization conversations at the strategic level.

### Stakeholder Engagement
Active stakeholder participation—measured through meeting attendance, feedback responsiveness, and decision velocity—indicates healthy projects. Stakeholder disengagement often signals misalignment on scope, value, or priorities requiring reset conversations.

## Project Lifecycle Phases

All Kyndof projects follow a consistent lifecycle with defined phase gates:

1. **Ideation** - Concept development and initial validation
2. **Planning** - Scope definition, resource allocation, timeline creation
3. **Execution** - Active development and delivery
4. **Closure** - Completion verification, handoff, retrospective
5. **Operations** - Ongoing maintenance (for operational projects)

Phase transitions require explicit approval from the project's accountable party based on completion criteria. This prevents premature advancement while maintaining momentum for healthy projects.

## Cross-Project Coordination

With multiple simultaneous projects, coordination prevents conflicts and maximizes synergies:

### Dependency Management
Projects explicitly document dependencies on other initiatives, shared resources, or external deliverables. Dependency changes trigger notifications to affected projects. The Orchestrator agent maintains a dependency graph and flags circular dependencies or critical path issues.

### Shared Resources
When multiple projects need the same specialized resources (technical expertise, infrastructure, budget), allocation follows strategic priority with explicit scheduling. Resource contention triggers prioritization discussions rather than silent competition.

### Integration Points
Projects producing capabilities consumed by other projects establish integration contracts early. Consumer projects participate in producer project reviews to ensure delivered capabilities meet their needs. Integration testing happens before project closure.

## How to Engage with Active Projects

Different stakeholders interact with projects in distinct ways:

### As a Project Owner
You drive execution, make tactical decisions, coordinate team members, manage risks, and report status. You own the project plan and ensure milestone delivery. When blocked, you escalate to your accountable party for decision support or resource help.

### As a Team Member
You execute assigned tasks, surface blockers early, communicate status, and collaborate with other team members. You attend project meetings, contribute to planning, and maintain quality standards. Your expertise shapes how work gets done.

### As a Stakeholder
You provide input during planning, review deliverables, participate in key decisions, and receive status updates. You represent your function's needs and constraints, ensuring the project serves its intended purpose.

### As Leadership
You set strategic direction, allocate resources across projects, resolve prioritization conflicts, and remove organizational blockers. You approve phase transitions and project scope changes. You ensure project portfolio alignment with organizational goals.

---

## 관련 문서
- [Project Lifecycle](project-lifecycle) - Detailed project phases and gates
- [Completed Projects](completed-projects) - Archive of finished initiatives
- [Strategic Goals](/strategy/goals) - Goals driving project selection
- [RABSIC Framework](../governance/rabsic) - Accountability model for projects
