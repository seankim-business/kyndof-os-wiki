---
title: Governance
layout: default
parent: Execution
nav_order: 2
description: "거버넌스 - RABSIC 책임 체계"
permalink: /execution/governance/
toc: true
---

# Governance

{: .highlight }
> 누가 책임지는가? 어떤 규칙을 따르는가?

## RABSIC Framework

조직의 모든 의사결정은 **RABSIC** 프레임워크를 따릅니다.

| 역할 | 정의 | 핵심 규칙 |
|:-----|:-----|:---------|
| **R** (Responsible) | 실제 작업 수행자 | 여러 명 가능, 1명이 Primary |
| **A** (Accountable) | 최종 승인자, 결과 책임자 | **반드시 1명** |
| **B** (Backup) | R 부재 시 대체자 | R 수행 불가 시에만 활성화 |
| **S** (Support) | R을 돕는 지원자 | 적극적으로 작업 지원 |
| **I** (Informed) | 결과 통보 대상 | 의사결정 **후** 통보 (단방향) |
| **C** (Consulted) | 의견 수렴 대상 | 의사결정 **전** 의견 수렴 (양방향) |

---

## RABSIC 핵심 원칙

{: .important }
> **Iron Rule**: 모든 의사결정에는 **정확히 1명의 Accountable**이 있어야 합니다.

### 1. 단일 책임 (Single Accountability)
- A(Accountable)는 항상 1명
- 공동 책임 = 무책임
- A는 위임 가능하나 책임은 불변

### 2. 시점 구분 (Timing Distinction)
- **Consulted**: 결정 **전**에 의견 수렴
- **Informed**: 결정 **후**에 결과 통보

### 3. 역할 분리 (Role Separation)
- R과 A는 다른 사람 가능
- A가 R을 겸할 수 있으나 권장하지 않음

---

## RABSIC Matrix 예시

### 새 프로젝트 시작 의사결정

| 역할 | 담당 Position | 책임 |
|:-----|:-------------|:-----|
| **R** | Project Manager | 프로젝트 계획 수립, 실행 |
| **A** | Department Head | 프로젝트 승인, 최종 책임 |
| **B** | Senior Manager | PM 부재 시 대체 |
| **S** | Team Members | 계획 수립 지원 |
| **C** | Strategy Lead | 전략 정합성 검토 |
| **I** | CEO, Other Depts | 결과 공유 |

### 예산 승인 의사결정

| 역할 | 담당 Position | 책임 |
|:-----|:-------------|:-----|
| **R** | Finance Manager | 예산안 작성 |
| **A** | CEO | 최종 승인 |
| **B** | CFO | Finance Manager 부재 시 |
| **S** | Department Heads | 부서별 예산 정보 제공 |
| **C** | Board Advisor | 재무 조언 |
| **I** | All Employees | 승인 결과 공유 |

---

## 의사결정 프로세스

```
┌─────────────────────────────────────────────────────────────┐
│                  DECISION-MAKING PROCESS                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. INITIATE    2. CONSULT     3. DECIDE     4. INFORM      │
│      │              │              │              │          │
│      ▼              ▼              ▼              ▼          │
│   R이 안건       C에게 의견     A가 최종       I에게 결과     │
│   상정          수렴           결정           통보          │
│                                                              │
│  ────────────────────────────────────────────────────────   │
│                        Timeline                              │
│  ────────────────────────────────────────────────────────   │
│   Day 0         Day 1-2        Day 3         Day 3-4        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 승인 규칙

### 외부 시스템 변경

| 변경 유형 | 필요 승인 | Timeout |
|:----------|:---------|:--------|
| Notion 업데이트 | Department Head | 24시간 |
| Slack 공지 | Department Head | 24시간 |
| GitHub PR | Tech Lead | 24시간 |
| 조직 변경 | CEO | 48시간 |

### Timeout 및 에스컬레이션

{: .warning }
> 승인 요청이 응답 없이 24시간 경과 시 자동 에스컬레이션

**에스컬레이션 경로:**
```
Requestor → Department Head → CEO → Board
```

**Two-Timeout Rule:**
- 1차 타임아웃: 리마인더 발송
- 2차 타임아웃: 상위 역할로 에스컬레이션
- 3차 타임아웃: 블로킹, 수동 개입 필요

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
