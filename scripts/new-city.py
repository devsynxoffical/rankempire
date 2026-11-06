#!/usr/bin/env python3
"""Build city landing pages from content/new-cities.json, using the Miami page as the layout template.

Every city-specific string (neighborhoods, considerations, keywords, industries, FAQ, statement, meta,
schema) comes from the JSON, so each page has its own local content. Also registers the city in
content/cities.json, routes.json, answers.json, guides.json, the header, mobile menu, home explore
strip and the locations hub. Idempotent: re-running rewrites the generated files.

    python3 scripts/new-city.py            # all cities in content/new-cities.json
    python3 scripts/new-city.py tampa      # one city
Then run: npm run related && npm run lastmod
"""
import json, os, re, sys, glob, html

SITE = 'https://www.rankempire.us'
TPL = 'components/pages/locations__miami'
TPL_PAGE = 'app/locations/miami/page.tsx'
spec_all = json.load(open('content/new-cities.json'))
only = sys.argv[1:]

# --- Miami strings that get swapped --------------------------------------------------------------
M_AREAS = ["Brickell", "Wynwood", "Coral Gables", "Miami Beach", "Doral", "Little Havana", "Kendall", "Aventura", "Hialeah", "Fort Lauderdale"]
M_CHIPS = ["Brickell", "Wynwood", "Coral Gables", "Miami Beach", "Doral"]
M_KW = ["seo company miami", "miami seo services", "local seo miami", "seo agency miami fl", "miami seo expert", "seo consultant miami"]


def js(s):
    return json.dumps(s, ensure_ascii=False)


def cards():
    """Industry card markup (img, title, text) collected from every existing city page."""
    out = {}
    for f in glob.glob('components/pages/locations__*/Industries.tsx'):
        s = open(f).read()
        for m in re.finditer(r'<a className="xi" href="([^"]+)" data-r="">.*?</a>', s, re.S):
            out.setdefault(m.group(1), m.group(0))
    return out


def jsx_strings(s):
    return re.findall(r'\{"((?:[^"\\]|\\.)*)"\}', s)


