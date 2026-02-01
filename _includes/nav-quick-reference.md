# Quick Reference: Deep Navigation

## Front Matter Template

For pages at different hierarchy depths:

### Level 2 (Direct child of top-level)
```yaml
---
title: Your Page Title
layout: default
parent: Parent Page Name
nav_order: 1
has_children: true  # if this page has children
---
```

### Level 3 (Grandchild)
```yaml
---
title: Your Page Title
layout: default
parent: Parent Page Name
grand_parent: Grandparent Page Name
nav_order: 1
has_children: true  # if this page has children
---
```

### Level 4+ (Great-grandchild and deeper)

Just the Docs only supports `parent` and `grand_parent` attributes. For deeper hierarchies, navigation works through the chain:

```yaml
---
title: Your Page Title
layout: default
parent: Immediate Parent
grand_parent: Parent's Parent
nav_order: 1
---
```

**Note:** Pages beyond level 3 still work! The sidebar navigation is built by following the chain of parent relationships. You just can't specify `great_grand_parent` in the front matter.

## Visual Indicators by Level

| Level | You'll see | Indentation | Font Size |
|-------|-----------|-------------|-----------|
| 1 | No icon, bold | 1rem | 0.95rem |
| 2 | No icon, medium weight | 2rem | 0.9rem |
| 3 | ▸ | 3rem | 0.85rem |
| 4 | ▹ | 4rem | 0.8rem |
| 5 | ◦ | 5rem | 0.75rem |
| 6 | · | 6rem | 0.7rem |
| 7 | - | 7rem | 0.65rem |

## Adding Navigation Helper

On complex pages with many children, add this to show current location:

```liquid
{% include deep-nav-helper.html %}
```

This automatically displays:
- Breadcrumb trail from home to current page
- List of child pages (if any)

## Best Practices

1. **Use `nav_order`** - Number pages sequentially for predictable ordering
2. **Set `has_children: true`** - On parent pages to enable collapse/expand
3. **Keep titles short** - Long titles get truncated in narrow sidebars
4. **Add descriptions** - Use `description:` metadata for tooltips (optional)
5. **Limit depth** - 4-5 levels is optimal for user comprehension

## Example Structure

```
operations/
├── index.md (has_children: true)
└── value-streams/
    ├── index.md (parent: Operations, has_children: true)
    └── costume-order-to-delivery/
        ├── index.md (parent: Value Streams, has_children: true)
        └── stages/
            ├── index.md (parent: Costume Order to Delivery, has_children: true)
            └── 01-order-reception/
                └── index.md (parent: Stages)
```

Each `index.md` contains:
- `parent:` pointing to its parent page title
- `grand_parent:` pointing to grandparent (if level 3+)
- `has_children: true` if it has subdirectories
- `nav_order:` for sorting

## Common Issues

**Issue:** Page doesn't appear in navigation
**Fix:** Check that `parent:` exactly matches parent page's `title:`

**Issue:** Navigation order is wrong
**Fix:** Add `nav_order: 1, 2, 3...` to all siblings

**Issue:** Collapse/expand doesn't work
**Fix:** Add `has_children: true` to parent page

**Issue:** Breadcrumbs missing
**Fix:** Breadcrumbs are enabled globally in `_config.yml`, just push to GitHub Pages

## Testing

After adding new pages:

1. Run `jekyll serve` locally to preview
2. Check sidebar navigation appears correctly
3. Verify breadcrumbs show full path
4. Test collapse/expand on parent pages
5. Check mobile view (< 768px width)

## Mobile Optimization

On screens < 768px:
- Indentation is reduced (3rem → 2rem for level 5+)
- Breadcrumbs are compacted
- Font sizes remain readable

No additional configuration needed - it's automatic!
