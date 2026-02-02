# Kyndof Wiki

Internal employee wiki hosted via GitHub Pages.

## Deployment

This wiki is automatically deployed to GitHub Pages when changes are pushed to the main branch.

**Live URL:** https://seankim-business.github.io/kyndof-os/wiki/

## Setup GitHub Pages

1. Go to repository Settings → Pages
2. Set **Source** to "GitHub Actions"
3. The workflow will automatically build and deploy on push

## Local Development

### Prerequisites

- Ruby 3.1+
- Bundler

### Install Dependencies

```bash
cd wiki/
bundle install
```

### Run Local Server

```bash
bundle exec jekyll serve --baseurl /kyndof-os/wiki
```

Visit: http://localhost:4000/kyndof-os/wiki/

### Build Static Site

```bash
bundle exec jekyll build --baseurl /kyndof-os/wiki
```

Output: `_site/`

## File Structure

```
wiki/
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── index.md                 # Home page
├── start-here/              # Onboarding content
├── our-teams/               # Team structure
├── how-we-work/             # Processes and SOPs
├── what-we-make/            # Products and projects
├── people/                  # Team directory
├── clients-partners/        # External relationships
├── reference/               # Glossary and resources
└── .github/workflows/pages.yml  # Auto-deployment workflow
```

## Writing Guidelines

See [CLAUDE.md](./CLAUDE.md) for comprehensive writing and structure guidelines.

Key principles:
- Human-first content (not metadata-first)
- Deep hierarchy over wide sprawl
- Position > Person (roles, not individual names)
- Organic connections (navigation links)
- Onboarding-centric structure

## Content Updates

All wiki changes should be made via pull requests to ensure quality and consistency.

## Theme

Using the default `minima` theme for simplicity. Can be customized later if needed.

## Troubleshooting

### Build Failures

Check the Actions tab for detailed error logs.

Common issues:
- Missing frontmatter in markdown files
- Broken internal links
- Invalid YAML in _config.yml

### Local Server Won't Start

```bash
# Clean build artifacts
rm -rf _site .jekyll-cache

# Reinstall dependencies
bundle install

# Try again
bundle exec jekyll serve --baseurl /kyndof-os/wiki
```

## Questions?

Contact the Orchestrator role or check the [wiki philosophy guide](./CLAUDE.md).
