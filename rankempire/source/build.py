#!/usr/bin/env python3
"""RankEmpire static site generator.
Usage: python3 build.py preview|deploy OUTDIR
preview: relative links ending in index.html (works from any folder or file host)
deploy : clean root-relative URLs (/local-seo/) for a real web server
To add pages, add entries to the data_*.py files and rebuild."""
import os, sys, json, shutil, html, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from data_services import S, SERVICE_ORDER_CORE, SERVICE_ORDER_SVC, HOME_SVCS
from data_industries import I, CATS
from data_locations import C
from data_misc import PACKAGES, TOOLS, TEAM, BLOG, FAQ_HOME, PLAYBOOKS, TRUST, STACK

MODE = sys.argv[1] if len(sys.argv) > 1 else 'preview'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'dist'
SITE = 'https://www.rankempire.com'
EMAIL = 'hello@rankempire.com'
BRAND = 'RankEmpire'
SRC = os.path.dirname(os.path.abspath(__file__))
esc = html.escape

# ---------- url helpers ----------
CUR = ['']
def U(key):
    key = key.strip('/')
    if MODE == 'deploy':
        return '/' + (key + '/' if key else '')
    depth = len([p for p in CUR[0].split('/') if p])
    pre = '../' * depth
    return pre + (key + '/' if key else '') + 'index.html'
def A(path):
    if MODE == 'deploy': return '/' + path
    depth = len([p for p in CUR[0].split('/') if p])
    return '../' * depth + path
def IMG(n): return A(f'img/{n}.webp')
def canon(key): return SITE + '/' + (key + '/' if key else '')

# ---------- registry of names ----------
NAMES = {'': 'Home', 'seo-services': 'SEO Services', 'industries': 'Industries We Serve', 'case-studies': 'Case Studies', 'blog': 'SEO Blog',
         'seo-tools': 'SEO Tools', 'our-team': 'Our Team', 'about-us': 'About Us', 'contact-us': 'Contact Us', 'locations': 'Locations',
         'privacy-policy': 'Privacy Policy', 'terms': 'Terms and Conditions'}
for k, v in S.items(): NAMES[k] = v['name']
for k, v in PACKAGES.items(): NAMES[k] = v['name']
for d in I: NAMES['seo-for-' + d['slug']] = 'SEO for ' + d['name']
for d in C: NAMES['locations/' + d['slug']] = 'SEO Company in ' + d['name']
for t in TOOLS: NAMES['seo-tools/' + t[0]] = t[1]
for b in BLOG: NAMES['blog/' + b['slug']] = b['title']
IND = {d['slug']: d for d in I}

# ---------- icons ----------
ARR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>'
CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>'
MARK = '<svg class="mk" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 24 2.5 9.5l7.5 6L16 5l6 10.5 7.5-6L28 24Z" fill="#ff4c39"/><rect x="4" y="25.5" width="24" height="3.5" rx="1.5" fill="currentColor"/></svg>'
ICO = {
 'users': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="7" r="3"/><circle cx="5" cy="17" r="2.5"/><circle cx="19" cy="17" r="2.5"/><path d="M12 10v3m0 0-5 2m5-2 5 2"/></svg>',
 'bulb': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/></svg>',
 'node': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor"/><circle cx="17" cy="17" r="4" fill="currentColor"/><path d="M10 7h4a3 3 0 0 1 3 3v3"/></svg>',
 'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>',
 'quote': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 11c0-4 2.5-6.5 6-7v3c-2 .5-3 2-3 4h3v7H4Zm10 0c0-4 2.5-6.5 6-7v3c-2 .5-3 2-3 4h3v7h-6Z"/></svg>',
 'mail': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
 'clock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 'pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
 'chat': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11H9l-5 4Z"/></svg>',
 'spark': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z"/></svg>',
}
def btn(href, label, cls='acc', icon=True): return f'<a class="btn {cls}" href="{href}">{label}{ARR if icon else ""}</a>'

# ---------- head / nav / footer ----------
def jsonld(obj): return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False) + '</script>'
ORG = {'@context': 'https://schema.org', '@type': 'Organization', 'name': BRAND, 'url': SITE, 'email': EMAIL, 'logo': SITE + '/img/logo.png',
       'description': 'RankEmpire is an SEO agency for local businesses, e-commerce brands and SaaS companies.'}
