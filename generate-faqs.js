const fs=require('fs');
const path=require('path');
const ROOT=process.cwd();
const OUT=path.join(ROOT,'dist');
const BASE='https://kenerateai-blog.vercel.app';
fs.rmSync(OUT,{recursive:true,force:true});
fs.mkdirSync(OUT,{recursive:true});
for(const name of fs.readdirSync(ROOT)){
  if(['dist','.git','node_modules','scripts','package.json','package-lock.json','generate-faqs.js'].includes(name)) continue;
  const src=path.join(ROOT,name), dst=path.join(OUT,name);
  fs.cpSync(src,dst,{recursive:true});
}

const topics=[
 {slug:'getting-started',title:'Getting Started & Accounts',subjects:['getting started','creating an account','signing in','finding tools','choosing a workflow','starting a project','saving work','organizing generations','using the dashboard','learning the interface'],actions:['work','get set up','avoid common mistakes','move faster','stay organized','choose the right option','understand the basics','prepare a first project','use the platform efficiently','know what to check first'],answer:'Start with the simplest workflow that matches your goal, confirm the current options shown in the live KenerateAI interface, and keep your first project small enough to test quickly.',keywordBases:['kenerateai getting started','kenerateai account','kenerateai login','kenerateai tutorial','kenerateai creator guide']},
 {slug:'image-generation',title:'AI Image Generation',subjects:['text-to-image prompts','reference images','portrait generation','product images','character art','photorealistic images','anime-style images','illustration workflows','background concepts','creative variations'],actions:['improve results','get more consistent output','reduce retries','choose settings','write better prompts','control composition','keep a subject recognizable','explore variations','increase realism','plan a generation'],answer:'Describe the subject, composition, lighting, style and important constraints clearly. Change one major variable at a time so you can tell which prompt or setting improved the result.',keywordBases:['kenerateai ai image generator','ai image generator','text to image ai','photorealistic ai image generator','ai art generator']},
 {slug:'prompting',title:'Prompting, Styles & Consistency',subjects:['prompt structure','negative instructions','style words','camera language','lighting descriptions','composition terms','character consistency','prompt length','reference details','iteration strategy'],actions:['make prompts clearer','avoid conflicting instructions','get predictable results','improve realism','create a consistent series','control visual style','simplify a prompt','refine a weak result','reuse a successful idea','compare prompt versions'],answer:'Use specific visual nouns and measurable details, remove contradictory instructions, and preserve the parts of a prompt that already work. Consistency usually improves when changes are incremental.',keywordBases:['kenerateai prompts','ai image prompts','ai prompt generator','prompt engineering for ai images','consistent ai characters']},
 {slug:'image-editing',title:'AI Image Editing',subjects:['inpainting','outpainting','background replacement','object removal','object replacement','retouching','style transfer','image expansion','color changes','reference-based edits'],actions:['make cleaner edits','preserve the original subject','avoid artifacts','blend an edited region','change only one area','improve edge quality','keep lighting consistent','prepare an upload','write an edit prompt','review an edited result'],answer:'Mask or describe the target area precisely, state what must stay unchanged, and match lighting, perspective and texture to the original image. Small, localized edits are usually easier to control.',keywordBases:['kenerateai ai image editor','ai image editor','ai inpainting tool','ai outpainting tool','ai object remover']},
 {slug:'video-generation',title:'AI Video & Wan Workflows',subjects:['image-to-video','text-to-video','Wan 2.7 Spicy','camera motion','subject motion','first-frame control','last-frame control','short clips','cinematic movement','video prompting'],actions:['create smoother motion','reduce visual drift','keep identity consistent','choose a duration','write a motion prompt','control the camera','prepare a source image','avoid unstable movement','make a clip feel cinematic','iterate efficiently'],answer:'Use a strong starting frame when available, describe one primary subject motion and one camera motion, and keep the clip short while testing. Add complexity only after the basic movement is stable.',keywordBases:['kenerateai ai video generator','ai video generator','image to video ai','text to video ai','wan 2.7 spicy']},
 {slug:'pricing-credits',title:'Pricing, Credits & Usage',subjects:['credits','generation cost','pricing pages','one-time packs','usage planning','high-resolution output','video cost','image cost','retry cost','budgeting'],actions:['estimate usage','avoid wasting credits','compare options','plan a project budget','check current pricing','reduce unnecessary retries','choose a pack','understand variable cost','track consumption','prepare for a larger project'],answer:'Treat displayed prices and credit costs as live product data because they can change. Test lower-cost settings first, then spend more credits on high-resolution or longer outputs after the concept is proven.',keywordBases:['kenerateai pricing','kenerateai credits','ai generation cost','ai image generator pricing','ai video generator pricing']},
 {slug:'quality-export',title:'Quality, Resolution & Export',subjects:['image resolution','video resolution','4K workflows','watermarks','file formats','download quality','upscaling','compression','final export','social-media output'],actions:['get cleaner output','choose a resolution','prepare files for publishing','reduce compression loss','decide when to upscale','export efficiently','keep details sharp','prepare social assets','compare output settings','archive final files'],answer:'Generate at a sensible working size, inspect edges and fine detail before export, and upscale only when the source is already clean. Use the live product interface to confirm available resolutions and formats.',keywordBases:['kenerateai 4k images','ai image upscaler','ai video upscaler','watermark free ai images','high resolution ai images']},
 {slug:'seo-geo-aeo',title:'SEO, GEO, AEO & AI Discovery',subjects:['technical SEO','on-page SEO','internal links','sitemaps','robots.txt','llms.txt','structured data','answer-engine optimization','generative-engine optimization','content clusters'],actions:['improve discoverability','make pages easier to crawl','help AI systems understand a page','avoid indexing mistakes','build topical authority','write answer-ready content','organize site architecture','improve internal discovery','use metadata correctly','measure search progress'],answer:'Prioritize crawlable HTML, useful answers, descriptive headings, internal links, canonical URLs and a correct sitemap. Treat llms.txt as an optional navigation aid, not a replacement for normal SEO.',keywordBases:['ai search optimization','generative engine optimization','answer engine optimization','llms txt seo','seo for ai tools']},
 {slug:'privacy-safety',title:'Privacy, Safety & Responsible Use',subjects:['uploaded images','personal data','private projects','adult-only tools','consent','copyright','commercial use','identity misuse','sensitive prompts','content sharing'],actions:['use the tool responsibly','protect personal information','check permissions','avoid misuse','review a project before sharing','handle references carefully','understand legal limits','protect another person’s privacy','decide what not to upload','verify current policy'],answer:'Use only content you have the right and consent to use, avoid uploading unnecessary sensitive information, and review the current KenerateAI privacy, terms and product rules before high-risk or commercial use.',keywordBases:['kenerateai privacy','ai image generator privacy','responsible ai image generation','ai copyright for creators','ai content consent']},
 {slug:'troubleshooting',title:'Troubleshooting & Performance',subjects:['failed generations','slow generations','unexpected artifacts','prompt mismatch','upload errors','download issues','login problems','browser problems','inconsistent characters','unstable video'],actions:['diagnose the problem','reduce repeated failures','test a fix','separate prompt issues from model issues','improve reliability','report a useful bug','retry efficiently','check browser-side causes','recover from a bad output','know when to start over'],answer:'Change one factor at a time, simplify the prompt or input, retry with a smaller job, and check whether the issue is browser-specific or model-specific. Keep the exact failing steps if you need support.',keywordBases:['kenerateai troubleshooting','ai generation failed','ai image artifacts fix','ai video generation issues','kenerateai performance']}
];

