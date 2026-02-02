# GitHub Pages Setup Summary

## Configuration Complete

The wiki is now configured for GitHub Pages deployment.

## Files Created/Updated

### 1. `_config.yml` (Updated)
- Set `baseurl: /kyndof-os/wiki`
- Set `url: https://seankim-business.github.io`
- Added GitHub Pages plugins (jekyll-feed, jekyll-seo-tag, jekyll-sitemap)
- Configured kramdown with GFM syntax
- Added exclusions for CLAUDE.md and AGENTS.md

### 2. `Gemfile` (Created)
- Uses `github-pages` gem for full GitHub Pages compatibility
- Includes all necessary Jekyll plugins
- Platform-specific dependencies for Windows/JRuby

### 3. `.github/workflows/pages.yml` (Created)
- Automated deployment workflow
- Triggers on push to main branch (wiki/ path changes)
- Builds Jekyll site in wiki/ directory
- Deploys to GitHub Pages

### 4. `.gitignore` (Created)
- Excludes Jekyll build artifacts (_site, .jekyll-cache)
- Excludes Gemfile.lock (platform-specific)
- Excludes IDE and system files

### 5. `README.md` (Created)
- Local development instructions
- Deployment overview
- Troubleshooting guide

### 6. `index.md` (Updated)
- Added `nav_order: 1` to frontmatter

## Next Steps

### On GitHub

1. **Go to Repository Settings:**
   - Navigate to: https://github.com/seankim-business/kyndof-os/settings/pages

2. **Enable GitHub Pages:**
   - Source: **"GitHub Actions"** (not "Deploy from a branch")
   - This allows the custom workflow to build from wiki/ directory

3. **Verify Deployment:**
   - After pushing these changes, check the "Actions" tab
   - The "Deploy Wiki to GitHub Pages" workflow should run automatically
   - Once complete, visit: https://seankim-business.github.io/kyndof-os/wiki/

### Local Testing (Optional)

Before deploying, you can test locally:

```bash
cd wiki/
bundle install
bundle exec jekyll serve --baseurl /kyndof-os/wiki
```

Visit: http://localhost:4000/kyndof-os/wiki/

## Deployment Behavior

- **Automatic:** Pushes to main branch (affecting wiki/) trigger deployment
- **Manual:** Can be triggered via "Actions" tab → "Run workflow"
- **Build Time:** ~2-3 minutes typically
- **Propagation:** Live within 1-2 minutes after successful deployment

## Architecture

```
Repository: seankim-business/kyndof-os
├── Branch: main
│   └── Path: wiki/
│       ├── _config.yml (Jekyll config)
│       ├── Gemfile (dependencies)
│       ├── index.md (home page)
│       ├── start-here/
│       ├── our-teams/
│       ├── how-we-work/
│       ├── what-we-make/
│       ├── people/
│       ├── clients-partners/
│       ├── reference/
│       └── .github/workflows/pages.yml
└── GitHub Actions
    └── Builds Jekyll site from wiki/
    └── Deploys to: https://seankim-business.github.io/kyndof-os/wiki/
```

## Why This Approach?

**Simplest Option:** Deploy directly from main branch's wiki/ folder using GitHub Actions.

**Alternatives Considered:**
- ❌ Separate gh-pages branch → More complex, requires branch management
- ❌ Submodule with separate repo → Already exists but adds complexity
- ✅ **Main branch wiki/ folder with GitHub Actions** → Simple, version controlled with main repo

## URL Structure

| Path | URL |
|------|-----|
| Home | `/kyndof-os/wiki/` |
| Start Here | `/kyndof-os/wiki/start-here/` |
| Our Teams | `/kyndof-os/wiki/our-teams/` |
| How We Work | `/kyndof-os/wiki/how-we-work/` |
| What We Make | `/kyndof-os/wiki/what-we-make/` |
| People | `/kyndof-os/wiki/people/` |
| Clients & Partners | `/kyndof-os/wiki/clients-partners/` |
| Reference | `/kyndof-os/wiki/reference/` |

## Verification Checklist

After deployment, verify:

- [ ] Homepage loads: https://seankim-business.github.io/kyndof-os/wiki/
- [ ] Navigation links work
- [ ] All section index pages load
- [ ] Internal links resolve correctly
- [ ] Theme renders properly
- [ ] No 404 errors in browser console

## Troubleshooting

### "404 Page Not Found"

**Check:**
1. GitHub Pages is enabled with "GitHub Actions" source
2. Workflow completed successfully (Actions tab)
3. Base URL matches in `_config.yml`: `/kyndof-os/wiki`

### "Workflow Failed"

**Common causes:**
- Invalid YAML in _config.yml
- Missing frontmatter in markdown files
- Broken internal links

**Fix:**
- Check Actions tab for detailed error logs
- Fix errors and push again

### "Links Don't Work"

**Check:**
- Links use relative paths: `./page.md` or `../section/page.md`
- Not absolute paths: `/wiki/page.md`
- frontmatter includes `layout: default` or `layout: page`

## Theme Customization (Future)

Current theme: `minima` (default, simple)

To customize later:
1. Choose a theme from: https://pages.github.com/themes/
2. Update `_config.yml`: `theme: jekyll-theme-name`
3. Or use remote theme: `remote_theme: owner/repo`

Popular alternatives:
- `just-the-docs` - Documentation-focused
- `minimal-mistakes` - Feature-rich
- `cayman` - Clean and modern

## Maintenance

- **Content updates:** Edit markdown files in wiki/ directory
- **Structure changes:** Update `_config.yml` navigation
- **Theme changes:** Modify `_config.yml` theme setting
- **Workflow changes:** Edit `.github/workflows/pages.yml`

---

**Setup completed:** 2026-02-02
**Deployed URL (pending):** https://seankim-business.github.io/kyndof-os/wiki/
**Repository:** https://github.com/seankim-business/kyndof-os
