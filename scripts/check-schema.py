"""Validate JSON-LD on every built page (.next/server/app) against Google's required and key
recommended properties for the rich-result types this site uses. Run after `next build`:
    python3 scripts/check-schema.py
Exits 1 if any error is found."""
import json, re, sys, collections
LOCAL = {'LocalBusiness','ProfessionalService','Store','Restaurant','LegalService','MedicalBusiness','HomeAndConstructionBusiness'}
routes = json.load(open('content/routes.json'))
errors, warns, counts = [], [], collections.Counter()
def need(cond, msg, page, warn=False):
    if not cond: (warns if warn else errors).append(f'{page}: {msg}')
for s in routes:
    page = s or 'home'
    h = open('.next/server/app/' + (s if s else 'index') + '.html').read()
    blocks = []
    for b in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h):
        try:
            seen = []
            d = json.loads(b, object_pairs_hook=lambda p: (seen.append(len({k for k, _ in p}) != len(p)), dict(p))[1])
            if any(seen): errors.append(f'{page}: duplicate keys in JSON-LD')
            blocks.append(d)
        except Exception as e:
            errors.append(f'{page}: invalid JSON-LD ({e})')
    ids = {d.get('@id') for d in blocks}
    types = [d.get('@type') for d in blocks]
    for d in blocks:
        t = d.get('@type'); tl = t if isinstance(t, list) else [t]; counts[str(t)] += 1
        need(d.get('@context') == 'https://schema.org', f'{t} missing @context', page)
        if set(tl) & LOCAL: need('address' in d, f'{t} is a LocalBusiness type without address', page)
        if 'OnlineBusiness' in tl or 'Organization' in tl:
            need(d.get('name') and d.get('url'), 'Organization name/url', page)
            lg = d.get('logo'); need(isinstance(lg, dict) and lg.get('url', '').endswith(('.png', '.jpg', '.webp')) and lg.get('width', 0) >= 112, 'Organization logo must be a >=112px raster image', page)
        if 'WebSite' in tl: need(d.get('name') and d.get('url'), 'WebSite name/url', page); need('potentialAction' not in d, 'WebSite has retired SearchAction', page, True)
        if 'BreadcrumbList' in tl:
            items = d.get('itemListElement', []); need(len(items) >= 2, 'Breadcrumb needs 2+ items', page, True)
            for i, it in enumerate(items):
                need(it.get('position') == i + 1 and it.get('name'), f'Breadcrumb item {i+1} position/name', page)
                if i < len(items) - 1: need(it.get('item'), f'Breadcrumb item {i+1} missing item URL', page)
        if 'BlogPosting' in tl or 'Article' in tl:
            need(d.get('headline') and len(d['headline']) <= 110, 'Article headline missing or >110 chars', page)
            im = d.get('image'); need(im, 'Article image', page)
            need(d.get('datePublished') and d.get('dateModified'), 'Article dates', page)
            au = d.get('author'); au = au[0] if isinstance(au, list) else au
            need(isinstance(au, dict) and au.get('name') and au.get('url'), 'Article author needs name and url', page)
            pub = d.get('publisher'); need(isinstance(pub, dict) and pub.get('name'), 'Article publisher name', page)
        if 'FAQPage' in tl:
            q = d.get('mainEntity', []); need(q, 'FAQPage empty', page)
            for x in q: need(x.get('name') and x.get('acceptedAnswer', {}).get('text'), 'FAQ question/answer text', page)
        if 'ProfilePage' in tl: need(d.get('mainEntity', {}).get('name'), 'ProfilePage mainEntity name', page)
        if 'WebApplication' in tl or 'SoftwareApplication' in tl:
            need(d.get('name') and d.get('applicationCategory') and d.get('offers', {}).get('price') is not None, 'App name/category/offers.price', page)
        if 'Service' in tl: need(d.get('name') and d.get('provider'), 'Service name/provider', page)
        if 'Person' in tl: need(d.get('name'), 'Person name', page)
    # every #org reference must resolve on the page (or come from the org block itself)
    raw = h
    if 'https://www.rankempire.us/#org' in raw: need('https://www.rankempire.us/#org' in ids, 'references #org but no Organization block', page)
    need(types.count('BreadcrumbList') <= 1, 'more than one BreadcrumbList', page)
    need(sum(1 for d in blocks if d.get('@id') == 'https://www.rankempire.us/#org') <= 1, 'Organization block duplicated', page)
print('JSON-LD blocks by type:', dict(counts.most_common()))
print(f'errors: {len(errors)}  warnings: {len(warns)}')
for e in errors[:40]: print('  ERROR', e)
for w in warns[:20]: print('  warn ', w)
sys.exit(1 if errors else 0)
