---
title: "Archive"
description: "Legacy database exports and historical content"
priority: 99
tags: [archive, legacy, historical, reference]
lastUpdated: 2026-02-02
---

# Archive

> **최하위 우선순위**: 과거 기록 및 참고 자료

## Migration Status (2026-02-02)

### Completed

IMS 기반 구조 개편으로 인해 기존 database-export 폴더들이 archive로 이동됨.

신규 콘텐츠 작성 위치:
| Old Location | New Location | Layer |
|--------------|--------------|-------|
| goals/, strategies/ | `01-goals-strategy/` | Strategy |
| businessModels/ | `02-business-model/` | Operations |
| functions/, processes/ | `04-functions-processes/` | Operations |
| projects/, tasks/ | `05-projects/` | Execution |
| N/A | `06-governance/` | Governance |
| N/A | `07-partners-clients/` | External |
| departments/, positions/ | `08-teams/` | Organization |

## legacy-database-exports/

Notion 데이터베이스에서 자동 생성된 레거시 콘텐츠:

| Folder | Count | Description |
|--------|-------|-------------|
| tasks/ | ~3,800 | 태스크 목록 |
| projects/ | ~180 | 프로젝트 목록 |
| strategies/ | ~60 | 전략 목록 |
| results/ | ~35 | 결과 기록 |
| goals/ | ~30 | 목표 목록 |
| positions/ | ~25 | 직책 정보 |
| companyWiki/ | ~20 | 구 위키 콘텐츠 |
| meetings/ | ~18 | 회의 기록 |
| functions/ | ~18 | 기능 목록 |
| hypothesis/ | ~12 | 가설 기록 |
| kpis/ | ~8 | KPI 데이터 |
| departments/ | ~6 | 부서 정보 |
| businessModels/ | ~6 | 비즈니스 모델 |
| processes/ | ~4 | 프로세스 정보 |

## Retention Policy

### Archive Criteria
- **Age**: 2년 이상 미사용
- **Relevance**: 현재 업무와 무관
- **Duplication**: 새 구조에 통합됨
- **Quality**: 개선 없이 유지 불가

### Search Behavior
아카이브 콘텐츠도 검색 가능하지만:
- **Low Priority**: 검색 결과 하단 표시
- **Explicit Tag**: [ARCHIVED] 표시
- **Context**: 아카이브 사유 명시

## Navigation

- Home: [Wiki Home](../)
- Current Projects: [Projects](../05-projects/)
- Current Processes: [Functions & Processes](../04-functions-processes/)

---

**Last Updated**: 2026-02-02
**Review Cycle**: Annually
