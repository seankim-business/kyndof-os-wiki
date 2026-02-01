# Wiki Navigation Configuration Update

## Changes Made

### 1. Updated `_config.yml`

#### Added Navigation Features:
- **External Links** - Link to World Model repository in navigation sidebar
- **Breadcrumbs** - Enabled automatic breadcrumb navigation showing current page path
- **Nav Folding** - Enabled collapse/expand for deep navigation hierarchies

```yaml
# Navigation external links (added to nav sidebar)
nav_external_links:
  - title: World Model Repository
    url: https://github.com/Kyndof/kyndof-os/tree/main/world-model

# Breadcrumbs configuration
breadcrumbs:
  enabled: true

# Just the Docs defaults
just_the_docs:
  collections:
    docs:
      name: Documentation
      nav_fold: true  # Enable folding/collapsing for deep hierarchies
```

### 2. Updated `index.md`

Added SOPs to main navigation table:
```markdown
| [SOPs](./sops/) | Standard Operating Procedures |
```

### 3. Updated `operations/index.md`

Added notes about nested hierarchies:
```markdown
| **Value Streams** | 고객 가치 전달 흐름 (nested hierarchy) | [보기](value-streams/) |
| **Functions & Processes** | 기능과 프로세스 (nested hierarchy) | [보기](functions/) |
```

### 4. Enhanced `_sass/custom/custom.scss`

#### Deep Navigation Styling (7 Levels):
- Level-specific indentation (1rem to 7rem)
- Font size gradation (0.95rem to 0.65rem)
- Background color progression (opacity 0.01 to 0.06)
- Visual indicators (▸, ▹, ◦, ·, -)

#### Enhanced Breadcrumbs:
- Better visual separation with chevrons (›)
- Background container for better visibility
- Hover states for links
- Improved spacing

#### Table of Contents Enhancements:
- Sticky TOC support for long pages
- Nested TOC item styling
- Active state indicators
- Hover animations

#### Mobile Responsiveness:
- Reduced indentation on mobile (prevents overflow)
- Compact breadcrumbs
- Maintains readability at all screen sizes

### 5. Created Helper Files

#### `_includes/deep-nav-helper.html`
Reusable component showing:
- Current location breadcrumb
- Child pages list
- Automatic hierarchy detection

Usage: `{% include deep-nav-helper.html %}`

#### `_includes/hierarchy-examples.md`
Documentation with:
- Example hierarchies for all 7 levels
- Front matter templates
- Visual styling reference table
- Best practices

## Navigation Structure Examples

### Maximum Depth (7 Levels)

**Value Streams Example:**
```
operations/ (L1)
└── value-streams/ (L2)
    └── costume-order-to-delivery/ (L3)
        └── stages/ (L4)
            └── 01-order-reception/ (L5)
                └── activities/ (L6)
                    └── receive-brief/ (L7)
```

**Functions Example:**
```
operations/ (L1)
└── functions/ (L2)
    └── sales/ (L3)
        └── processes/ (L4)
            └── client-onboarding/ (L5)
                └── steps/ (L6)
                    └── 01-initial-contact/ (L7)
```

**SOPs Example:**
```
sops/ (L1)
└── by-department/ (L2)
    └── 2000atelier/ (L3)
        └── design/ (L4)
            └── sop-001-design-brief-intake/ (L5)
```

## Visual Hierarchy

| Level | Indent | Font Size | Background | Icon | Example |
|-------|--------|-----------|------------|------|---------|
| 1 | 1rem | 0.95rem | None | None | Operations |
| 2 | 2rem | 0.9rem | rgba(0,0,0,0.01) | None | Value Streams |
| 3 | 3rem | 0.85rem | rgba(0,0,0,0.02) | ▸ | Costume Order to Delivery |
| 4 | 4rem | 0.8rem | rgba(0,0,0,0.03) | ▹ | Stages |
| 5 | 5rem | 0.75rem | rgba(0,0,0,0.04) | ◦ | Order Reception |
| 6 | 6rem | 0.7rem | rgba(0,0,0,0.05) | · | Activities |
| 7 | 7rem | 0.65rem | rgba(0,0,0,0.06) | - | Receive Brief |

## Files Modified

1. ✅ `_config.yml` - Added breadcrumbs, nav folding, external links
2. ✅ `index.md` - Added SOPs to navigation
3. ✅ `operations/index.md` - Updated descriptions for nested sections
4. ✅ `_sass/custom/custom.scss` - Deep navigation styles + mobile responsiveness
5. ✅ `_includes/deep-nav-helper.html` - Reusable navigation component (NEW)
6. ✅ `_includes/hierarchy-examples.md` - Documentation (NEW)

## Features Enabled

✅ **7-level deep navigation** with visual differentiation
✅ **Automatic breadcrumbs** on all pages
✅ **Collapsible/expandable nav trees** for cleaner sidebar
✅ **Mobile-responsive** deep navigation (reduced indentation)
✅ **Sticky TOC** support for long pages
✅ **Visual hierarchy indicators** (icons, colors, fonts)
✅ **External link** to World Model repository
✅ **SOPs integrated** into main navigation

## Testing Paths

Test these URLs to verify deep navigation:

1. **Value Streams (6 levels):**
   `/operations/value-streams/costume-order-to-delivery/stages/01-order-reception/activities/`

2. **Functions (6 levels):**
   `/operations/functions/sales/processes/client-onboarding/steps/`

3. **SOPs (5 levels):**
   `/sops/by-department/2000atelier/design/`

## Next Steps (Optional)

To fully utilize deep navigation:

1. **Add `has_children: true`** to parent pages for collapse/expand functionality
2. **Use `{% include deep-nav-helper.html %}`** on complex hierarchy pages
3. **Add `description` metadata** to pages for better navigation tooltips
4. **Test on mobile devices** to verify reduced indentation works
5. **Review breadcrumb styling** on actual GitHub Pages deployment

## Configuration Summary

The wiki now supports enterprise-grade navigation for complex organizational hierarchies while maintaining usability through:
- Progressive visual disclosure (depth-based styling)
- Mobile-first responsive design
- Automatic breadcrumb trails
- Collapsible navigation trees
- Consistent visual language across all depths
