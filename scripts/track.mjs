// Rank and performance tracker, run every 12 hours by the scheduled SEO session.
//   node scripts/track.mjs
// Compares the latest 7 days of Search Console data with the 7 days before, for every page and keyword,
// and writes docs/tracking/latest.md (report), docs/tracking/history.csv (one row per run) and
// docs/tracking/snapshots/<date>.json. Also records Bing's indexed page count when .secrets/bing-api-key exists.
import { readFileSync, writeFileSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';
import { createSign } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const sa = JSON.parse(readFileSync(process.env.GSC_SA || '.secrets/gsc-service-account.json', 'utf8'));
const SITE = process.env.GSC_SITE || 'https://www.rankempire.us/';
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const now = Math.floor(Date.now() / 1000);
const u = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: sa.token_uri, iat: now, exp: now + 3600 })}`;
const sig = createSign('RSA-SHA256').update(u).sign(sa.private_key).toString('base64url');
const tk = (await (await fetch(sa.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${u}.${sig}` }) })).json()).access_token;
const iso = (t) => new Date(t).toISOString().slice(0, 10);
const shift = (s, n) => iso(Date.parse(s) + n * 864e5);
async function q(start, end, dimensions) {
  let rows = [], startRow = 0;
  for (;;) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { Authorization: `Bearer ${tk}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ startDate: start, endDate: end, dimensions, rowLimit: 25000, startRow }) });
    const j = (await r.json()).rows || []; rows = rows.concat(j); if (j.length < 25000) break; startRow += 25000;
  }
  return rows;
}
const days = await q(shift(iso(Date.now()), -40), iso(Date.now()), ['date']);
if (!days.length) { console.log('no Search Console data'); process.exit(0); }
const end = days.at(-1).keys[0], start = shift(end, -6), pEnd = shift(end, -7), pStart = shift(end, -13);
const [curPQ, prevPQ, curP, prevP] = await Promise.all([q(start, end, ['page', 'query']), q(pStart, pEnd, ['page', 'query']), q(start, end, ['page']), q(pStart, pEnd, ['page'])]);
const path = (x) => x.replace(SITE, '/');
const agg = (rows) => { let i = 0, c = 0, w = 0; for (const r of rows) { i += r.impressions; c += r.clicks; w += r.position * r.impressions; } return { i, c, pos: i ? w / i : 0 }; };
const T = agg(days.filter((d) => d.keys[0] >= start)), P = agg(days.filter((d) => d.keys[0] >= pStart && d.keys[0] <= pEnd));
const pageMap = (rows) => Object.fromEntries(rows.map((r) => [path(r.keys[0]), { i: r.impressions, c: r.clicks, pos: r.position }]));
const cp = pageMap(curP), pp = pageMap(prevP);
const kw = (rows) => { const m = {}; for (const r of rows) { const k = r.keys[1]; (m[k] ??= []).push(r); } return Object.fromEntries(Object.entries(m).map(([k, v]) => { const a = agg(v); const best = v.sort((x, y) => y.impressions - x.impressions)[0]; return [k, { ...a, page: path(best.keys[0]) }]; })); };
const ck = kw(curPQ), pk = kw(prevPQ);
const topQ = {}; for (const r of curPQ) { const p = path(r.keys[0]); if (!topQ[p] || r.impressions > topQ[p].impressions) topQ[p] = r; }
const f1 = (n) => (Math.round(n * 10) / 10).toFixed(1), pct = (a, b) => (b ? `${a >= b ? '+' : ''}${Math.round(((a - b) / b) * 100)}%` : 'new'), dpos = (a, b) => (b ? `${b - a >= 0 ? '+' : ''}${f1(b - a)}` : 'new');

let bing = '';
if (existsSync('.secrets/bing-api-key')) {
  try {
    const k = readFileSync('.secrets/bing-api-key', 'utf8').trim();
    const g = (m) => JSON.parse(execFileSync('curl', ['-s', `https://ssl.bing.com/webmaster/api.svc/json/${m}?siteUrl=https://www.rankempire.us&apikey=${k}`], { encoding: 'utf8' })).d;
    const cs = g('GetCrawlStats'), rt = g('GetRankAndTrafficStats');
    const b7 = rt.slice(-7).reduce((a, r) => ({ i: a.i + r.Impressions, c: a.c + r.Clicks }), { i: 0, c: 0 });
    bing = { inIndex: cs.at(-1).InIndex, crawled: cs.at(-1).CrawledPages, errors: cs.at(-1).CrawlErrors, impr7: b7.i, clicks7: b7.c };
  } catch (e) { bing = ''; }
}