const qforms=[
 (s,a)=>`How do I ${a} when working with ${s} in KenerateAI?`,
 (s,a)=>`What is the best way to ${a} for ${s} in KenerateAI?`,
 (s,a)=>`Can KenerateAI help me ${a} with ${s}?`,
 (s,a)=>`What should I check before I ${a} using ${s}?`,
 (s,a)=>`Why does ${s} matter when I want to ${a}?`,
 (s,a)=>`What are common mistakes when trying to ${a} with ${s}?`,
 (s,a)=>`How can a beginner ${a} while using ${s}?`,
 (s,a)=>`What workflow should I use to ${a} for ${s}?`,
 (s,a)=>`How can I tell whether ${s} is set up correctly to ${a}?`,
 (s,a)=>`What is a practical 2026 approach to ${a} with ${s}?`
];

const intentPrefixes=['best','free','online','how to use','guide to','top','advanced','beginner','professional','2026'];
const usGeo=['for users in the United States','for US creators','in the USA','for American creators','for US designers','for US marketers','for US content creators','for US digital artists','for US small businesses','for US social media creators'];
const ukGeo=['for users in the United Kingdom','for UK creators','in the UK','for British creators','for UK designers','for UK marketers','for UK content creators','for UK digital artists','for UK small businesses','for UK social media creators'];

