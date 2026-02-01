---
title: "Kyndof Company Wiki"
description: "회사 전체 개요 및 주요 정보 허브"
priority: 0
lastUpdated: 2025-02-01
---

# Kyndof Company Wiki

> **최우선 랜딩 페이지**: AI 및 사람이 회사를 이해하는 출발점

## 빠른 네비게이션

### 🎯 [00-company](./00-company) - 회사 개요 (최우선)
핵심 정보: 미션, 비전, 조직 구조

### 🚀 [01-projects](./01-projects) - 프로젝트
진행중 및 완료된 프로젝트 상태

### 🤝 [02-partners-clients](./02-partners-clients) - 파트너 & 클라이언트
협업 관계 및 고객 정보

### 📋 [03-processes](./03-processes) - 프로세스
업무 프로세스 및 의사결정 흐름

### 👥 [04-teams](./04-teams) - 팀 & 부서
조직 구조 및 부서별 정보

### 📦 [99-archive](./99-archive) - 아카이브
과거 데이터 및 참고 자료

## 구조 철학

**중요도 기반 번호 체계 (00 = 최고 우선순위)**

이 wiki는 **AI 검색 최적화**와 **사람의 직관적 탐색**을 동시에 지원하기 위해 설계되었습니다:

1. **00-company**: 회사의 본질 - 누구인가, 무엇을 하는가
2. **01-projects**: 현재 수행 중인 작업 - 구체적 결과물
3. **02-partners-clients**: 협업 관계 - 누구와 일하는가
4. **03-processes**: 업무 방식 - 어떻게 일하는가
5. **04-teams**: 조직 구성 - 누가 무엇을 담당하는가
6. **99-archive**: 과거 기록 - 참고 자료

## AI 검색 최적화

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
world-model/knowledge/ (원본 데이터, AI 우선)
         ↓
      wiki/ (렌더링, 사람 우선)
         ↓
   GitHub Pages (퍼블릭)
```

**차이점:**
- `knowledge/`: 데이터베이스 친화적, 정규화된 구조
- `wiki/`: 사람과 AI가 읽기 쉬운 계층 구조

## 사용 가이드

### 새 콘텐츠 추가
1. 적절한 우선순위 폴더 선택 (00 > 01 > ... > 99)
2. 메타데이터 포함 Markdown 작성
3. 관련 문서에 상호 링크 추가

### 콘텐츠 검색
- **AI**: 메타데이터 및 구조를 활용한 의미적 검색
- **사람**: 번호 순서대로 탐색 또는 검색 기능 활용

### 마이그레이션 상태
기존 database 생성 콘텐츠(`tasks/`, `goals/` 등)는 점진적으로 새 구조로 마이그레이션됩니다.