const routes = JSON.parse(readFileSync('content/routes.json', 'utf8')).map((r) => (r ? `/${r}/` : '/'));
const zero = routes.filter((r) => !cp[r]);
const L = [];
L.push(`# RankEmpire tracking report`, '', `Generated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC. Google data: ${start} to ${end} (last 7 days with data) compared with ${pStart} to ${pEnd}. Search Console data usually lags 2 to 3 days.`, '');
L.push('## Totals', '', '| | Last 7 days | Previous 7 days | Change |', '| --- | --- | --- | --- |');
L.push(`| Impressions | ${T.i} | ${P.i} | ${pct(T.i, P.i)} |`, `| Clicks | ${T.c} | ${P.c} | ${T.c - P.c >= 0 ? '+' : ''}${T.c - P.c} |`, `| CTR | ${f1((T.c / (T.i || 1)) * 100)}% | ${f1((P.c / (P.i || 1)) * 100)}% | |`, `| Average position | ${f1(T.pos)} | ${f1(P.pos)} | ${dpos(T.pos, P.pos)} |`, `| Queries | ${Object.keys(ck).length} | ${Object.keys(pk).length} | |`, `| Pages with impressions | ${Object.keys(cp).length} | ${Object.keys(pp).length} | |`);
if (bing) L.push(`| Bing indexed pages | ${bing.inIndex} | | |`, `| Bing impressions (7 days) | ${bing.impr7} | | |`);
L.push('', '## Pages', '', 'Position change: positive means the page moved up.', '', '| Page | Impr | Change | Clicks | Avg pos | Pos change | Top keyword (pos) |', '| --- | --- | --- | --- | --- | --- | --- |');
for (const [p, v] of Object.entries(cp).sort((a, b) => b[1].i - a[1].i)) { const t = topQ[p]; L.push(`| ${p} | ${v.i} | ${pct(v.i, pp[p]?.i)} | ${v.c} | ${f1(v.pos)} | ${dpos(v.pos, pp[p]?.pos)} | ${t ? `${t.keys[1]} (${f1(t.position)})` : ''} |`); }
const kwRows = Object.entries(ck).sort((a, b) => b[1].i - a[1].i);
L.push('', '## Top 40 keywords', '', '| Keyword | Page | Impr | Pos | Pos change |', '| --- | --- | --- | --- | --- |');
for (const [k, v] of kwRows.slice(0, 40)) L.push(`| ${k} | ${v.page} | ${v.i} | ${f1(v.pos)} | ${dpos(v.pos, pk[k]?.pos)} |`);
const near = kwRows.filter(([, v]) => v.pos <= 20).sort((a, b) => a[1].pos - b[1].pos);
L.push('', '## Keywords in positions 1 to 20', '', ...(near.length ? near.slice(0, 40).map(([k, v]) => `- ${f1(v.pos)}: ${k} (${v.i} impr, ${v.page})`) : ['- none']));
const targets = JSON.parse(readFileSync('content/keyword-targets.json', 'utf8'));
const tgt = (rows) => Object.entries(targets).map(([pg, [kw]]) => { const r = rows.filter((x) => path(x.keys[0]) === pg && x.keys[1] === kw); return [pg, kw, r.length ? agg(r).pos : null]; });
const tc = tgt(curPQ), tp = Object.fromEntries(tgt(prevPQ).map(([pg, , v]) => [pg, v]));
const ranked = tc.filter((t) => t[2] != null), tAvg = ranked.length ? ranked.reduce((a, t) => a + t[2], 0) / ranked.length : 0;
const band = (lo, hi) => kwRows.filter(([, v]) => v.pos > lo && v.pos <= hi).length;
L.push('', '## Target keywords (main keyword of each page)', '', `Average position of target keywords that have data: ${ranked.length ? f1(tAvg) : '-'} (${ranked.length} of ${tc.length} ranking). Keywords by Google page: page 1: ${band(0, 10)}, page 2: ${band(10, 20)}, page 3: ${band(20, 30)}.`, '', '| Page | Target keyword | Pos | Pos change |', '| --- | --- | --- | --- |');
for (const [pg, kw, v] of tc.sort((a, b) => (a[2] ?? 999) - (b[2] ?? 999))) L.push(`| ${pg} | ${kw} | ${v == null ? '-' : f1(v)} | ${v == null ? '' : dpos(v, tp[pg])} |`);
const moves = kwRows.filter(([k, v]) => pk[k] && v.i >= 3).map(([k, v]) => [k, v, pk[k].pos - v.pos]);
L.push('', '## Biggest gains (impr >= 3)', '', ...moves.filter((m) => m[2] >= 3).sort((a, b) => b[2] - a[2]).slice(0, 20).map(([k, v, d]) => `- +${f1(d)} to ${f1(v.pos)}: ${k} (${v.page})`));
L.push('', '## Biggest drops (impr >= 3)', '', ...moves.filter((m) => m[2] <= -3).sort((a, b) => a[2] - b[2]).slice(0, 20).map(([k, v, d]) => `- ${f1(d)} to ${f1(v.pos)}: ${k} (${v.page})`));
const fresh = kwRows.filter(([k, v]) => !pk[k] && v.i >= 3);
L.push('', `## New keywords this week (impr >= 3): ${fresh.length}`, '', ...fresh.slice(0, 30).map(([k, v]) => `- ${k} (${v.i} impr, pos ${f1(v.pos)}, ${v.page})`));
L.push('', `## Pages with no impressions this week: ${zero.length}`, '', zero.join(', '), '');
mkdirSync('docs/tracking/snapshots', { recursive: true });
writeFileSync('docs/tracking/latest.md', L.join('\n'));
writeFileSync(`docs/tracking/snapshots/${end}.json`, JSON.stringify({ start, end, totals: T, bing, pages: cp, keywords: Object.fromEntries(kwRows.slice(0, 500)) }));
const H = 'docs/tracking/history.csv';
if (!existsSync(H)) writeFileSync(H, 'run_utc,data_end,impr_7d,clicks_7d,avg_pos_7d,queries_7d,pages_7d,keywords_top20,bing_in_index,bing_impr_7d,target_avg_pos,targets_ranked,kw_page1,kw_page2,kw_page3\n');
appendFileSync(H, [new Date().toISOString().slice(0, 16), end, T.i, T.c, f1(T.pos), Object.keys(ck).length, Object.keys(cp).length, near.length, bing.inIndex ?? '', bing.impr7 ?? '', ranked.length ? f1(tAvg) : '', ranked.length, band(0, 10), band(10, 20), band(20, 30)].join(',') + '\n');
console.log(`tracking: ${start}..${end} impr ${T.i} (${pct(T.i, P.i)}), clicks ${T.c}, pos ${f1(T.pos)} (${dpos(T.pos, P.pos)}), pages ${Object.keys(cp).length}, top-20 keywords ${near.length}, target avg ${ranked.length ? f1(tAvg) : '-'} (${ranked.length}/${tc.length}), bing ${bing.inIndex ?? '-'}`);
