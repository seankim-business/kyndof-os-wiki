---
title: Decisions
layout: default
parent: Governance
grand_parent: Execution
nav_order: 2
has_children: true
description: "의사결정 기록 및 추적"
permalink: /execution/governance/decisions/
toc: true
---

# Decisions

{: .highlight }
> 조직의 주요 의사결정 히스토리 및 추적

모든 중요한 의사결정은 RABSIC 프레임워크에 따라 기록되고 추적됩니다.

---

## 의사결정 구조

### Decision Record 구성 요소

| 요소 | 설명 |
|:-----|:-----|
| **Decision ID** | 고유 식별자 (DEC-YYYY-NNNN) |
| **Title** | 의사결정 제목 |
| **Status** | pending, approved, rejected, implemented |
| **RABSIC Matrix** | 역할별 담당자 |
| **Context** | 배경 및 이유 |
| **Alternatives** | 검토된 대안들 |
| **Approval Chain** | 승인 이력 |
| **Created At** | 생성 일시 |

---

## 의사결정 프로세스

```
1. INITIATE
   ↓
   Responsible이 Decision Record 생성
   ↓
2. CONSULT
   ↓
   Consulted 역할에게 의견 수렴
   ↓
3. DECIDE
   ↓
   Accountable이 최종 승인/거부
   ↓
4. INFORM
   ↓
   Informed 역할에게 결과 통보
   ↓
5. IMPLEMENT
   ↓
   Responsible이 실행
```

---

## 의사결정 유형

### 전략적 의사결정 (Strategic)
- 목표 및 방향성 결정
- 예산 승인
- 조직 구조 변경
- **Accountable**: CEO

### 운영적 의사결정 (Operational)
- 프로세스 변경
- 도구 선택
- 업무 분배
- **Accountable**: Department Head

### 전술적 의사결정 (Tactical)
- 일일 업무 우선순위
- 리소스 할당
- 팀 내부 결정
- **Accountable**: Team Lead

---

## 데이터 소스

| Source | Path | 설명 |
|:-------|:-----|:-----|
| **Decisions DB** | `world-model/databases/decisions.json` | 모든 의사결정 |
| **Approvals DB** | `world-model/databases/approvals.json` | 승인 이력 |
| **RABSIC Matrix DB** | `world-model/databases/rabsic-matrix.json` | 역할 매트릭스 |

---

## 최근 의사결정 (예시)

| ID | Title | Status | Accountable | Date |
|:---|:------|:-------|:-----------|:-----|
| DEC-2026-001 | CompanyOS V2 도입 | approved | CEO | 2026-02-01 |
| DEC-2026-002 | Wiki 구조 개편 | implemented | CTO | 2026-02-02 |

{: .note }
> 실제 의사결정 목록은 `world-model/databases/decisions.json`에서 싱크됩니다.

---

## 관련 문서

- [RABSIC Framework](../rabsic/) - 책임 매트릭스
- [Governance Overview](../) - 거버넌스 개요
- [Projects](../../projects/) - 프로젝트 실행