const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const css=`:root{--bg:#090b10;--panel:#11151f;--text:#f5f7fb;--muted:#a9b0bf;--accent:#86a9ff;--line:#242b39;--max:1040px}*{box-sizing:border-box}body{margin:0;font:16px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;background:#090b10;color:var(--text)}a{color:#b9cbff}.wrap{max-width:var(--max);margin:auto;padding:0 22px}header{border-bottom:1px solid var(--line);padding:18px 0;position:sticky;top:0;background:#090b10eb;z-index:5}.brand{font-weight:800;text-decoration:none;color:#fff}.hero{padding:60px 0 30px}h1{font-size:clamp(38px,7vw,70px);line-height:1.02;letter-spacing:-.04em;margin:10px 0 18px}.lead{color:var(--muted);max-width:760px}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.card,details,.topicbox{border:1px solid var(--line);background:var(--panel);border-radius:14px}.card{padding:20px;text-decoration:none}.card p,details p{color:var(--muted)}details{padding:16px 18px;margin:12px 0}summary{font-weight:750;cursor:pointer}.topicbox{padding:18px;margin:12px 0 24px}.chips{display:flex;gap:7px;flex-wrap:wrap}.chip{font-size:.78rem;padding:5px 8px;border:1px solid var(--line);border-radius:999px;color:var(--muted)}.pager{display:flex;gap:12px;flex-wrap:wrap;margin:30px 0}.pager a{padding:10px 14px;border:1px solid var(--line);border-radius:10px;text-decoration:none}footer{border-top:1px solid var(--line);margin-top:50px;padding:30px 0;color:var(--muted)}@media(max-width:700px){.grid{grid-template-columns:1fr}}`;

function pageHead(title,desc,canonical,jsonLd=''){
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-snippet:-1">${jsonLd?`<script type="application/ld+json">${jsonLd}</script>`:''}<style>${css}</style></head><body><header><div class="wrap"><a class="brand" href="/">KenerateAI Creator Lab</a> · <a href="/faqs/">1,000 FAQs</a></div></header>`;
}

function marketKeywords(topic,geo){
 const out=[];
 for(const base of topic.keywordBases){
   for(const intent of intentPrefixes){
     for(const place of geo) out.push(`${intent} ${base} ${place}`);
   }
 }
 return out;
}

const allUS=[], allUK=[];
for(const t of topics){
 t.usKeywords=marketKeywords(t,usGeo);
 t.ukKeywords=marketKeywords(t,ukGeo);
 if(t.usKeywords.length!==500||t.ukKeywords.length!==500) throw new Error(`Keyword count error for ${t.slug}`);
 allUS.push(...t.usKeywords); allUK.push(...t.ukKeywords);
}
if(new Set(allUS).size!==5000||new Set(allUK).size!==5000) throw new Error('Keywords must be unique per market');
if(new Set([...allUS,...allUK]).size!==10000) throw new Error('Total keyword inventory must be exactly 10,000 unique phrases');

