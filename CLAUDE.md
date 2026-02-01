# Wiki CLAUDE.md

> 이 폴더는 **프레젠테이션 레이어**입니다. knowledge/를 사람과 AI가 읽을 수 있게 렌더링합니다.

## 역할

```
world-model/knowledge/ (소스: Knowledge Graph)
         ↓
      wiki/ (렌더링: IMS 기반 계층 구조)
         ↓ Astro 빌드
   GitHub Pages (퍼블릭)
```

## 기술 스택

- **Astro**: 정적 사이트 생성
- **Markdown**: 콘텐츠 포맷 (메타데이터 포함)
- **GitHub Pages**: 배포

## 명령어

```bash
pnpm dev     # 개발 서버
pnpm build   # 정적 사이트 빌드
pnpm preview # 빌드 결과 미리보기
```

## IMS 기반 콘텐츠 구조 (v2.1)

### IMS (Internal Management System) 흐름

wiki 구조는 IMS 서사 흐름을 따릅니다:

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

### 폴더 구조

```
src/content/
├── _index.md                    # 최상위 진입점 (IMS 네비게이션)
│
│   # Strategy Layer (Why → What)
├── 00-vision-mission/           # 비전/미션
├── 01-goals-strategy/           # 목표/전략
│
│   # Operations Layer (What → How)
├── 02-business-model/           # 비즈니스 모델
├── 03-value-streams/            # 가치 흐름
├── 04-functions-processes/      # 기능/프로세스
│
│   # Execution Layer (How → Do)
├── 05-projects/                 # 프로젝트
├── 06-governance/               # RABSIC, 정책, 의사결정
│
│   # Relationships & Organization
├── 07-partners-clients/         # 파트너/클라이언트
├── 08-teams/                    # 팀/조직
│
│   # Archive
└── 99-archive/                  # 레거시 콘텐츠
    └── legacy-database-exports/ # 이전 Notion 동기화 콘텐츠
```

### 설계 원칙

- **00 = 가장 중요** (회사의 존재 이유)
- **99 = 가장 낮음** (과거 기록)
- 숫자가 낮을수록 AI와 사람이 먼저 찾아야 할 정보
- IMS 흐름에 따라 Strategy → Operations → Execution → Governance

### AI 검색 최적화

각 문서는 구조화된 메타데이터를 포함합니다:

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

### knowledge/ 연계

**차이점**:
- `knowledge/`: Knowledge Graph - 정규화된 엔티티, 관계, 상호작용
- `wiki/`: IMS 기반 트리 - 사람과 AI가 읽기 쉬운 계층 구조

**데이터 흐름**:
```
knowledge/ (Knowledge Graph)
    ↓ 변환/집계
  wiki/ (IMS 기반 트리)
    ↓ 렌더링
GitHub Pages (퍼블릭)
```

## 콘텐츠 작성 가이드

### 새 문서 추가

1. **IMS 레이어 선택**: 콘텐츠가 속하는 IMS 레이어 확인
2. **폴더 선택**: 해당 레이어의 적절한 폴더 선택
3. **메타데이터 작성**: YAML frontmatter에 필수 필드 포함
4. **구조화된 내용**: 섹션, 리스트, 표 활용
5. **상호 링크**: 관련 문서 및 knowledge/ 소스 링크

### 메타데이터 필수 필드

```yaml
---
title: "문서 제목"                    # 필수
description: "한 줄 요약"              # 필수
priority: 10                          # 필수 (0-99)
tags: [tag1, tag2]                   # 권장
lastUpdated: YYYY-MM-DD              # 필수
relatedDocs: [path1, path2]          # 선택
---
```

### 우선순위 가이드 (IMS 레이어 기준)

| Priority | IMS Layer | Folder | 내용 |
|----------|-----------|--------|------|
| 0 | Strategy | 00-vision-mission | 비전, 미션, 가치 |
| 1-9 | Strategy | 01-goals-strategy | 목표, 전략 |
| 10-19 | Operations | 02-business-model | 비즈니스 모델 |
| 20-29 | Operations | 03-value-streams | 가치 흐름 |
| 30-39 | Operations | 04-functions-processes | 기능, 프로세스 |
| 40-49 | Execution | 05-projects | 프로젝트 |
| 50-59 | Governance | 06-governance | RABSIC, 정책 |
| 60-69 | External | 07-partners-clients | 파트너, 클라이언트 |
| 70-79 | Organization | 08-teams | 팀, 조직 |
| 90-99 | Archive | 99-archive | 레거시 |

## 레거시 콘텐츠

### 마이그레이션 완료 (2026-02-02)

기존 database 생성 폴더들은 `99-archive/legacy-database-exports/`로 이동:
- tasks/, goals/, strategies/, projects/
- functions/, processes/, departments/, positions/
- businessModels/, companyWiki/, etc.

총 ~4,000+ 파일 아카이브됨.

### 신규 콘텐츠 작성 위치

| 기존 폴더 | 새 위치 |
|-----------|---------|
| goals/, strategies/ | 01-goals-strategy/ |
| businessModels/ | 02-business-model/ |
| functions/, processes/ | 04-functions-processes/ |
| projects/, tasks/ | 05-projects/ |
| departments/, positions/ | 08-teams/ |

## 주의사항

### 콘텐츠 소스 구분

- **knowledge/**: Knowledge Graph (정규화된 원본)
- **wiki/**: IMS 트리 (프레젠테이션)

### 자동 vs 수동 관리

- **자동 생성 가능**: 프로젝트 목록, 팀 현황 (knowledge/에서 집계)
- **수동 관리 필요**: 미션/비전, 프로세스 문서, 가이드

## 상위 문서

- 전체 아키텍처: `../ARCHITECTURE.md`
- 시스템 스펙: `../CLAUDE.md`
- 지식 그래프 구조: `../world-model/knowledge/_index.md`
- 서브모듈 브리핑: `../.omc/briefings/`
