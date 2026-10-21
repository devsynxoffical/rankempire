import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, locationsLong, industries } from "@/data";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";

export async function generateStaticParams() {
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = locations.find((l) => l.slug === city);
  if (!c) return {};

  return {
    title: `SEO Company in ${c.name}, ${c.st} | Local SEO Agency | RankEmpire`,
    description: `RankEmpire is the local SEO company in ${c.name}, ${c.st}. Google Business Profile optimization, local citations, map pack rankings and high-converting pages.`,
    alternates: {
      canonical: `/locations/${c.slug}/`,
    },
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = locations.find((l) => l.slug === city);

  if (!c) {
    notFound();
  }

  const cLong = locationsLong[city] || {};

  const introParagraphs: string[] = cLong.intro || [
    `Local search in ${c.name} has its own rhythm. Between intense density in the core and sprawling suburbs, winning here takes neighborhood-level relevance and a review profile that outranks established local players.`,
    `We work remotely with ${c.name} businesses, handling technical SEO, Google Business Profile optimization, and local content that captures customers actively searching in your market.`,
  ];

  const considerations: [string, string][] = cLong.market || [
    [
      "Neighborhood-level relevance",
      `Customers in ${c.name} search by neighborhood as often as city name. Dedicated location signals help Google connect you to high-intent local queries.`,
    ],
    [
      "Metro-wide competition mapping",
      `We analyze competition across ${c.name} to focus effort where rankings are realistically attainable and commercially valuable.`,
    ],
    [
      "Reviews and trust signals",
      `A consistent flow of reviews and verified citations builds undeniable local authority in crowded map pack results.`,
    ],
  ];

  const serviceAreas: string[] =
    cLong.suburbs && cLong.suburbs.length > 0
      ? cLong.suburbs
      : c.areas.length > 0
      ? c.areas
      : [c.name, "Downtown", "Metro Area"];

  const keywordTargets: string[] =
    cLong.keywords && cLong.keywords.length > 0
      ? cLong.keywords
      : [
          `seo company ${c.name.toLowerCase()}`,
          `${c.name.toLowerCase()} seo services`,
          `local seo ${c.name.toLowerCase()}`,
          `seo agency ${c.name.toLowerCase()}`,
          `seo consultant ${c.name.toLowerCase()}`,
        ];

  const topIndustries = c.inds.map((slug) => {
    const ind = industries.find((i) => i.slug === slug);
    return {
      slug,
      name: ind ? `SEO for ${ind.name}` : `SEO for ${slug}`,
      desc: ind
        ? ind.angle
        : `Specialized SEO strategies that drive leads and map pack rankings for ${slug}.`,
    };
  });

  const faqs: [string, string][] =
    cLong.faq && cLong.faq.length > 0
      ? cLong.faq
      : [
          [
            `Do you need an office in ${c.name} to rank my business here?`,
            `No. Rankings depend on your business location, relevance, and authority, not on where your SEO team sits. RankEmpire works remotely with ${c.name} businesses, handling research, on-page work, Google Business Profile optimization, and content through regular calls and shared reporting.`,
          ],
          [
            `Can you rank my business in multiple ${c.name} neighborhoods?`,
            `Yes. We build targeted location and neighborhood pages and optimize your Google Business Profile to win outside your immediate ZIP code.`,
          ],
          [
            `How long does SEO take in ${c.name}?`,
            `Timelines vary by category and how established your competitors are. Less contested neighborhood terms can move in 60 to 90 days, while broad citywide phrases take sustained work over 6 to 12 months.`,
          ],
          [
            "How much does local SEO cost?",
            "Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.",
          ],
        ];

  const otherCities = locations.filter((x) => x.slug !== c.slug).slice(0, 9);

  return (
    <main id="main">
      {/* Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/locations/">Locations</Link>
            <span className="sep">/</span>
            <span aria-current="page">SEO Company in {c.name}</span>
          </nav>

          <div className="phg">
            <div>
              <span className="eyb pill" data-r>
                <i></i>
                {c.name}, {c.st}
              </span>
              <h1 data-r>
                SEO company in <span className="acc">{c.name}</span>
              </h1>
              <p className="lead" data-r>
                Local SEO, technical SEO and content for {c.name} businesses
                that want more calls, bookings and sales from Google.
              </p>

              <div data-r>
                <form
                  className="audit"
                  action="/contact-us/"
                  role="search"
                  aria-label="Free SEO audit"
                >
                  <svg
                    className="g"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                  <label className="sr-only" htmlFor="au-city">
                    Your website
                  </label>
                  <input
                    id="au-city"
                    name="site"
                    type="text"
                    inputMode="url"
                    placeholder="Enter your website, e.g. yourbusiness.com"
                    autoComplete="url"
                  />
                  <button className="btn ac" type="submit">
                    Get my free audit
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </form>
                <div className="ticks">
                  <span>Local keyword research</span>
                  <span>Map pack grid tracking</span>
                  <span>Remote-first, US-based hours</span>
                </div>
              </div>
            </div>

            <div className="vis" data-r="s">
              <div className="phimg">
                <img
                  src="/img/city.webp"
                  alt={`${c.name} skyline`}
                  fetchPriority="high"
                />
                <div className="tagc">
                  {c.areas.slice(0, 4).map((area, i) => (
                    <span key={i}>{area}</span>
                  ))}
                </div>
              </div>
              <div
                className="dfloat b"
                style={{
                  top: 18,
                  right: -14,
                  background: "#0b0b0c",
                  color: "#fff",
                }}
              >
                <div
                  className="grid9"
                  style={{
                    gridTemplateColumns: "repeat(5, 16px)",
                    gap: 4,
                  }}
                >
                  {Array.from({ length: 25 }).map((_, i) => (
                    <i
                      key={i}
                      style={{ width: 16, height: 16, fontSize: 8 }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Split with Sticky TOC */}
      <section className="sec" style={{ paddingTop: "clamp(40px,5vw,70px)" }}>
        <div className="wrap art">
          <aside className="toc" aria-label="On this page">
            <b>On this page</b>
            <a href="#market">SEO in {c.name}</a>
            <a href="#considerations">Local considerations</a>
            <a href="#areas">Areas we serve</a>
            <a href="#keywords">Local keywords</a>
            <a href="#industries">Industries</a>
            <a href="#services">Services</a>
            <a href="#results">Verified results</a>
            <a href="#trust">Commitments</a>
            <a href="#faq">FAQ</a>
            <div className="tc">
              <strong>Free local audit</strong>
              <p>See where you rank across {c.name}.</p>
              <Link className="btn ac sm" href="/contact-us/">
                Get my audit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </aside>

          <div>
            {/* Market Block */}
            <section className="blk" id="market">
              <span className="eyb">Local market</span>
              <h2>How local search works in {c.name}</h2>
              <div className="prose">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Considerations */}
            <section className="blk" id="considerations">
              <span className="eyb">What we plan for</span>
              <h2>{c.name} SEO considerations</h2>
              <div className="g3" data-stagger>
                {considerations.map(([title, desc], i) => (
                  <div className="card" key={i}>
                    <span className="num">0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Areas Chips */}
            <section className="blk" id="areas">
              <span className="eyb">Service areas</span>
              <h2>Areas we serve in and around {c.name}</h2>
              <p style={{ color: "var(--mute)", marginBottom: 16 }}>
                We build visibility neighborhood by neighborhood, so customers
                across the metro can find you.
              </p>
              <div className="chips">
                {serviceAreas.map((area, i) => (
                  <span key={i}>{area}</span>
                ))}
              </div>
            </section>

            {/* Keywords Table */}
            <section className="blk" id="keywords">
              <span className="eyb">Keyword targets</span>
              <h2>{c.name} searches we target</h2>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th scope="col">Local search phrase</th>
                      <th scope="col">Intent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywordTargets.map((phrase, i) => (
                      <tr key={i}>
                        <td>{phrase}</td>
                        <td>
                          <span className="intent Local">Local</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Popular Industries */}
            <section className="blk" id="industries">
              <span className="eyb">Industries</span>
              <h2>Popular industries in {c.name}</h2>
              <div className="g2" data-stagger>
                {topIndustries.map((ind, i) => (
                  <Link
                    key={i}
                    className="card"
                    href={`/seo-for-${ind.slug}/`}
                  >
                    <h3>{ind.name}</h3>
                    <p>{ind.desc}</p>
                    <span className="tlink more">Learn more</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Core Services in City */}
            <section className="blk" id="services">
              <span className="eyb">Services</span>
              <h2>SEO services in {c.name}</h2>
              <div className="g3" data-stagger>
                <Link className="card" href="/local-seo/">
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <h3>Local SEO</h3>
                  <p>
                    Show up when nearby customers search for what you do, with a
                    Google Business Profile, location pages and local signals
                    that outrank the competition.
                  </p>
                  <span className="tlink more">Learn more</span>
                </Link>

                <Link className="card" href="/google-business-profile-seo/">
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 10h16v10H4zM3 6l2-3h14l2 3v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
                    </svg>
                  </span>
                  <h3>Google Business Profile SEO</h3>
                  <p>
                    Your profile is often the first thing customers see. We
                    turn it into the strongest asset in your local search
                    presence.
                  </p>
                  <span className="tlink more">Learn more</span>
                </Link>

                <Link className="card" href="/technical-seo/">
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z" />
                    </svg>
                  </span>
                  <h3>Technical SEO</h3>
                  <p>
                    If Google cannot crawl, render and understand your site,
                    nothing else works. We fix the foundation so content and
                    links can do their job.
                  </p>
                  <span className="tlink more">Learn more</span>
                </Link>

                <Link className="card" href="/content-seo/">
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
                      <path d="m13 7 4 4" />
                    </svg>
                  </span>
                  <h3>Content SEO</h3>
                  <p>
                    Strategy, writing and refreshes that make your site the most
                    useful answer on the topics you sell.
                  </p>
                  <span className="tlink more">Learn more</span>
                </Link>

                <Link className="card" href="/link-building/">
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
                    </svg>
                  </span>
                  <h3>Link Building</h3>
                  <p>
                    Editorial backlinks from relevant, real websites, earned with
                    outreach and content people actually want to reference.
                  </p>
                  <span className="tlink more">Learn more</span>
                </Link>

                <Link className="card" href="/seo-audit/">
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                  </span>
                  <h3>SEO Audit</h3>
                  <p>
                    Technical, content, links, local and competitor analysis,
                    delivered as a prioritized roadmap ranked by revenue
                    impact.
                  </p>
                  <span className="tlink more">Learn more</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Verified Results Section */}
      <ResultsOvertake
        badge={`Verified results in ${c.name}`}
        title={
          <>
            Real rankings and traffic for{" "}
            <span className="ip" aria-hidden="true">
              <b>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </b>
              <i>&rsaquo;&rsaquo;&rsaquo;</i>
            </span>{" "}
            {c.name} businesses
          </>
        }
        sub={
          <>
            Proven Google Search Console results from real clients. <mark>Map pack dominance,</mark> local citations and high-converting pages built to outrank competitors in {c.name}.
          </>
        }
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* FAQ Section */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              SEO in {c.name}: FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: 24 }}>
              Questions {c.name} business owners ask before hiring an SEO
              company.
            </p>
            <div className="card" style={{ padding: 20 }}>
              <b style={{ fontFamily: "var(--fd)", fontSize: 18 }}>
                Still have a question?
              </b>
              <p style={{ margin: "6px 0 14px" }}>
                Talk to a strategist. We reply within one business day.
              </p>
              <Link className="btn dk sm" href="/contact-us/">
                Contact us
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="faqs" data-r>
            {faqs.map(([q, a], i) => (
              <div className={`fq${i === 0 ? " on" : ""}`} key={i}>
                <button type="button" aria-expanded={i === 0}>
                  <span>{q}</span>
                  <i className="pm" aria-hidden="true"></i>
                </button>
                <div className="a">
                  <div>
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities and Services */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Keep exploring</span>
            <h2 className="h2">Other cities and services</h2>
          </div>
          <div className="linkgrid" data-stagger>
            {otherCities.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
                SEO Company in {loc.name}
              </Link>
            ))}
            <Link href="/locations/">Locations</Link>
            <Link href="/local-seo/">Local SEO</Link>
            <Link href="/seo-packages/local-seo/">Local SEO Packages</Link>
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="sec tight">
        <div className="wrap">
          <div className="ctap" data-r>
            <span
              className="eyb pill"
              style={{
                background: "#151517",
                borderColor: "#26262a",
                color: "#d4d4d8",
              }}
            >
              <i></i>Free SEO audit
            </span>
            <h2 className="h2">Ready to rank in {c.name}?</h2>
            <p>Get a free local SEO audit for your business.</p>
            <form
              className="audit"
              action="/contact-us/"
              role="search"
              aria-label="Free SEO audit"
            >
              <svg
                className="g"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              <label className="sr-only" htmlFor="au-city-foot">
                Your website
              </label>
              <input
                id="au-city-foot"
                name="site"
                type="text"
                inputMode="url"
                placeholder="Enter your website, e.g. yourbusiness.com"
                autoComplete="url"
              />
              <button className="btn ac" type="submit">
                Get my free audit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
            <div className="ticks">
              <span>Delivered in 2 business days</span>
              <span>No contract required</span>
              <span>Real people, not a PDF generator</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
