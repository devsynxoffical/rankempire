(()=>{
const root=document.querySelector('[data-tool]');if(!root)return;
const kind=root.dataset.tool,$=s=>root.querySelector(s),out=$('#t-out');
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const R=(lvl,t,d)=>`<div class="res ${lvl}"><i>${lvl==='ok'?'&#10003;':lvl==='warn'?'!':'&times;'}</i><div><b>${E(t)}</b><span>${d}</span></div></div>`;
const ring=(sc)=>{const c=2*Math.PI*48,col=sc>=80?'#1f9d55':sc>=55?'#e8a317':'#ff4c39';return `<div class="ring"><svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="48" stroke="#eae0cf" stroke-width="10" fill="none"/><circle cx="55" cy="55" r="48" stroke="${col}" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-sc/100)}" style="transition:stroke-dashoffset 1s"/></svg><b>${sc}</b></div>`};
const parse=h=>new DOMParser().parseFromString(h,'text/html');
const scrollOut=()=>{const y=out.getBoundingClientRect().top+scrollY-110;window.lenis?lenis.scrollTo(y):scrollTo({top:y,behavior:'smooth'})};
// pixel width estimate for Arial 20px (desktop title) using canvas
const cv=document.createElement('canvas').getContext('2d');const px=(t,f)=>{cv.font=f;return cv.measureText(t).width};

const SAMPLE_HTML=`<!doctype html><html lang="en"><head><title>Emergency Plumber in Denver | Fast 24/7 Service</title>
<meta name="description" content="Licensed Denver plumbers available 24/7 for leaks, clogs and water heaters. Upfront pricing and 90 minute arrival.">
<link rel="canonical" href="https://example.com/emergency-plumber-denver/"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta property="og:title" content="Emergency Plumber in Denver"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Plumber","name":"Example Plumbing","telephone":"+1-555-0100","address":{"@type":"PostalAddress","addressLocality":"Denver","addressRegion":"CO"}}</script></head>
<body><h1>Emergency Plumber in Denver</h1><h2>Services</h2><p>We fix leaks, clogs and water heaters across Denver and nearby suburbs.</p><img src="van.jpg" alt="Plumbing van in Denver"><img src="team.jpg"><a href="/water-heater-repair/">Water heater repair</a><a href="https://maps.google.com">Find us</a></body></html>`;

function audit(h){
  const d=parse(h),res=[];let pts=0,max=0;
  const add=(w,lvl,t,msg)=>{max+=w;if(lvl==='ok')pts+=w;else if(lvl==='warn')pts+=w/2;res.push(R(lvl,t,msg))};
  const title=(d.querySelector('title')||{}).textContent||'';const tl=title.trim().length;
  add(10,!tl?'bad':tl<30||tl>60?'warn':'ok','Title tag',tl?`"${E(title.trim())}" (${tl} characters). Aim for 30 to 60.`:'Missing. Every page needs a unique title.');
  const md=d.querySelector('meta[name="description" i]'),mdv=md?md.getAttribute('content')||'':'';
  add(8,!mdv?'bad':mdv.length<70||mdv.length>160?'warn':'ok','Meta description',mdv?`${mdv.length} characters. Aim for 70 to 160.`:'Missing. Write a compelling summary to improve click-through rate.');
  const h1=[...d.querySelectorAll('h1')];add(10,h1.length===1?'ok':h1.length?'warn':'bad','H1 heading',h1.length===1?`"${E(h1[0].textContent.trim().slice(0,90))}"`:h1.length?`${h1.length} H1 tags found. Use one main heading.`:'No H1 found.');
  const h2=d.querySelectorAll('h2').length;add(5,h2?'ok':'warn','Subheadings',h2?`${h2} H2 headings structure the content.`:'No H2 headings. Break content into sections.');
  const can=d.querySelector('link[rel="canonical"]');add(7,can?'ok':'warn','Canonical tag',can?E(can.getAttribute('href')):'Missing. Add a self-referencing canonical.');
  const rob=d.querySelector('meta[name="robots" i]');const ni=rob&&/noindex/i.test(rob.content);add(10,ni?'bad':'ok','Indexability',ni?'This page has a noindex tag and will not appear in search.':'No noindex directive found.');
  const vp=d.querySelector('meta[name="viewport"]');add(6,vp?'ok':'bad','Mobile viewport',vp?'Viewport tag present.':'Missing viewport tag. Page may not be mobile friendly.');
  const lang=d.documentElement.getAttribute('lang');add(3,lang?'ok':'warn','Language attribute',lang?`lang="${E(lang)}"`:'Add a lang attribute to the html tag.');
  const imgs=[...d.querySelectorAll('img')],noalt=imgs.filter(i=>!i.hasAttribute('alt')||!i.getAttribute('alt').trim());add(7,!imgs.length?'warn':noalt.length?'warn':'ok','Image alt text',imgs.length?`${imgs.length-noalt.length} of ${imgs.length} images have alt text.`:'No images found.');
  const txt=(d.body?d.body.textContent:'').replace(/\s+/g,' ').trim(),wc=txt?txt.split(' ').length:0;add(8,wc>=300?'ok':wc>=120?'warn':'bad','Content length',`${wc} words of visible text. Most ranking pages have 300 or more.`);
  const ld=d.querySelectorAll('script[type="application/ld+json"]').length;add(7,ld?'ok':'warn','Structured data',ld?`${ld} JSON-LD block(s) found.`:'No JSON-LD schema found.');
  const og=d.querySelector('meta[property="og:title"]');add(4,og?'ok':'warn','Open Graph',og?'Social preview tags present.':'Add og:title, og:description and og:image.');
  const links=[...d.querySelectorAll('a[href]')],ext=links.filter(a=>/^https?:/i.test(a.getAttribute('href'))).length;add(5,links.length-ext>0?'ok':'warn','Internal links',`${links.length-ext} internal and ${ext} external links.`);
  const kw=(title.split(/[|\-:]/)[0]||'').toLowerCase().trim();if(kw&&h1.length){const m=h1[0].textContent.toLowerCase().includes(kw.split(' ').slice(0,2).join(' '));add(5,m?'ok':'warn','Title and H1 alignment',m?'Title and H1 share the main topic.':'Title and H1 seem to target different topics.')}
  const sc=Math.round(pts/max*100);
  return `<div class="score">${ring(sc)}<div><h3 style="font-size:22px;margin-bottom:4px">SEO score: ${sc}/100</h3><p style="color:var(--mute3)">${sc>=80?'Strong on-page basics. Focus on content depth and links.':sc>=55?'Good start with clear room to improve. Fix the items marked below.':'Several important basics are missing. Start with the red items.'}</p></div></div>`+res.join('');
}
function meta(h){
  const d=parse(h),g=(s,a='content')=>{const e=d.querySelector(s);return e?e.getAttribute(a)||'':null};const rows=[];
  const t=(d.querySelector('title')||{}).textContent;rows.push(['Title',t,t?(t.length>60?'warn':'ok'):'bad',t?`${t.length} chars`:'missing']);
  [['Meta description','meta[name="description" i]',160],['Robots','meta[name="robots" i]'],['Canonical','link[rel="canonical"]',0,'href'],['Viewport','meta[name="viewport"]'],['og:title','meta[property="og:title"]'],['og:description','meta[property="og:description"]'],['og:image','meta[property="og:image"]'],['twitter:card','meta[name="twitter:card"]'],['Hreflang','link[rel="alternate"][hreflang]',0,'href']].forEach(([n,s,mx,a])=>{const v=g(s,a);rows.push([n,v,v===null?(n.startsWith('og')||n.startsWith('tw')||n==='Hreflang'?'warn':'bad'):(mx&&v.length>mx?'warn':'ok'),v===null?'missing':mx?`${v.length} chars`:''])});
  return rows.map(([n,v,l,m])=>R(l,n+(m?` (${m})`:''),v?E(v):'Not found on this page.')).join('');
}
function serp(){
  const t=$('#t-title').value,ds=$('#t-desc').value,u=$('#t-url').value;let host='',path='';try{const x=new URL(u);host=x.hostname.replace('www.','');path=x.pathname.split('/').filter(Boolean).join(' &rsaquo; ')}catch(e){host=u}
  const tw=px(t,'20px Arial'),dw=px(ds,'14px Arial');const cut=(s,f,lim)=>{if(px(s,f)<=lim)return s;let o='';for(const ch of s){if(px(o+ch+'...',f)>lim)break;o+=ch}return o.trim()+'...'};
  const tc=cut(t,'20px Arial',580),dc=cut(ds,'14px Arial',920*1.0);
  const bar=(v,m)=>`<div class="bar"><i style="width:${Math.min(100,v/m*100)}%;background:${v>m?'#ff4c39':'#1f9d55'}"></i></div>`;
  out.innerHTML=`<div class="serp"><div class="u"><i>${E(host.charAt(0).toUpperCase())}</i><span>${E(host)}<small>${E(u.split('?')[0])}</small></span></div><h3>${E(tc)}</h3><p>${E(dc)}</p></div>
  <div class="res ${tw>580?'warn':'ok'}"><i>${tw>580?'!':'&#10003;'}</i><div style="flex:1"><b>Title width: ${Math.round(tw)}px of 580px (${t.length} characters)</b>${bar(tw,580)}</div></div>
  <div class="res ${dw>920?'warn':'ok'}"><i>${dw>920?'!':'&#10003;'}</i><div style="flex:1"><b>Description width: ${Math.round(dw)}px of about 920px (${ds.length} characters)</b>${bar(dw,920)}</div></div>`;
}
function schema(h){
  let blocks=[];const s=h.trim();
  if(s.startsWith('{')||s.startsWith('['))blocks=[s];else blocks=[...parse(h).querySelectorAll('script[type="application/ld+json"]')].map(x=>x.textContent);
  if(!blocks.length)return R('bad','No structured data found','Paste a JSON-LD block or a page source that contains one.');
  const REQ={Organization:['name','url'],LocalBusiness:['name','address'],Product:['name','offers'],Offer:['price','priceCurrency'],Article:['headline','author','datePublished'],BlogPosting:['headline','author','datePublished'],FAQPage:['mainEntity'],BreadcrumbList:['itemListElement'],Service:['name','provider'],WebSite:['name','url'],Event:['name','startDate','location'],Review:['author','reviewRating'],Recipe:['name','recipeIngredient']};
  const LB=['Plumber','Dentist','Attorney','LegalService','Restaurant','AutoRepair','HVACBusiness','Electrician','RoofingContractor','MedicalClinic','HomeAndConstructionBusiness','Store'];
  let o='';blocks.forEach((b,i)=>{let j;try{j=JSON.parse(b)}catch(e){o+=R('bad',`Block ${i+1}: invalid JSON`,E(e.message));return}
    const items=[].concat(j['@graph']||j);items.forEach(it=>{const ty=[].concat(it['@type']||'Unknown').join(', ');const key=LB.includes(ty)?'LocalBusiness':ty;const req=REQ[key]||[];const miss=req.filter(p=>!(p in it));
      if(!it['@context']&&!j['@context'])o+=R('warn',`${ty}: missing @context`,'Add "@context": "https://schema.org".');
      o+=R(miss.length?'warn':'ok',`${ty}`,req.length?(miss.length?`Missing recommended properties: ${miss.join(', ')}`:`All key properties present (${req.join(', ')}).`):`Found ${Object.keys(it).filter(k=>!k.startsWith('@')).length} properties.`)})});
  return o;
}
function sitemap(h){
  const d=new DOMParser().parseFromString(h.trim(),'application/xml');if(d.querySelector('parsererror'))return R('bad','Invalid XML','The sitemap could not be parsed. Check for unclosed tags or invalid characters.');
  const isIdx=!!d.getElementsByTagName('sitemapindex').length;const locs=[...d.getElementsByTagName('loc')].map(x=>x.textContent.trim());const lm=[...d.getElementsByTagName('lastmod')].map(x=>x.textContent.trim());
  const dup=locs.length-new Set(locs).size,http=locs.filter(u=>u.startsWith('http:')).length,bad=locs.filter(u=>!/^https?:\/\//.test(u)).length,hosts=new Set(locs.map(u=>{try{return new URL(u).host}catch(e){return ''}})),badLm=lm.filter(x=>!/^\d{4}-\d{2}-\d{2}/.test(x)).length,params=locs.filter(u=>u.includes('?')).length;
  return R('ok',isIdx?'Sitemap index':'URL sitemap',`${locs.length} ${isIdx?'child sitemaps':'URLs'} found.`)+R(locs.length>50000?'bad':'ok','Size limit',locs.length>50000?'More than 50,000 URLs. Split into multiple sitemaps.':'Within the 50,000 URL limit.')+R(dup?'warn':'ok','Duplicates',dup?`${dup} duplicate URLs.`:'No duplicates.')+R(http?'warn':'ok','HTTPS',http?`${http} URLs use http instead of https.`:'All URLs use https.')+R(bad?'bad':'ok','URL format',bad?`${bad} URLs are not absolute.`:'All URLs are absolute.')+R(hosts.size>1?'warn':'ok','Hosts',hosts.size>1?`URLs span ${hosts.size} hosts: ${E([...hosts].join(', '))}. A sitemap should cover one host.`:'All URLs share one host.')+R(params?'warn':'ok','Parameters',params?`${params} URLs contain query parameters, which are often duplicates.`:'No parameter URLs.')+R(!lm.length?'warn':badLm?'warn':'ok','lastmod dates',!lm.length?'No lastmod dates. Adding accurate dates helps crawlers prioritize.':badLm?`${badLm} lastmod values are not in W3C date format.`:`${lm.length} valid lastmod dates.`);
}
function robots(h){
  const ua=$('#t-ua').value.toLowerCase(),path=$('#t-path').value.trim()||'/';const groups=[];let cur=null,lastUA=false;
  h.split(/\r?\n/).forEach(l=>{l=l.replace(/#.*/,'').trim();if(!l)return;const i=l.indexOf(':');if(i<0)return;const k=l.slice(0,i).trim().toLowerCase(),v=l.slice(i+1).trim();
    if(k==='user-agent'){if(!lastUA){cur={ua:[],rules:[]};groups.push(cur)}cur.ua.push(v.toLowerCase());lastUA=true}else{lastUA=false;if(cur&&(k==='allow'||k==='disallow'))cur.rules.push([k,v])}});
  let g=groups.filter(x=>x.ua.some(u=>u!=='*'&&ua.includes(u)));const specific=g.length;if(!g.length)g=groups.filter(x=>x.ua.includes('*'));
  const rules=g.flatMap(x=>x.rules);const rx=p=>new RegExp('^'+p.replace(/[.+?^${}()|[\]\\]/g,'\\$&').replace(/\*/g,'.*').replace(/\\\$$/,'$'));
  let best=null;rules.forEach(([k,v])=>{if(!v){return}if(rx(v).test(path)){if(!best||v.length>best[1].length||(v.length===best[1].length&&k==='allow'))best=[k,v]}});
  const allowed=!best||best[0]==='allow';const sm=(h.match(/^\s*sitemap:\s*(.+)$/gim)||[]).map(x=>x.replace(/sitemap:\s*/i,'').trim());
  return R(allowed?'ok':'bad',allowed?`Allowed for ${$('#t-ua').value}`:`Blocked for ${$('#t-ua').value}`,best?`Matched rule: ${best[0]}: ${E(best[1])}`:'No rule matches this path, so crawling is allowed.')+R('ok','Rule group used',groups.length?(specific?'A group specific to this user agent.':'The wildcard (*) group.'):'No user-agent groups found.')+R(sm.length?'ok':'warn','Sitemap reference',sm.length?E(sm.join(', ')):'No Sitemap line. Add one to help crawlers find your sitemap.')+(/disallow:\s*\/\s*$/im.test(h)?R('warn','Full site block detected','A rule disallows the whole site for at least one user agent. Make sure that is intentional.'):'');
}
function kw(){
  const s=$('#t-kw').value.trim().toLowerCase(),c=$('#t-city').value.trim();if(!s)return '';const L=[];const add=(k,t)=>L.push([k.replace(/\s+/g,' ').trim(),t]);
  ['how much does * cost','how to choose *','what is *','is * worth it','how long does * take','when to get *','why is * so expensive','what to expect from *','* vs diy','can i do * myself'].forEach(p=>add(p.replace('*',s),'Question'));
  ['best *','* near me','affordable *','* cost','* prices','* services','* company','emergency *','* quote','top rated *','* reviews','cheap *','professional *','* specialist','24 hour *'].forEach(p=>add(p.replace('*',s),'Commercial'));
  ['* vs','* alternatives','* or replacement','* comparison','types of *'].forEach(p=>add(p.replace('*',s),'Comparison'));
  ['* tips','* checklist','* guide','signs you need *','* mistakes to avoid','* for beginners'].forEach(p=>add(p.replace('*',s),'Informational'));
  if(c)['* in '+c,'* near '+c,'best * in '+c,c+' *','* '+c+' cost','emergency * '+c].forEach(p=>add(p.replace('*',s),'Local'));
  return `<p style="color:var(--mute3)">${L.length} keyword ideas for "${E(s)}". Check volume in Google Keyword Planner or your SEO tool.</p><div class="kwlist">${L.map(([k,t])=>`<div><span>${E(k)}</span><small>${t}</small></div>`).join('')}</div>`;
}
function rank(h){
  const dom=$('#t-dom').value.trim().replace(/^https?:\/\//,'').replace(/^www\./,'').replace(/\/.*$/,'').toLowerCase();const lines=h.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  if(!lines.length)return R('bad','No results pasted','Paste the result URLs from your search, one per line.');
  const hostOf=u=>{try{return new URL(/^https?:/.test(u)?u:'https://'+u).hostname.replace(/^www\./,'').toLowerCase()}catch(e){return u}};
  const rows=lines.map((u,i)=>[i+1,hostOf(u),u]);const mine=rows.filter(r=>dom&&(r[1]===dom||r[1].endsWith('.'+dom)));
  return R(mine.length?'ok':'warn',mine.length?`Your domain ranks #${mine[0][0]}`:'Your domain was not found',mine.length?`${E(dom)} appears ${mine.length} time(s) in these ${rows.length} results.`:`${E(dom||'Your domain')} is not in these ${rows.length} results.`)+`<div class="kwlist">${rows.map(r=>`<div style="${mine.includes(r)?'background:#ffe1dc':''}"><span>#${r[0]} ${E(r[1])}</span><small>${mine.includes(r)?'You':''}</small></div>`).join('')}</div>`;
}
function backlink(h){
  const dom=$('#t-dom').value.trim().toLowerCase();const lines=h.split(/\r?\n/).map(x=>x.trim()).filter(x=>x&&!/^(source|url|referring)/i.test(x));
  if(!lines.length)return R('bad','No backlinks pasted','Paste one link per line, optionally followed by a comma and the anchor text.');
  const hosts={},anch={};lines.forEach(l=>{const [u,...a]=l.split(/,|\t/);let h2='';try{h2=new URL(/^https?:/.test(u)?u:'https://'+u).hostname.replace(/^www\./,'')}catch(e){h2=u}hosts[h2]=(hosts[h2]||0)+1;const an=(a.join(' ').replace(/"/g,'').trim()||'(no anchor)').toLowerCase();anch[an]=(anch[an]||0)+1});
  const top=Object.entries(hosts).sort((a,b)=>b[1]-a[1]),ta=Object.entries(anch).sort((a,b)=>b[1]-a[1]);const nd=top.length,ratio=lines.length/nd;
  const brand=dom?ta.filter(([a])=>a.includes(dom.split('.')[0])).reduce((s,x)=>s+x[1],0):0;
  return R('ok','Totals',`${lines.length} backlinks from ${nd} referring domains (${ratio.toFixed(1)} links per domain).`)+R(ratio>8?'warn':'ok','Link concentration',ratio>8?'Many links come from few domains, often sitewide footer or blogroll links.':'Links are spread across many domains.')+(dom?R(brand/lines.length<.2&&lines.length>5?'warn':'ok','Brand anchors',`${Math.round(brand/lines.length*100)}% of anchors mention your brand.`):'')+`<h4 style="margin-top:10px">Top referring domains</h4><div class="kwlist">${top.slice(0,20).map(([k,v])=>`<div><span>${E(k)}</span><small>${v} links</small></div>`).join('')}</div><h4 style="margin-top:10px">Top anchors</h4><div class="kwlist">${ta.slice(0,16).map(([k,v])=>`<div><span>${E(k)}</span><small>${Math.round(v/lines.length*100)}%</small></div>`).join('')}</div>`;
}
const SAMPLES={schema:`<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"Example Dental","url":"https://example.com","telephone":"+1-555-0100"}</script>`,
 sitemap:`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com/</loc><lastmod>2026-10-01</lastmod></url><url><loc>https://example.com/services/</loc><lastmod>2026-09-12</lastmod></url><url><loc>http://example.com/blog/?page=2</loc></url><url><loc>https://example.com/services/</loc></url></urlset>`,
 robots:`User-agent: *\nDisallow: /wp-admin/\nAllow: /wp-admin/admin-ajax.php\nDisallow: /*?s=\nDisallow: /cart/\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: https://example.com/sitemap.xml`,
 rank:`https://www.yelp.com/search?find_desc=plumber\nhttps://www.angi.com/companylist/plumbing\nhttps://www.example.com/emergency-plumber/\nhttps://www.competitor-plumbing.com/\nhttps://www.homeadvisor.com/plumbers\nhttps://www.example.com/water-heater-repair/`,
 backlink:`https://localnews.com/article-1,Example Plumbing\nhttps://chamber.org/members,example.com\nhttps://blog.homeguide.com/tips,emergency plumber\nhttps://directory.com/listing,Example Plumbing\nhttps://directory.com/listing2,click here\nhttps://partners.example.org/,Example Plumbing Denver`};
function run(ns){
  const h=($('#t-html')||{}).value||'';let r='';
  if(kind==='audit'){if(!h.trim()){$('#t-html').focus();return}r=audit(h)}
  else if(kind==='meta'){if(!h.trim()){$('#t-html').focus();return}r=meta(h)}
  else if(kind==='schema')r=h.trim()?schema(h):R('bad','Nothing to check','Paste JSON-LD or page source first.');
  else if(kind==='sitemap')r=h.trim()?sitemap(h):R('bad','Nothing to check','Paste your sitemap XML first.');
  else if(kind==='robots')r=robots(h);
  else if(kind==='kw')r=kw();
  else if(kind==='rank')r=rank(h);
  else if(kind==='backlink')r=backlink(h);
  out.innerHTML=r;if(ns!==true)scrollOut();
}
if(kind==='serp'){['#t-title','#t-desc','#t-url'].forEach(s=>$(s).addEventListener('input',serp));serp();return}
const rb=$('#t-run');if(rb)rb.addEventListener('click',()=>run());
const demo=$('#t-demo');if(demo)demo.addEventListener('click',()=>{const t=$('#t-html');t.value=SAMPLES[kind]||SAMPLE_HTML;if(kind==='rank')$('#t-dom').value='example.com';if(kind==='backlink')$('#t-dom').value='example.com';run()});
const cp=$('#t-copy');if(cp)cp.addEventListener('click',()=>{const t=[...out.querySelectorAll('.kwlist span')].map(x=>x.textContent).join('\n');if(!t){run();return}navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{cp.textContent='Copied'})});
if(kind==='kw')run(true);
})();
