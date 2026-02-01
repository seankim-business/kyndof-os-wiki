---
title: Operations
layout: default
nav_order: 2
has_children: true
description: "비즈니스 운영 - 가치 창출 방법"
permalink: /operations/
---

# Operations

{: .highlight }
> **Layer 2**: 어떻게 가치를 창출하는가?
> Last updated: 2026-02-02

비즈니스 운영의 핵심 구성요소입니다:

| 구성요소 | 설명 | 개수 | 페이지 |
|:---------|:-----|:-----|:-------|
| **Business Model** | 가치 창출 방법 | 1 | [보기](business-model/) |
| **Value Streams** | 고객 가치 전달 흐름 (nested hierarchy) | 1 | [보기](value-streams/) |
| **Functions & Processes** | 기능과 프로세스 (nested hierarchy) | 16 | [보기](functions/) |
| **Strategies** | 전략적 접근 방법 | 60 | - |

## IMS 흐름에서의 위치

```
┌─────────────────────────────────────────────────┐
│  1. STRATEGY (전략)                              │
│     Vision → Goals → Strategies                │
├─────────────────────────────────────────────────┤
│  ★ OPERATIONS (운영) ← You are here             │
│     Business Model → Value Streams → Functions │
├─────────────────────────────────────────────────┤
│  3. EXECUTION (실행)                             │
│     Processes → Projects → Tasks               │
├─────────────────────────────────────────────────┤
│  4. GOVERNANCE (거버넌스)                         │
│     RABSIC → Policies → Decisions              │
└─────────────────────────────────────────────────┘
```

## 핵심 개념

### Business Model Canvas

비즈니스 모델의 9가지 핵심 구성요소:

| 영역 | 구성요소 |
|:-----|:---------|
| **Value** | Value Propositions |
| **Customers** | Customer Segments, Channels, Customer Relationships |
| **Infrastructure** | Key Activities, Key Resources, Key Partners |
| **Finances** | Cost Structure, Revenue Streams |

### Value Stream Mapping

고객 가치 전달 과정의 시각화:

```
Request → Design → Production → Delivery → Feedback
   │         │          │          │          │
   └─────────┴──────────┴──────────┴──────────┘
                    Value Flow
```

## 데이터 소스

- **Value Streams**: `world-model/databases/value-streams.json`
- **Functions**: `world-model/databases/functions.json`
