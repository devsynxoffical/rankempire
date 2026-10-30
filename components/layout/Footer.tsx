import site from '@/content/site.json';

const LABELS: Record<string, string> = { facebook: 'Facebook', linkedin: 'LinkedIn', instagram: 'Instagram', youtube: 'YouTube', x: 'X/Twitter' };

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, href]) => href).map(([k, href]) => [LABELS[k] || k, href] as [string, string]);
  return (
    <footer className="foot" id="foot">
      {"\n"}
      <a className="fstart" href="/contact-us/" id="fstart">
        <div className="fw" id="fw">
          {"Start ranking"}
        </div>
        <svg className="arr" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M30 70 L70 30 M40 30 H70 V60" />
        </svg>
      </a>
      {"\n"}
      <div className="fg">
        {"\n"}
        <div className="fbr">
          <div>
            <div className="mk">
              {"RE"}
              <sup>
                {"®"}
              </sup>
            </div>
            <div className="ico">
              <a href="/" aria-label="Home">
                {"✱"}
              </a>
              <a href="/seo-services/" aria-label="Services">
                {"◉"}
              </a>
              <a href="/seo-tools/" aria-label="Free tools">
                {"</>"}
              </a>
            </div>
          </div>
          <div>
            <h4>
              {"SEO, answer engines and AI search, built around calls and revenue."}
            </h4>
            <div className="cp">
              {"© 2026 RankEmpire. All rights reserved. "}
              <a href="/privacy-policy/">
                {"Privacy"}
              </a>
              {" · "}
              <a href="/terms/">
                {"Terms"}
              </a>
            </div>
          </div>
        </div>
        {"\n"}
        <nav className="flk" aria-label="Footer">
          <a href="/seo-services/">
            {"Services "}
            <i>
              {"↗"}
            </i>
          </a>
          <a href="/industries/">
            {"Industries "}
            <i>
              {"↗"}
            </i>
          </a>
          <a href="/case-studies/">
            {"Results "}
            <i>
              {"↗"}
            </i>
          </a>
          <a href="/seo-packages/">
            {"Pricing "}
            <i>
              {"↗"}
            </i>
          </a>
          <a href="/seo-tools/">
            {"Free tools "}
            <i>
              {"↗"}
            </i>
          </a>
          <a href="/contact-us/">
            {"Contact "}
            <i>
              {"↗"}
            </i>
          </a>
        </nav>
        {"\n"}
        <div className="ffl">
          <span className="fh">
            {socials.length ? "Follow us" : "Explore"}
          </span>
          {socials.length ? socials.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener">
              {label}
            </a>
          )) : (
            <>
              <a href="/blog/">
                {"Blog"}
              </a>
              <a href="/case-studies/">
                {"Case studies"}
              </a>
              <a href="/our-team/">
                {"Our team"}
              </a>
              <a href="/seo-tools/">
                {"Free tools"}
              </a>
            </>
          )}
        </div>
        {"\n"}
        <div className="fnl">
          <div className="gh" aria-hidden="true">
            {"Stay ahead"}
          </div>
          <img className="env" src="/img/envelope.webp" alt="" loading="lazy" />
          <div className="nb">
            <span className="fh">
              {"Newsletter"}
            </span>
            <p>
              {"One practical SEO tip a month, written by the team doing the work. No spam."}
            </p>
          </div>
          <form id="nl" data-mail="hello@rankempire.com">
            <input id="nl-e" type="email" placeholder="Your email" aria-label="Email" required />
            <button type="submit">
              {"Subscribe"}
            </button>
          </form>
        </div>
        {"\n"}
      </div>
      {"\n"}
      <section className="fcom" aria-labelledby="fcom-h">
        <div>
          <span className="fh" id="fcom-h">
            {"Community"}
          </span>
          <p>
            {site.community.description}
          </p>
        </div>
        <a className="btn wh" href={site.community.url} target="_blank" rel="noopener">
          {"Join the Facebook group"}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </section>
      {"\n"}
      <div className="freach">
        <div>
          <span className="fh">
            {"Reach out"}
          </span>
          <a className="femail" href="mailto:hello@rankempire.com">
            {"hello@rankempire.com"}
          </a>
        </div>
        <div className="fmeta">
          <span>
            {"rankempire.us"}
          </span>
          <span>
            {"Remote · US business hours · "}
            <b data-clock="">
              {"00:00:00"}
            </b>
            {" ET"}
          </span>
          <button type="button" id="ftop">
            {"Back to top ↑"}
          </button>
        </div>
      </div>
      {"\n"}
    </footer>
  );
}
