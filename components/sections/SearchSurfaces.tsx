// SEO, AEO, GEO and AGO: the four ways customers now find a business, explained in detail and
// personalized per page (audience, city, example search and question) so the copy is specific to
// each page rather than repeated boilerplate. Inserted by scripts/apply-surfaces.mjs.

type Kind = 'industry' | 'city' | 'service' | 'hub';
type Props = {
  slug: string;
  kind: Kind;
  audience: string; // plural, lower case: "hvac companies", "businesses in Miami", "your business"
  kw: string; // a real high-intent search for this page
  question: string; // a real question customers ask
  city?: string;
};

const URL = 'https://www.rankempire.us';
const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const pick = <T,>(slug: string, salt: string, xs: T[]) => xs[hash(slug + salt) % xs.length];

export default function SearchSurfaces({ slug, kind, audience, kw, question, city }: Props) {
  const where = city ? ` in ${city}` : '';
  const who = kind === 'service' || kind === 'hub' ? 'your customers' : kind === 'city' ? 'customers' : `customers of ${audience}`;
  const title =
    kind === 'industry' ? `SEO, AEO, GEO and AGO for ${audience}` :
    kind === 'city' ? `SEO, AEO, GEO and AGO${where}` :
    'SEO, AEO, GEO and AGO in one program';

  const intro = pick(slug, 'intro', [
    `Search has split into four surfaces. ${cap(who)}${where} still type into Google, but they also ask voice assistants, read AI Overviews and ChatGPT answers, and increasingly let an AI agent compare and book for them. We optimize for all four in one program, with one strategist, one roadmap and one monthly report.`,
    `The way ${who}${where} find a provider has changed. One search ends on the classic results, the next on a featured snippet, the next inside a Perplexity or ChatGPT answer, and some never reach a website at all because an AI agent made the choice. Each surface rewards different signals, and we work on all four at once.`,
    `Ranking on Google is no longer the whole job. ${cap(who)}${where} get answers from snippets, AI Overviews and assistants, and AI agents now shortlist and book on their behalf. Our program covers search engine, answer engine, generative engine and AI agent optimization together, because most of the work overlaps and the results compound.`,
  ]);

  const cards = [
    {
      k: 'SEO', name: 'Search engine optimization', c: '#ec4e3b', href: '/seo-services/', cta: 'SEO services',
      lead: 'Rank on Google and Bing for the searches that bring customers. Technical health, content, links and local signals.',
      what: [
        `A technical audit and fixes so every page is crawlable, indexable and fast on phones`,
        `One page per service and ${city ? 'neighborhood' : 'location'}, mapped to searches like “${kw}”`,
        kind === 'service' || kind === 'hub'
          ? 'Content that matches search intent, with internal links that tell Google which pages matter'
          : `Google Business Profile, citations and a review system for the map pack${where}`,
        `Editorial links and brand mentions from sites ${kind === 'industry' ? audience + ' customers' : 'your market'} already trust`,
      ],
      get: 'A keyword-to-page map, technical fixes, new and rewritten pages and earned links every month.',
      measure: 'Rankings, organic clicks, calls, form leads and revenue from Google and Bing.',
      example: { label: 'Search', text: kw },
    },
    {
      k: 'AEO', name: 'Answer engine optimization', c: '#2b55e8', href: '/aeo/', cta: 'Answer engine optimization',
      lead: 'Win the featured snippet, People Also Ask and voice answers by structuring pages so engines can quote them directly.',
      what: [
        `Headings written as the real questions ${who} ask, pulled from Search Console and People Also Ask`,
        'A complete answer in the first two sentences under each heading, then the detail',
        'FAQPage, Service, HowTo and Organization schema, validated on every template',
        'Speakable markup and short, quotable passages for voice assistants and answer boxes',
      ],
      get: 'Question maps, rewritten openings, FAQ blocks and structured data across your key pages.',
      measure: 'Featured snippets and People Also Ask results owned, and zero-click impressions in Search Console.',
      example: { label: 'Question', text: question },
    },
    {
      k: 'GEO', name: 'Generative engine optimization', c: '#8c2fe2', href: '/geo/', cta: 'Generative engine optimization',
      lead: 'Get cited inside AI Overviews, ChatGPT, Perplexity and Gemini answers with entity-rich, source-worthy content.',
      what: [
        'Entity clarity: one consistent name, description and profile set, linked with sameAs schema',
        'Quotable facts AI models can cite: price ranges, timelines, benchmarks and original data',
        `Mentions on the lists, directories and publications AI assistants read about ${kind === 'industry' ? audience : 'your category'}`,
        'Open access for GPTBot, PerplexityBot, ClaudeBot and Google-Extended, plus an llms.txt summary',
      ],
      get: 'An entity and citation plan, source-worthy content and a fixed prompt set tracked every month.',
      measure: 'Share of citations across AI Overviews, ChatGPT, Perplexity and Gemini against your top competitors.',
      example: { label: 'AI prompt', text: kind === 'industry' ? `Who are the best ${audience}${where || ' near me'}?` : kind === 'city' ? `Which SEO agency should I hire${where}?` : `What is the best way to get more customers from search?` },
    },
    {
      k: 'AGO', name: 'AI agent optimization', c: '#4a9f5f', href: '/contact-us/', cta: 'Get an agent-readiness check',
      lead: 'Make your business the one AI agents choose when they book, buy and compare on behalf of users: clean data, schema, APIs.',
      what: [
        'Clean, structured business data: services, prices, hours, service area and availability',
        'LocalBusiness, Offer and Product schema plus feeds that agents can parse without guessing',
        'Booking, quote and contact flows that work end to end without a human clicking through',
        'Accurate listings on the platforms agents query: Google, Apple, Bing, Yelp and industry marketplaces',
      ],
      get: 'An agent-readiness audit, a structured data and listings cleanup, and a bookable path an assistant can complete.',
      measure: 'Structured data coverage, listing accuracy and bookings or quotes that arrive through AI assistants.',
      example: { label: 'Agent task', text: kind === 'industry' ? `Compare three ${audience}${where || ' nearby'} and book the best-reviewed one` : `Find a provider${where}, check availability and book a call` },
    },
  ];

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    itemListElement: cards.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: `${c.name} (${c.k})${kind === 'industry' ? ` for ${audience}` : ''}${where}`,
        serviceType: c.name,
        description: c.lead,
        provider: { '@id': `${URL}/#org` },
        ...(city ? { areaServed: { '@type': 'City', name: city } } : { areaServed: { '@type': 'Country', name: 'United States' } }),
      },
    })),
  };

  return (
    <section className="x srf" id="seo-aeo-geo-ago" aria-labelledby="srf-h">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap">
        <div className="xh" data-r="">
          <span className="xe">
            <i></i>
            What we do
          </span>
          <h2 className="h2" id="srf-h">{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="srf-g">
          {cards.map((c) => (
            <article className="srf-c" key={c.k} style={{ '--c': c.c } as React.CSSProperties} data-r="">
              <header>
                <span className="srf-k">{c.k}</span>
                <h3>{c.name}</h3>
              </header>
              <p className="srf-lead">{c.lead}</p>
              <b className="srf-sub">What we do</b>
              <ul>
                {c.what.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <div className="srf-ex">
                <small>{c.example.label}</small>
                <span>{c.example.text}</span>
              </div>
              <dl>
                <div>
                  <dt>You get</dt>
                  <dd>{c.get}</dd>
                </div>
                <div>
                  <dt>We measure</dt>
                  <dd>{c.measure}</dd>
                </div>
              </dl>
              <a className="srf-go" href={c.href}>
                {c.cta}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </article>
          ))}
        </div>
        <p className="srf-n">
          Most of the work overlaps: technical health, clear pages, schema and authority serve all four. Read the full breakdown in our guide to{' '}
          <a href="/blog/aeo-vs-geo-vs-seo/">AEO vs GEO vs SEO</a>, or <a href="/contact-us/">request a free audit</a> that scores your visibility on each surface.
        </p>
      </div>
    </section>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
