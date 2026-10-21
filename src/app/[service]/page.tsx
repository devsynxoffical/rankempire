import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  servicesLong,
  industries,
  industriesLong,
  locations,
} from "@/data";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";

export async function generateStaticParams() {
  const serviceParams = Object.keys(services)
    .filter((slug) => slug !== "seo-services" && slug !== "seo-company")
    .map((slug) => ({
      service: slug,
    }));

  const industryParams = industries.map((ind) => ({
    service: `seo-for-${ind.slug}`,
  }));

  return [...serviceParams, ...industryParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;

  if (service.startsWith("seo-for-")) {
    const indSlug = service.replace(/^seo-for-/, "");
    const d = industries.find((i) => i.slug === indSlug);
    if (!d) return {};

    return {
      title: `SEO for ${d.name}: Rank in the Map Pack and Google | RankEmpire`,
      description: `Specialized SEO for ${d.name.toLowerCase()}: Google Business Profile optimization, emergency and service pages, local citations and reviews. ${d.angle}`,
      alternates: {
        canonical: `/seo-for-${d.slug}/`,
      },
    };
  }

  const s = services[service];
  if (!s) return {};

  return {
    title: s.title,
    description: s.desc,
    alternates: {
      canonical: `/${service}/`,
    },
  };
}

export default async function DynamicRootDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  // ==========================================
  // 1. INDUSTRY DETAIL PAGE (seo-for-[slug])
  // ==========================================
  if (service.startsWith("seo-for-")) {
    const indSlug = service.replace(/^seo-for-/, "");
    const d = industries.find((i) => i.slug === indSlug);

    if (!d) {
      notFound();
    }

    const iLong = industriesLong[indSlug] || {};
    const introParagraphs: string[] = iLong.intro || [
      `${d.name} searches are driven by customers who need reliable service right now. Showing up in the map pack and organic results connects your business with local homeowners and clients actively searching in your market.`,
      `SEO for ${d.name.toLowerCase()} focuses on Google Business Profile prominence, dedicated service pages, real local reviews, and local authority that compounds over time.`,
    ];

    const searches: [string, string][] =
      iLong.searches ||
      d.kws.slice(0, 8).map((kw, i) => [
        kw,
        i < 3 ? "Urgent" : i < 5 ? "Local" : "Commercial",
      ]);

    const challenges: [string, string][] =
      d.pains && d.pains.length > 0
        ? d.pains.slice(0, 3)
        : [
            [
              "Local proximity and map competition",
              "Competitors closer to the center often crowd the top map spots unless your profile signals are stronger.",
            ],
            [
              "Lead aggregators dominate broad terms",
              "Directory sites and middleman portals push direct local providers down.",
            ],
            [
              "Multi-city service area expansion",
              "Ranking in nearby suburbs and adjacent service towns requires tailored service area pages.",
            ],
          ];

    const pagesToBuild: [string, string][] = iLong.pages || [
      [
        `Emergency ${d.noun} service page`,
        `Captures urgent searchers who need immediate assistance and want fast response times.`,
      ],
      [
        `Core service and installation pages`,
        `Dedicated pages for each major service you offer, targeting specific high-intent searches.`,
      ],
      [
        `Service area and location landing pages`,
        `Unique pages for each city or township you serve, backed with genuine local proof.`,
      ],
      [
        `Pricing, warranty and financing guides`,
        `Answers common pre-purchase questions and removes friction before customers call.`,
      ],
    ];

    const strategySteps: [string, string][] = iLong.strategy || [
      [
        "Optimize the Google Business Profile",
        "Set accurate categories, service areas, attributes and photos to maximize proximity signals.",
      ],
      [
        "Build targeted service pages",
        "Create dedicated, in-depth pages for every high-value service with clear calls to action.",
      ],
      [
        "Earn job-specific customer reviews",
        "Implement a post-service review request workflow mentioning specific services and locations.",
      ],
      [
        "Build local and industry citations",
        "Secure directory listings, local partnerships and industry citations that establish prominence.",
      ],
    ];

    const complianceNote = iLong.compliance;

    const faqs: [string, string][] =
      iLong.faq || [
        [
          `How long does SEO take for a ${d.noun}?`,
          `Most ${d.name.toLowerCase()} see map pack and organic movement within 60 to 90 days, with lead volume compounding over 6 to 12 months.`,
        ],
        [
          "Why not just buy leads from lead generation sites?",
          "Lead sites sell the same lead to multiple competitors simultaneously. Organic search brings customers directly to you with zero middleman fee.",
        ],
        [
          "Do I need a physical address to rank in the map pack?",
          "Google requires a verified address to show in map results. For service-area businesses, we can hide the street address while ranking across your territory.",
        ],
        [
          `What does SEO for ${d.name.toLowerCase()} cost?`,
          "Local plans start at $599 per month for single-location businesses. We recommend a tailored plan after reviewing your market in a free audit.",
        ],
      ];

    const relatedInds = industries
      .filter((x) => x.cat === d.cat && x.slug !== d.slug)
      .slice(0, 6);

    const relatedLinks = [
      ...relatedInds.map((x) => ({
        href: `/seo-for-${x.slug}/`,
        label: `SEO for ${x.name}`,
      })),
      { href: "/industries/", label: "Industries We Serve" },
      { href: "/local-seo/", label: "Local SEO" },
      { href: "/seo-packages/local-seo/", label: "Local SEO Packages" },
    ];

    return (
      <main id="main">
        {/* Page Hero */}
        <section className="ph">
          <div className="bgd"></div>
          <div className="wrap">
            <nav className="crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/industries/">Industries</Link>
              <span className="sep">/</span>
              <span aria-current="page">SEO for {d.name}</span>
            </nav>

            <div className="phg">
              <div>
                <span className="eyb pill" data-r>
                  <i></i>
                  {d.cat}
                </span>
                <h1 data-r>
                  SEO for <span className="acc">{d.name}</span>
                </h1>
                <p className="lead" data-r>
                  More calls, bookings and qualified leads for your {d.noun}, from
                  customers already searching for what you do.
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
                    <label className="sr-only" htmlFor="au-ind">
                      Your website
                    </label>
                    <input
                      id="au-ind"
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
                    <span>Industry-specific keyword plan</span>
                    <span>Map pack and organic</span>
                    <span>No long contracts</span>
                  </div>
                </div>
              </div>

              <div className="vis" data-r="s">
                <div className="phimg">
                  <img
                    src={`/img/${d.grp || "i-home"}.webp`}
                    alt={`${d.noun} owner`}
                    fetchPriority="high"
                  />
                </div>
                <div className="dfloat b" style={{ top: 18, right: -14 }}>
                  <span className="g">
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
                  <span>
                    <b>&quot;{d.kws?.[0] || `${d.noun} near me`}&quot;</b>
                    Map pack #1 target
                  </span>
                </div>
                <div className="dfloat a" style={{ bottom: 22 }}>
                  <span className="g">
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
                  <span>
                    <b>Your {d.noun}</b>
                    Top 3 map result
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar TOC */}
        <section className="sec" style={{ paddingTop: "clamp(40px,5vw,70px)" }}>
          <div className="wrap art">
            <aside className="toc" aria-label="On this page">
              <b>On this page</b>
              <a href="#overview">Overview</a>
              <a href="#searches">Searches we target</a>
              <a href="#challenges">Industry challenges</a>
              <a href="#pages">Pages to build</a>
              <a href="#strategy">Our strategy</a>
              <a href="#services">Services</a>
              <a href="#cities">Cities</a>
              <a href="#pricing">Pricing</a>
              <a href="#results">Verified results</a>
              <a href="#trust">Commitments</a>
              <a href="#faq">FAQ</a>
              <div className="tc">
                <strong>Free audit</strong>
                <p>For your {d.noun} website and Google profile.</p>
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
              {/* Overview */}
              <section className="blk" id="overview">
                <span className="eyb">Overview</span>
                <h2>Why {d.name.toLowerCase()} need SEO</h2>
                <div className="prose">
                  {introParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              {/* Searches Table */}
              <section className="blk" id="searches">
                <span className="eyb">Keyword targets</span>
                <h2>Searches that bring {d.name.toLowerCase()} customers</h2>
                <p style={{ color: "var(--mute)", marginBottom: 18 }}>
                  Examples of high-intent searches we build pages and profiles
                  around. Your final list comes from research in your market.
                </p>
                <div className="tbl-wrap">
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th scope="col">Search phrase</th>
                        <th scope="col">Intent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searches.map(([phrase, intent], i) => (
                        <tr key={i}>
                          <td>{phrase}</td>
                          <td>
                            <span className={`intent ${intent}`}>{intent}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Challenges */}
              <section className="blk" id="challenges">
                <span className="eyb">Challenges</span>
                <h2>What makes SEO for {d.name.toLowerCase()} different</h2>
                <div className="g3" data-stagger>
                  {challenges.map(([title, desc], i) => (
                    <div className="card" key={i}>
                      <span className="num">0{i + 1}</span>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pages to build */}
              <section className="blk" id="pages">
                <span className="eyb">Site structure</span>
                <h2>Pages every {d.noun} website needs</h2>
                <div className="g2" data-stagger>
                  {pagesToBuild.map(([title, desc], i) => (
                    <div className="card" key={i}>
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
                          <path d="M7 3h7l5 5v13H7z" />
                          <path d="M14 3v5h5M10 13h6M10 17h6" />
                        </svg>
                      </span>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Strategy */}
              <section className="blk" id="strategy">
                <span className="eyb">Strategy</span>
                <h2>Our SEO strategy for {d.name.toLowerCase()}</h2>
                <div className="steps4 two" data-stagger>
                  {strategySteps.map(([title, desc], i) => (
                    <div className="card" key={i}>
                      <span className="num">Step 0{i + 1}</span>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
                {complianceNote && (
                  <div className="note" style={{ marginTop: 18 }}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 11v6M12 7.5v.5" />
                    </svg>
                    <span>{complianceNote}</span>
                  </div>
                )}
              </section>

              {/* Services */}
              <section className="blk" id="services">
                <span className="eyb">Services</span>
                <h2>SEO services for {d.name.toLowerCase()}</h2>
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
                      Show up when nearby customers search for what you do, with
                      a Google Business Profile, location pages and local
                      signals that outrank the competition.
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
                      Strategy, writing and refreshes that make your site the
                      most useful answer on the topics you sell.
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
                      Editorial backlinks from relevant, real websites, earned
                      with outreach and content people actually want to reference.
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

              {/* Cities */}
              <section className="blk" id="cities">
                <span className="eyb">Locations</span>
                <h2>SEO for {d.name.toLowerCase()} across the US</h2>
                <p style={{ color: "var(--mute)", marginBottom: 16 }}>
                  We run industry campaigns in all major US metros.
                </p>
                <div className="chips">
                  {locations.map((loc) => (
                    <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="sec" id="pricing" data-price>
          <div className="wrap" style={{ textAlign: "center" }}>
            <div className="sh c" data-r>
              <span className="eyb">Pricing</span>
              <h2 className="h2">SEO pricing for {d.name.toLowerCase()}</h2>
              <p>
                Local SEO plans built for businesses like yours. Month to month
                after onboarding.
              </p>
            </div>

            <div
              className="toggle"
              role="group"
              aria-label="Billing period"
            >
              <button
                type="button"
                className="on"
                data-v="m"
                aria-pressed="true"
              >
                Monthly
              </button>
              <button type="button" data-v="y" aria-pressed="false">
                Yearly
              </button>
            </div>
            <p className="save">Save 10% with yearly billing</p>

            <div className="plans">
              <article className="plan" data-r>
                <span className="lbl">Plan</span>
                <h3>Starter</h3>
                <p className="who">One location, one service area</p>
                <div className="pr">
                  <b>
                    $<span data-m="599" data-y="539">599</span>
                  </b>
                  <small>/ month</small>
                </div>
                <div
                  className="bill"
                  data-mb="Billed monthly"
                  data-yb="Billed yearly, save $720"
                >
                  Billed monthly
                </div>
                <Link className="btn dk" href="/contact-us/">
                  Get started
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
                <ul>
                  <li>Google Business Profile setup and optimization</li>
                  <li>Top 40 citations</li>
                  <li>Review request system</li>
                  <li>2 location or service pages per month</li>
                  <li>Rank grid report</li>
                </ul>
              </article>

              <article className="plan pop" data-r>
                <span className="lbl">Most popular</span>
                <h3>Pro</h3>
                <p className="who">Up to three locations</p>
                <div className="pr">
                  <b>
                    $<span data-m="1,199" data-y="1,079">1,199</span>
                  </b>
                  <small>/ month</small>
                </div>
                <div
                  className="bill"
                  data-mb="Billed monthly"
                  data-yb="Billed yearly, save $1,440"
                >
                  Billed monthly
                </div>
                <Link className="btn ac" href="/contact-us/">
                  Get started
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
                <ul>
                  <li>Everything in Starter</li>
                  <li>Weekly Google posts</li>
                  <li>4 local pages per month</li>
                  <li>Local link building</li>
                  <li>Review response management</li>
                  <li>Competitor map pack tracking</li>
                </ul>
              </article>

              <article className="plan" data-r>
                <span className="lbl">Plan</span>
                <h3>Multi-location</h3>
                <p className="who">Four or more locations</p>
                <div className="pr">
                  <b>
                    $<span data-m="2,199" data-y="1,979">2,199</span>
                  </b>
                  <small>/ month</small>
                </div>
                <div
                  className="bill"
                  data-mb="Billed monthly"
                  data-yb="Billed yearly, save $2,640"
                >
                  Billed monthly
                </div>
                <Link className="btn dk" href="/contact-us/">
                  Get started
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
                <ul>
                  <li>Everything in Pro</li>
                  <li>Per-location profiles and pages</li>
                  <li>Store locator SEO</li>
                  <li>Centralized review dashboard</li>
                  <li>Dedicated local strategist</li>
                </ul>
              </article>
            </div>

            <p style={{ marginTop: 22, color: "var(--mute)", fontSize: 14.5 }}>
              Need multi-location or enterprise SEO?{" "}
              <Link className="tlink" href="/contact-us/">
                Get a custom quote
              </Link>
            </p>
          </div>
        </section>

        {/* Results Overtake Showcase */}
        <ResultsOvertake
          badge={`${d.name} Results`}
          title={`Real organic takeover for ${d.name.toLowerCase()}`}
          sub={`From bottom of page two to #1 in map pack and organic. Here is what disciplined local and technical SEO delivers.`}
        />

        {/* Six Commitments Trust Section */}
        <TrustSection />

        {/* FAQ Section */}
        <section className="sec" id="faq">
          <div className="wrap fwrap">
            <div className="side" data-r>
              <span className="eyb">FAQ</span>
              <h2 className="h2" style={{ margin: "14px 0 16px" }}>
                SEO for {d.name}: FAQ
              </h2>
              <p style={{ color: "var(--mute)", marginBottom: 24 }}>
                Questions {d.name.toLowerCase()} ask before hiring an SEO
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

        {/* Keep Exploring */}
        <section className="sec tight">
          <div className="wrap">
            <div className="sh" data-r>
              <span className="eyb">Keep exploring</span>
              <h2 className="h2">Related industries and services</h2>
            </div>
            <div className="linkgrid" data-stagger>
              {relatedLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.label}
                </Link>
              ))}
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
              <h2 className="h2">Ready to grow your {d.noun}?</h2>
              <p>Get a free audit of your website and Google Business Profile.</p>
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
                <label className="sr-only" htmlFor="au-ind-foot">
                  Your website
                </label>
                <input
                  id="au-ind-foot"
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

  // ==========================================
  // 2. SERVICE DETAIL PAGE (16 core/specialist)
  // ==========================================
  const s = services[service];

  if (!s) {
    notFound();
  }

  const sLong = servicesLong[service] || {};

  const whatParagraphs: string[] = sLong.what || [
    s.intro ||
      `${s.name} improves your visibility in organic search through disciplined, revenue-focused execution across technical health, content depth and authoritative backlinks.`,
  ];

  const whyItems: [string, string][] = sLong.why || [
    [
      "Higher commercial intent",
      "Organic searchers are actively looking for solutions, services, and products like yours.",
    ],
    [
      "Compounding traffic growth",
      "Unlike paid ads that stop when budget runs dry, SEO rankings build durable brand equity.",
    ],
    [
      "Outrank established competitors",
      "A systematic approach closes performance gaps and establishes topical dominance in your category.",
    ],
  ];

  const deliverables: [string, string][] =
    s.inc && s.inc.length > 0
      ? s.inc
      : [
          [
            "Comprehensive Audit",
            "Full technical, content and backlink baseline review.",
          ],
          [
            "Prioritized Roadmap",
            "90-day execution sprint ranked by revenue impact.",
          ],
          [
            "On-page Optimization",
            "Title tags, metadata, semantic hierarchy and internal linking.",
          ],
          [
            "Authority Building",
            "Editorial links and PR from authoritative industry publications.",
          ],
        ];

  const monthlyDeliverables: [string, string][] = sLong.deliver || [
    [
      "Live rank and performance tracking",
      "Continuous tracking of primary keywords, traffic changes, and competitive shifts.",
    ],
    [
      "Technical fixes and indexing maintenance",
      "Weekly monitoring of crawl errors, Core Web Vitals, and indexing issues.",
    ],
    [
      "Content optimization and production",
      "Creation and refreshes of high-intent service and product landing pages.",
    ],
    [
      "Link acquisition and digital outreach",
      "High-authority editorial mentions that pass genuine ranking power to your money pages.",
    ],
  ];

  const processSteps: [string, string][] =
    s.steps && s.steps.length > 0
      ? s.steps
      : [
          [
            "Full discovery and audit",
            "We analyze crawl logs, technical errors, competitor positioning, and keyword gaps.",
          ],
          [
            "Foundational remediation",
            "We fix indexing roadblocks, site architecture flaws, and critical on-page errors.",
          ],
          [
            "Content expansion and authority",
            "We build and optimize high-converting pages and launch focused outreach.",
          ],
          [
            "Optimization and scaling",
            "We track conversions, expand to adjacent queries, and compound organic revenue.",
          ],
        ];

  const signsList: string[] = sLong.signs || [
    `Your organic search visibility has plateaued or declined in recent months`,
    `Competitors with inferior products or services rank above you in search results`,
    `Your site suffers from technical crawling, indexing, or Core Web Vitals issues`,
    `You rely heavily on paid ads and need a more profitable customer acquisition channel`,
  ];

  const compareCols: [string, string] = sLong.compare_cols || [
    s.name,
    "Google Ads / Traditional Agencies",
  ];

  const compareRows: [string, string, string][] = sLong.compare || [
    [
      "Cost model",
      "Flat monthly investment, compounding returns",
      "Pay per click, traffic vanishes when budget stops",
    ],
    [
      "Longevity",
      "Rankings hold and compound over quarters and years",
      "Temporary visibility strictly tied to current spend",
    ],
    [
      "Deliverables",
      "Transparent work listed up front, no vague retainers",
      "Opaque hours without verified tangible deliverables",
    ],
  ];

  const topicsList: string[] =
    sLong.topics ||
    s.chips || [
      `${s.name.toLowerCase()} services`,
      `${s.name.toLowerCase()} agency`,
      `best ${s.name.toLowerCase()}`,
      `hire ${s.name.toLowerCase()}`,
    ];

  const priceHeading: string =
    sLong.price_h || `How much does ${s.name.toLowerCase()} cost?`;

  const priceParagraph: string =
    sLong.price_p ||
    `Our SEO plans start at $799 per month for single-location businesses, $1,499 per month for growing brands, and $2,999 per month for competitive markets. ${s.name} is included in every plan at the depth your market requires.`;

  const faqs: [string, string][] =
    sLong.faq ||
    s.faq || [
      [
        `How long does ${s.name.toLowerCase()} take to show results?`,
        "Most campaigns begin seeing positive rank movement within 60 to 90 days. Revenue and organic traffic volume compound substantially over 6 to 12 months.",
      ],
      [
        "Is there a long-term contract?",
        "All plans include an initial 3-month onboarding sprint, after which services continue month-to-month with 30 days notice.",
      ],
      [
        "Do you provide monthly reporting?",
        "Yes. Every month you receive a plain-English report highlighting organic revenue, rankings, completed deliverables, and next-sprint priorities.",
      ],
    ];

  const relatedSlugs = s.related || [
    "seo-audit",
    "technical-seo",
    "on-page-seo",
    "link-building",
    "content-seo",
    "seo-packages",
  ];

  return (
    <main id="main">
      {/* Page Hero */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/seo-services/">SEO Services</Link>
            <span className="sep">/</span>
            <span aria-current="page">{s.name}</span>
          </nav>

          <div className="phg">
            <div>
              <span className="eyb pill" data-r>
                <i></i>
                {s.name} services
              </span>
              <h1 data-r>{s.h1 || s.name}</h1>
              <p className="lead" data-r>
                {s.sub || s.desc}
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
                  <label className="sr-only" htmlFor="au-svc">
                    Your website
                  </label>
                  <input
                    id="au-svc"
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
                  <span>Free audit in 2 business days</span>
                  <span>Month to month</span>
                  <span>Plain-English reporting</span>
                </div>
              </div>
            </div>

            <div className="vis" data-r="s">
              <div
                className="card dark"
                style={{
                  background: "#0b0b0c",
                  borderColor: "#1d1d21",
                  padding: 18,
                }}
              >
                <div className="bento" style={{ display: "block" }}>
                  <div
                    className="vis"
                    data-vis
                    style={{ minHeight: 250, margin: "0 0 16px" }}
                  >
                    <div className="grid9" aria-hidden="true">
                      {Array.from({ length: 49 }).map((_, i) => (
                        <i key={i}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {deliverables.slice(0, 4).map(([title], i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "12.5px",
                        border: "1px solid #2a2a2e",
                        borderRadius: 999,
                        padding: "6px 11px",
                        color: "#d4d4d8",
                      }}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Facts Strip */}
          <div className="facts" data-r>
            <div>
              <b>{deliverables.length} deliverables</b>
              <span>Listed up front, no vague retainers</span>
            </div>
            <div>
              <b>90-day roadmap</b>
              <span>Prioritized by revenue impact</span>
            </div>
            <div>
              <b>Month to month</b>
              <span>After a 3 month onboarding</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Split with Sticky TOC */}
      <section className="sec" style={{ paddingTop: "clamp(40px,5vw,70px)" }}>
        <div className="wrap art">
          <aside className="toc" aria-label="On this page">
            <b>On this page</b>
            <a href="#what">What is {s.name.toLowerCase()}</a>
            <a href="#why">Why it matters</a>
            <a href="#included">What&#x27;s included</a>
            <a href="#monthly">Monthly work</a>
            <a href="#process">Our process</a>
            <a href="#fit">Is it right for you</a>
            <a href="#compare">{sLong.compare_h || "Comparison"}</a>
            <a href="#topics">Related searches</a>
            <a href="#pricing">Pricing</a>
            <a href="#results">Verified results</a>
            <a href="#trust">Commitments</a>
            <a href="#faq">FAQ</a>
            <div className="tc">
              <strong>Free SEO audit</strong>
              <p>See what is holding your rankings back.</p>
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
            {/* What is Section */}
            <section className="blk" id="what">
              <span className="eyb">Overview</span>
              <h2>{sLong.what_h || `What is ${s.name.toLowerCase()}?`}</h2>
              <div className="prose">
                {whatParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Why it Matters */}
            <section className="blk" id="why">
              <span className="eyb">Why it matters</span>
              <h2>
                {sLong.why_h || `Why ${s.name.toLowerCase()} matters for your business`}
              </h2>
              <div className="g3" data-stagger>
                {whyItems.map(([title, desc], i) => (
                  <div className="card" key={i}>
                    <span className="num">0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What is Included (Deliverables) */}
            <section className="blk" id="included">
              <span className="eyb">Deliverables</span>
              <h2>What is included in our {s.name.toLowerCase()} service</h2>
              <div className="g2" data-stagger>
                {deliverables.map(([title, desc], i) => (
                  <div className="card" key={i}>
                    <span className="num">0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Monthly Work */}
            <section className="blk" id="monthly">
              <span className="eyb">Every month</span>
              <h2>{sLong.deliver_h || "What you get each month"}</h2>
              <div className="g2" data-stagger>
                {monthlyDeliverables.map(([title, desc], i) => (
                  <div className="card" key={i}>
                    <span className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
                      </svg>
                    </span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="blk" id="process">
              <span className="eyb">Process</span>
              <h2>How our {s.name.toLowerCase()} process works</h2>
              <div className="steps4 two" data-stagger>
                {processSteps.map(([title, desc], i) => (
                  <div className="card" key={i}>
                    <span className="num">Step 0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Fit / Signs */}
            <section className="blk" id="fit">
              <span className="eyb">Who it is for</span>
              <h2>{sLong.signs_h || `Signs you need ${s.name.toLowerCase()}`}</h2>
              <ul className="checks" data-stagger>
                {signsList.map((sign, i) => (
                  <li key={i}>{sign}</li>
                ))}
              </ul>
              {s.fit && s.fit.length > 0 && (
                <p style={{ marginTop: 20, color: "var(--mute)" }}>
                  Best fit: {s.fit.join(", ")}.
                </p>
              )}
            </section>

            {/* Comparison */}
            <section className="blk" id="compare">
              <span className="eyb">Comparison</span>
              <h2>{sLong.compare_h || `${s.name} vs Alternatives`}</h2>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th scope="col">Aspect</th>
                      <th scope="col">{compareCols[0]}</th>
                      <th scope="col">{compareCols[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map(([aspect, col1, col2], i) => (
                      <tr key={i}>
                        <td>{aspect}</td>
                        <td>{col1}</td>
                        <td>{col2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Searches */}
            <section className="blk" id="topics">
              <span className="eyb">Related searches</span>
              <h2>{sLong.topics_h || "Topics this service covers"}</h2>
              <div className="chips">
                {topicsList.map((topic, i) => (
                  <span key={i}>{topic}</span>
                ))}
              </div>
            </section>

            {/* Pricing Section Block */}
            <section className="blk" id="pricing">
              <span className="eyb">Pricing</span>
              <h2>{priceHeading}</h2>
              <div className="prose">
                <p>
                  {priceParagraph} See our{" "}
                  <Link href="/seo-packages/">SEO packages</Link> or start with a{" "}
                  <Link href="/seo-audit/">professional SEO audit</Link>.
                </p>
              </div>
              <div className="cmp3" style={{ marginTop: 22 }} data-stagger>
                <Link className="card" href="/seo-packages/">
                  <h3>Local</h3>
                  <p>Single-location businesses</p>
                  <div
                    style={{
                      fontFamily: "var(--fd)",
                      fontSize: 28,
                      fontWeight: 600,
                      marginTop: 12,
                    }}
                  >
                    $799
                    <small
                      style={{
                        fontSize: 14,
                        color: "var(--mute)",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      /mo
                    </small>
                  </div>
                </Link>
                <Link className="card" href="/seo-packages/">
                  <h3>Growth</h3>
                  <p>Growing businesses and multi-location brands</p>
                  <div
                    style={{
                      fontFamily: "var(--fd)",
                      fontSize: 28,
                      fontWeight: 600,
                      marginTop: 12,
                    }}
                  >
                    $1,499
                    <small
                      style={{
                        fontSize: 14,
                        color: "var(--mute)",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      /mo
                    </small>
                  </div>
                </Link>
                <Link className="card" href="/seo-packages/">
                  <h3>Empire</h3>
                  <p>Competitive markets and national brands</p>
                  <div
                    style={{
                      fontFamily: "var(--fd)",
                      fontSize: 28,
                      fontWeight: 600,
                      marginTop: 12,
                    }}
                  >
                    $2,999
                    <small
                      style={{
                        fontSize: 14,
                        color: "var(--mute)",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      /mo
                    </small>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge={`${s.name} Impact`}
        title={`Measurable results for ${s.name.toLowerCase()}`}
        sub={`Real Search Console performance, high-converting organic rankings, and compounding returns without ad spend.`}
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* FAQ Section */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              {s.name} FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: 24 }}>
              Common questions about {s.name.toLowerCase()}.
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

      {/* Related Services Links */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Keep exploring</span>
            <h2 className="h2">Related services and resources</h2>
          </div>
          <div className="linkgrid" data-stagger>
            {relatedSlugs.map((slug, i) => {
              const relSvc = services[slug];
              const label = relSvc
                ? relSvc.name
                : slug === "seo-packages"
                ? "SEO Packages"
                : slug === "seo-audit"
                ? "SEO Audit"
                : slug.replace(/-/g, " ");
              return (
                <Link key={i} href={`/${slug}/`}>
                  {label}
                </Link>
              );
            })}
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
            <h2 className="h2">Ready to grow your organic traffic?</h2>
            <p>
              Get a free SEO audit with a prioritized 90-day plan. No contracts,
              no pressure.
            </p>
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
              <label className="sr-only" htmlFor="au-svc-foot">
                Your website
              </label>
              <input
                id="au-svc-foot"
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
