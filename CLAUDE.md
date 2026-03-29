# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Architecture

This is an Astro 6 blog site using the blog starter template, with MDX, sitemap, and Tailwind CSS v4.

**Content system:** Blog posts live in `src/content/blog/` as `.md` or `.mdx` files. The content collection schema is defined in `src/content.config.ts` — posts require `title`, `description`, `pubDate` frontmatter and optionally `updatedDate` and `heroImage`. Posts are loaded via Astro's glob loader and rendered through `src/pages/blog/[...slug].astro`.

**Styling:** Tailwind CSS v4 is integrated as a Vite plugin (not an Astro integration). Global styles in `src/styles/global.css` use CSS custom properties and the Atkinson font (served from `public/fonts/`). Site-wide constants (title, description) are in `src/consts.ts`.

**Layout chain:** Pages use `src/layouts/BlogPost.astro` which wraps `src/components/BaseHead.astro` (meta/SEO), `Header.astro`, and `Footer.astro`.

**Key config:** TypeScript strict mode with `strictNullChecks`. Node >=22.12.0 required. Site URL in `astro.config.mjs` needs updating from the placeholder `https://example.com`.