def crumbs_ld(items):
    return {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': canon(k)} for i, (k, n) in enumerate(items)]}
def faq_ld(faqs):
    return {'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in faqs]}

def head(key, title, desc, ld=(), img='hero', noindex=False):
    lds = ''.join(jsonld(x) for x in ld)
    return f'''<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{canon(key)}">
{'<meta name="robots" content="noindex">' if noindex else '<meta name="robots" content="index,follow,max-image-preview:large">'}
<meta property="og:type" content="website"><meta property="og:site_name" content="{BRAND}">
<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{canon(key)}"><meta property="og:image" content="{SITE}/img/{img}.webp">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f3efe8">
<link rel="icon" href="{A('img/favicon.svg')}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{A('assets/site.css')}">
{lds}
</head><body>
'''

def mega():
    col = lambda t, keys, more=None: f'<div><h6>{t}</h6>' + ''.join(f'<a href="{U(k)}">{esc(NAMES[k])}</a>' for k in keys) + (f'<a class="more" href="{U(more[0])}">{more[1]}</a>' if more else '') + '</div>'
    return ('<div class="mega" role="menu">'
        + col('Company', ['', 'seo-company', 'about-us', 'our-team', 'case-studies', 'blog', 'contact-us'])
        + col('Core services', ['seo-services'] + SERVICE_ORDER_CORE)
        + col('SEO services', SERVICE_ORDER_SVC)
        + col('Packages', list(PACKAGES.keys()))
        + col('Industries', ['seo-for-' + s for s in ['plumbers', 'hvac', 'roofing', 'dentists', 'lawyers', 'personal-injury-lawyers', 'med-spas', 'real-estate']], ('industries', 'All 45 industries'))
        + col('Tools', ['seo-tools'] + ['seo-tools/' + t[0] for t in TOOLS[:7]], ('seo-tools', 'All 11 tools'))
        + col('Locations', ['locations/' + c['slug'] for c in C[:9]], ('locations', 'All 17 cities'))
        + '</div>')

def nav(active=None):
    L = [('', 'Home', ''), ('seo-services', 'Services', ''), ('industries', 'Industries', 'opt'), ('case-studies', 'Results', ''), ('seo-packages', 'Pricing', ''), ('seo-tools', 'Tools', 'opt'), ('blog', 'Blog', 'opt'), ('about-us', 'About', '')]
    links = ''.join(f'<a class="{c}{" on" if k == active else ""}" href="{U(k)}">{n}</a>' for k, n, c in L)
    mob = ''.join(f'<a href="{U(k)}">{n}</a>' for k, n, c in L) + f'<a href="{U("contact-us")}">Contact</a>'
    det = lambda t, keys: f'<details><summary>{t}</summary>' + ''.join(f'<a href="{U(k)}">{esc(NAMES[k])}</a>' for k in keys) + '</details>'
    mob += det('Services', SERVICE_ORDER_CORE + SERVICE_ORDER_SVC) + det('Packages', list(PACKAGES.keys())) + det('Industries', ['industries'] + ['seo-for-' + d['slug'] for d in I]) + det('SEO Tools', ['seo-tools'] + ['seo-tools/' + t[0] for t in TOOLS]) + det('Locations', ['locations'] + ['locations/' + c['slug'] for c in C])
    return f'''<header class="nav"><div class="in">
<a class="logo" href="{U('')}" aria-label="{BRAND} home">{MARK}{BRAND}</a>
<nav class="links" aria-label="Main">{links}<div class="dd"><button type="button" aria-haspopup="true">All Pages {CHEV}</button>{mega()}</div></nav>
<div class="ncta">{btn(U("contact-us"), "Contact Us")}<button class="burger" type="button" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div>
</div></header>
<div class="mnav" aria-label="Mobile menu">{mob}<div style="margin-top:28px">{btn(U('contact-us'), 'Get a free audit')}</div></div>
<main>
'''

def footer():
    col = lambda t, keys: f'<div><h6>{t}</h6>' + ''.join(f'<a href="{U(k)}">{esc(NAMES[k].replace("SEO for ", "").replace("SEO Company in ", ""))}</a>' for k in keys) + '</div>'
    return f'''</main>
<footer class="foot">
<div class="tp"><div><a class="logo" href="{U('')}" style="color:#fff">{MARK}{BRAND}</a><p>RankEmpire is an SEO agency for local businesses, e-commerce brands and SaaS companies, building rankings that compound into calls, leads and revenue.</p></div>
<div class="news"><h5>Subscribe to our newsletter</h5><form data-news="{EMAIL}"><input type="email" placeholder="Enter your email" aria-label="Email address" required><button class="btn acc sm" type="submit">Subscribe{ARR}</button></form><small>One practical SEO tip a month. No spam.</small></div></div>
<div class="fcols">
{col('Main pages', ['', 'seo-company', 'seo-services', 'about-us', 'our-team', 'case-studies', 'blog', 'contact-us'])}
{col('Services', SERVICE_ORDER_CORE + ['link-building', 'content-seo'])}
{col('Packages', list(PACKAGES.keys()) + ['seo-consulting', 'keyword-research'])}
{col('Free tools', ['seo-tools/' + t[0] for t in TOOLS[:8]])}
{col('Popular cities', ['locations/' + c['slug'] for c in C[:8]])}
<div class="ct"><h6>Have a question?</h6>
<a href="mailto:{EMAIL}">{ICO['mail']}<span>{EMAIL}<small>We reply within one business day</small></span></a>
<a href="{U('contact-us')}">{ICO['clock']}<span>Mon to Fri, 9am to 6pm ET<small>Book a free strategy call</small></span></a>
<a href="{U('locations')}">{ICO['pin']}<span>Serving clients across the US<small>See all locations</small></span></a></div>
</div>
<div class="giant" aria-hidden="true">{BRAND}</div>
<div class="fbot"><span>&copy; 2026 {BRAND}. All rights reserved.</span><span><a href="{U('privacy-policy')}">Privacy Policy</a> &nbsp;&middot;&nbsp; <a href="{U('terms')}">Terms</a> &nbsp;&middot;&nbsp; <a href="{A('sitemap.xml')}">Sitemap</a></span></div>
</footer>
<script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script>
<script src="{A('assets/site.js')}"></script>
'''

# ---------- sections ----------
def marquee(items):
    one = ''.join(f'<span class="it"><i>/</i>{esc(x)}</span>' for x in items)
    return f'<div class="marq" aria-hidden="true"><div class="tr">{one}{one}</div></div>'

def shead(title, sub='', center=False, dark=False):
    return f'<div class="shead{" c" if center else ""}"><h2 class="h2" data-lines>{title}</h2>{f"<p data-r>{sub}</p>" if sub else ""}</div>'

def intro(items, text):
    return f'<section class="wrap intro"><ul data-r>{"".join(f"<li>{x}</li>" for x in items)}</ul><p class="wrev">{text}</p></section>'

def stack():
    glyph = '<svg viewBox="0 0 24 24" fill="#0a0a0a"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z"/></svg>'
    one = ''.join(f'<span class="c">{glyph}{esc(x)}</span>' for x in STACK)
    return f'''<section class="stack"><div class="wrap">{shead('Our Stack', 'The platforms and tools we work in every day<br>Search, analytics, local and e-commerce')}</div>
<div class="cards-mq" aria-label="Tools we use"><div class="tr">{one}{one}</div></div></section>'''

DEF_STEPS = [('Audit', 'We crawl your site, study your market and competitors and find what is holding rankings back.'),
             ('Strategize', 'We build a roadmap of pages, fixes and links ranked by revenue impact before any work begins.'),
             ('Execute', 'Our specialists ship the fixes, content and links, with every task visible in your dashboard.'),
             ('Compound', 'We track every ranking, call and sale, double down on what works and cut what does not.')]
def process(steps=None, title='Our Process', sub='A disciplined four step framework that removes<br>guesswork and builds rankings that last.'):
    steps = steps or DEF_STEPS
    cards = ''.join(f'<article class="pc"><img src="{IMG("p" + str(i + 1))}" alt="" loading="lazy"><span class="n">0{i + 1}</span><div class="tx"><h3>{esc(t)}</h3><p>{esc(d)}</p></div></article>' for i, (t, d) in enumerate(steps[:4]))
    return f'<section class="sec dark proc"><div class="pin"><div class="wrap">{shead(title, sub)}<div class="pcards">{cards}</div></div></div></section>'

def values():
    v = [('users', 'Collaboration', 'SEO touches your website, content, reviews and sales team. We work closely with the people who know your customers best, so every page sounds like you and converts like it should.'),
         ('bulb', 'Clarity', 'Every recommendation comes with a reason, an expected impact and a priority. You always know what we are doing, why we are doing it and what it should change.'),
         ('shield', 'Integrity', 'No link schemes, no fake reviews, no spun content and no guaranteed rankings. We build growth that survives every algorithm update.')]
    items = ''.join(f'<div class="val" data-r style="--d:{i * .08}s"><div class="ic">{ICO[ic]}</div><h4>{t}</h4><p>{d}</p></div>' for i, (ic, t, d) in enumerate(v))
    return f'''<section class="sec"><div class="wrap">{shead('Our Values', 'Principles that shape every campaign,<br>from the first audit to the hundredth report')}
<div class="vals"><div class="im" data-r="s"><img src="{IMG('team')}" alt="RankEmpire SEO specialists collaborating" loading="lazy"></div>{items}</div></div></section>'''

def services_acc(keys, title='What we offer / Service', sub='End to end SEO to build, grow and protect your rankings.'):
    rows = ''
    for i, k in enumerate(keys):
        s = S[k]; chips = s.get('chips') or [x[0] for x in s['inc'][:3]]
        chip_links = ''.join(f'<a href="{U(k)}">{esc(c)}</a>' for c in chips[:3])
        rows += f'''<div class="sv"><div class="bgi"><img src="{IMG(s['img'])}" alt="" loading="lazy"></div>
<div class="row"><span class="num">0{i + 1}</span><div class="ti"><small>{'Core service' if s['group'] == 'core' else 'SEO service'}</small><h3>{esc(s['name'])}</h3></div>{btn(U(k), 'Explore service', 'acc sm')}</div>
<div class="body"><div><div class="bin"><div class="pic"><img src="{IMG(s['img'])}" alt="{esc(s['name'])}" loading="lazy"></div>
<div class="meta"><b>{len(s['inc'])}<span>core deliverables</span></b><p>{esc(s['sub'])}</p><div class="chips">{chip_links}</div></div></div></div></div></div>'''
    return f'<section class="sec" style="padding-bottom:0"><div class="wrap">{shead(title, sub, center=True)}</div><div class="svcw"><div class="svcs">{rows}</div></div></section>'

def works(title='Playbooks That Deliver Results', sub='A closer look at how we run SEO programs for the businesses we serve most.'):
    cards = ''
    for i, p in enumerate(PLAYBOOKS):
        cards += f'''<div class="wk"><article class="card"><div class="l"><h3>{esc(p['t'])}</h3><p>{esc(p['desc'])}</p>
<div class="kv"><small>Best for:</small><span>{esc(p['best'])}</span></div><div class="kv"><small>Services:</small>{''.join(f'<span>{esc(x)}</span>' for x in p['svcs'])}</div>
{btn(U('case-studies'), 'See the playbook')}</div><div class="r"><span class="tag">Playbook 0{i + 1}</span><img src="{IMG(p['img'])}" alt="{esc(p['t'])}" loading="lazy"></div></article></div>'''
    return f'<section class="sec"><div class="wrap">{shead(title, sub, center=True)}<div class="works">{cards}</div></div></section>'

def trust():
    def q(t):
        return f'<div class="tq"><div class="ic">{ICO["quote"]}</div><p>{esc(t[1])}<b>{esc(t[2])}</b></p><div class="by"><i>RE</i><span>{esc(t[0])}<small>{t[3]}</small></span></div></div>'
    a = ''.join(q(t) for t in TRUST[0::2]); b = ''.join(q(t) for t in TRUST[1::2])
    return f'''<section class="trust"><div class="pin"><div class="bg"><img src="{IMG('testi')}" alt="" loading="lazy"></div>
<div class="ttl"><div><h2 class="h2">Built on<br>Trust.</h2><p>Six commitments every RankEmpire client gets in writing, from the first call to the last report.</p></div></div>
<div class="tcol a">{a}</div><div class="tcol b">{b}</div></div></section>'''

def pricing(plans, title='Simple, Transparent Pricing', sub='Choose the plan that fits your market. Month to month after onboarding, with every deliverable listed up front.', key='seo-packages'):
    cards = ''
    for (n, who, price, pop, feats) in plans:
        y = round(price * .9)
        cards += f'''<article class="plan{' pop' if pop == 'pop' else ''}" data-r><div class="hd"><div class="t"><h3>{n}</h3>{'<span class="bdg">Popular</span>' if pop == 'pop' else ''}</div><p class="sub">{esc(who)}</p>
<div class="pr"><sup>$</sup><b data-m="{price:,}" data-y="{y:,}">{price:,}</b><small data-per>/month</small></div>
{btn(U('contact-us'), 'Select plan', 'acc' if pop == 'pop' else 'line', False)}</div>
<div class="ft"><h5>Features:</h5><ul>{''.join(f'<li>{esc(f)}</li>' for f in feats)}</ul></div></article>'''
    return f'''<section class="sec"><div class="wrap">{shead(title, sub, center=True)}
<div class="tog"><span class="m" role="button" tabindex="0">Monthly</span><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Toggle yearly billing"></button><span class="yl" role="button" tabindex="0">Yearly</span><span class="off">10% off</span></div>
<div class="plans">{cards}</div>
<p class="note" style="margin-top:20px;text-align:center">Need something custom? <a href="{U('contact-us')}" style="color:var(--acc);font-weight:600">Talk to us</a> about enterprise and multi-brand programs.</p></div></section>'''

def faq(items, tabs=True, title='Frequently Asked Questions', sub='Straight answers about how RankEmpire works'):
    if tabs:
        cats = []
        for c, _, _ in items:
            if c not in cats: cats.append(c)
        tb = '<div class="ftabs">' + ''.join(f'<button type="button" class="{"on" if i == 0 else ""}" data-c="{c}">{c.title()}</button>' for i, c in enumerate(cats)) + '</div>'
        first = cats[0]
        qs = ''.join(f'<div class="fq{" on" if (c == first and items.index((c, q, a)) == 0) else ""}{"" if c == first else " hide"}" data-c="{c}"><button type="button" aria-expanded="false"><span>{esc(q)}</span><i class="pm"></i></button><div class="a"><div><p>{esc(a)}</p></div></div></div>' for c, q, a in items)
    else:
        tb = ''
        qs = ''.join(f'<div class="fq{" on" if i == 0 else ""}"><button type="button" aria-expanded="{"true" if i == 0 else "false"}"><span>{esc(q)}</span><i class="pm"></i></button><div class="a"><div><p>{esc(a)}</p></div></div></div>' for i, (q, a) in enumerate(items))
    return f'<section class="sec faqw"><div class="wrap">{shead(title, sub, center=True)}{tb}<div class="faqs">{qs}</div></div></section>'

def blog_sec():
    b0, b1, b2 = BLOG
    return f'''<section class="sec" style="padding-top:20px"><div class="wrap"><div class="shead"><h2 class="h2" data-lines>Blog &amp; Insights<br>That Drive Rankings</h2><div style="text-align:right"><p data-r style="margin-bottom:16px;margin-left:auto">Practical SEO strategy, checklists and explainers to help your business grow faster in search.</p>{btn(U('blog'), 'See all articles')}</div></div>
<div class="blogg" data-stagger>
<a class="bc big" href="{U('blog/' + b0['slug'])}"><div class="im"><img src="{IMG(b0['img'])}" alt="" loading="lazy"></div><div class="tx"><span class="ct">{b0['cat']}</span><h3>{esc(b0['title'])}</h3><p>{esc(b0['excerpt'])}</p><span class="btn acc full" style="margin-top:auto">Read article</span></div></a>
{''.join(f'<a class="bc" href="{U("blog/" + b["slug"])}"><div class="im"><img src="{IMG(b["img"])}" alt="" loading="lazy"><span class="ct">{b["cat"]}</span></div><div class="tx"><h3>{esc(b["title"])}</h3><p>{esc(b["excerpt"])}</p></div></a>' for b in (b1, b2))}
</div></div></section>'''

def cta(title='Ready to Rule Your Rankings?', sub='Get a free SEO audit and a clear plan for your next 90 days.'):
    return f'<section class="cta"><img class="obj" src="{IMG("crown")}" alt="" loading="lazy"><h2 class="h2" data-lines>{title}</h2><p data-r>{sub}</p><div data-r>{btn(U("contact-us"), "Get my free audit")}</div></section>'

def page_hero(key, crumbs, h1, sub, bts=None, img=None, pills=None, left=False):
    cr = ''.join(f'<a href="{U(k)}">{esc(n)}</a><i>/</i>' for k, n in crumbs[:-1]) + f'<span>{esc(crumbs[-1][1])}</span>'
    bts = bts if bts is not None else [btn(U('contact-us'), 'Get a free audit'), btn(U('seo-packages'), 'View pricing', 'line', False)]
    out = f'<section class="ph{" l" if left else ""}"><div class="wrap"><nav class="crumb" aria-label="Breadcrumb" data-r>{cr}</nav><h1 data-r>{h1}</h1><p class="sub" data-r style="--d:.1s">{sub}</p><div class="bts" data-r style="--d:.2s">{"".join(bts)}</div></div></section>'
    if img:
        pl = f'<div class="ov">{"".join(f"<span class=pill>{esc(p)}</span>" for p in pills)}</div>' if pills else ''
        out += f'<div class="wrap"><div class="phimg" data-r="s"><img src="{IMG(img)}" alt="" fetchpriority="high">{pl}</div></div>'
    return out

def boxes(items, numbered=True, cls='', cols='g3'):
    return f'<div class="{cols}" data-stagger>' + ''.join(f'<div class="box {cls}">{f"<span class=n>0{i + 1}</span>" if numbered else ""}<h3>{esc(t)}</h3><p>{esc(d)}</p></div>' for i, (t, d) in enumerate(items)) + '</div>'

def steps_list(steps):
    return '<div class="steps">' + ''.join(f'<div class="step" data-r><span class="n">0{i + 1}</span><h3>{esc(t)}</h3><p>{esc(d)}</p></div>' for i, (t, d) in enumerate(steps)) + '</div>'

def related(keys, title='Related pages'):
    keys = [k for k in keys if k in NAMES]
    return f'<section class="sec" style="padding-top:0"><div class="wrap"><h2 class="h3" style="margin-bottom:24px" data-r>{title}</h2><div class="links-grid" data-stagger>' + ''.join(f'<a href="{U(k)}">{esc(NAMES[k])}</a>' for k in keys) + '</div></div></section>'

def fit_block(title, items, side_title, side_text, btn_label='Book a strategy call'):
    return f'''<section class="sec" style="padding-top:0"><div class="wrap split"><div class="sticky"><span class="eyb">Who it is for</span><h2 class="h2" data-lines>{title}</h2></div>
<div><ul class="checks" data-stagger>{''.join(f'<li>{esc(x)}</li>' for x in items)}</ul><div class="box dk" style="margin-top:28px" data-r><h3>{esc(side_title)}</h3><p>{esc(side_text)}</p><div style="margin-top:20px">{btn(U('contact-us'), btn_label)}</div></div></div></div></section>'''

# ---------- writer ----------
PAGES_OUT = []
def write(key, body):
    path = os.path.join(OUT, key, 'index.html') if key else os.path.join(OUT, 'index.html')
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w').write(body)
    PAGES_OUT.append(key)

def page(key, title, desc, content, ld=(), img='hero', active=None, noindex=False):
    CUR[0] = key
    return head(key, title, desc, ld, img, noindex) + nav(active) + content() + footer() + '</body></html>'

# ---------- home ----------
def home():
    def c():
        return f'''<section class="hero"><div class="top" data-r><span>&copy;2026</span><span>SEO AGENCY</span></div>
<h1 class="sr-only">RankEmpire, the SEO agency for local businesses, e-commerce and SaaS</h1>
<div class="bigword" aria-hidden="true">RANKINGS</div>
<div class="band"><div class="bg"><img src="{IMG('hero')}" alt="" fetchpriority="high"></div><div class="in">
<div class="stats"><div data-r><b><span data-count="45">45</span>+</b><em>Industries served</em></div><div data-r style="--d:.08s"><b><span data-count="17">17</span> cities</b><em>Local SEO hubs across the US</em></div><div data-r style="--d:.16s"><b><span data-count="11">11</span> free tools</b><em>To check your SEO today</em></div></div>
<div class="low"><div data-r><p>Technical SEO, local search, content and link building, built into one program that turns rankings into calls, leads and revenue.</p><div class="bts">{btn(U('contact-us'), 'Get a free audit', 'wh')}{btn(U('seo-packages'), 'View SEO packages', 'ol')}</div></div>
<div class="tags" data-r style="--d:.1s"><div><span class="pill">Map pack rankings</span></div><div><span class="pill">Technical SEO and site speed</span></div><div><span class="pill">Content and links</span><span class="pill">Revenue reporting</span></div></div></div>
</div></div></section>
{marquee(['Local SEO', 'Technical SEO', 'Link Building', 'Content SEO', 'E-commerce SEO', 'SaaS SEO', 'Google Business Profile', 'SEO Audits'])}
{intro(['Local', 'National', 'E-commerce', 'SaaS'], '<b style="color:inherit">We do not chase vanity metrics.</b> Every campaign starts with an audit, gets a roadmap ranked by revenue impact and is executed by specialists until the numbers that matter actually move: calls, leads and sales.')}
{stack()}
{process()}
{values()}
{services_acc(HOME_SVCS)}
{works()}
{trust()}
{pricing(PACKAGES['seo-packages']['plans'])}
{faq(FAQ_HOME)}
{blog_sec()}
{cta()}'''
    ld = [ORG, {'@context': 'https://schema.org', '@type': 'WebSite', 'name': BRAND, 'url': SITE}, faq_ld([(q, a) for _, q, a in FAQ_HOME])]
    write('', page('', 'RankEmpire | SEO Agency for Local, E-commerce and SaaS Growth', 'RankEmpire is an SEO agency that builds rankings that compound: local SEO, technical SEO, content, link building and Google Business Profile optimization for US businesses.', c, ld, active=''))

# ---------- service pages ----------
def service_page(k):
    s = S[k]
    crumbs = [('', 'Home')] + ([('seo-services', 'SEO Services')] if k not in ('seo-services', 'seo-company') else []) + [(k, s['name'])]
    def c():
        out = page_hero(k, crumbs, s['h1'], s['sub'], img=s['img'], pills=[x[0] for x in s['inc'][:4]] if s['inc'] else None)
        out += intro(['Audit first', 'Roadmap by impact', 'Specialist execution', 'Revenue reporting'], s['intro'])
        if s.get('hub'):
            core = ''.join(f'<a class="box{" dk" if i == 0 else ""}" href="{U(x)}"><span class="n">0{i + 1}</span><h3>{esc(S[x]["name"])}</h3><p>{esc(S[x]["sub"])}</p><span class="go">Explore {ARR[:-6] if False else ""}&#8599;</span></a>' for i, x in enumerate(SERVICE_ORDER_CORE))
            more = ''.join(f'<a class="box" href="{U(x)}"><span class="n">{i + 7:02d}</span><h3>{esc(S[x]["name"])}</h3><p>{esc(S[x]["sub"])}</p><span class="go">Explore &#8599;</span></a>' for i, x in enumerate(SERVICE_ORDER_SVC))
            out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("Core services", "The services most of our clients start with.")}<div class="g3" data-stagger>{core}</div></div></section>'
            out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("Specialist SEO services", "Add depth where your market demands it.")}<div class="g3" data-stagger>{more}</div></div></section>'
            out += services_acc(HOME_SVCS, 'Explore our most requested services', 'Click a service to see what is included.')
        else:
            out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("What is included", "Every deliverable listed up front, no vague retainers.")}{boxes(s["inc"])}</div></section>'
            out += process(s.get('steps'), 'How it works', 'The exact process we follow<br>for ' + s['name'].lower() + '.')
            if s['fit']:
                out += '<div style="height:clamp(80px,10vw,140px)"></div>' + fit_block('Is ' + s['name'] + ' right for you?', s['fit'], 'Not sure where to start?', 'Book a free strategy call. We will review your site and tell you honestly which service will move the needle first.')
        if k == 'seo-company':
            out += values() + works() + trust()
        out += faq(s['faq'], tabs=False, title='Questions about ' + s['name'])
        out += related(s.get('related', []) + ['seo-packages', 'industries'], 'Keep exploring')
        out += cta()
        return out
    ld = [ORG, crumbs_ld(crumbs), {'@context': 'https://schema.org', '@type': 'Service', 'name': s['name'], 'serviceType': s['name'], 'provider': {'@type': 'Organization', 'name': BRAND, 'url': SITE}, 'areaServed': 'US', 'description': s['desc']}, faq_ld(s['faq'])]
    write(k, page(k, s['title'], s['desc'], c, ld, img=s['img'], active='seo-services'))

