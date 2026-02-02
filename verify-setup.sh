#!/bin/bash

echo "🔍 Verifying GitHub Pages Setup for Kyndof Wiki"
echo "================================================"
echo ""

# Check _config.yml
echo "✓ Checking _config.yml..."
if [ -f "_config.yml" ]; then
    echo "  ✅ _config.yml exists"
    if grep -q "baseurl: /kyndof-os/wiki" _config.yml; then
        echo "  ✅ baseurl configured correctly"
    else
        echo "  ❌ baseurl not set correctly"
    fi
    if grep -q "url: https://seankim-business.github.io" _config.yml; then
        echo "  ✅ url configured correctly"
    else
        echo "  ❌ url not set correctly"
    fi
else
    echo "  ❌ _config.yml missing"
fi
echo ""

# Check Gemfile
echo "✓ Checking Gemfile..."
if [ -f "Gemfile" ]; then
    echo "  ✅ Gemfile exists"
    if grep -q "github-pages" Gemfile; then
        echo "  ✅ github-pages gem included"
    else
        echo "  ❌ github-pages gem missing"
    fi
else
    echo "  ❌ Gemfile missing"
fi
echo ""

# Check workflow
echo "✓ Checking GitHub Actions workflow..."
if [ -f ".github/workflows/pages.yml" ]; then
    echo "  ✅ Workflow file exists"
    if grep -q "working-directory: wiki" .github/workflows/pages.yml; then
        echo "  ✅ Workflow configured for wiki/ directory"
    else
        echo "  ❌ Workflow not configured for wiki/ directory"
    fi
else
    echo "  ❌ Workflow file missing"
fi
echo ""

# Check .gitignore
echo "✓ Checking .gitignore..."
if [ -f ".gitignore" ]; then
    echo "  ✅ .gitignore exists"
else
    echo "  ⚠️  .gitignore missing (optional)"
fi
echo ""

# Check index.md
echo "✓ Checking index.md..."
if [ -f "index.md" ]; then
    echo "  ✅ index.md exists"
    if head -5 index.md | grep -q "^---$"; then
        echo "  ✅ index.md has frontmatter"
    else
        echo "  ❌ index.md missing frontmatter"
    fi
else
    echo "  ❌ index.md missing"
fi
echo ""

# Check directory structure
echo "✓ Checking directory structure..."
REQUIRED_DIRS=("start-here" "our-teams" "how-we-work" "what-we-make" "people" "clients-partners" "reference")
for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "  ✅ $dir/ exists"
    else
        echo "  ❌ $dir/ missing"
    fi
done
echo ""

echo "================================================"
echo "🎯 Next Steps:"
echo ""
echo "1. Enable GitHub Pages:"
echo "   https://github.com/seankim-business/kyndof-os/settings/pages"
echo "   → Set Source to 'GitHub Actions'"
echo ""
echo "2. Commit and push these changes:"
echo "   git add wiki/"
echo "   git commit -m 'Configure GitHub Pages for wiki'"
echo "   git push origin main"
echo ""
echo "3. Verify deployment:"
echo "   https://github.com/seankim-business/kyndof-os/actions"
echo ""
echo "4. Visit your wiki:"
echo "   https://seankim-business.github.io/kyndof-os/wiki/"
echo ""
