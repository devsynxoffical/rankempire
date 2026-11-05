import boost from '@/content/boost.json';

// 90-day plan timeline + comparison table for the pages Search Console shows the most impressions for.
type Boost = { who: string; kw: string; plan: { w: string; t: string; items: string[] }[]; rows: string[][] };

export default function TopPlan({ slug }: { slug: string }) {
  const b = (boost as Record<string, Boost>)[slug];
  if (!b) return null;
  return (
    <section className="x tp" id="plan" aria-labelledby="tp-h">
      <div className="wrap">
        <div className="xh tp-h" data-r="">
          <span className="xe">
            <i></i>
            The first 90 days
          </span>
          <h2 className="h2" id="tp-h">What working with a {b.kw} looks like</h2>
          <p className="tp-sub">A fixed sequence, the same one we run for every account: audit first, foundations second, authority third. You see every step in a shared roadmap and in Google Search Console.</p>
        </div>
        <ol className="tp-tl" data-r="">
          {b.plan.map((p, i) => (
            <li key={p.w} className="tp-st">
              <div className="tp-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <span className="tp-w">{p.w}</span>
              <h3>{p.t}</h3>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="tp-cmp" data-r="">
          <h3 className="tp-ch">RankEmpire vs a typical agency for {b.who}</h3>
          <div className="tp-tbl" role="table" aria-label={`RankEmpire compared with a typical SEO agency for ${b.who}`}>
            <div className="tp-r tp-hd" role="row">
              <span role="columnheader"></span>
              <span role="columnheader" className="tp-us">RankEmpire</span>
              <span role="columnheader">Typical agency</span>
            </div>
            {b.rows.map((r) => (
              <div className="tp-r" role="row" key={r[0]}>
                <span role="rowheader" className="tp-k">{r[0]}</span>
                <span role="cell" className="tp-us"><b className="tp-y" aria-hidden="true">✓</b>{r[1]}</span>
                <span role="cell" className="tp-them"><b className="tp-x" aria-hidden="true">✕</b>{r[2]}</span>
              </div>
            ))}
          </div>
          <div className="tp-cta">
            <p>Get the audit that starts week one, free and in two business days.</p>
            <a className="btn ac" href="/contact-us/">
              Get my free SEO audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
