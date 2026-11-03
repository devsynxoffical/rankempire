// Verified results strip for the highest-traffic pages: real Google Search Console numbers from
// the case studies (/case-studies/), shown right under the hero to build trust before the details.
const STATS = [
  { k: '42.1K', label: 'organic clicks in 6 months', who: 'Education website', c: '#2b55e8' },
  { k: '17.6%', label: 'average click-through rate', who: 'Education website', c: '#4a9f5f' },
  { k: '822K', label: 'impressions in 3 months', who: 'Home services company', c: '#8c2fe2' },
  { k: '3.45M', label: 'organic clicks in 3 months', who: 'Publisher network', c: '#ec4e3b' },
];

export default function ProofStrip({ context }: { context: string }) {
  return (
    <section className="prf" aria-labelledby="prf-h">
      <div className="wrap">
        <div className="prf-box" data-r="">
          <div className="prf-hd">
            <span className="eyb">
              <i></i>
              Verified in Google Search Console
            </span>
            <h2 id="prf-h" className="prf-t">Real results, not mockups</h2>
            <p>
              {`The numbers behind our ${context} work come straight from clients' Search Console accounts, shared with permission.`}
            </p>
          </div>
          <ul className="prf-g">
            {STATS.map((s) => (
              <li key={s.k} style={{ '--c': s.c } as React.CSSProperties}>
                <b>{s.k}</b>
                <span>{s.label}</span>
                <small>{s.who}</small>
              </li>
            ))}
          </ul>
          <div className="prf-ft">
            <a className="tlink" href="/case-studies/">See all 9 verified reports</a>
            <a className="btn ac sm" href="/contact-us/">
              Get a free SEO audit
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
