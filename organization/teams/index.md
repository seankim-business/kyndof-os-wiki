---
title: Teams
layout: default
parent: Organization
nav_order: 2
has_children: true
---

# Teams

{: .highlight }
> 조직 구조와 구성원

## 현황 요약

| 항목 | 수량 |
|:-----|:-----|
| **Departments** | 6개 |
| **Positions** | 22개 |
| **최근 업데이트** | 2026-02-02 |

---

## 부서 구조

```
┌─────────────────────────────────────────────────────────────┐
│                         CEO Office                           │
│                            │                                 │
│     ┌──────────────────────┼──────────────────────┐         │
│     │                      │                      │         │
│ ┌───┴───┐   ┌──────────┐ ┌┴─────────┐ ┌─────────┴┐        │
│ │Brand  │   │2000      │ │2000      │ │Corp      │        │
│ │Ops    │   │Atelier   │ │Archives  │ │Ops       │        │
│ └───────┘   └──────────┘ └──────────┘ └──────────┘        │
│                                                              │
│                      ┌──────────┐                           │
│                      │ Kyndof   │                           │
│                      │ (Tech)   │                           │
│                      └──────────┘                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 부서별 상세

### CEO Office

{: .note }
> 최고 의사결정 및 전략 수립

| 항목 | 내용 |
|:-----|:-----|
| **역할** | 전사 전략, 최종 의사결정 |
| **RABSIC** | A (모든 최종 결정) |

**포지션:**
- CEO

---

### Brand Ops

{: .note }
> 브랜드 운영 및 마케팅

| 항목 | 내용 |
|:-----|:-----|
| **역할** | 브랜드 전략, 마케팅, 영업 |
| **KPIs** | 매출, 브랜드 인지도, 고객 만족도 |

**포지션:**
- Brand Director
- Marketing Manager
- Sales Manager
- Content Creator

**담당 프로젝트:** 52개 (완료 41개)

---

### 2000Atelier

{: .note }
> 아티스트 의상 제작 (Creative Hub)

| 항목 | 내용 |
|:-----|:-----|
| **역할** | 디자인, 패턴, 봉제, 스타일링 |
| **KPIs** | 납기 준수율, 품질 점수, 고객 만족도 |

**포지션:**
- Atelier Director
- Design Lead
- Pattern Master
- Production Team
- Styling Team

**담당 프로젝트:** 45개 (완료 38개)

**핵심 역량:**
- 시안 100% 실물 구현
- 빠른 납기
- 아티스트 스타일링

---

### 2000Archives

{: .note }
> 제품 개발 및 아카이브

| 항목 | 내용 |
|:-----|:-----|
| **역할** | 제품 기획, 개발, 아카이브 관리 |
| **KPIs** | 신제품 출시, 제품 판매량 |

**포지션:**
- Archives Director
- Product Manager
- Collection Manager

**담당 프로젝트:** 28개 (완료 22개)

---

### Corp Ops

{: .note }
> 기업 운영 (Finance, HR, Admin)

| 항목 | 내용 |
|:-----|:-----|
| **역할** | 재무, 인사, 총무, 법무 |
| **KPIs** | 운영 효율성, 비용 관리 |

**포지션:**
- Operations Director
- Finance Manager
- HR Manager
- Admin Manager

**담당 프로젝트:** 32개 (완료 25개)

---

### Kyndof

{: .note }
> 기술 및 시스템 (Tech Division)

| 항목 | 내용 |
|:-----|:-----|
| **역할** | 시스템 개발, IT 인프라, 자동화 |
| **KPIs** | 시스템 가동률, 자동화율 |

**포지션:**
- Tech Director
- Developer
- System Admin

**담당 프로젝트:** 15개 (완료 10개)

**핵심 시스템:**
- CompanyOS (조직 운영 시스템)
- Internal Tools
- Data Infrastructure

---

## Position 체계

### Position vs Person

{: .important }
> **핵심 원칙**: 시스템은 Position 기반으로 설계됩니다. 개인은 Position의 현재 Owner입니다.

| 개념 | 정의 | 예시 |
|:-----|:-----|:-----|
| **Position** | 역할과 책임의 정의 | "CEO", "Brand Director" |
| **Owner** | Position의 현재 담당자 | (개인명은 시스템에 하드코딩하지 않음) |

### Position 속성

각 Position은 다음 속성을 가집니다:

| 속성 | 설명 |
|:-----|:-----|
| **position_id** | 고유 식별자 |
| **title** | 직책명 |
| **department** | 소속 부서 |
| **rabsic_roles** | 기본 RABSIC 역할 |
| **reporting_to** | 보고 대상 Position |
| **current_owner** | 현재 담당자 (선택적) |

---

## RABSIC 역할 분배

| Position Level | 기본 RABSIC |
|:---------------|:------------|
| **C-Level** | A (최종 결정) |
| **Director** | A (부서 내), C (타 부서) |
| **Manager** | R (팀 업무), A (팀 내) |
| **Individual** | R (할당 업무), S (협업) |

---

## 조직 변경 이력

{: .highlight }
> 조직 변경은 CEO 승인 필요

| 날짜 | 변경 내용 | 승인자 |
|:-----|:---------|:-------|
| 2026-01-15 | Kyndof 부서 신설 | CEO |
| 2026-01-01 | 초기 조직 구조 확정 | CEO |

---

## 데이터 소스

| Source | Path |
|:-------|:-----|
| **Departments** | `world-model/databases/departments.json` |
| **Positions** | `world-model/databases/positions.json` |
| **People** | `world-model/knowledge/entities/people/` |

---

## 관련 문서

- [Governance](../../execution/governance/) - RABSIC 책임 체계
- [Functions & Processes](../../operations/functions/) - 기능과 프로세스
- [Projects](../../execution/projects/) - 부서별 프로젝트
