// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryanhissey.github.io',
  base: '/'
  integrations: [mdx(), sitemap()],

  redirects: {
    '/blog': '/articles',
    '/blog/[...slug]': '/articles/[...slug]',
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  experimental: {
    svgo: true,
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
