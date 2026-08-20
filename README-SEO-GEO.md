# SEO + GEO deployment notes

Canonical URL:
https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/

Files:
- audit-nsfw-ai-privacy-policy.html — complete semantic HTML page
- audit-nsfw-ai-privacy-policy.md — clean Markdown version for machine consumption
- llms.txt — optional emerging LLM-discovery convention
- robots.txt — crawl policy with OAI-SearchBot and GPTBot separated
- sitemap.xml — canonical URL discovery

Before publishing:
1. Put the HTML at the canonical URL.
2. Expose the Markdown version as `https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/index.md` or change the alternate-link URL.
3. Merge the provided robots.txt rules with your site's existing robots.txt instead of overwriting unrelated rules.
4. Merge the sitemap entry into your real sitemap.
5. Add a real social-preview image before adding `og:image`.
6. Add `datePublished` / `dateModified` to JSON-LD only when you know the real dates.
7. If the article has a real named author, replace the Organization author with that Person and link an author profile.
8. Keep the visible article and structured data consistent.
9. Do not keyword-stuff. The meta keywords tag is included because requested, but modern search visibility depends much more on useful content, crawlability, semantics, structured data, and strong page-level metadata.
