---
title: Stream Overview
layout: default
parent: Costume Order to Delivery
grand_parent: Value Streams
nav_order: 1
---

# Costume Order to Delivery: Detailed Overview

Complete visualization of our primary value stream with inputs, outputs, and decision points.

## Full Process Diagram

```
CLIENT INQUIRY
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STAGE 1: ORDER RECEPTION (1 day)                                │
│                                                                  │
│ Input:  Client inquiry (email/phone/meeting)                    │
│ Owner:  Client Relations Manager                                │
│                                                                  │
│ Activities:                                                      │
│  ├─ Receive brief (character, event, timeline)                  │
│  ├─ Estimate timeline & cost                                    │
│  └─ Establish communication plan                                │
│                                                                  │
│ Output: Documented brief + timeline + signed agreement          │
│ Decision: Proceed with project? [YES/NO]                        │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼ [YES]
┌─────────────────────────────────────────────────────────────────┐
│ STAGE 2: DESIGN DEVELOPMENT (5-7 days)                          │
│                                                                  │
│ Input:  Approved brief + client requirements                    │
│ Owner:  Creative Director                                       │
│                                                                  │
│ Activities:                                                      │
│  ├─ Research character & context                                │
│  ├─ Concept sketches (3-5 options)                              │
│  ├─ Material selection & sourcing                               │
│  └─ Client presentation & approval                              │
│                                                                  │
│ Output: Approved design + material list + color palette         │
│ Decision: Design approved? [YES/REVISE]                         │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼ [YES]
┌─────────────────────────────────────────────────────────────────┐
│ STAGE 3: PATTERN MAKING (3-5 days)                              │
│                                                                  │
│ Input:  Approved design + client measurements                   │
│ Owner:  Pattern Maker                                           │
│                                                                  │
│ Activities:                                                      │
│  ├─ Collect/verify measurements                                 │
│  ├─ Draft pattern pieces                                        │
│  ├─ Create mockup/toile if needed                               │
│  └─ Generate technical specs                                    │
│                                                                  │
│ Output: Final pattern + cut list + construction notes           │
│ Decision: Pattern fits? [YES/ADJUST]                            │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼ [YES]
┌─────────────────────────────────────────────────────────────────┐
│ STAGE 4: PRODUCTION (7-14 days)                                 │
│                                                                  │
│ Input:  Pattern + materials + technical specs                   │
│ Owner:  Production Manager                                      │
│                                                                  │
│ Activities:                                                      │
│  ├─ Cutting (1-2 days)                                          │
│  ├─ Sewing & assembly (3-7 days)                                │
│  ├─ Finishing & embellishment (2-4 days)                        │
│  └─ Quality inspection (1 day)                                  │
│                                                                  │
│ Output: Completed costume + quality checklist                   │
│ Decision: Passes quality? [YES/REWORK]                          │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼ [YES]
┌─────────────────────────────────────────────────────────────────┐
│ STAGE 5: DELIVERY (1-2 days)                                    │
│                                                                  │
│ Input:  Quality-approved costume                                │
│ Owner:  Client Relations Manager                                │
│                                                                  │
│ Activities:                                                      │
│  ├─ Schedule final fitting                                      │
│  ├─ Make minor adjustments if needed                            │
│  ├─ Package with care instructions                              │
│  └─ Handover to client                                          │
│                                                                  │
│ Output: Delivered costume + care guide + satisfaction survey    │
│ Decision: Client accepts? [YES/ADJUST]                          │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼ [YES]
PROJECT COMPLETE
```

## Stage Dependencies

```
Order Reception ──────┐
                      ▼
              Design Development ──────┐
                                       ▼
                            Pattern Making ──────┐
                                                 ▼
                                          Production ──────┐
                                                           ▼
                                                      Delivery
```

**No stage can begin until the previous stage is complete and approved.**

## Critical Path

The minimum time to complete the value stream (assuming no revisions):

```
1 day (Reception) + 5 days (Design) + 3 days (Pattern) + 7 days (Production) + 1 day (Delivery) = 17 days minimum
```

Typical time with one revision cycle: **21-23 days**
Maximum time with multiple revisions: **29 days**

## Decision Gates

Each stage has a quality gate that must be passed:

| Stage | Decision Gate | Pass Criteria | Failure Action |
|-------|---------------|---------------|----------------|
| Reception | Proceed? | Clear brief, timeline agreed | Refine brief |
| Design | Approved? | Client signs off on design | Revise design |
| Pattern | Fits? | Mockup approved or measurements verified | Adjust pattern |
| Production | Quality? | Passes inspection checklist | Rework |
| Delivery | Accepted? | Client satisfaction >8/10 | Minor adjustments |

## Handoff Points

Clear handoffs between positions:

1. **Client → Client Relations Manager:** Initial inquiry
2. **Client Relations → Creative Director:** Approved brief
3. **Creative Director → Pattern Maker:** Approved design + measurements
4. **Pattern Maker → Production Manager:** Final pattern + specs
5. **Production Manager → Client Relations Manager:** Quality-approved costume
6. **Client Relations Manager → Client:** Final delivery

## Common Bottlenecks

Based on historical data:

1. **Design Approval** (Stage 2): Client indecision adds 2-3 days
2. **Material Sourcing** (Stage 2): Specialty fabrics add 3-7 days
3. **Embellishment Work** (Stage 4): Complex details add 2-5 days
4. **Final Fitting** (Stage 5): Scheduling delays add 1-2 days

## Stream Metrics

See [Metrics](metrics/) for detailed tracking:
- **Lead Time Distribution:** Track actual vs. target
- **Bottleneck Analysis:** Where delays occur most
- **Quality Scores:** Pass rate at each gate
- **Client Satisfaction:** Final survey results

---

**Last Updated:** 2026-02-02
**Maintained By:** Production Manager