# ---------- packages ----------
def package_page(k):
    p = PACKAGES[k]
    crumbs = [('', 'Home'), ('seo-packages', 'SEO Packages')] + ([(k, p['name'])] if k != 'seo-packages' else [])
    if k == 'seo-packages': crumbs = [('', 'Home'), ('seo-packages', 'SEO Packages')]
    others = [x for x in PACKAGES if x != k]
    pf = [('Is there a minimum contract?', 'Plans include a 3 month onboarding period, then run month to month with 30 days notice.'),
          ('What does yearly billing include?', 'Paying yearly saves 10 percent on any plan. Everything else stays the same.'),
          ('Can I switch plans?', 'Yes. Upgrade or downgrade at the start of any month as your needs change.'),
          ('Do prices include content and links?', 'Yes. Every deliverable listed in a plan is included in the price. Ad spend and third-party software for your own accounts are not.')]
    def c():
        out = page_hero(k, crumbs, p['h1'], p['sub'], bts=[btn(U('contact-us'), 'Get a custom quote'), btn(U('seo-audit'), 'Start with an audit', 'line', False)])
        out += pricing(p['plans'], 'Choose your plan', 'Every plan includes onboarding, a roadmap, reporting and a dedicated strategist.', k)
        rows = [('Initial SEO audit', 1, 1, 1), ('Prioritized roadmap', 1, 1, 1), ('Monthly report and call', 1, 1, 1), ('Live ranking dashboard', 0, 1, 1), ('Technical SEO fixes', 0, 1, 1), ('Link building', 0, 1, 1), ('Digital PR', 0, 0, 1), ('Dedicated strategist', 0, 0, 1)]
        names = [x[0] for x in p['plans']]
        tbl = '<table class="cmp"><thead><tr><th>Feature</th>' + ''.join(f'<th>{n}</th>' for n in names) + '</tr></thead><tbody>' + ''.join(f'<tr><td>{r[0]}</td>' + ''.join(f'<td class="{"y" if v else "n"}">{"&#10003;" if v else "&mdash;"}</td>' for v in r[1:]) + '</tr>' for r in rows) + '</tbody></table>'
        out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("Compare plans", "What changes as you scale.")}<div data-r style="overflow-x:auto">{tbl}</div></div></section>'
        out += process(None, 'What happens after you sign up', 'From kickoff to compounding results.')
        out += faq(pf, tabs=False, title='Pricing questions')
        out += related(others + ['seo-services', 'seo-audit', 'contact-us'], 'Other packages and services')
        out += cta('Not sure which plan fits?', 'Tell us about your business and we will recommend the right package.')
        return out
    offers = {'@context': 'https://schema.org', '@type': 'OfferCatalog', 'name': p['name'], 'itemListElement': [{'@type': 'Offer', 'name': n, 'price': pr, 'priceCurrency': 'USD', 'description': who} for n, who, pr, _, _ in p['plans']]}
    write(k, page(k, p['title'], p['desc'], c, [ORG, crumbs_ld(crumbs), offers, faq_ld(pf)], active='seo-packages'))

