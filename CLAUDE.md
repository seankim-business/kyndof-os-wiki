# Wiki CLAUDE.md

> 이 폴더는 **프레젠테이션 레이어**입니다. knowledge/를 사람과 AI가 읽을 수 있게 렌더링합니다.

## 역할

```
world-model/knowledge/ (소스: 정규화된 데이터)
         ↓
      wiki/ (렌더링: 사람+AI 친화적 계층 구조)
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

## 새로운 콘텐츠 구조 (v2.0)

### 중요도 기반 번호 체계

`src/content/`는 이제 **중요도 기반 계층 구조**를 사용합니다:

```
src/content/
├── _index.md                    # 최상위 진입점
├── 00-company/                  # 회사 개요 (최우선)
│   ├── _index.md
│   ├── mission-vision.md
│   └── organization.md
├── 01-projects/                 # 프로젝트 (높은 우선순위)
│   ├── _index.md
│   ├── active/
│   └── completed/
├── 02-partners-clients/         # 파트너 & 클라이언트
│   ├── _index.md
│   ├── partners/
│   └── clients/
├── 03-processes/                # 프로세스
│   ├── _index.md
│   ├── decision-making.md
│   └── collaboration.md
├── 04-teams/                    # 팀 & 부서
│   ├── _index.md
│   └── departments/
└── 99-archive/                  # 아카이브 (최하위)
    └── _index.md
```

**설계 원칙**:
- **00 = 가장 중요** (회사의 정체성)
- **99 = 가장 낮음** (과거 기록)
- 숫자가 낮을수록 AI와 사람이 먼저 찾아야 할 정보

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

이를 통해:
- **AI**: 의미적 검색 및 컨텍스트 이해
- **사람**: 직관적 탐색 및 발견

### knowledge/ 연계

**차이점**:
- `knowledge/`: 데이터베이스 친화적, 정규화된 구조 (entities, relations)
- `wiki/`: 사람과 AI가 읽기 쉬운 계층 구조 (importance-based tree)

**데이터 흐름**:
```
knowledge/ (정규화된 원본)
    ↓ 변환/집계
  wiki/ (계층적 프레젠테이션)
    ↓ 렌더링
GitHub Pages (퍼블릭)
```

### 레거시 콘텐츠 마이그레이션

기존 database 생성 폴더들(`tasks/`, `goals/`, `strategies/` 등)은 점진적으로 마이그레이션:

1. **보존**: 기존 폴더는 `99-archive/`에 보관
2. **선별**: 우선순위가 높은 콘텐츠 식별
3. **재구성**: 새 구조에 맞게 변환 (메타데이터 추가)
4. **상호링크**: 관련 문서 연결
5. **검증**: 정확성 및 완전성 확인

현재 상태: [99-archive/_index.md](./src/content/99-archive/_index.md) 참조

## 콘텐츠 작성 가이드

### 새 문서 추가

1. **적절한 폴더 선택**: 중요도에 따라 00-99 폴더 중 선택
2. **메타데이터 작성**: YAML frontmatter에 모든 필수 필드 포함
3. **명확한 제목**: 검색 가능하고 설명적인 제목
4. **구조화된 내용**: 섹션, 리스트, 표 활용
5. **상호 링크**: 관련 문서에 링크 추가

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

### 우선순위 가이드

| Range | 의미 | 예시 |
|-------|------|------|
| 0-9   | 핵심 정체성 | 회사 미션, 비전 |
| 10-19 | 주요 활동 | 진행중 프로젝트 |
| 20-29 | 중요 관계 | 파트너, 클라이언트 |
| 30-39 | 운영 방식 | 프로세스, 정책 |
| 40-49 | 조직 구성 | 팀, 부서 |
| 50-89 | 보조 정보 | 과거 프로젝트, 참고자료 |
| 90-99 | 아카이브 | 레거시, 과거 기록 |

## 주의사항

### 콘텐츠 소스 구분

- **knowledge/**: 정규화된 원본 데이터 (entities, relations)
- **wiki/**: 사람+AI 친화적 렌더링 (importance tree)

### 자동 vs 수동 관리

- **자동 생성 가능**: 프로젝트 목록, 팀 현황 (knowledge/에서 집계)
- **수동 관리 필요**: 미션/비전, 프로세스 문서, 가이드

### 검색 최적화

모든 문서는 AI 검색을 고려하여 작성:
- 명확한 질문에 답하는 구조
- 구체적인 키워드 사용
- 상호 링크를 통한 컨텍스트 제공

## 상위 문서

- 전체 아키텍처: `../ARCHITECTURE.md`
- 시스템 스펙: `../CLAUDE.md`
- 지식 그래프 구조: `../world-model/knowledge/CLAUDE.md`
