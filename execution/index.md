---
title: Execution
layout: default
nav_order: 3
has_children: true
description: "전략 실행 - 프로젝트와 거버넌스"
permalink: /execution/
---

# Execution

{: .highlight }
> **Layer 3**: 구체적으로 무엇을 하는가?

전략을 실행으로 옮기는 핵심 요소입니다:

| 구성요소 | 설명 | 페이지 |
|:---------|:-----|:-------|
| **Projects** | 전략 실행 프로젝트 (177개) | [보기](projects/) |
| **Governance** | RABSIC 책임 체계 | [보기](governance/) |

## IMS 흐름에서의 위치

```
┌─────────────────────────────────────────────────┐
│  1. STRATEGY (전략)                              │
│     Vision → Goals → Strategies                │
├─────────────────────────────────────────────────┤
│  2. OPERATIONS (운영)                            │
│     Business Model → Value Streams → Functions │
├─────────────────────────────────────────────────┤
│  ★ EXECUTION (실행) ← You are here              │
│     Processes → Projects → Tasks               │
├─────────────────────────────────────────────────┤
│  4. GOVERNANCE (거버넌스)                         │
│     RABSIC → Policies → Decisions              │
└─────────────────────────────────────────────────┘
```

## 현황 요약

<div class="stats-grid">
  <div class="stat-item">
    <div class="stat-number">177</div>
    <div class="stat-label">Projects</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">7</div>
    <div class="stat-label">진행 중</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">118</div>
    <div class="stat-label">완료</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">52</div>
    <div class="stat-label">대기</div>
  </div>
</div>

## 실행 원칙

### 1. Strategy-Execution Alignment
- 모든 프로젝트는 전략적 목표에 연결
- 목표와 연결되지 않은 프로젝트는 재검토

### 2. RABSIC Accountability
- 모든 의사결정에는 명확한 책임 배분
- Accountable은 단 한 명

### 3. Evidence-Based Progress
- 진행 상황은 증거 기반으로 측정
- "완료" 주장에는 검증 증거 필수

## 데이터 소스

- **Projects**: `world-model/databases/projects.json`
- **Tasks**: `world-model/databases/tasks.json`
- **Decisions**: `world-model/databases/decisions.json`