# ---------- industries ----------
def industries_hub():
    k = 'industries'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'Industries We Serve')], 'SEO for the industries we <em>know best</em>', 'Every industry searches differently. We build industry-specific strategies for 45 local and professional business types.', img='i-home', pills=CATS[:4])
        for cat in CATS:
            items = [d for d in I if d['cat'] == cat]
            out += f'<section class="sec" style="padding:40px 0"><div class="wrap"><h2 class="h3" style="margin-bottom:20px" data-r>{cat}</h2><div class="links-grid" data-stagger>' + ''.join(f'<a href="{U("seo-for-" + d["slug"])}">{esc(d["name"])}</a>' for d in items) + '</div></div></section>'
        out += '<div style="height:60px"></div>' + process(None, 'How industry SEO works', 'Same proven process, tuned to how your<br>customers actually search.')
        out += cta('Do not see your industry?', 'We work with many more business types. Tell us about yours.')
        return out
    write(k, page(k, 'Industries We Serve: SEO for 45 Business Types | RankEmpire', 'RankEmpire builds industry-specific SEO strategies for home services, medical, legal, automotive, hospitality, professional services, real estate and beauty businesses.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'Industries We Serve')])], img='i-home', active='industries'))

def industry_page(d):
    k = 'seo-for-' + d['slug']; n = d['name']
    crumbs = [('', 'Home'), ('industries', 'Industries'), (k, 'SEO for ' + n)]
    faqs = [(f'How long does SEO take for {n.lower()}?', f'Most {d["noun"]}s see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months. Competition in your city changes the timeline.'),
            (f'Do you only work with {n.lower()}?', f'We work across 45 industries, but every {d["noun"]} gets a strategy built around the searches, services and competitors specific to that industry.'),
            ('Will I be locked into a contract?', 'No. After a 3 month onboarding period, plans are month to month.'),
            (f'What does SEO for {n.lower()} cost?', 'Most local plans start at $799 per month. We recommend a plan after reviewing your market and competition.')]
    sib = [x for x in I if x['cat'] == d['cat'] and x['slug'] != d['slug']][:6]
    plan = [('Research your market', f'We study how customers search for a {d["noun"]} in your area and which competitors win today.'),
            ('Fix the foundation', 'Technical issues, slow pages and weak site structure are fixed so every new page can rank.'),
            ('Build pages that match searches', f'A dedicated page for each service a {d["noun"]} offers and each area you serve.'),
            ('Win the map and earn trust', 'Google Business Profile, reviews and local links that move you into the map pack.')]
    def c():
        out = page_hero(k, crumbs, f'SEO for <em>{esc(n)}</em>', f'More calls, bookings and qualified leads for your {d["noun"]}, from customers already searching for what you do.', img=d['grp'], pills=d['kws'][:4])
        out += intro(['Local', 'Organic', 'Map pack', 'Reviews'], f'<b style="color:inherit">{esc(d["angle"])}</b> The goal is simple: when someone nearby needs a {esc(d["noun"])}, they find you first and choose you.')
        out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("What makes SEO for " + esc(n.lower()) + " different", "The challenges we plan around from day one.")}{boxes(d["pains"], cls="", cols="g3")}</div></section>'
        out += f'<section class="sec dark"><div class="wrap split"><div class="sticky"><span class="eyb">Searches we target</span><h2 class="h2" data-lines>The searches that<br>bring {esc(n.lower())} customers</h2><p style="color:#a3a3a3;margin-top:18px;max-width:420px" data-r>Examples of the high-intent searches we build pages and profiles around. Your final list comes from research in your market.</p></div><div><div class="chipset" data-stagger>{"".join(f"<span>{esc(x)}</span>" for x in d["kws"])}<span>{esc(d["noun"])} reviews</span><span>best {esc(d["noun"])} in [your city]</span><span>{esc(d["noun"])} prices</span></div>{steps_list(plan)}</div></div></section>'
        out += f'<section class="sec"><div class="wrap">{shead("Services for " + esc(n.lower()), "The SEO services that move the needle most in your industry.")}<div class="g3" data-stagger>' + ''.join(f'<a class="box" href="{U(x)}"><h3>{esc(S[x]["name"])}</h3><p>{esc(S[x]["sub"])}</p><span class="go">Learn more &#8599;</span></a>' for x in ['local-seo', 'google-business-profile-seo', 'technical-seo', 'content-seo', 'link-building', 'seo-audit']) + '</div></div></section>'
        out += pricing(PACKAGES['seo-packages/local-seo']['plans'], 'Local SEO pricing for ' + esc(n.lower()), 'Plans built for local businesses. Month to month after onboarding.')
        out += faq(faqs, tabs=False, title='SEO for ' + esc(n.lower()) + ': FAQ')
        out += related(['seo-for-' + x['slug'] for x in sib] + ['industries', 'local-seo'], 'Related industries')
        out += cta(f'Ready to grow your {esc(d["noun"])}?', 'Get a free audit of your website and Google Business Profile.')
        return out
    ld = [ORG, crumbs_ld(crumbs), {'@context': 'https://schema.org', '@type': 'Service', 'name': 'SEO for ' + n, 'serviceType': 'Search engine optimization', 'audience': {'@type': 'BusinessAudience', 'audienceType': n}, 'provider': {'@type': 'Organization', 'name': BRAND, 'url': SITE}, 'areaServed': 'US'}, faq_ld(faqs)]
    write(k, page(k, f'SEO for {n}: Rank Higher and Get More Customers | RankEmpire', f'SEO for {n.lower()} that wins the map pack and organic results. Local SEO, Google Business Profile, service pages and reviews built for {d["noun"]}s.', c, ld, img=d['grp'], active='industries'))

# ---------- locations ----------
def locations_hub():
    k = 'locations'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'Locations')], 'SEO company serving <em>17 US cities</em>', 'Local market knowledge for the biggest metros in the country, with strategies built around how each city searches.', img='city', pills=[x['name'] for x in C[:5]])
        out += f'<section class="sec" style="padding-top:clamp(50px,6vw,80px)"><div class="wrap">{shead("Choose your city", "Each city page covers the areas we serve and the local market.")}<div class="links-grid" data-stagger>' + ''.join(f'<a href="{U("locations/" + x["slug"])}">{esc(x["name"])}, {x["st"]}</a>' for x in C) + '</div></div></section>'
        out += f'<section class="sec" style="padding-top:0"><div class="wrap"><div class="note" data-r>We build city pages only where we can add real local insight. As we grow, new city and industry plus city pages are added with unique local content rather than mass-produced templates.</div></div></section>'
        out += cta('Your city not listed?', 'We work with businesses across the US. Ask about your market.')
        return out
    write(k, page(k, 'SEO Company Locations Across the US | RankEmpire', 'RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Dallas, Miami and 11 more US cities.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'Locations')])], img='city', active=''))

def city_page(d):
    k = 'locations/' + d['slug']; n = d['name']
    crumbs = [('', 'Home'), ('locations', 'Locations'), (k, 'SEO Company in ' + n)]
    faqs = [(f'Do you have an office in {n}?', f'We are a remote-first team serving {n} businesses. Strategy calls happen over video and we know the {n} market through the clients and campaigns we run there.'),
            (f'Can you rank my business across all of {n}?', f'Map results favor businesses close to the searcher, so we focus map work near your locations and use dedicated area pages to reach the rest of the {n} area.'),
            (f'Which industries do you work with in {n}?', f'We work with 45 industries. In {n} we see strong demand for ' + ', '.join(IND[x]['name'].lower() for x in d['inds'][:3]) + ' and more.'),
            ('How much does local SEO cost?', 'Local plans start at $799 per month. We recommend a plan after reviewing your competition in your area.')]
    others = [x for x in C if x['slug'] != d['slug']][:8]
    def c():
        out = page_hero(k, crumbs, f'SEO company in <em>{esc(n)}</em>', f'Local SEO, technical SEO and content for {esc(n)} businesses that want more calls, bookings and sales from search.', img='city', pills=d['areas'][:5])
        out += intro([n, d['state'], 'Local', 'Organic'], f'<b style="color:inherit">{esc(d["note"])}</b>')
        out += f'<section class="sec" style="padding-top:0"><div class="wrap split"><div class="sticky"><span class="eyb">Areas we serve</span><h2 class="h2" data-lines>Across {esc(n)}<br>and nearby</h2></div><div><div class="chipset" data-stagger>{"".join(f"<span>{esc(a)}</span>" for a in d["areas"])}</div><p style="margin-top:24px;color:var(--mute3)" data-r>We build visibility neighborhood by neighborhood, so customers across the {esc(n)} area can find you, not only those near your address.</p></div></div></section>'
        out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("Popular industries in " + esc(n), "Industry strategies we run often in this market.")}<div class="g4" data-stagger>' + ''.join(f'<a class="box" href="{U("seo-for-" + x)}"><h3>SEO for {esc(IND[x]["name"])}</h3><p>{esc(IND[x]["angle"][:110])}...</p><span class="go">Learn more &#8599;</span></a>' for x in d['inds']) + '</div></div></section>'
        out += services_acc(['local-seo', 'google-business-profile-seo', 'technical-seo', 'content-seo'], f'SEO services in {esc(n)}', 'Everything you need to rank locally and beyond.')
        out += '<div style="height:clamp(60px,8vw,110px)"></div>' + process(None, f'How we grow {esc(n)} businesses', 'Audit, strategy, execution and reporting,<br>tuned to your local market.')
        out += faq(faqs, tabs=False, title=f'SEO in {esc(n)}: FAQ')
        out += related(['locations/' + x['slug'] for x in others] + ['locations', 'local-seo'], 'Other cities we serve')
        out += cta(f'Ready to rank in {esc(n)}?', 'Get a free local SEO audit for your business.')
        return out
    ld = [ORG, crumbs_ld(crumbs), {'@context': 'https://schema.org', '@type': 'Service', 'name': f'SEO services in {n}', 'serviceType': 'Search engine optimization', 'areaServed': {'@type': 'City', 'name': n, 'containedInPlace': {'@type': 'State', 'name': d['state']}}, 'provider': {'@type': 'Organization', 'name': BRAND, 'url': SITE}}, faq_ld(faqs)]
    write(k, page(k, f'SEO Company in {n}, {d["st"]}: Local SEO Services | RankEmpire', f'RankEmpire is an SEO company serving {n}, {d["state"]}. Local SEO, Google Business Profile, technical SEO and content for businesses across ' + ', '.join(d['areas'][:3]) + ' and beyond.', c, ld, img='city'))

# ---------- tools ----------
TOOL_UI = {
 'audit': '''<div class="form"><label>Page URL (optional, used for reference)<input id="t-url" placeholder="https://example.com/page"></label>
<label>Page HTML source<textarea id="t-html" placeholder="Open your page, press Ctrl+U (Cmd+Option+U on Mac), copy everything and paste it here."></textarea></label>
<div class="row"><button class="btn acc" id="t-run" type="button">Analyze page</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
 'meta': '''<div class="form"><label>Page HTML source<textarea id="t-html" placeholder="Paste the page source code (Ctrl+U, copy all)."></textarea></label>
<div class="row"><button class="btn acc" id="t-run" type="button">Check meta tags</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
 'serp': '''<div class="form"><label>Page title<input id="t-title" value="SEO Company That Builds Rankings That Compound | RankEmpire"></label>
<label>Meta description<textarea id="t-desc" style="min-height:90px">RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content, links and Google Business Profile under one roof.</textarea></label>
<label>URL<input id="t-url" value="https://www.rankempire.com/seo-company/"></label></div><div class="out" id="t-out"></div>''',
 'schema': '''<div class="form"><label>JSON-LD or page HTML<textarea id="t-html" placeholder="Paste a JSON-LD block or the full page source."></textarea></label>
<div class="row"><button class="btn acc" id="t-run" type="button">Validate schema</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
 'sitemap': '''<div class="form"><label>XML sitemap content<textarea id="t-html" placeholder="Open yoursite.com/sitemap.xml, copy all and paste it here."></textarea></label>
<div class="row"><button class="btn acc" id="t-run" type="button">Check sitemap</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
 'robots': '''<div class="form"><label>robots.txt content<textarea id="t-html" placeholder="Open yoursite.com/robots.txt, copy all and paste it here."></textarea></label>
<div class="two"><label>URL path to test<input id="t-path" value="/blog/my-post/"></label><label>User agent<select id="t-ua"><option>Googlebot</option><option>Bingbot</option><option>GPTBot</option><option>*</option></select></label></div>
<div class="row"><button class="btn acc" id="t-run" type="button">Test URL</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
 'kw': '''<div class="form"><div class="two"><label>Seed keyword<input id="t-kw" value="roof repair"></label><label>City or area (optional)<input id="t-city" placeholder="e.g. Denver"></label></div>
<div class="row"><button class="btn acc" id="t-run" type="button">Generate keyword ideas</button><button class="btn line" id="t-copy" type="button">Copy all</button></div></div><div class="out" id="t-out"></div>''',
 'rank': '''<div class="form"><div class="two"><label>Your domain<input id="t-dom" placeholder="example.com"></label><label>Keyword (for your notes)<input id="t-kw" placeholder="plumber denver"></label></div>
<label>Result URLs in order<textarea id="t-html" placeholder="Search the keyword in a private window and paste the result URLs here, one per line, top to bottom."></textarea></label>
<div class="row"><button class="btn acc" id="t-run" type="button">Find my position</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
 'backlink': '''<div class="form"><label>Your domain<input id="t-dom" placeholder="example.com"></label>
<label>Backlink export (CSV or one URL per line)<textarea id="t-html" placeholder="Paste a backlink export from Google Search Console, Ahrefs, Semrush or Moz. Lines with source URL and optional anchor text separated by a comma."></textarea></label>
<div class="row"><button class="btn acc" id="t-run" type="button">Analyze backlinks</button><button class="btn line" id="t-demo" type="button">Try a sample</button></div></div><div class="out" id="t-out"></div>''',
}
TOOL_HELP = {
 'audit': [('Why paste the source code?', 'Browsers block websites from reading other websites directly for security reasons. Pasting the source lets the check run instantly and privately in your browser.'), ('Is my data stored?', 'No. Everything runs in your browser. Nothing is sent to our servers.')],
 'meta': [('Which tags matter most?', 'The title tag and meta description shape how your page appears in search results. Canonical and robots tags control indexing. Open Graph tags control social previews.'), ('Is my data stored?', 'No. The check runs entirely in your browser.')],
 'serp': [('Why is my title cut off?', 'Google truncates titles at roughly 580 pixels on desktop. The preview estimates pixel width so you can see where yours will be cut.'), ('Does Google always use my title?', 'Not always. Google may rewrite titles and descriptions it thinks do not match the query. Clear, accurate titles are rewritten less often.')],
 'schema': [('Which schema should I use?', 'Local businesses should use LocalBusiness or a specific subtype, plus Organization, BreadcrumbList and FAQPage where relevant. Stores need Product and Offer.'), ('Does this replace Google tools?', 'It is a fast first check. For final validation use Google Rich Results Test as well.')],
 'sitemap': [('What should be in a sitemap?', 'Only canonical, indexable pages that return a 200 status. Leave out redirects, noindex pages and duplicates.'), ('How large can a sitemap be?', 'Up to 50,000 URLs or 50 MB uncompressed per file. Larger sites use a sitemap index.')],
 'robots': [('Does robots.txt remove pages from Google?', 'No. It blocks crawling, not indexing. To remove a page from results, use a noindex tag and allow crawling.'), ('How are conflicts resolved?', 'The most specific matching rule wins. If an Allow and Disallow rule match with the same length, Allow wins.')],
 'kw': [('Where do these ideas come from?', 'The tool combines your seed keyword with proven search patterns for questions, buying intent, comparisons and local searches. It does not show search volumes.'), ('How do I check volume?', 'Paste the ideas into Google Keyword Planner or your SEO tool of choice to see volume and difficulty.')],
 'rank': [('Why paste the results?', 'Search engines do not allow automated scraping from browsers, and results vary by location. Pasting results from your own search gives you the most accurate local position.'), ('Want automatic tracking?', 'Our SEO plans include daily rank tracking across your whole service area.')],
 'backlink': [('Where do I get a backlink export?', 'Google Search Console, under Links, lets you export top linking sites for free. Paid tools like Ahrefs and Semrush provide fuller exports.'), ('What is a healthy anchor text mix?', 'Most natural profiles are led by brand and URL anchors, with a smaller share of exact match keywords.')],
}
def tool_page(t):
    slug, name, kind, blurb = t; k = 'seo-tools/' + slug
    crumbs = [('', 'Home'), ('seo-tools', 'SEO Tools'), (k, name)]
    others = [x for x in TOOLS if x[0] != slug]
    help_ = TOOL_HELP[kind]
    def c():
        out = page_hero(k, crumbs, f'Free <em>{esc(name)}</em>', esc(blurb), bts=[])
        out += f'<section style="padding-bottom:clamp(60px,8vw,110px)"><div class="wrap" style="max-width:1060px"><div class="tool" data-tool="{kind}" data-name="{esc(name)}" data-r>{TOOL_UI[kind]}</div><p class="note" style="margin-top:16px" data-r>Free and private: this tool runs entirely in your browser. Want a full manual review? <a href="{U("seo-audit")}" style="color:var(--acc);font-weight:600">Get a professional SEO audit</a>.</p></div></section>'
        out += faq(help_, tabs=False, title='How to use the ' + esc(name))
        out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("More free SEO tools", "Check every part of your SEO in minutes.")}<div class="g3" data-stagger>' + ''.join(f'<a class="box" href="{U("seo-tools/" + x[0])}"><h3>{esc(x[1])}</h3><p>{esc(x[3])}</p><span class="go">Open tool &#8599;</span></a>' for x in others[:6]) + '</div></div></section>'
        out += cta('Want experts to fix it for you?', 'Our team turns tool results into rankings. Get a free audit.')
        return out
    ld = [ORG, crumbs_ld(crumbs), {'@context': 'https://schema.org', '@type': 'WebApplication', 'name': name, 'applicationCategory': 'BusinessApplication', 'operatingSystem': 'Any', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'USD'}, 'provider': {'@type': 'Organization', 'name': BRAND}}, faq_ld(help_)]
    CUR[0] = k
    body = head(k, f'Free {name} | RankEmpire SEO Tools', blurb, ld, 's-tech') + nav('seo-tools') + c() + footer().replace('</footer>', '</footer>') + f'<script src="{A("assets/tools.js")}"></script></body></html>'
    write(k, body)