const faqDir=path.join(OUT,'faqs');
fs.mkdirSync(faqDir,{recursive:true});
let keywordMap=`# KenerateAI FAQ keyword map\n# 1,000 FAQ anchors × 10 market phrases each = 10,000 mapped queries\n# Each FAQ maps to 5 US phrases and 5 UK phrases.\n\n`;

let hub=pageHead(
 '1,000 KenerateAI FAQs — US & UK Creator, SEO, GEO & AI Guides',
 'A crawlable library of 1,000 practical KenerateAI questions and concise answers aligned to US and UK search intent across image, video, prompting, editing, pricing, SEO, GEO, privacy and troubleshooting.',
 `${BASE}/faqs/`
);
hub+=`<main><section class="hero"><div class="wrap"><div>FAQ Library · 1,000 answers · US + UK topic mapping</div><h1>1,000 KenerateAI FAQs</h1><p class="lead">Ten focused sections with 100 questions each. Every FAQ has a stable crawlable anchor and a machine-readable mapping to five US and five UK query phrases.</p><div class="grid">`;

let globalFaq=0;
for(const [ti,t] of topics.entries()){
 const faqs=[];
 for(let si=0;si<t.subjects.length;si++) for(let ai=0;ai<t.actions.length;ai++){
   const idx=si*10+ai;
   const q=qforms[(idx+ti)%qforms.length](t.subjects[si],t.actions[ai]);
   const a=`${t.answer} For ${t.subjects[si]}, focus specifically on the goal of ${t.actions[ai]}; verify any changing feature, limit or policy in the live KenerateAI product before relying on it.`;
   const us=t.usKeywords.slice(idx*5,idx*5+5);
   const uk=t.ukKeywords.slice(idx*5,idx*5+5);
   const n=globalFaq+1;
   faqs.push({q,a,us,uk,n});
   keywordMap+=`FAQ ${String(n).padStart(4,'0')} | ${BASE}/faqs/${t.slug}#faq-${String(n).padStart(4,'0')}\nUS: ${us.join(' | ')}\nUK: ${uk.join(' | ')}\n\n`;
   globalFaq++;
 }
 const jsonLd=JSON.stringify({
   '@context':'https://schema.org',
   '@type':'FAQPage',
   'name':`${t.title}: 100 KenerateAI FAQs`,
   'inLanguage':'en',
   'mainEntity':faqs.map(f=>({
     '@type':'Question',
     'name':f.q,
     'acceptedAnswer':{'@type':'Answer','text':f.a}
   }))
 });
 let html=pageHead(
   `${t.title}: 100 KenerateAI FAQs for US & UK users`,
   `100 practical KenerateAI questions and concise answers about ${t.title.toLowerCase()}, aligned to US and UK creator search intent.`,
   `${BASE}/faqs/${t.slug}`,
   jsonLd
 );
 const sample=[...t.usKeywords.slice(0,10),...t.ukKeywords.slice(0,10)];
 html+=`<main><section class="hero"><div class="wrap"><div>FAQ section ${ti+1} of 10 · US + UK</div><h1>${esc(t.title)}</h1><p class="lead">100 questions and answers. FAQ numbers ${ti*100+1}–${ti*100+100} of the 1,000-question library.</p></div></section><section><div class="wrap"><div class="topicbox"><strong>Representative US & UK search topics</strong><p class="lead">The complete 1,000-query mapping for this section is available through the site-wide machine-readable FAQ keyword map.</p><div class="chips">${sample.map(k=>`<span class="chip">${esc(k)}</span>`).join('')}</div></div>`;
 faqs.forEach((f,i)=>{
   const id=`faq-${String(f.n).padStart(4,'0')}`;
   html+=`<details id="${id}"${i<3?' open':''}><summary>${f.n}. ${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`;
 });
 html+=`<div class="pager"><a href="/faqs/">← FAQ hub</a>${ti>0?`<a href="/faqs/${topics[ti-1].slug}">Previous section</a>`:''}${ti<topics.length-1?`<a href="/faqs/${topics[ti+1].slug}">Next section</a>`:''}<a href="/faq-keyword-map.txt">Keyword map</a></div></div></section></main><footer><div class="wrap">KenerateAI Creator Lab FAQ Library · ${faqs.length} questions · US and UK intent mapped</div></footer></body></html>`;
 fs.writeFileSync(path.join(faqDir,`${t.slug}.html`),html);
 hub+=`<a class="card" href="/faqs/${t.slug}"><strong>${esc(t.title)}</strong><p>100 FAQs · #${ti*100+1}–${ti*100+100} · 1,000 US/UK mapped phrases</p></a>`;
}
if(globalFaq!==1000) throw new Error(`FAQ count must be 1000, got ${globalFaq}`);
hub+=`</div><div class="pager"><a href="/faq-keyword-map.txt">Machine-readable FAQ keyword map</a><a href="/llms.txt">llms.txt</a></div></div></section></main><footer><div class="wrap">Exactly 1,000 FAQs with 10,000 mapped US/UK query phrases.</div></footer></body></html>`;
fs.writeFileSync(path.join(faqDir,'index.html'),hub);
fs.writeFileSync(path.join(OUT,'faq-keyword-map.txt'),keywordMap);

