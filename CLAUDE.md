# Kyndof Wiki

**목적:** 내부 직원용 회사 위키 (GitHub Pages로 서빙)

## 아키텍처

이 레포는 **순수 마크다운 컨텐츠만** 포함합니다. 빌드 시스템 없음.

```
wiki/
├── index.md              # 메인 페이지
├── 00-vision-mission/    # 비전/미션
├── 01-goals-strategy/    # 목표/전략
├── 02-business-model/    # 비즈니스 모델
├── 03-value-streams/     # 가치 흐름
├── 04-functions-processes/  # 기능/프로세스
├── 05-projects/          # 프로젝트
├── 06-governance/        # 거버넌스 (RABSIC)
├── 07-partners-clients/  # 파트너/고객
├── 08-teams/             # 팀
├── 99-archive/           # 아카이브
└── _config.yml           # Jekyll 설정
```

## 배포

GitHub Pages가 Jekyll로 자동 빌드/배포합니다.
- `git push` → 자동 배포
- node_modules, package.json 등 없음
- 빌드 명령 불필요

## 번호 체계 (IMS 기반)

| 번호 | 레이어 | 내용 |
|------|--------|------|
| 00-01 | Strategy | 비전/미션, 목표/전략 |
| 02-04 | Operations | 비즈니스 모델, 가치 흐름, 기능 |
| 05-06 | Execution | 프로젝트, 거버넌스 |
| 07-08 | Organization | 파트너/고객, 팀 |
| 99 | Archive | 레거시 |

## 규칙

1. **코드 금지** - .ts, .js, package.json 등 절대 추가하지 않음
2. **마크다운만** - .md 파일만 추가
3. **구조 유지** - 번호 체계 따르기
4. **링크** - 상대 경로 사용 (예: `[목표](./01-goals-strategy/index.md)`)

## 관련 레포

| 레포 | 역할 |
|------|------|
| **runtime** | 모든 코드 (에이전트, 서비스, 스키마) |
| **world-model** | 데이터 (Notion 싱크, entities, knowledge graph) |
| **wiki** (여기) | 마크다운 컨텐츠만 |

## 데이터 흐름

```
world-model/databases/  → Notion에서 싱크된 실행 데이터
world-model/knowledge/  → Knowledge Graph (엔티티, 관계)
wiki/                   → 사람이 읽는 문서 (GitHub Pages로 서빙)
```

wiki는 knowledge graph를 **참조**하되, 직접 연동 코드는 runtime에 있음.
