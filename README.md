# 🚀 Kenerate AI Blog — GEO & SEO Optimized Static Engine

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-brightgreen?style=for-the-badge&logo=google)](https://crepal.ai)
[![GEO & LLM Ready](https://img.shields.io/badge/GEO%20%26%20LLM-Friendly-blueviolet?style=for-the-badge&logo=openai)](https://crepal.ai/llms.txt)
[![Static HTML5](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Markdown-orange?style=for-the-badge)](https://developer.mozilla.org)

> **Kenerate AI Blog** (published via Crepal AI) is a ultra-fast, zero-build, static publishing framework specifically engineered for **Generative Engine Optimization (GEO)**, modern **SEO**, and **AI/LLM Content Indexing**. 

---

## 📌 Overview

Traditional blogs optimize purely for standard search engines (Google, Bing). **Kenerate AI Blog** is designed dual-purpose:
1. **Human & Traditional Search (SEO)**: Beautiful, responsive semantic HTML5 page with high performance, Open Graph metadata, and comprehensive Schema.org JSON-LD structured data (`Article`, `TechArticle`, `FAQPage`).
2. **AI & Generative Engines (GEO)**: Machine-readable Markdown mirrors (`index.md`), dedicated `llms.txt` discovery protocols, clean heading semantics, and specialized `robots.txt` crawler rules for AI engines like OpenAI, Perplexity, Anthropic, and Google Gemini.

---

## ✨ Key Features

- ⚡ **Zero-Build Architecture**: Static HTML, CSS, and Markdown. No compilation, node modules, or build steps required.
- 🎯 **GEO (Generative Engine Optimization)**: Engineered for inclusion in LLM retrieval pipelines and AI Search engines (ChatGPT Search, Perplexity, Claude, Gemini).
- 🤖 **LLM Discovery Standard (`llms.txt`)**: Implements the emerging `llms.txt` convention for LLM agent discovery and ingestion.
- 📑 **Dual Content Format**: 
  - `index.html`: Interactive, fully styled HTML5 page.
  - `article.md` (`index.md`): Unstyled, clean Markdown version accessible for API clients and LLM web scrapers.
- 🏷️ **Rich Schema.org JSON-LD**: Comprehensive graph with `Organization`, `WebSite`, `WebPage`, `Article`, `TechArticle`, and `FAQPage` schemas for maximum search visibility and rich snippets.
- 🛡️ **Advanced Crawler Policies**: Fine-grained `robots.txt` rules separating search indexing bots (`OAI-SearchBot`) from model training crawlers (`GPTBot`).
- 🌐 **Vercel Production Routing**: Includes `vercel.json` pre-configured with URL rewrites, redirects, MIME types, and security headers (`X-Frame-Options`, `X-Content-Type-Options`, etc.).

---

## 📂 Repository Structure

```
.
├── index.html          # Primary semantic HTML5 article page with responsive design & JSON-LD
├── article.md          # Full Markdown source of the guide (served at /index.md)
├── llms.txt            # LLM discovery index file for AI search engines & crawlers
├── robots.txt          # Crawler rules distinguishing AI search bots from training bots
├── sitemap.xml         # XML Sitemap for search engine indexers
├── vercel.json         # Vercel deployment routing, security headers & MIME type configuration
├── vercelignore        # Files ignored by Vercel deployment
├── 404.html            # Custom static 404 Error page
├── DEPLOY-VERCEL.md    # Detailed Vercel deployment documentation
└── README-SEO-GEO.md   # Pre-publication SEO & GEO checklist
```

---

## 📖 Current Featured Article

**Title**: *How to Audit an NSFW AI Privacy Policy: 15-Point Guide*  
**Canonical URL**: `https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/`  
**Markdown Alternate**: `https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/index.md`

### Audit Topics Covered:
1. **Upload Privacy & Server Storage**: Inspecting temp uploads vs persistent cloud storage.
2. **Explicit Deletion vs Ghost Retention**: Soft deletion vs hard database/S3 scrubbing.
3. **AI Model Training Exclusions**: Opt-out clauses for Fine-Tuning, LoRAs, and Diffusion model training.
4. **Human Review Scenarios**: CSAM filtering vs arbitrary manual moderation flags.
5. **Third-Party Sub-Processors**: Payment processors (Stripe/CCBill), GPU clouds (RunPod/Lambda), and vector DBs.
6. **EXIF & Image Metadata Scrubbing**: Preservation of geolocation and camera identifiers.
7. **Account Deletion & Data Rights**: GDPR/CCPA compliance and right-to-be-forgotten execution.

---

## ⚙️ GEO & SEO Architecture Details

### 1. Dual Format Serving (`vercel.json`)
The application serves HTML for browsers and Markdown for machine readers via `vercel.json` rewrites:
```json
{
  "rewrites": [
    {
      "source": "/blog/agent/audit-nsfw-ai-privacy-policy/",
      "destination": "/index.html"
    },
    {
      "source": "/blog/agent/audit-nsfw-ai-privacy-policy/index.md",
      "destination": "/article.md"
    }
  ]
}
```

### 2. LLM Discovery Protocol (`llms.txt`)
`llms.txt` sits at the root to guide LLM agents to high-density content without HTML noise:
```markdown
# Crepal

> Crepal publishes guides about AI tools, privacy, safety, and practical evaluation of generative AI services.

## Key guides
- [How to Read an NSFW AI Tool Privacy Policy](https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/)
- [Markdown version](https://crepal.ai/blog/agent/audit-nsfw-ai-privacy-policy/index.md)
```

### 3. Crawler Differentiation (`robots.txt`)
Allows search visibility while retaining governance over model training:
```txt
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /
```

---

## 🚀 Deployment Guide

### Option 1: Deploy with Vercel CLI (Recommended)

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. Deploy to preview environment:
   ```bash
   vercel
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub & Vercel Integration

1. Push this repository to GitHub.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New → Project**.
3. Import `kenerateai-blog`.
4. Set Framework Preset to **Other** (no build command necessary).
5. Click **Deploy**.
6. Under Project Settings -> Domains, add your domain (`crepal.ai`).

---

## 🛠️ Local Development & Testing

Since this project is pure static HTML/CSS/JS/Markdown, you can serve it locally using any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node / npx
npx serve .
```

Open your browser at `http://localhost:8000` to inspect the rendering and validation.

---

## 📋 Pre-Publish Checklist

Before pushing new articles to production:
- [x] Ensure canonical URLs in `<head>` match production (`https://crepal.ai/...`).
- [x] Verify `<script type="application/ld+json">` has valid syntax and accurate `datePublished` / `dateModified` timestamps.
- [x] Include `og:image` and `twitter:image` paths to social sharing cards.
- [x] Keep `article.md` updated in tandem with `index.html`.
- [x] Update `sitemap.xml` and `llms.txt` with new article links.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p center>
  Crafted for <b>Kenerate AI & Crepal AI</b> • Optimized for Humans & AI Agents
</p>