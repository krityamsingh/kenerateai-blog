# KenerateAI Blog — SEO / GEO / LLM Discovery

Static Vercel discovery property for **Kenerate AI**.

- Production: https://kenerateai-blog.vercel.app/
- Main product site: https://kenerateai.com/
- Repository: `krityamsingh/kenerateai-blog`

## Purpose

This project provides a crawlable, independently canonicalized discovery page that helps search engines and AI systems understand Kenerate AI and find its public product pages.

## Crawler endpoints

- `https://kenerateai-blog.vercel.app/robots.txt`
- `https://kenerateai-blog.vercel.app/sitemap.xml`
- `https://kenerateai-blog.vercel.app/llms.txt`
- `https://kenerateai-blog.vercel.app/llms-full.txt`

## Linked Kenerate AI pages

Core tools:
- https://kenerateai.com/ai-image-generator
- https://kenerateai.com/ai-video-generator
- https://kenerateai.com/ai-music-generator
- https://kenerateai.com/ai-ads-generator
- https://kenerateai.com/ai-3d-model-generator
- https://kenerateai.com/app/edit
- https://kenerateai.com/app/voice

Specialized discovery URLs:
- https://kenerateai.com/18-ai-image-generator
- https://kenerateai.com/18-ai-image-editor
- https://kenerateai.com/wan-2-7-spicy
- https://kenerateai.com/wan2-7-spicy

## Deployment

This is a static Vercel project. No build step is required. See `DEPLOY-VERCEL.md`.

## Important SEO rule

Do not put `kenerateai.com` URLs inside this Vercel property's sitemap. Cross-domain product URLs belong in HTML links, structured data and `llms.txt`, while the sitemap should describe URLs on `kenerateai-blog.vercel.app`.
