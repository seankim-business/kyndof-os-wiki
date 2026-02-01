---
title: Organization
layout: default
nav_order: 4
has_children: true
description: "조직 구조 - 파트너, 고객, 팀"
permalink: /organization/
---

# Organization

{: .highlight }
> **Layer 4**: 누가 함께 일하는가?

조직 구조와 외부 관계를 정의합니다:

| 구성요소 | 설명 | 페이지 |
|:---------|:-----|:-------|
| **Partners & Clients** | 외부 관계 (파트너, 고객) | [보기](partners-clients/) |
| **Teams** | 내부 조직 (부서, 팀, 포지션) | [보기](teams/) |

## IMS 흐름에서의 위치

```
┌─────────────────────────────────────────────────┐
│  1. STRATEGY (전략)                              │
│     Vision → Goals → Strategies                │
├─────────────────────────────────────────────────┤
│  2. OPERATIONS (운영)                            │
│     Business Model → Value Streams → Functions │
├─────────────────────────────────────────────────┤
│  3. EXECUTION (실행)                             │
│     Processes → Projects → Tasks               │
├─────────────────────────────────────────────────┤
│  ★ ORGANIZATION (조직) ← You are here           │
│     Partners → Clients → Teams                 │
└─────────────────────────────────────────────────┘
```

## 현황 요약

<div class="stats-grid">
  <div class="stat-item">
    <div class="stat-number">6</div>
    <div class="stat-label">Departments</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">22</div>
    <div class="stat-label">Positions</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">-</div>
    <div class="stat-label">Partners</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">-</div>
    <div class="stat-label">Clients</div>
  </div>
</div>

## 조직 원칙

### 1. Position > Person
- 시스템은 역할(Position) 기반으로 설계
- 개인이 아닌 역할에 책임 부여
- 인력 교체에도 시스템 연속성 유지

### 2. RABSIC Accountability
- 모든 Position은 RABSIC 역할 명세 포함
- 역할 중복 최소화
- 명확한 책임 경계

### 3. Flat but Structured
- 최소한의 계층 구조
- 명확한 의사결정 경로
- 빠른 커뮤니케이션

## 데이터 소스

- **Departments**: `world-model/databases/departments.json`
- **Positions**: `world-model/databases/positions.json`
- **People**: `world-model/knowledge/entities/people/`
