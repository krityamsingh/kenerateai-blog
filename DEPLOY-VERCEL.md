# Deploy Kenerate AI Blog on Vercel

This repository is a static Vercel site. No framework, package manager or build command is required.

## Production URL

https://kenerateai-blog.vercel.app/

The Vercel property is intentionally self-canonicalized so it can be crawled and indexed independently while linking to https://kenerateai.com/ as the product source of truth.

## Public crawler files

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/llms-full.txt`

## Deployment

The GitHub repository is connected to Vercel. A production deployment can be triggered after changes to the main branch, or manually from Vercel.

Framework preset: **Other**
Build command: **none**
Output directory: repository root

## SEO / GEO rules

1. The Vercel homepage canonical must remain `https://kenerateai-blog.vercel.app/`.
2. The Vercel `robots.txt` must reference `https://kenerateai-blog.vercel.app/sitemap.xml`.
3. The Vercel sitemap should contain only URLs that actually belong to the Vercel property.
4. Kenerate AI product URLs should be linked from page content and `llms.txt`; they should not be inserted into the Vercel sitemap because they belong to a different host.
5. Keep KenerateAI product claims synchronized with the live product, Pricing, FAQ and Terms pages.
