import site from '@/content/site.json';

// Google Calendar appointment scheduling embed. The iframe is lazy-loaded so it never slows the first paint.
export default function BookCall({ title = 'Book a free strategy call' }: { title?: string }) {
  const b = site.booking;
  const wa = (site.whatsapp || '').replace(/\D/g, '');
  return (
    <section className="x bk" id="book" aria-labelledby="bk-h">
      <div className="wrap">
        <div className="bk-g">
          <div className="xh bk-l" data-r="">
            <span className="xe">
              <i></i>
              Book a call
            </span>
            <h2 className="h2" id="bk-h">{title}</h2>
            <p>
              Pick a time that suits you for a call with {site.founder.name}. We review your site, your local rankings and your competitors, and you leave with a clear next step, whether or not you hire us.
            </p>
            <ul className="bk-list">
              <li>Free, no obligation</li>
              <li>Your site and Google Business Profile reviewed live</li>
              <li>A prioritized plan you can act on</li>
            </ul>
            <a className="btn ac" href={b.url} target="_blank" rel="noopener">
              Open the booking page
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            {wa && (
              <p className="bk-alt">
                Prefer to message first?{' '}
                <a href={`https://wa.me/${wa}?text=${encodeURIComponent("Hi RankEmpire, I'd like to book a free SEO strategy call. When are you available?")}`} target="_blank" rel="noopener">
                  Chat on WhatsApp
                </a>{' '}
                or email <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
          </div>
          <div className="bk-r" data-r="">
            <div className="bk-bar">
              <span className="bk-logo" aria-hidden="true">RE</span>
              <div>
                <b>Free SEO strategy call</b>
                <small>with {site.founder.name}, {site.founder.jobTitle}</small>
              </div>
              <span className="bk-live"><i></i>Live availability</span>
            </div>
            <div className="bk-frame">
              <div className="bk-load" aria-hidden="true">
                <span className="bk-spin"></span>
                Loading available times...
              </div>
              <iframe src={b.embed} title="Book a call with RankEmpire" loading="lazy" width="100%" height="640" style={{ border: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
