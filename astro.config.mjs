import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import remarkWikiLink from 'remark-wiki-link';

// Configure base path from environment (for GitHub Pages)
const base = process.env.WIKI_BASE_PATH || '/';

/** @type {import('remark-wiki-link').Options} */
const wikiLinkOptions = {
  pageResolver: (name) => [name.toLowerCase().replace(/\s+/g, '-')],
  hrefTemplate: (permalink) => `${base}${permalink}`,
  aliasDivider: '|',
  wikiLinkClassName: 'wiki-link',
  newClassName: 'wiki-link-new',
};

export default defineConfig({
  integrations: [mdx(), react()],
  output: 'static',
  base,
  site: process.env.WIKI_SITE_URL || 'https://example.com',
  markdown: {
    remarkPlugins: [[remarkWikiLink, wikiLinkOptions]],
  },
  vite: {
    css: {
      preprocessorOptions: {
        // Enable CSS variables for theming
      },
    },
  },
});
