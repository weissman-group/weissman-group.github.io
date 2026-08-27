# Weissman Research Group

A formal, typesetting-inspired research-group website for Tsachy Weissman’s group at Stanford. The site is built with React, TypeScript, and vinext, then exported as static HTML for GitHub Pages.

## Pages

- Home — mission, research directions, recent publications, and contact
- Research — four research pillars with selected papers
- People — PI, advisees, affiliates, visitors, and selected alumni
- Publications — searchable and filterable recent-work archive
- Community — teaching, outreach, and related initiatives

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static GitHub Pages artifact is generated in `dist/client`.

## GitHub Pages

The included workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site whenever `main` is updated. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the source.

Use either an `owner.github.io` repository or a custom domain. The current vinext release does not reliably export a GitHub Pages project subpath (`owner.github.io/repository`), so the workflow stops with a clear error rather than publishing broken asset links. Project-site support can be enabled after upgrading vinext and validating its `basePath` export.

## Content maintenance

Most editorial content is in `app/site-data.ts`. Before a public launch, confirm the current people roster and teaching schedule with the group; research affiliations change more quickly than publication records.
