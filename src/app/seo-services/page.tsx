import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import AuditForm from "@/components/common/AuditForm";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";
import {
  ArrowIcon,
  SparkleIcon,
  PinIcon,
  CartIcon,
  SaaSIcon,
  WrenchIcon,
  SearchIcon,
  StoreIcon,
  GlobeIcon,
  BuildingIcon,
  FileTextIcon,
  ExternalLinkIcon,
  LinkIcon,
  PenToolIcon,
  ChartIcon,
  ChatIcon,
} from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "SEO Services: Technical, Local, Content & Link Building | RankEmpire",
  description:
    "Pick a single service or combine them into a full program. 21 SEO services for local, e-commerce and SaaS brands.",
  alternates: {
    canonical: "/seo-services/",
  },
};

export default function SeoServicesPage() {
  const faqs = [
    {
      q: "Can I buy a single SEO service?",
      a: "Yes. Many clients start with an SEO audit, technical SEO or link building and add services once they see results.",
    },
    {
      q: "Which service should I start with?",
      a: "If you are unsure, start with an SEO audit. It shows exactly where you are losing rankings and what to fix first.",
    },
    {
      q: "Do your services include reporting?",
      a: "Every service includes monthly reporting and access to a live dashboard.",
    },
    {
      q: "Which SEO services do I need?",
      a: "It depends on your business model and where your site is weakest. Local businesses usually benefit most from Google Business Profile and local SEO. Online stores often need technical and category page work. SaaS companies tend to need keyword research and content. An audit or initial review is the best way to decide before committing budget.",
    },
    {
      q: "Can I buy just one SEO service?",
      a: "Yes. Many clients start with a single service, such as an SEO audit, keyword research or link building, and add more later if needed. Standalone services work best when other areas are already in reasonable shape. If a major problem elsewhere limits results, we will tell you before you spend money.",
    },
    {
      q: "What is included in a monthly SEO services plan?",
      a: "A monthly plan typically includes technical monitoring, on-page optimization of priority pages, content planning or writing, link building or local work and reporting. The exact mix is set after reviewing your site and goals, and it can shift each month as some areas improve and others become the priority.",
    },
    {
      q: "How do I know if my SEO services are working?",
      a: "Look beyond rankings to organic traffic to important pages, leads or sales from organic search and visibility for priority keyword groups. Your provider should show what work was completed each month and connect it to those metrics. Expect gradual change, since many SEO improvements take months to show their full effect.",
    },
    {
      q: "Are SEO services worth it for small businesses?",
      a: "For businesses whose customers search online before buying, SEO is often worthwhile because it builds visibility that does not charge per click. Small local businesses can benefit from focused work on their Google Business Profile, reviews and service pages. It is less suitable if you need leads immediately and cannot wait several months.",
    },
  ];

  return (
    <>
      {/* 1. Page Hero with Visualizer & Facts */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">SEO Services</span>
          </nav>
          <div className="phg">
            <div>
              <span className="eyb pill" data-r>
                <i></i>SEO Services services
              </span>
              <h1 data-r>
                SEO services for every <span className="acc">stage</span> of growth
              </h1>
              <p className="lead" data-r>
                Pick a single service or combine them into a full program. Every engagement starts
                with an audit so we work on what moves revenue first.
              </p>
              <div data-r>
                <AuditForm />
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
                style={{ background: "#0b0b0c", borderColor: "#1d1d21", padding: "18px" }}
              >
                <div className="bento" style={{ display: "block" }}>
                  <div
                    className="vis"
                    data-vis
                    style={{ minHeight: "250px", margin: "0 0 16px" }}
                  >
                    <div className="grid9" aria-hidden="true">
                      {Array.from({ length: 49 }).map((_, i) => (
                        <i key={i}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}></div>
              </div>
            </div>
          </div>

          <div className="facts" data-r>
            <div>
              <b>18 deliverables</b>
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

      {/* 2. Article Section with TOC */}
      <section className="sec" style={{ paddingTop: "clamp(40px,5vw,70px)" }}>
        <div className="wrap art">
          <aside className="toc" aria-label="On this page">
            <b>On this page</b>
            <a href="#what">What are SEO services</a>
            <a href="#core">Core services</a>
            <a href="#specialist">Specialist services</a>
            <a href="#why">Why it matters</a>
            <a href="#monthly">Monthly work</a>
            <a href="#process">Our process</a>
            <a href="#fit">Is it right for you</a>
            <a href="#compare">Ongoing SEO services vs One-off SEO project</a>
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
                <ArrowIcon />
              </Link>
            </div>
          </aside>

          <div>
            <section className="blk" id="what">
              <span className="eyb">Overview</span>
              <h2>What are SEO services?</h2>
              <div className="prose">
                <p>
                  SEO services are the professional tasks that help a website earn more visibility
                  and traffic from unpaid search results. They cover research, technical
                  optimization, on-page improvements, content creation, local listings and link
                  building. Some businesses buy a full program that handles all of these together,
                  while others need one focused service, such as an audit before a site migration or
                  link building to support content that already exists. The right mix depends on
                  where a site is losing ground and which searches bring in customers.
                </p>
                <p>
                  This page is a hub for every SEO service RankEmpire offers. Local businesses
                  usually start with local SEO and Google Business Profile optimization. E-commerce
                  brands tend to need technical SEO and category page work. SaaS companies benefit
                  most from keyword research and content built around problems, comparisons and
                  integrations. Each service can stand alone or combine into a monthly program.
                  Before recommending anything, we review your site, competitors and goals, so you
                  pay only for the services that address your actual constraints.
                </p>
              </div>
            </section>

            {/* Core Services */}
            <section className="blk" id="core">
              <span className="eyb">Core services</span>
              <h2>Core SEO services</h2>
              <div className="g2" data-stagger>
                <Link className="card" href="/local-seo/">
                  <span className="ic">
                    <PinIcon />
                  </span>
                  <h3>Local SEO</h3>
                  <p>
                    Show up when nearby customers search for what you do, with a Google Business
                    Profile, location pages and local signals that outrank the competition.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/ecommerce-seo/">
                  <span className="ic">
                    <CartIcon />
                  </span>
                  <h3>E-commerce SEO</h3>
                  <p>
                    Category pages that rank, product pages that convert and a technical setup that
                    lets Google crawl your whole catalog.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/saas-seo/">
                  <span className="ic">
                    <SaaSIcon />
                  </span>
                  <h3>SaaS SEO</h3>
                  <p>
                    Bottom-funnel pages first, then the topical authority that makes your whole site
                    rank. Built around trials, demos and signups.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/technical-seo/">
                  <span className="ic">
                    <WrenchIcon />
                  </span>
                  <h3>Technical SEO</h3>
                  <p>
                    If Google cannot crawl, render and understand your site, nothing else works. We
                    fix the foundation so content and links can do their job.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/seo-audit/">
                  <span className="ic">
                    <SearchIcon />
                  </span>
                  <h3>SEO Audit</h3>
                  <p>
                    Technical, content, links, local and competitor analysis, delivered as a
                    prioritized roadmap ranked by revenue impact.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/google-business-profile-seo/">
                  <span className="ic">
                    <StoreIcon />
                  </span>
                  <h3>Google Business Profile SEO</h3>
                  <p>
                    Your profile is often the first thing customers see. We turn it into the
                    strongest asset in your local search presence.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>
              </div>
            </section>

            {/* Specialist Services */}
            <section className="blk" id="specialist">
              <span className="eyb">Specialist services</span>
              <h2>Specialist SEO services</h2>
              <div className="g2" data-stagger>
                <Link className="card" href="/national-seo/">
                  <span className="ic">
                    <GlobeIcon />
                  </span>
                  <h3>National SEO</h3>
                  <p>
                    Rank for competitive non-local keywords with a strategy built on authority,
                    depth of content and a technically sound site.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/enterprise-seo/">
                  <span className="ic">
                    <BuildingIcon />
                  </span>
                  <h3>Enterprise SEO</h3>
                  <p>
                    SEO for sites with thousands of pages, many stakeholders and no room for mistakes
                    during releases and migrations.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/on-page-seo/">
                  <span className="ic">
                    <FileTextIcon />
                  </span>
                  <h3>On-Page SEO</h3>
                  <p>
                    Titles, headings, copy, internal links and markup aligned with what searchers
                    actually want to see.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/off-page-seo/">
                  <span className="ic">
                    <ExternalLinkIcon />
                  </span>
                  <h3>Off-Page SEO</h3>
                  <p>
                    Links, mentions and reputation signals from sources your customers and Google
                    already trust.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/link-building/">
                  <span className="ic">
                    <LinkIcon />
                  </span>
                  <h3>Link Building</h3>
                  <p>
                    Editorial backlinks from relevant, real websites, earned with outreach and
                    content people actually want to reference.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/content-seo/">
                  <span className="ic">
                    <PenToolIcon />
                  </span>
                  <h3>Content SEO</h3>
                  <p>
                    Strategy, writing and refreshes that make your site the most useful answer on the
                    topics you sell.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/international-seo/">
                  <span className="ic">
                    <GlobeIcon />
                  </span>
                  <h3>International SEO</h3>
                  <p>
                    Market research, site structure, hreflang and localized content so each country
                    sees the right page.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/keyword-research/">
                  <span className="ic">
                    <SearchIcon />
                  </span>
                  <h3>Keyword Research</h3>
                  <p>
                    Search demand, intent and difficulty mapped to a page plan, so every new page
                    has a clear reason to exist.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/competitor-seo-analysis/">
                  <span className="ic">
                    <ChartIcon />
                  </span>
                  <h3>Competitor SEO Analysis</h3>
                  <p>
                    Their keywords, their best pages, their links and their weak spots, turned into a
                    plan you can act on.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>

                <Link className="card" href="/seo-consulting/">
                  <span className="ic">
                    <ChatIcon />
                  </span>
                  <h3>SEO Consulting</h3>
                  <p>
                    Strategy, second opinions, migration planning and training for teams that do the
                    work in-house.
                  </p>
                  <span className="tlink more">Explore</span>
                </Link>
              </div>
            </section>

            {/* Why It Matters */}
            <section className="blk" id="why">
              <span className="eyb">Why it matters</span>
              <h2>Why the right SEO services matter for your business</h2>
              <div className="g3" data-stagger>
                <div className="card">
                  <span className="num">01</span>
                  <h3>Fit the work to the problem</h3>
                  <p>
                    Not every site needs the same thing. A site with indexing issues gains little
                    from new blog posts until those issues are fixed. Choosing services based on a
                    proper diagnosis keeps your budget focused on the real bottleneck instead of on
                    tasks that only look busy.
                  </p>
                </div>
                <div className="card">
                  <span className="num">02</span>
                  <h3>Services work better together</h3>
                  <p>
                    Technical, content and link work support each other. New content ranks more
                    easily on a technically sound site with strong internal links, and earned links
                    carry more value when they point at pages that clearly match what searchers want.
                    Planning them together avoids wasted effort.
                  </p>
                </div>
                <div className="card">
                  <span className="num">03</span>
                  <h3>One accountable team</h3>
                  <p>
                    Running services under one plan means one team owns priorities, results and
                    reporting. You avoid gaps between separate freelancers and conflicting advice
                    from vendors who each work on the same site without a shared view of what matters
                    most. Questions get one clear answer.
                  </p>
                </div>
              </div>
            </section>

            {/* Monthly Work */}
            <section className="blk" id="monthly">
              <span className="eyb">Every month</span>
              <h2>How our SEO services are delivered</h2>
              <div className="g2" data-stagger>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Service fit assessment</h3>
                  <p>
                    Before you commit, we review your site, analytics and competitors and recommend
                    which services to start with, explaining what each one addresses and what can
                    wait until later.
                  </p>
                </div>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Modular service plans</h3>
                  <p>
                    Choose individual services such as an audit, link building or local SEO, or
                    combine them into a monthly program. Scope can change as priorities shift without
                    restarting the engagement.
                  </p>
                </div>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Shared task tracker</h3>
                  <p>
                    Every task across services lives in one tracker you can view, showing what is
                    planned, in progress and completed, so nothing falls between separate workstreams.
                  </p>
                </div>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Cross service reporting</h3>
                  <p>
                    One monthly report connects technical fixes, content, links and local work to
                    traffic and leads, so you see the combined effect rather than isolated metrics
                    from each service.
                  </p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section className="blk" id="process">
              <span className="eyb">Process</span>
              <h2>How our SEO services process works</h2>
              <div className="steps4 two" data-stagger>
                <div className="card">
                  <span className="num">Step 01</span>
                  <h3>Audit and research</h3>
                  <p>
                    We audit your site, market and competitors to find the biggest opportunities for
                    SEO services.
                  </p>
                </div>
                <div className="card">
                  <span className="num">Step 02</span>
                  <h3>Roadmap</h3>
                  <p>Findings become a prioritized plan ranked by impact and effort.</p>
                </div>
                <div className="card">
                  <span className="num">Step 03</span>
                  <h3>Implementation</h3>
                  <p>Our specialists do the work, with every task visible in your dashboard.</p>
                </div>
                <div className="card">
                  <span className="num">Step 04</span>
                  <h3>Measure and refine</h3>
                  <p>We report on rankings, traffic and conversions and adjust the plan monthly.</p>
                </div>
              </div>
            </section>

            {/* Fit */}
            <section className="blk" id="fit">
              <span className="eyb">Who it is for</span>
              <h2>Signs you need professional SEO services</h2>
              <ul className="checks" data-stagger>
                <li>You know SEO matters but are unsure which service to start with</li>
                <li>Several freelancers have worked on your site without a shared plan</li>
                <li>Your traffic is flat even though you publish content regularly</li>
                <li>You need help with one area, like links, but not a full program</li>
                <li>Your current provider cannot explain what they do each month</li>
              </ul>
            </section>

            {/* Comparison */}
            <section className="blk" id="compare">
              <span className="eyb">Comparison</span>
              <h2>Ongoing SEO services vs one-off SEO projects</h2>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th scope="col">Aspect</th>
                      <th scope="col">Ongoing SEO services</th>
                      <th scope="col">One-off SEO project</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Duration</td>
                      <td>Continuous monthly work</td>
                      <td>Fixed scope with a defined end date</td>
                    </tr>
                    <tr>
                      <td>Best for</td>
                      <td>Steady growth and competitive markets</td>
                      <td>Specific needs like an audit or migration</td>
                    </tr>
                    <tr>
                      <td>Adaptability</td>
                      <td>Priorities adjust as results and data come in</td>
                      <td>Scope is set at the start</td>
                    </tr>
                    <tr>
                      <td>Maintenance</td>
                      <td>Catches new issues as the site changes</td>
                      <td>No follow up unless booked again</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Topics */}
            <section className="blk" id="topics">
              <span className="eyb">Related searches</span>
              <h2>Topics this service covers</h2>
              <div className="chips">
                <span>seo services</span>
                <span>professional seo services</span>
                <span>seo services for small business</span>
                <span>monthly seo services</span>
                <span>affordable seo services</span>
                <span>seo packages</span>
              </div>
            </section>

            {/* Pricing */}
            <section className="blk" id="pricing">
              <span className="eyb">Pricing</span>
              <h2>How much does SEO services cost?</h2>
              <div className="prose">
                <p>
                  Our SEO plans start at $799 per month for single-location businesses, $1,499 per
                  month for growing brands and $2,999 per month for competitive markets. SEO
                  Services is included in every plan at the depth your market needs. See our{" "}
                  <Link href="/seo-packages/">SEO packages</Link> or start with a{" "}
                  <Link href="/seo-audit/">professional SEO audit</Link>.
                </p>
              </div>
              <div className="cmp3" style={{ marginTop: "22px" }} data-stagger>
                <Link className="card" href="/seo-packages/">
                  <h3>Local</h3>
                  <p>Single-location businesses</p>
                  <div
                    style={{
                      fontFamily: "var(--fd)",
                      fontSize: "28px",
                      fontWeight: 600,
                      marginTop: "12px",
                    }}
                  >
                    $799
                    <small style={{ fontSize: "14px", color: "var(--mute)", fontWeight: 400 }}>
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
                      fontSize: "28px",
                      fontWeight: 600,
                      marginTop: "12px",
                    }}
                  >
                    $1,499
                    <small style={{ fontSize: "14px", color: "var(--mute)", fontWeight: 400 }}>
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
                      fontSize: "28px",
                      fontWeight: 600,
                      marginTop: "12px",
                    }}
                  >
                    $2,999
                    <small style={{ fontSize: "14px", color: "var(--mute)", fontWeight: 400 }}>
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
        badge="Verified Results"
        title="See what disciplined SEO execution delivers"
        sub="Real Search Console performance, high-converting organic rankings, and compounding revenue without ongoing ad spend."
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* 3. SEO Services FAQ Section */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              SEO Services FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: "24px" }}>
              Common questions about SEO services.
            </p>
            <div className="card" style={{ padding: "20px" }}>
              <b style={{ fontFamily: "var(--fd)", fontSize: "18px" }}>Still have a question?</b>
              <p style={{ margin: "6px 0 14px" }}>
                Talk to a strategist. We reply within one business day.
              </p>
              <Link className="btn dk sm" href="/contact-us/">
                Contact us
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="faqs" data-r>
            {faqs.map((faq, i) => (
              <details key={i} className="fq" open={i === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <i className="pm" aria-hidden="true" />
                </summary>
                <div className="a">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Keep Exploring */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Keep exploring</span>
            <h2 className="h2">Related services and resources</h2>
          </div>
          <div className="linkgrid" data-stagger>
            <Link href="/seo-audit/">SEO Audit</Link>
            <Link href="/seo-packages/">SEO Packages</Link>
            <Link href="/seo-company/">SEO Company</Link>
            <Link href="/seo-consulting/">SEO Consulting</Link>
            <Link href="/local-seo/">Local SEO</Link>
            <Link href="/ecommerce-seo/">E-commerce SEO</Link>
            <Link href="/saas-seo/">SaaS SEO</Link>
            <Link href="/technical-seo/">Technical SEO</Link>
            <Link href="/google-business-profile-seo/">Google Business Profile SEO</Link>
            <Link href="/industries/">Industries We Serve</Link>
          </div>
        </div>
      </section>

      {/* 5. Free SEO Audit CTA */}
      <CTASection />
    </>
  );
}
