# Weissman Research Group

A formal research-group website for Tsachy Weissman’s group at Stanford, organized around the I³ theme: Information, Intelligence, and Inference. The site includes persistent light and dark themes, is built with React, TypeScript, and vinext, and exports as static HTML for GitHub Pages.

## Pages

- Home — I³ identity, mission, and primary navigation
- Research — four research pillars with selected papers
- People — PI, advisees, affiliates, visitors, and selected alumni
- Publications — searchable and filterable recent-work archive
- News — group-member updates, awards, talks, and internships
- Software & Patents — implementations, estimators, and patent archive
- Courses — teaching and current course links
- Outreach — Compression Forum, STEM to SHTEM, and related initiatives
- Media & Press — selected coverage and cultural appearances

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
