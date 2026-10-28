// Hub-and-spoke related links: used on industry, city and service pages (see scripts/related.mjs).
const COLORS = ['#ec4e3b', '#2b55e8', '#e37a38', '#4a9f5f', '#8c2fe2', '#e0a800', '#ec4e3b', '#2b55e8'];

export type RelatedItem = { href: string; label: string };

export default function RelatedLinks({ eyebrow = 'Keep exploring', title, items }: { eyebrow?: string; title: string; items: RelatedItem[] }) {
  return (
    <section className="x xrel">
      <div className="wrap">
        <div className="xh" data-r="">
          <span className="xe">
            <i></i>
            {eyebrow}
          </span>
          <h2 className="h2">{title}</h2>
        </div>
        <div className="xr-g" data-r="">
          {items.map((it, i) => (
            <a href={it.href} key={it.href} style={{ '--c': COLORS[i % COLORS.length] } as React.CSSProperties}>
              <span>{it.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
