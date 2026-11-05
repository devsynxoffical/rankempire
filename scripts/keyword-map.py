"""Regenerate docs/keyword-map.md: primary and secondary keywords per page with current Search Console
positions. Hand-picked targets live in content/keyword-targets.json; every other page with
impressions gets primary = top query, secondary = next four. Run `npm run pages` first."""
import json, glob, re, datetime
d = json.load(open(sorted(glob.glob('reports/gsc-pages-*.json'))[-1]))
bp = {x['page']: x for x in d}
T = json.load(open('content/keyword-targets.json'))
def q(page, k):
    for x in bp.get(page, {}).get('queries', []):
        if x['q'] == k: return f"{x['pos']:.0f}", x['impr']
    return '–', 0
def title(page):
    s = open('app' + page.rstrip('/') + '/page.tsx').read()
    return re.search(r'title: (?:\{ absolute: )?"([^"]+)"', s).group(1)
L = [f"# RankEmpire keyword map\n\nGenerated {datetime.date.today()} from Google Search Console (last 28 days). Position = average position on that page; a dash means no impressions yet.\n\nRule: one primary keyword per page, used in the title, H1, first paragraph and meta description. Secondary keywords go in guide headings, body copy, FAQ and internal link anchors. No two pages share a primary keyword.\n\n## Target pages\n"]
for page, (pk, sec) in T.items():
    p, i = q(page, pk)
    L.append(f"### {page}\n\n- **Impressions (28 days):** {bp.get(page, {}).get('impr', 0)}\n- **Title:** {title(page)}\n- **Primary:** `{pk}` (position {p}, {i} impressions)\n- **Secondary:**")
    for k in sec:
        p, i = q(page, k); L.append(f"  - `{k}` (position {p}, {i} impressions)")
    L.append('')
L.append("## Other pages with impressions\n\n| Page | Impressions | Primary (position) | Secondary |\n| --- | --- | --- | --- |")
for x in d:
    if x['page'] in T or x['impr'] < 3: continue
    qs = [y for y in x['queries'] if len(y['q']) < 70]
    if qs: L.append(f"| {x['page']} | {x['impr']} | {qs[0]['q']} ({qs[0]['pos']:.0f}) | {', '.join(y['q'] for y in qs[1:5])} |")
open('docs/keyword-map.md', 'w').write('\n'.join(L) + '\n')
print(f'keyword map: {len(T)} target pages')