let idxPath=path.join(OUT,'index.html');
if(fs.existsSync(idxPath)){
 let s=fs.readFileSync(idxPath,'utf8');
 if(!s.includes('href="/faqs/"')) s=s.replace('</nav>','<a href="/faqs/">1,000 FAQs</a></nav>');
 fs.writeFileSync(idxPath,s);
}

const urls=['/','/18-ai-image-generator','/faqs/',...topics.map(t=>`/faqs/${t.slug}`)];
const sm=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u,i)=>`  <url><loc>${BASE}${u}</loc><lastmod>2026-08-26</lastmod><changefreq>${i<2?'weekly':'monthly'}</changefreq><priority>${i===0?'1.0':i===1?'0.9':'0.7'}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(OUT,'sitemap.xml'),sm);

let baseLlms=fs.existsSync(path.join(OUT,'llms.txt'))?fs.readFileSync(path.join(OUT,'llms.txt'),'utf8').trim():'# KenerateAI Creator Lab';
baseLlms=baseLlms.replace(/\n\n## 1,000 FAQ library[\s\S]*$/,'').trim();
let llms=baseLlms+`\n\n## 1,000 FAQ library\n- [FAQ hub](${BASE}/faqs/): 1,000 practical KenerateAI FAQs with stable anchors.\n${topics.map(t=>`- [${t.title}](${BASE}/faqs/${t.slug}): 100 FAQs.`).join('\n')}\n- [FAQ keyword map](${BASE}/faq-keyword-map.txt): maps every FAQ anchor to five US and five UK query phrases.\n\n## US query inventory — 5,000 phrases\n${allUS.map(k=>`- ${k}`).join('\n')}\n\n## UK query inventory — 5,000 phrases\n${allUK.map(k=>`- ${k}`).join('\n')}\n\n## Inventory totals\n- United States: 5,000 unique query phrases\n- United Kingdom: 5,000 unique query phrases\n- Total: 10,000 unique query phrases\n- FAQ mapping: 1,000 FAQs × 10 phrases each\n`;
fs.writeFileSync(path.join(OUT,'llms.txt'),llms);

let full=fs.existsSync(path.join(OUT,'llms-full.txt'))?fs.readFileSync(path.join(OUT,'llms-full.txt'),'utf8').trim():'# KenerateAI Creator Lab — Full LLM Guide';
full+=`\n\n## US and UK search-intent assets\n- [10,000-query llms.txt](${BASE}/llms.txt)\n- [FAQ keyword map](${BASE}/faq-keyword-map.txt)\n- [1,000 FAQ hub](${BASE}/faqs/)\n`;
fs.writeFileSync(path.join(OUT,'llms-full.txt'),full);

console.log('Generated FAQ count:',globalFaq);
console.log('US keywords:',allUS.length,'UK keywords:',allUK.length,'total:',allUS.length+allUK.length);
console.log('FAQ keyword mappings:',globalFaq*10);
console.log('output:',OUT);