def tools_hub():
    k = 'seo-tools'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'SEO Tools')], 'Free SEO tools to <em>check</em> your site', 'Eleven free tools for audits, meta tags, schema, sitemaps, robots.txt, keywords, rankings and backlinks. Private and instant, right in your browser.', bts=[btn('#tools', 'Browse tools'), btn(U('seo-audit'), 'Get a full audit', 'line', False)], img='s-tech', pills=['Private', 'Instant', 'Free forever'])
        out += f'<section class="sec" id="tools"><div class="wrap">{shead("All SEO tools", "Pick a tool to get started.")}<div class="g3" data-stagger>' + ''.join(f'<a class="box{" dk" if i == 0 else ""}" href="{U("seo-tools/" + x[0])}"><span class="n">{i + 1:02d}</span><h3>{esc(x[1])}</h3><p>{esc(x[3])}</p><span class="go">Open tool &#8599;</span></a>' for i, x in enumerate(TOOLS)) + '</div></div></section>'
        out += cta()
        return out
    write(k, page(k, 'Free SEO Tools: Audit, Meta, Schema, Sitemap and Keyword Tools | RankEmpire', 'Free SEO tools from RankEmpire: SEO audit tool, keyword research tool, rank checker, backlink checker, SERP preview, meta tag, schema, sitemap and robots.txt checkers.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'SEO Tools')])], img='s-tech', active='seo-tools'))

# ---------- case studies ----------
def case_studies():
    k = 'case-studies'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'Case Studies')], 'Results built on <em>proven</em> playbooks', 'How we run SEO programs for local businesses, stores and practices. Client results are published here with their permission.', img='w2', pills=['Local', 'E-commerce', 'Technical', 'Practices'])
        out += works('Our SEO playbooks', 'The programs behind our client work.')
        out += f'''<section class="sec" style="padding-top:0"><div class="wrap">{shead('SEO results', 'What we measure for every client.')}
<div class="kpis" data-stagger><div class="kpi acc"><b>Calls</b><span>Tracked from search and maps</span></div><div class="kpi"><b>Leads</b><span>Forms and bookings from organic</span></div><div class="kpi"><b>Revenue</b><span>Sales attributed to organic search</span></div><div class="kpi"><b>Rankings</b><span>Map grid and organic positions</span></div></div>
<div class="note" style="margin-top:20px" data-r>Detailed client case studies with verified numbers are added here as clients approve them. Want to see results from your industry? <a href="{U('contact-us')}" style="color:var(--acc);font-weight:600">Ask us on a call</a>.</div></div></section>'''
        out += trust()
        out += cta()
        return out
    write(k, page(k, 'SEO Case Studies and Results | RankEmpire', 'See how RankEmpire runs SEO programs for local businesses, e-commerce stores, practices and sites recovering from traffic drops.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'Case Studies')])], img='w2', active='case-studies'))

# ---------- blog ----------
def blog_hub():
    k = 'blog'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'SEO Blog')], 'SEO insights that drive <em>rankings</em>', 'Practical guides on local SEO, technical SEO and content strategy, written by the team doing the work.', bts=[])
        out += f'<section class="sec" style="padding-top:0"><div class="wrap"><div class="blogg" data-stagger>' + ''.join(f'<a class="bc{" big" if i == 0 else ""}" href="{U("blog/" + b["slug"])}"><div class="im"><img src="{IMG(b["img"])}" alt="" loading="lazy">{"" if i == 0 else f"<span class=ct>{b['cat']}</span>"}</div><div class="tx">{f"<span class=ct>{b['cat']}</span>" if i == 0 else ""}<h3>{esc(b["title"])}</h3><p>{esc(b["excerpt"])}</p>{"<span class=\"btn acc full\" style=\"margin-top:auto\">Read article</span>" if i == 0 else ""}</div></a>' for i, b in enumerate(BLOG)) + '</div></div></section>'
        out += cta()
        return out
    write(k, page(k, 'SEO Blog: Local, Technical and Content SEO Guides | RankEmpire', 'Practical SEO guides from RankEmpire on local SEO, technical SEO, content strategy and growing organic revenue.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'SEO Blog')])], img='b1', active='blog'))

def blog_post(b):
    k = 'blog/' + b['slug']; crumbs = [('', 'Home'), ('blog', 'Blog'), (k, b['title'])]
    others = [x for x in BLOG if x['slug'] != b['slug']]
    body_html = b['body']
    def fix(m):
        target = m.group(1).replace('../', '').strip('/')
        return f'href="{U(target)}"'
    def c():
        bh = re.sub(r'href="((?:\.\./)+[^"]*)"', fix, body_html)
        out = f'<section class="ph"><div class="wrap" style="max-width:1000px"><nav class="crumb" data-r><a href="{U("")}">Home</a><i>/</i><a href="{U("blog")}">Blog</a><i>/</i><span>{esc(b["cat"])}</span></nav><h1 data-r style="font-size:clamp(38px,4.6vw,64px)">{esc(b["title"])}</h1><p class="sub" data-r>{esc(b["excerpt"])}</p></div></section>'
        out += f'<div class="wrap"><div class="phimg" data-r="s"><img src="{IMG(b["img"])}" alt=""></div></div>'
        out += f'<section class="sec" style="padding-top:50px"><div class="wrap" style="display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:60px;max-width:1160px" ><article class="prose" data-r>{bh}</article><aside><div class="box bg sticky" data-r><h3>Get SEO tips monthly</h3><p style="margin-bottom:16px">One practical idea a month. No spam.</p><form data-news="{EMAIL}"><input type="email" placeholder="Your email" required style="width:100%;background:#fff;border:0;border-radius:999px;padding:14px 18px;margin-bottom:10px"><button class="btn acc full" type="submit">Subscribe</button></form><hr style="border:0;border-top:1px solid #d9cdb8;margin:22px 0"><p style="font-weight:600;color:var(--ink);margin-bottom:10px">Need help?</p>{btn(U("seo-audit"), "Get an SEO audit", "dk sm")}</div></aside></div></section>'
        out += f'<section class="sec" style="padding-top:0"><div class="wrap">{shead("Keep reading")}<div class="blogg" data-stagger>' + ''.join(f'<a class="bc" href="{U("blog/" + x["slug"])}"><div class="im"><img src="{IMG(x["img"])}" alt="" loading="lazy"><span class="ct">{x["cat"]}</span></div><div class="tx"><h3>{esc(x["title"])}</h3><p>{esc(x["excerpt"])}</p></div></a>' for x in others) + '</div></div></section>'
        out += cta()
        return out
    ld = [ORG, crumbs_ld(crumbs), {'@context': 'https://schema.org', '@type': 'BlogPosting', 'headline': b['title'], 'description': b['excerpt'], 'image': SITE + '/img/' + b['img'] + '.webp', 'author': {'@type': 'Organization', 'name': BRAND}, 'publisher': {'@type': 'Organization', 'name': BRAND}, 'datePublished': '2026-10-01', 'mainEntityOfPage': canon(k)}]
    write(k, page(k, b['title'] + ' | RankEmpire', b['excerpt'], c, ld, img=b['img'], active='blog'))

# ---------- about / team / contact / legal ----------
def about():
    k = 'about-us'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'About Us')], 'We build search <em>empires</em> for ambitious businesses', 'RankEmpire is an SEO agency for local businesses, e-commerce brands and SaaS companies that want rankings to become a lasting asset.', img='team')
        out += intro(['Strategy', 'Technical', 'Content', 'Local'], '<b style="color:inherit">We are not just another SEO agency.</b> We are a small team of strategists, technical specialists and writers who believe SEO should be transparent, measurable and built to last. No shortcuts, no jargon and no long contracts, just work that compounds month after month.')
        out += f'''<section class="sec" style="padding-top:0"><div class="wrap">{shead('What we stand for', 'Numbers that describe how we work.')}
<div class="kpis" data-stagger><div class="kpi acc"><b>45+</b><span>Industries with dedicated strategies</span></div><div class="kpi"><b>17</b><span>US metro markets served</span></div><div class="kpi"><b>11</b><span>Free SEO tools for anyone</span></div><div class="kpi"><b>0</b><span>Long-term lock-in contracts</span></div></div></div></section>'''
        out += values() + process() + trust()
        out += f'<section class="sec"><div class="wrap">{shead("The people behind the work", "A team of strategists, engineers and writers.")}' + team_grid() + '</div></section>'
        out += faq(FAQ_HOME)
        out += cta()
        return out
    write(k, page(k, 'About RankEmpire: The SEO Agency Built for Compounding Growth', 'Learn about RankEmpire, an SEO agency for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'About Us')])], img='team', active='about-us'))

def team_grid():
    first = f'<div class="box acc" style="display:flex;flex-direction:column;min-height:420px"><span class="eyb" style="color:#fff">Join the team</span><h3 style="font-size:28px">Want to shape the future of search?</h3><p>We are always looking for sharp SEO strategists, technical specialists and writers.</p><div style="margin-top:auto">{btn(U("contact-us"), "Get in touch", "wh")}</div></div>'
    cards = ''.join(f'<div class="tm" style="display:flex;flex-direction:column;gap:12px"><div style="border-radius:20px;overflow:hidden;aspect-ratio:3/4"><img src="{IMG(t[0])}" alt="{esc(t[1])}" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div><div><h3 style="font-size:20px;font-weight:600">{esc(t[1])}</h3><p style="color:var(--mute);font-size:14.5px">{esc(t[2])}</p></div></div>' for t in TEAM[:3])
    return f'<div class="g4" data-stagger>{first}{cards}</div>'

def team():
    k = 'our-team'
    def c():
        out = page_hero(k, [('', 'Home'), (k, 'Our Team')], 'Meet the team behind your <em>rankings</em>', 'Strategists, technical specialists and writers who do the work themselves. No outsourcing chains, no anonymous account managers.', bts=[btn(U('contact-us'), 'Work with us'), btn(U('about-us'), 'About RankEmpire', 'line', False)])
        cards = ''.join(f'<div data-r style="--d:{i * .08}s"><div style="border-radius:24px;overflow:hidden;aspect-ratio:3/4;margin-bottom:16px"><img src="{IMG(t[0])}" alt="{esc(t[1])}" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div><h3 style="font-size:22px;font-weight:600">{esc(t[1])}</h3><p style="color:var(--acc);font-weight:600;font-size:14.5px;margin:2px 0 8px">{esc(t[2])}</p><p style="color:var(--mute);font-size:15px">{esc(t[3])}</p></div>' for i, t in enumerate(TEAM))
        out += f'<section class="sec" style="padding-top:0"><div class="wrap"><div class="g4">{cards}</div></div></section>'
        out += values()
        out += f'<section class="sec" style="padding-top:0"><div class="wrap"><div class="box dk" data-r style="display:flex;justify-content:space-between;align-items:center;gap:30px;flex-wrap:wrap;padding:40px"><div><h3 style="font-size:32px">Join RankEmpire</h3><p>We hire people who love solving search problems and explaining them clearly.</p></div>{btn("mailto:" + EMAIL + "?subject=Careers", "Send your portfolio", "acc")}</div></div></section>'
        out += cta()
        return out
    write(k, page(k, 'Our Team: SEO Strategists, Engineers and Writers | RankEmpire', 'Meet the RankEmpire team of SEO strategists, technical specialists and content writers who run every client program.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'Our Team')])], img='team'))

def contact():
    k = 'contact-us'
    opts = ''.join(f'<option>{esc(S[x]["name"])}</option>' for x in SERVICE_ORDER_CORE + SERVICE_ORDER_SVC)
    def c():
        out = f'''<section class="ph l" style="padding-bottom:40px"><div class="wrap"><nav class="crumb" data-r><a href="{U('')}">Home</a><i>/</i><span>Contact Us</span></nav>
<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap"><h1 data-r>Contact us <em>today</em></h1><p data-r style="max-width:360px;color:var(--mute);text-align:right">Tell us about your business and goals. We reply within one business day with next steps and a free audit offer.</p></div></div></section>
<section style="padding-bottom:clamp(70px,9vw,120px)"><div class="wrap split" style="align-items:stretch">
<form class="form" data-mail="{EMAIL}" data-subject="Free SEO audit request" data-r>
<div class="two"><label>First name<input name="First name" placeholder="Please enter your name" required></label><label>Last name<input name="Last name" placeholder="Please enter your last name"></label></div>
<div class="two"><label>Email<input type="email" name="Email" placeholder="Please enter your email" required></label><label>Website<input name="Website" placeholder="https://"></label></div>
<label>Select service<select name="Service"><option value="">Select a service</option>{opts}<option>Not sure yet</option></select></label>
<label>Message<textarea name="Message" placeholder="Tell us about your business, your market and your goals"></textarea></label>
<button class="btn acc full" type="submit">Send message{ARR}</button><div class="ok">Your email app has opened with your message. Press send and we will reply within one business day.</div></form>
<div class="phimg" data-r="s" style="aspect-ratio:auto;min-height:520px"><img src="{IMG('contact')}" alt="" style="height:100%"></div></div></section>
<section class="sec" style="padding-top:0"><div class="wrap">{shead("We would love to hear from you", "", center=True)}
<div class="g4" data-stagger>
<a class="box bg" href="mailto:{EMAIL}" style="text-align:center"><div style="width:44px;height:44px;margin:0 auto 18px;color:var(--acc)">{ICO['mail']}</div><h3>{EMAIL}</h3><p>Pricing, plans and new projects</p></a>
<a class="box bg" href="{U('seo-audit')}" style="text-align:center"><div style="width:44px;height:44px;margin:0 auto 18px;color:var(--acc)">{ICO['spark']}</div><h3>Free SEO audit</h3><p>Start with a review of your site</p></a>
<a class="box bg" href="{U('locations')}" style="text-align:center"><div style="width:44px;height:44px;margin:0 auto 18px;color:var(--acc)">{ICO['pin']}</div><h3>Across the US</h3><p>Remote-first, serving 17 metros</p></a>
<div class="box bg" style="text-align:center"><div style="width:44px;height:44px;margin:0 auto 18px;color:var(--acc)">{ICO['clock']}</div><h3>Mon to Fri</h3><p>9am to 6pm Eastern Time</p></div></div></div></section>'''
        out += faq(FAQ_HOME) + cta()
        return out
    write(k, page(k, 'Contact RankEmpire: Get a Free SEO Audit', 'Contact RankEmpire to get a free SEO audit, ask about pricing or start a project. We reply within one business day.', c, [ORG, crumbs_ld([('', 'Home'), (k, 'Contact Us')])], img='contact'))

def legal(k, title, sections):
    def c():
        out = f'<section class="ph"><div class="wrap"><nav class="crumb" data-r><a href="{U("")}">Home</a><i>/</i><span>{title}</span></nav><h1 data-r>{title}</h1><p class="sub" data-r>Last updated October 2026</p></div></section>'
        out += f'<section style="padding-bottom:100px"><div class="wrap" style="max-width:860px"><div class="prose" data-r>' + ''.join(f'<h2>{h}</h2><p>{p}</p>' for h, p in sections) + '</div></div></section>'
        return out
    write(k, page(k, title + ' | RankEmpire', title + ' for the RankEmpire website.', c, [ORG], noindex=False))

def notfound():
    CUR[0] = ''
    body = head('404', 'Page not found | RankEmpire', 'The page you are looking for does not exist.', [], noindex=True) + nav() + f'<section class="ph" style="min-height:70vh"><div class="wrap"><div class="bigword" style="justify-content:center;padding:0 0 10px">404</div><h1 data-r>This page lost its <em>ranking</em></h1><p class="sub" data-r>The page you are looking for has moved or does not exist.</p><div class="bts">{btn(U(""), "Back to home")}{btn(U("seo-tools"), "Try our free tools", "line", False)}</div></div></section>' + footer() + '</body></html>'
    open(os.path.join(OUT, '404.html'), 'w').write(body)

# ---------- build ----------
def build():
    if os.path.exists(OUT): shutil.rmtree(OUT)
    os.makedirs(OUT)
    shutil.copytree(os.path.join(SRC, 'assets'), os.path.join(OUT, 'assets'))
    shutil.copytree(os.path.join(SRC, 'img'), os.path.join(OUT, 'img'))
    home()
    for k in S: service_page(k)
    for k in PACKAGES: package_page(k)
    industries_hub()
    for d in I: industry_page(d)
    locations_hub()
    for d in C: city_page(d)
    tools_hub()
    for t in TOOLS: tool_page(t)
    case_studies(); blog_hub()
    for b in BLOG: blog_post(b)
    about(); team(); contact()
    legal('privacy-policy', 'Privacy Policy', [('Information we collect', 'We collect the information you choose to send us, such as your name, email address, website and message when you contact us or subscribe. Our free SEO tools run in your browser and do not send the content you paste to our servers.'), ('How we use information', 'We use your information to respond to enquiries, provide our services and send newsletters you have subscribed to. We never sell your personal information.'), ('Cookies and analytics', 'We may use privacy-friendly analytics to understand how visitors use the site. You can block cookies in your browser settings.'), ('Your rights', f'You can ask us to access, correct or delete your personal information at any time by emailing {EMAIL}.'), ('Contact', f'Questions about this policy can be sent to {EMAIL}.')])
    legal('terms', 'Terms and Conditions', [('Use of this website', 'The content on this website is provided for general information. By using the site you agree to these terms.'), ('Free tools', 'Our free SEO tools are provided as is, without warranty. Results are estimates and should be checked before making business decisions.'), ('Services', 'Client engagements are governed by a separate written agreement that sets out scope, fees and terms.'), ('Intellectual property', 'The design, text and graphics on this website belong to RankEmpire unless stated otherwise.'), ('Contact', f'Questions about these terms can be sent to {EMAIL}.')])
    notfound()
    # favicon
    open(os.path.join(OUT, 'img', 'favicon.svg'), 'w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0a0a0a"/><path d="M6 22 5 11l5.5 4.5L16 7l5.5 8.5L27 11l-1 11Z" fill="#ff4c39"/><rect x="6" y="23.5" width="20" height="3" rx="1.5" fill="#fff"/></svg>')
    # sitemap + robots
    urls = ''.join(f'<url><loc>{canon(k)}</loc><changefreq>{"weekly" if k in ("", "blog") else "monthly"}</changefreq><priority>{"1.0" if k == "" else "0.8" if k.count("/") == 0 else "0.6"}</priority></url>\n' for k in PAGES_OUT)
    open(os.path.join(OUT, 'sitemap.xml'), 'w').write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}</urlset>\n')
    open(os.path.join(OUT, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n')
    print(MODE, len(PAGES_OUT), 'pages ->', OUT)

if __name__ == '__main__':
    build()
