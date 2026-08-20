# Deploy this GEO/SEO blog on Vercel

This folder is ready for a static Vercel deployment. There is no framework, package manager, or build command required.

## Production route

The article is served at:

`/blog/agent/audit-nsfw-ai-privacy-policy/`

The canonical URL already embedded in the page is:

`https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/`

For the canonical URL to be correct in production, connect `crepal.ai` (or the appropriate Crepal domain/project) to this Vercel deployment.

## Files Vercel serves

- `/blog/agent/audit-nsfw-ai-privacy-policy/` → `index.html`
- `/blog/agent/audit-nsfw-ai-privacy-policy/index.md` → `article.md`
- `/llms.txt` → LLM discovery file
- `/robots.txt` → crawler rules
- `/sitemap.xml` → sitemap

## Deploy with the Vercel CLI

From inside this folder:

```bash
npm install -g vercel
vercel
```

Follow the prompts to create or link the Vercel project.

When the preview looks correct, deploy production:

```bash
vercel --prod
```

## Deploy through GitHub + Vercel

1. Create a GitHub repository.
2. Put all files from this folder at the repository root.
3. Push the repository.
4. In Vercel, choose **Add New → Project**.
5. Import the repository.
6. Leave Framework Preset as **Other** if Vercel does not auto-detect a framework.
7. Do not add a build command.
8. Deploy.
9. Add the production domain in Vercel project settings.

## Important SEO note

Do not publish the same page permanently on both a `*.vercel.app` URL and `crepal.ai` as separate canonical pages. The HTML canonical tag points to Crepal, so the Crepal domain should be the primary production URL.

## Routing

`vercel.json` redirects the deployment root to the article URL and rewrites the canonical article path to the static HTML file. It also adds content types for the Markdown, LLM, robots, and sitemap files plus basic security headers.

## Crawler controls

The included `robots.txt` currently permits both `OAI-SearchBot` and `GPTBot`. If you want ChatGPT Search discovery but do not want GPTBot training crawl, change only the GPTBot section to:

```txt
User-agent: GPTBot
Disallow: /
```

Keep `OAI-SearchBot` allowed if ChatGPT Search visibility is desired.
