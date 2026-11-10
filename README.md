# bobolsky.github.io

Personal portfolio and freelance AI engineering site for Andrea Zinno, built with [Astro](https://astro.build) as a fully static site and served by GitHub Pages at <https://bobolsky.github.io>.

No backend, no forms, no tracking. The only dependency is `astro`.

## Editing content (no coding needed)

All text lives in Markdown files under `src/content/` plus one settings file. Each Markdown file has a **frontmatter** block between the `---` lines (short fields), followed by normal Markdown text.

| What | File(s) |
| --- | --- |
| Name, email, calendar link, location, GitHub/LinkedIn URLs | `src/data/site.json` |
| Home page hero (headline, subtitle, buttons, trust line) and the About teaser | `src/content/pages/home.md` |
| About page | `src/content/pages/about.md` |
| Services intro, umbrella offer and "How engagements work" | `src/content/pages/services.md` |
| Starter packages (one file per package: scope, deliverables, duration, price) | `src/content/services/*.md` |
| Case studies (one file per project; the file name becomes the URL `/work/<file-name>/`) | `src/content/case-studies/*.md` |
| Contact page intro text | `src/content/pages/contact.md` |

Tips:

- **Add a case study:** copy an existing file in `src/content/case-studies/`, rename it (e.g. `my-project.md`), and edit. `order` controls the sort order, `featured: true` shows it on the home page, `draft: true` hides it.
- **Set prices:** change `price: "[PRICE TBD]"` in each `src/content/services/*.md` file (and `hourlyRate` / the text in `pages/services.md`).
- **Set the email:** replace `"[TO COMPLETE]"` in `src/data/site.json` with a real address; the contact page will then render a `mailto:` link automatically. Set `calendarUrl` to a booking link to enable the "Pick a time" link.
- **Placeholders:** any text written as `[TO COMPLETE]`, `[TO COMPLETE: note]` or `[PRICE TBD]` is highlighted in yellow on the site so unfinished content is easy to spot. Search the repo for `TO COMPLETE` and `PRICE TBD` to find all of them before publishing.

If a required frontmatter field is missing or misspelled, the build will fail with a message naming the file. The field rules are defined in `src/content.config.ts`.

## Running locally

Requires Node.js 22.23.4+ (Node 24 recommended; CI uses Node 24).

```bash
npm install        # first time only
npm run dev        # dev server at http://localhost:4321 with live reload
npm run build      # production build into ./dist
npm run preview    # serve the built ./dist locally
```

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it with the official `actions/upload-pages-artifact` + `actions/deploy-pages` actions on every push to `main` (or manually via **Actions → Deploy to GitHub Pages → Run workflow**).

One-time setup:

1. Create the GitHub repository `Bobolsky/bobolsky.github.io`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Add the remote and push:

   ```bash
   git remote add origin git@github.com:Bobolsky/bobolsky.github.io.git
   git push -u origin main
   ```

4. The site will be live at <https://bobolsky.github.io> after the workflow finishes.

**Custom domain (later):** add a `public/CNAME` file containing the domain, configure DNS, set the domain under Settings → Pages, and update `site` in `astro.config.mjs`.

## Project structure

```
.github/workflows/deploy.yml   GitHub Pages deployment
public/                        Static files copied as-is (favicon, robots.txt)
src/
  content.config.ts            Content collection schemas
  content/
    pages/                     Copy for home, about, services, contact
    services/                  Starter packages (one .md each)
    case-studies/              Case studies (one .md each)
  data/site.json               Site-wide settings and contact details
  components/                  ServiceCard, CaseCard
  layouts/Base.astro           Page shell: header, nav, footer, meta tags
  lib/                         Content helpers, placeholder pattern
  middleware.ts                Highlights [TO COMPLETE] / [PRICE TBD] markers at build time
  pages/                       Routes: /, /services, /work, /work/[slug], /about, /contact, 404
  styles/global.css            All styles (light/dark via prefers-color-scheme)
```

## Notes

- `CONTENT_SOURCE_notion_export.txt` (private planning notes) is git-ignored and is not part of the build. Never commit it.
- Everything on the site must be approved before publishing; don't add clients, metrics or results that aren't public and confirmed.
