import guides from '@/content/guides.json';

// Long-form, query-matched guide block for pages that Search Console shows impressions for.
// Content lives in content/guides.json; [text](/path/) becomes an internal link.
type Guide = { title: string; intro: string; sections: { h: string; p: string }[] };

function rich(text: string) {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<a key={i++} href={m[2]}>{m[1]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function DeepGuide({ slug }: { slug: string }) {
  const g = (guides as Record<string, Guide>)[slug];
  if (!g) return null;
  return (
    <section className="x dg" id="guide" aria-labelledby="dg-h">
      <div className="wrap">
        <div className="dg-g">
          <div className="dg-l">
            <div className="xh" data-r="">
              <span className="xe">
                <i></i>
                Guide
              </span>
              <h2 className="h2" id="dg-h">{g.title}</h2>
            </div>
            <nav className="dg-toc" aria-label="In this guide">
              {g.sections.map((s, i) => (
                <a key={s.h} href={`#dg-${i + 1}`}>{s.h}</a>
              ))}
            </nav>
          </div>
          <div className="dg-r prose">
            <p className="dg-intro">{rich(g.intro)}</p>
            {g.sections.map((s, i) => (
              <div key={s.h} className="dg-s" id={`dg-${i + 1}`}>
                <h3>{s.h}</h3>
                <p>{rich(s.p)}</p>
              </div>
            ))}
            <p className="dg-cta">
              <a className="btn ac" href="/contact-us/">
                Get a free SEO audit
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
