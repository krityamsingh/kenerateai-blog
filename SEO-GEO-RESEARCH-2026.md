# KenerateAI SEO + GEO / LLM Research Snapshot — 2026

## Scope

This package is a public-web SEO/GEO optimization snapshot built from:
- KenerateAI public homepage, product pages, pricing, FAQ, blogs and all-links directory.
- 2026 public research/guidance from Google Search Central, Ahrefs, Semrush, Search Engine Journal, Zapier and official AI crawler documentation.

It does **not** claim private keyword-volume data. The 300+ keyword list is a relevance/intent map.
Validate actual impressions, clicks, volume, difficulty and conversions with Google Search Console, Semrush, Ahrefs or another live data source.

## High-priority findings

### 1. Entity consistency is the biggest immediate fix
The public site currently exposes conflicting counts and pricing statements in different sections.
Examples observed in the crawl include varying model counts and mixed "$7" / "$15" starting-price language.
For AI extraction, one stable source of truth is better than repeating inconsistent claims across many pages.

Recommended rule:
- Pricing page = source of truth for current pricing/credits.
- Models directory = source of truth for current model availability/count.
- Terms = source of truth for ownership/license/legal claims.
- FAQ = concise restatement that matches those sources exactly.
- Homepage = broad claim such as "hundreds of models" if the exact count changes frequently.

### 2. Do not use 300 keywords on one page
Use topic clusters and assign each cluster to a matching URL.
The supplied `keywords-2026.csv` maps each phrase to a recommended page.
This avoids cannibalization and keyword stuffing.

### 3. 2026 search behavior favors conversational and multi-part intent
Semrush and Search Engine Journal report longer, more complex, natural-language queries.
Ahrefs highlights query fan-out and semantic/entity optimization.
That is why this package includes full-question prompts such as:
- "which AI video generator has Veo 3.1 and Kling"
- "best free AI image generator with commercial rights"
- "how to turn image into 3D model"

### 4. Comparison and commercial pages matter
Semrush reported a 71% increase in AI Overviews on commercial-intent SERPs in a 600,000-keyword study.
Ahrefs' 2026 SEO-trends article also reports that "best" list formats appear frequently among AI-cited sources.
KenerateAI already has a strong alternatives/comparisons architecture; keep those pages factual and genuinely comparative.

### 5. LLM visibility still depends heavily on ordinary SEO
Google's May 15, 2026 guidance says generative-search optimization is still rooted in core Search systems.
Google explicitly says special AI-only markup, Markdown copies and llms.txt are not required for Google's generative Search features.

### 6. llms.txt is included, but treat it as optional
Ahrefs analyzed 137,000 domains in 2026 and reported that 97% of llms.txt files received zero requests during the study period.
Use `llms.txt` as a low-cost supplementary entity map, not as a ranking mechanism.

### 7. robots.txt can enable crawl eligibility, not guarantee citations
The supplied `robots.txt` allows:
- OAI-SearchBot
- GPTBot
- ClaudeBot / Claude-User
- PerplexityBot
- Googlebot / Google-Extended
- Applebot / Applebot-Extended
- bingbot

Allowing a crawler does not force it to crawl, index, cite or train on the site.

## Public 2026 sources used

1. Google Search Central — "A new resource for optimizing for generative AI in Google Search" — May 15, 2026
   https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing

2. Ahrefs — "5 AI Search Trends I’m Seeing in 2026, Backed by Ahrefs Data" — July 24, 2026
   https://ahrefs.com/blog/ai-search-trends/

3. Ahrefs — "10 SEO Trends I’ve Seen Firsthand in 2026 (With Data)" — June 18, 2026
   https://ahrefs.com/blog/seo-trends/

4. Ahrefs — "We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read" — June 15, 2026
   https://ahrefs.com/blog/llmstxt-study/

5. Semrush — "AI Search Trends for 2026 & How You Can Adapt to Them" — March 17, 2026
   https://www.semrush.com/blog/ai-search-trends/

6. Semrush — "AI Overviews are expanding across commercial intent search" — July 2, 2026
   https://www.semrush.com/blog/ai-overviews-commercial-search-study/

7. Semrush — "AI visibility: What it is and how to grow yours in 2026" — March 27, 2026
   https://www.semrush.com/blog/ai-visibility/

8. Search Engine Journal — "AI Content Alone Won’t Fix Your Search Visibility" — May 29, 2026
   https://www.searchenginejournal.com/ai-content-alone-wont-fix-your-seo-rankings-heres-what-will/577380/

9. Zapier — "The 8 best AI image generators in 2026" — June 24, 2026
   https://zapier.com/blog/best-ai-image-generator/

10. OpenAI Help — Publishers and Developers FAQ
    https://help.openai.com/en/articles/12627856-publishers-and-developers-faq

11. Perplexity Help — robots.txt guidance — updated July 16, 2026
    https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt

12. Anthropic Help — crawler and robots.txt guidance
    https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler

13. Google Crawling Infrastructure — Google-Extended
    https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers

14. Apple Support — About Applebot
    https://support.apple.com/en-ca/119829

## 2026 public-data points worth tracking

- Ahrefs reported searches for "AI search tracking" up 184% and "AI rank tracking" up 175%.
- Ahrefs reported searches for `llms.txt` up 154% year over year, but its separate log study found little real-world fetching.
- Semrush's 600,000-keyword commercial-intent study reported AI Overview appearance up 71% across commercial-intent SERPs.
- Google launched dedicated generative-AI performance reporting experiments in Search Console in June 2026.

## Deployment rule

Do not replace a production sitemap containing more URLs with the small `sitemap.xml` in this package.
Merge the supplied URLs and crawler rules into the production site's existing configuration.