def build(slug, c):
    name = c['name']
    d = f'components/pages/locations__{slug}'
    os.makedirs(d, exist_ok=True)
    files = {os.path.basename(f): open(f).read() for f in glob.glob(TPL + '/*.tsx')}

    def sub(text, pairs):
        for a, b in pairs:
            if a not in text:
                raise SystemExit(f'template string not found: {a[:60]}')
            text = text.replace(a, b)
        return text

    # V2 hero
    v = files['V2.tsx']
    v = sub(v, [('{"SEO Company in Miami"}', js(f'SEO Company in {name}').join('{}')),
                ('{"Miami, FL"}', '{' + js(c['eyebrow']) + '}'),
                ('aria-label="Miami, FL"', f'aria-label="{c["eyebrow"]}"'),
                ('{"SEO company in "}\n              <span className="acc">\n                {"Miami"}\n              </span>',
                 '<span className="acc">\n                {' + js(name) + '}\n              </span>\n              {" SEO company"}'),
                ('{"Local SEO, technical SEO and content for Miami businesses that want more calls, bookings and sales from Google."}', '{' + js(c['lead']) + '}'),
                ('{"Areas covered around Miami"}', '{' + js(f'Areas covered around {name}') + '}'),
                ('"--a1": "#2b55e8", "--a2": "#1fa3c9"', f'"--a1": "{c["colors"][0]}", "--a2": "{c["colors"][1]}"'),
                ('au-140197698539824', f'au-{sum(ord(ch) * 7919 ** i for i, ch in enumerate(slug)) % 10**12}')])
    for a, b in zip(M_CHIPS, c['chips']):
        v = v.replace('{' + js(a) + '}', '{' + js(b) + '}', 1)
    files['V2.tsx'] = v

    # Statement
    s = files['Statement.tsx']
    old = re.search(r'<p className="st" data-words="">\s*\{"((?:[^"\\]|\\.)*)"\}', s).group(1)
    files['Statement.tsx'] = s.replace('{"Local search in Miami"}', '{' + js(f'Local search in {name}') + '}').replace('{"' + old + '"}', '{' + js(c['statement']) + '}')

    # Considerations
    s = files['Considerations.tsx'].replace('{"Miami SEO considerations"}', '{' + js(f'{name} SEO considerations') + '}')
    olds = re.findall(r'<h3>\s*\{"([^"]+)"\}\s*</h3>\s*<p>\s*\{"((?:[^"\\]|\\.)*)"\}', s)
    for (oh, op), (nh, np) in zip(olds, c['considerations']):
        s = s.replace('{"' + oh + '"}', '{' + js(nh) + '}').replace('{"' + op + '"}', '{' + js(np) + '}')
    files['Considerations.tsx'] = s

    # Service areas + marquee
    for fn in ['ServiceAreas.tsx', 'Marquee.tsx']:
        s = files[fn].replace('{"Areas we serve in and around Miami"}', '{' + js(f'Areas we serve in and around {name}') + '}')
        for a, b in zip(M_AREAS, c['areas']):
            s = s.replace('{' + js(a) + '}', '{' + js('\x00' + b) + '}')
        files[fn] = s.replace('\\u0000', '').replace('\x00', '')

    # Keywords
    s = files['Keywords.tsx'].replace('{"Miami searches we target"}', '{' + js(f'{name} searches we target') + '}')
    for a, b in zip(M_KW, c['keywords']):
        s = s.replace('{' + js(a) + '}', '{' + js(b) + '}')
    files['Keywords.tsx'] = s

    # Industries
    lib = cards()
    s = files['Industries.tsx'].replace('{"Popular industries in Miami"}', '{' + js(f'Popular industries in {name}') + '}')
    blocks = re.findall(r'<a className="xi" href="[^"]+" data-r="">.*?</a>', s, re.S)
    for old_b, href in zip(blocks, c['industries']):
        if href not in lib:
            raise SystemExit(f'no industry card for {href}')
        s = s.replace(old_b, lib[href], 1)
    files['Industries.tsx'] = s

    files['Services.tsx'] = sub(files['Services.tsx'], [('{"SEO services in Miami"}', '{' + js(f'SEO services in {name}') + '}')])
    files['Pricing.tsx'] = sub(files['Pricing.tsx'], [('{"Local SEO pricing in Miami"}', '{' + js(f'Local SEO pricing in {name}') + '}')])

    # FAQ
    s = files['Faq.tsx']
    s = sub(s, [('{"SEO in Miami: "}', '{' + js(f'SEO in {name}: ') + '}'),
                ('{"Questions Miami business owners ask before hiring an SEO company."}', '{' + js(f'Questions {name} business owners ask before hiring an SEO company.') + '}')])
    fx = [{"c": "general", "q": q, "a": a, "t": ["Plain English", "Free audit", "No contracts"]} for q, a in c['faq']]
    data = 'window.FXDATA=' + json.dumps(fx, ensure_ascii=False) + ';window.FXMAIL="hello@rankempire.com"'
    s = re.sub(r'dangerouslySetInnerHTML=\{\{ __html: ".*?" \}\}', lambda m: 'dangerouslySetInnerHTML={{ __html: ' + json.dumps(data, ensure_ascii=False) + ' }}', s, count=1, flags=re.S)
    files['Faq.tsx'] = s

    # leave Related.tsx as a stub; scripts/related.mjs regenerates it
    for fn, text in files.items():
        if any(w in text for w in ['Miami', 'Brickell', 'Wynwood']) and fn not in ('Related.tsx',):
            left = [w for w in jsx_strings(text) if 'Miami' in w or 'Brickell' in w]
            if left:
                raise SystemExit(f'{fn}: Miami text left: {left[:3]}')
        open(f'{d}/{fn}', 'w').write(text)

    # page.tsx
    p = open(TPL_PAGE).read().replace('locations__miami', f'locations__{slug}').replace('locations/miami', f'locations/{slug}')
    t_old = re.search(r'title: \{ absolute: "([^"]+)"', p).group(1)
    d_old = re.search(r'^  description: "([^"]+)"', p, re.M).group(1)
    p = p.replace(t_old, c['title']).replace(d_old, c['description'])
    crumbs = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
        {"@type": "ListItem", "position": 2, "name": "Locations", "item": SITE + "/locations/"},
        {"@type": "ListItem", "position": 3, "name": f"SEO Company in {name}", "item": f"{SITE}/locations/{slug}/"}]}
    service = {"@context": "https://schema.org", "@type": "Service", "name": f"SEO services in {name}", "serviceType": "Search engine optimization",
               "areaServed": {"@type": "City", "name": name, "containedInPlace": {"@type": "State", "name": c['stateName']}},
               "provider": {"@id": SITE + "/#org"}, "url": f"{SITE}/locations/{slug}/", "description": c['qa'][1]}
    faq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in c['faq']]}
    blocks = re.findall(r'<script type="application/ld\+json" dangerouslySetInnerHTML=\{\{ __html: (".*?") \}\} />', p)
    for old_json, new in zip(blocks, [crumbs, service, faq]):
        p = p.replace(old_json, json.dumps(json.dumps(new, ensure_ascii=False), ensure_ascii=False), 1)
    p = re.sub(r'<SearchSurfaces slug="[^"]+" kind="city" audience="[^"]+" city="[^"]+" kw="[^"]+" question="[^"]+" />',
               f'<SearchSurfaces slug="locations/{slug}" kind="city" audience="businesses in {name}" city="{name}" kw="{c["keywords"][1]}" question="How much does local SEO cost in {name}?" />', p)
    if 'DeepGuide' not in p:
        p = p.replace("import QuickAnswer from '@/components/seo/QuickAnswer';", "import QuickAnswer from '@/components/seo/QuickAnswer';\nimport DeepGuide from '@/components/sections/DeepGuide';\nimport ProofStrip from '@/components/sections/ProofStrip';")
        p = p.replace(f'        <QuickAnswer slug="locations/{slug}" />', f'        <QuickAnswer slug="locations/{slug}" />\n        <ProofStrip context="{name} SEO" />')
        p = p.replace('        <Services />\n', f'        <Services />\n        <DeepGuide slug="locations/{slug}" />\n')
    assert 'Miami' not in p, 'Miami left in page.tsx'
    os.makedirs(f'app/locations/{slug}', exist_ok=True)
    open(f'app/locations/{slug}/page.tsx', 'w').write(p)

    # data files
    cities = json.load(open('content/cities.json'))
    if not any(x['slug'] == slug for x in cities):
        cities.append({"slug": slug, "name": name, "state": c['state'], "nearby": c['nearby']})
        json.dump(cities, open('content/cities.json', 'w'), indent=1, ensure_ascii=False); open('content/cities.json', 'a').write('\n')
    routes = json.load(open('content/routes.json'))
    if f'locations/{slug}' not in routes:
        routes.append(f'locations/{slug}')
        json.dump(routes, open('content/routes.json', 'w'), indent=1); open('content/routes.json', 'a').write('\n')
    ans = json.load(open('content/answers.json'))
    ans[f'locations/{slug}'] = {"q": c['qa'][0], "a": c['qa'][1], "description": c['description']}
    json.dump(ans, open('content/answers.json', 'w'), indent=2, ensure_ascii=False); open('content/answers.json', 'a').write('\n')
    g = json.load(open('content/guides.json'))
    g[f'locations/{slug}'] = c['guide']
    json.dump(g, open('content/guides.json', 'w'), indent=2, ensure_ascii=False); open('content/guides.json', 'a').write('\n')
    kt = json.load(open('content/keyword-targets.json'))
    kt[f'/locations/{slug}/'] = [c['keywords'][1], [k for k in c['keywords'] if k != c['keywords'][1]]]
    json.dump(kt, open('content/keyword-targets.json', 'w'), indent=1, ensure_ascii=False); open('content/keyword-targets.json', 'a').write('\n')

    # navigation: header, mobile menu, home explore, locations hub (inserted after the Miami link)
    nav = [('components/layout/Header.tsx', '<a href="/locations/miami/">\n                  {"SEO Company in Miami"}\n                </a>',
            f'\n                <a href="/locations/{slug}/">\n                  {{"SEO Company in {name}"}}\n                </a>'),
           ('components/layout/MobileMenu.tsx', '<a href="/locations/miami/">\n            {"Miami"}\n          </a>',
            f'\n          <a href="/locations/{slug}/">\n            {{"{name}"}}\n          </a>'),
           ('components/pages/home/Explore.tsx', '<a href="/locations/miami/" tabIndex={-1}>\n                {"Miami"}\n              </a>',
            f'\n              <a href="/locations/{slug}/" tabIndex={{-1}}>\n                {{"{name}"}}\n              </a>')]
    for f, anchor, add in nav:
        s = open(f).read()
        if f'/locations/{slug}/' in s:
            continue
        assert anchor in s, (f, 'anchor')
        open(f, 'w').write(s.replace(anchor, anchor + add, 1))
    f = 'components/pages/locations/Cities.tsx'
    s = open(f).read()
    if f'/locations/{slug}/' not in s:
        m = re.search(r'<a className="xl" href="/locations/miami/".*?</a>', s, re.S)
        card = m.group(0).replace('/locations/miami/', f'/locations/{slug}/').replace('{"SEO Company in Miami"}', '{' + js(f'SEO Company in {name}') + '}')
        card = card.replace('{"Florida · Brickell, Miami Beach, Coral Gables"}', '{' + js(c['hub']) + '}')
        open(f, 'w').write(s.replace(m.group(0), m.group(0) + '\n          ' + card, 1))
    print(f'built {slug}')


for slug, c in spec_all.items():
    if not only or slug in only:
        build(slug, c)
