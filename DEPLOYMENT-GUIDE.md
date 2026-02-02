# Quick Deployment Guide

## 🚀 Deploy in 3 Steps

### Step 1: Enable GitHub Pages (One-Time Setup)

1. Go to: https://github.com/seankim-business/kyndof-os/settings/pages
2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
   - (NOT "Deploy from a branch")
3. Click **Save**

### Step 2: Push These Changes

```bash
cd /Users/sean/Documents/Kyndof/tools/kyndof-os
git add wiki/
git commit -m "Configure GitHub Pages for wiki deployment"
git push origin main
```

### Step 3: Verify Deployment

1. Go to: https://github.com/seankim-business/kyndof-os/actions
2. Wait for "Deploy Wiki to GitHub Pages" workflow to complete (~2-3 minutes)
3. Visit: **https://seankim-business.github.io/kyndof-os/wiki/**

## 🎯 What Was Configured

| File | Purpose |
|------|---------|
| `_config.yml` | Jekyll configuration with GitHub Pages settings |
| `Gemfile` | Ruby dependencies for GitHub Pages |
| `.github/workflows/pages.yml` | Auto-deployment workflow |
| `.gitignore` | Exclude build artifacts |
| `README.md` | Development instructions |

## ✅ Verification Checklist

After deployment:

- [ ] Homepage loads: https://seankim-business.github.io/kyndof-os/wiki/
- [ ] All navigation links work
- [ ] No 404 errors
- [ ] Theme renders correctly

## 🔧 Local Testing (Optional)

```bash
cd wiki/
bundle install
bundle exec jekyll serve --baseurl /kyndof-os/wiki
```

Visit: http://localhost:4000/kyndof-os/wiki/

## 📝 Making Updates

Just edit markdown files and push:

```bash
git add wiki/
git commit -m "Update wiki content"
git push origin main
```

Deployment happens automatically on push.

## ❓ Troubleshooting

**Workflow fails?**
- Check Actions tab for error logs
- Verify YAML syntax in _config.yml

**404 error?**
- Confirm GitHub Pages source is "GitHub Actions"
- Check baseurl in _config.yml matches `/kyndof-os/wiki`

**Links broken?**
- Use relative paths: `../page.md`
- Ensure frontmatter exists in all .md files

## 📚 More Details

See [SETUP.md](./SETUP.md) for comprehensive setup documentation.

---

**Quick Start:** Enable GitHub Pages (Step 1) → Push (Step 2) → Visit URL (Step 3)
