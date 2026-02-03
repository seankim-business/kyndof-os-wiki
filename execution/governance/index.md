---
title: Governance
layout: default
parent: Execution
nav_order: 2
has_children: true
description: "거버넌스 - RABSIC 책임 체계"
permalink: /execution/governance/
toc: true
---

# Governance

{: .highlight }
> 누가 책임지는가? 어떤 규칙을 따르는가?

조직의 모든 의사결정은 **RABSIC** 프레임워크를 따르며, 명확한 책임 체계와 승인 프로세스를 통해 실행됩니다.

---

## 주요 주제

### [RABSIC Framework](./rabsic/)
의사결정 책임 매트릭스 - 모든 의사결정에 적용되는 역할 체계

### [Decisions](./decisions/)
의사결정 기록 및 추적 - 조직의 주요 의사결정 히스토리

---

## Position별 기본 권한

| Position | 기본 RABSIC 역할 |
|:---------|:----------------|
| **CEO** | A (최종 의사결정) |
| **Department Head** | A (부서 내), C (타 부서) |
| **Team Lead** | R (팀 업무), A (팀 내) |
| **Individual Contributor** | R (할당 업무), S (협업) |

---

## 데이터 소스

| Source | Path |
|:-------|:-----|
| **Decisions** | `world-model/databases/decisions.json` |
| **Approvals** | `world-model/databases/approvals.json` |
| **RABSIC Matrix** | `world-model/databases/rabsic-matrix.json` |
| **Positions** | `world-model/databases/positions.json` |

---

## 관련 문서

- [Teams](../../organization/teams/) - 조직 구조와 Position
- [Projects](../projects/) - 프로젝트 실행
- [Goals & Strategy](../../strategy/goals-strategy/) - 전략적 방향
