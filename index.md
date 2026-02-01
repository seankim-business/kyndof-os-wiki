---
title: "Kyndof Company Wiki"
description: "IMS 기반 회사 전체 개요 및 주요 정보 허브"
priority: 0
lastUpdated: 2026-02-02
---

# Kyndof Company Wiki

> **최우선 랜딩 페이지**: AI 및 사람이 회사를 이해하는 출발점

## IMS (Internal Management System) 네비게이션

회사 정보는 **IMS 서사 흐름**에 따라 구조화되어 있습니다:

### Strategy Layer (Why → What)

| # | Section | Description |
|---|---------|-------------|
| 00 | [Vision & Mission](./00-vision-mission) | 회사의 존재 이유 |
| 01 | [Goals & Strategy](./01-goals-strategy) | 목표와 전략적 방향 |

### Operations Layer (What → How)

| # | Section | Description |
|---|---------|-------------|
| 02 | [Business Model](./02-business-model) | 가치 창출 방법 |
| 03 | [Value Streams](./03-value-streams) | 고객 가치 전달 흐름 |
| 04 | [Functions & Processes](./04-functions-processes) | 기능과 프로세스 |

### Execution Layer (How → Do)

| # | Section | Description |
|---|---------|-------------|
| 05 | [Projects](./05-projects) | 전략 실행 프로젝트 |
| 06 | [Governance](./06-governance) | RABSIC 책임 체계 |

### Relationships & Organization

| # | Section | Description |
|---|---------|-------------|
| 07 | [Partners & Clients](./07-partners-clients) | 외부 관계 |
| 08 | [Teams](./08-teams) | 조직 구조 |
| 99 | [Archive](./99-archive) | 레거시 자료 |

## IMS 서사 흐름

```
┌────────────────────────────────────────────────────────────┐
│  1. STRATEGY (전략)                                        │
│     Vision → Goals → Strategies                           │
│     "왜 존재하는가? 무엇을 달성할 것인가?"                    │
├────────────────────────────────────────────────────────────┤
│  2. OPERATIONS (운영)                                      │
│     Business Model → Value Streams → Functions            │
│     "어떻게 가치를 창출하는가?"                              │
├────────────────────────────────────────────────────────────┤
│  3. EXECUTION (실행)                                       │
│     Processes → Projects → Tasks                          │
│     "구체적으로 무엇을 하는가?"                              │
├────────────────────────────────────────────────────────────┤
│  4. GOVERNANCE (거버넌스)                                   │
│     RABSIC → Policies → Decisions                         │
│     "누가 책임지는가? 어떤 규칙을 따르는가?"                  │
└────────────────────────────────────────────────────────────┘
```

## 구조 철학

**중요도 기반 번호 체계 (00 = 최고 우선순위)**

이 wiki는 **AI 검색 최적화**와 **사람의 직관적 탐색**을 동시에 지원하기 위해 설계되었습니다.

### AI 검색 최적화

각 문서는 다음 메타데이터를 포함합니다:

```yaml
---
title: "명확한 제목"
description: "한 문장 요약"
priority: 0-99 (낮을수록 중요)
tags: [관련, 태그, 목록]
lastUpdated: YYYY-MM-DD
relatedDocs: [관련 문서 경로]
---
```

## knowledge/ 연계

이 wiki는 `../world-model/knowledge/`의 **프레젠테이션 레이어**입니다:

```
world-model/knowledge/ (원본 데이터, Knowledge Graph)
         ↓ 렌더링
      wiki/ (IMS 기반 트리 구조)
         ↓ 배포
   GitHub Pages (퍼블릭)
```

**차이점:**
- `knowledge/`: 정규화된 엔티티 + 관계 그래프
- `wiki/`: IMS 서사 기반 계층 구조

## 사용 가이드

### 새 콘텐츠 추가
1. IMS 흐름에 맞는 폴더 선택
2. 메타데이터 포함 Markdown 작성
3. 관련 문서에 상호 링크 추가

### 콘텐츠 검색
- **AI**: 메타데이터 및 IMS 구조를 활용한 의미적 검색
- **사람**: IMS 흐름 순서대로 탐색

### 데이터 소스
- **Primary**: `world-model/knowledge/` (Knowledge Graph)
- **Secondary**: `world-model/databases/` (Notion 동기화)
