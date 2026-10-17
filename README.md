# hissey.dev

[![Ryan Hissey — Backend software engineer, Magento specialist and ecommerce developer](src/assets/og-default.png)](https://hissey.dev)

Personal site and portfolio of Ryan Hissey, a backend software engineer from Staffordshire, UK, working on Magento 2 and Hyvä.

**Live at [hissey.dev](https://hissey.dev)**

## Stack

- [Astro 6](https://astro.build) with MDX and sitemap integrations
- [Tailwind CSS v4](https://tailwindcss.com) (as a Vite plugin) with the typography plugin
- TypeScript in strict mode
- Hosted on GitHub Pages, with Cloudflare in front

## Getting started

Requires Node `>=22.12.0`.

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
```

## Project structure

```text
public/                 favicons and fonts, served as-is
src/
├── assets/             images processed by astro:assets (avatar, OG image, project screenshots)
├── components/         BaseHead (SEO + structured data), Header, Footer, cards
├── content/
│   └── projects/       one .md/.mdx file per project
├── layouts/            BaseLayout, BlogPost
├── pages/              routes, including projects/[slug].astro for case studies
├── styles/global.css   theme colours and prose styles
├── consts.ts           site title, description, links, certifications, services
└── content.config.ts   content collection schemas
```

## Adding a project

Create a file in `src/content/projects/`:

```md
---
title: 'Project name'
description: 'One or two sentences, used on the card and as the meta description.'
url: 'https://example.com'          # optional, external link
tags: [Laravel, PHP]                # optional
screenshot: '../../assets/projects/example.png'  # optional, shown on the card
---
```

Frontmatter only gives a card on `/projects/` that links out to `url`. Add a body below the frontmatter (use `.mdx` to embed images) and the project also gets its own case study page at `/projects/<slug>/`, with the card linking there instead.

## Deployment

Every push to `main` builds and deploys the site to GitHub Pages using [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) (`withastro/action`). It can also be run manually from the Actions tab.

## Credits

Favicon is the 👋 waving hand from [Twemoji](https://github.com/twitter/twemoji) (v14.0.2), © Twitter, Inc and other contributors, licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Generated with [favicon.io](https://favicon.io).
