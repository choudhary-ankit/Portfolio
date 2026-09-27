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

`netlify.toml` sets the build command (`npm run build`) and publish directory (`dist`). Point the Netlify site at the branch you want to deploy.

### Contact form (Netlify Forms, free)

Form submissions are free and unlimited on Netlify's credit-based plans, including Free. One-time setup:

1. In the Netlify dashboard, open the site → **Forms** → **Enable form detection**, then redeploy.
2. **Forms → Submission notifications** → add an email notification to your address.
3. Submit a test message on the live site and check it appears under **Forms → contact**.

Notification emails come from `formresponses@netlify.com`; hitting Reply goes to the sender, because the form has an `email` field. The form doesn't send from `npm run dev`; it only works on a Netlify deploy (it shows a "please email me" fallback locally).
