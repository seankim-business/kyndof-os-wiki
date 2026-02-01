# Navigation Hierarchy Examples

This file documents the deep navigation structure supported in the Kyndof Wiki.

## Maximum Depth: 7 Levels

The wiki supports up to 7 levels of nesting with visual differentiation at each level.

## Example Hierarchies

### Value Streams (6 levels)

```
operations/ (Level 1)
└── value-streams/ (Level 2)
    └── costume-order-to-delivery/ (Level 3)
        └── stages/ (Level 4)
            └── 01-order-reception/ (Level 5)
                └── activities/ (Level 6)
                    └── receive-brief/ (Level 7)
```

**Front matter example for deepest level:**
```yaml
---
title: Receive Brief
layout: default
parent: Activities
grand_parent: 01. Order Reception
great_grand_parent: Stages
great_great_grand_parent: Costume Order to Delivery
great_great_great_grand_parent: Value Streams
nav_order: 1
---
```

### Functions (6 levels)

```
operations/ (Level 1)
└── functions/ (Level 2)
    └── sales/ (Level 3)
        └── processes/ (Level 4)
            └── client-onboarding/ (Level 5)
                └── steps/ (Level 6)
                    └── 01-initial-contact/ (Level 7)
```

**Front matter example for deepest level:**
```yaml
---
title: Initial Contact
layout: default
parent: Steps
grand_parent: Client Onboarding
great_grand_parent: Processes
great_great_grand_parent: Sales
great_great_great_grand_parent: Functions
nav_order: 1
---
```

### SOPs (5 levels)

```
sops/ (Level 1)
└── by-department/ (Level 2)
    └── 2000atelier/ (Level 3)
        └── design/ (Level 4)
            └── sop-001-design-brief-intake/ (Level 5)
```

**Front matter example:**
```yaml
---
title: SOP-001 Design Brief Intake
layout: default
parent: Design
grand_parent: 2000Atelier
great_grand_parent: By Department
nav_order: 1
---
```

## Visual Hierarchy

Each level has distinct visual styling:

| Level | Indentation | Font Size | Background | Indicator |
|-------|-------------|-----------|------------|-----------|
| 1 | 1rem | 0.95rem | None | None |
| 2 | 2rem | 0.9rem | rgba(0,0,0,0.01) | None |
| 3 | 3rem | 0.85rem | rgba(0,0,0,0.02) | ▸ |
| 4 | 4rem | 0.8rem | rgba(0,0,0,0.03) | ▹ |
| 5 | 5rem | 0.75rem | rgba(0,0,0,0.04) | ◦ |
| 6 | 6rem | 0.7rem | rgba(0,0,0,0.05) | · |
| 7 | 7rem | 0.65rem | rgba(0,0,0,0.06) | - |

## Breadcrumb Configuration

Breadcrumbs are automatically enabled in `_config.yml`:

```yaml
breadcrumbs:
  enabled: true
```

They appear at the top of every page showing the full path from home to current page.

## Navigation Attributes

Just the Docs supports these navigation attributes:

- `parent` - Direct parent page
- `grand_parent` - Parent's parent
- `has_children` - true/false, enables collapse/expand
- `nav_order` - Numeric sort order
- `nav_exclude` - true to hide from navigation

For deeper nesting beyond `grand_parent`, use custom breadcrumb logic in page content.

## Best Practices

1. **Limit depth where possible** - 4-5 levels is ideal for user comprehension
2. **Use meaningful titles** - Navigation items should be scannable
3. **Maintain nav_order** - Consistent numbering helps users predict structure
4. **Add descriptions** - Help users understand page content before clicking
5. **Use collapse/expand** - Enable `has_children: true` for cleaner nav trees
