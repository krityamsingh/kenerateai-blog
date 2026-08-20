# Vercel Deployment

This folder is a static SEO/GEO preview + drop-in optimization pack.

## Preview deploy

```bash
npm i -g vercel
cd kenerateai_2026_seo_geo_vercel
vercel
```

Production deployment:

```bash
vercel --prod
```

## Important

Do NOT replace the live KenerateAI application with this static preview unless that is intentional.
For the real site, merge these assets into the production codebase:

- metadata from `metadata-page-map.csv`
- JSON-LD from `schema-homepage.json`
- crawler rules from `robots.txt`
- entity file from `llms.txt`
- relevant URLs from `sitemap.xml`
- visible copy/FAQ patterns from `index.html`
- keyword assignments from `keywords-2026.csv`

If the production site already has a sitemap or robots policy, merge rather than overwrite.
