# Ankit Choudhary: portfolio

Static, SEO-first personal site built with [Astro](https://astro.build). Live at https://choudharyankit.netlify.app.

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Project layout

```
src/
  config.ts              # SITE_URL, profile facts, SEO title/description
  layouts/Base.astro     # <head>, meta tags, JSON-LD, fonts, theme script
  components/            # one file per section (Hero, Systems, Impact, ...)
  content/projects/      # Markdown files for personal projects
  pages/index.astro      # the homepage
  pages/404.astro
  pages/robots.txt.ts    # generated so the sitemap URL follows SITE_URL
  styles/global.css      # design tokens and all styles
public/                  # photo, résumé PDF, og-image.png, favicon.svg
```

## Add a personal project

1. Copy `src/content/projects/_example.md` to a new file without the leading underscore, e.g. `src/content/projects/my-tool.md`.
2. Fill in the frontmatter (`title`, `description`, `tags`, optional `url`, `repo`, `order`, `draft`).
3. Build. A "Personal projects" section appears on the homepage automatically; it stays hidden while there are no published projects.

## Change the domain

Update `SITE_URL` in `src/config.ts`. Canonical URLs, Open Graph tags, JSON-LD, the sitemap and `robots.txt` all follow it.

## Deploy (Netlify)

`netlify.toml` sets the build command (`npm run build`) and publish directory (`dist`). Point the Netlify site at the branch you want to deploy. The contact form uses Netlify Forms; submissions show up under **Forms** in the Netlify dashboard once the site has been deployed.
