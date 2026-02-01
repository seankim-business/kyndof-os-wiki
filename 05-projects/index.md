---
title: "Projects"
description: "전략 실행을 위한 프로젝트 현황"
priority: 5
lastUpdated: 2026-02-02
tags: [projects, execution, initiatives]
---

# Projects

> **전략 실행 레이어**: 목표를 달성하기 위한 구체적 프로젝트

## 현황 요약

- **총 프로젝트 수**: 177개
- **진행 중 (In progress)**: 7개
- **완료 (Done)**: 118개
- **취소 (Cancelled)**: 42개
- **상시 운영 (Always On)**: 5개
- **계획 중 (Planning)**: 2개
- **대기 (Backlog)**: 1개
- **템플릿 (Template)**: 2개
- **최근 업데이트**: 2026-02-01

## 진행 중 프로젝트 (7개)

### 프로젝트 목록

| # | Project ID | Status | Note |
|---|-----------|--------|------|
| 1 | 27a4a6fb-8b06-80d8-953d-e8573d619a91 | In progress | 상세 정보 업데이트 필요 |
| 2 | 2a04a6fb-8b06-8071-b852-c230ae8c599a | In progress | 상세 정보 업데이트 필요 |
| 3 | 2e34a6fb-8b06-8038-b0ce-ef62ce35ffcd | In progress | 상세 정보 업데이트 필요 |
| 4 | 2f54a6fb-8b06-806f-bd35-e96ac69853dd | In progress | 상세 정보 업데이트 필요 |
| 5 | 2f54a6fb-8b06-80d7-a545-d18b057e2c86 | In progress | 상세 정보 업데이트 필요 |
| 6 | 2f64a6fb-8b06-80e0-acdc-c0be11466289 | In progress | 상세 정보 업데이트 필요 |
| 7 | 784f0aaa-dafb-448b-99cb-dd28574ce7a7 | In progress | 상세 정보 업데이트 필요 |

> **Note**: 현재 프로젝트 데이터베이스의 `name`, `owner`, `dueDate` 필드가 null로 표시되고 있습니다. Notion 동기화 시 상세 정보가 업데이트될 예정입니다.

## 상시 운영 프로젝트 (5개)

상시 운영 프로젝트는 반복적이고 지속적으로 수행되는 업무입니다.

## 프로젝트 현황 분포

```
┌─────────────────────────────────────────────┐
│  Done (완료)         118개 ████████████████ │
│  Cancelled (취소)     42개 █████            │
│  In progress (진행)    7개 █                │
│  Always On (상시)      5개 █                │
│  Planning (계획)       2개 █                │
│  Template (템플릿)     2개 █                │
│  Backlog (대기)        1개 █                │
└─────────────────────────────────────────────┘
```

## 완료율

- **총 시도**: 177개
- **완료**: 118개
- **성공률**: 66.7%
- **취소율**: 23.7%
- **진행률**: 4.0%

## 프로젝트 생명주기

```
Backlog → Planning → In progress → Done/Cancelled
                        ↓
                   Always On (순환)
```

## 프로젝트 매핑

### 목표별 프로젝트

프로젝트는 상위 [[01-goals-strategy|Goals]]와 연결되어 전략 실행을 보장합니다.

**주요 연결**:
- 커뮤니티 기반 성장 목표 → 4개 프로젝트
- 시스템 기반 운영 체계 → 4개 프로젝트
- 조직 역량 강화 → 3개 프로젝트
- 브랜딩 강화 → 2개 프로젝트
- 신규 사업 → 2개 프로젝트

### 부서별 프로젝트

프로젝트는 [[08-teams|Teams]]의 각 부서에서 실행됩니다.

## 프로젝트 우선순위 기준

1. **전략적 정렬**: 최상위 목표와의 직접적 연결성
2. **고객 가치**: 고객에게 전달되는 가치의 크기
3. **ROI**: 투자 대비 기대 수익
4. **리스크**: 실패 시 조직에 미치는 영향
5. **의존성**: 다른 프로젝트와의 선후관계

## RABSIC 책임 체계

각 프로젝트는 [[06-governance|RABSIC]] 매트릭스를 통해 명확한 책임 체계를 유지합니다:

- **R (Responsible)**: 프로젝트 실행자
- **A (Accountable)**: 최종 승인자 (단 1명)
- **B (Backup)**: 백업 담당자
- **S (Support)**: 지원 역할
- **I (Informed)**: 통보 대상
- **C (Consulted)**: 사전 협의 대상

## 프로젝트 템플릿

표준화된 프로젝트 템플릿 (2개)을 사용하여 일관된 실행 품질을 보장합니다.

## 관련 문서

- [[01-goals-strategy]] - 프로젝트와 연결된 목표
- [[06-governance]] - 프로젝트 승인 프로세스
- [[08-teams]] - 프로젝트 실행 조직
- [[04-functions-processes]] - 프로젝트 실행 프로세스

## 데이터 소스

- **Primary**: `world-model/databases/projects.json`
- **Last Synced**: 2026-02-01 (확인 필요)
- **Total Records**: 177개
- **Schema Version**: 1.0

## 업데이트 필요 사항

현재 진행 중인 프로젝트의 상세 정보 (이름, 소유자, 마감일)가 Notion에서 동기화되지 않았습니다. Back-Writer 에이전트를 통해 다음 동기화가 필요합니다.
