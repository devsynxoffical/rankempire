import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TrustSection from "@/components/sections/TrustSection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import CTASection from "@/components/sections/CTASection";
import AuditForm from "@/components/common/AuditForm";
import { ArrowIcon, SparkleIcon } from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "SEO Company That Builds Compounding Rankings | RankEmpire",
  description:
    "One team for technical SEO, content, links and local search, so every month of work stacks on the last instead of starting over.",
  alternates: {
    canonical: "/seo-company/",
  },
};

export default function SeoCompanyPage() {
  const faqs = [
    {
      q: "What makes RankEmpire different from other SEO companies?",
      a: "We keep the whole job in one team. The people who audit your site are the same people who fix it, write for it and report on it, so nothing gets lost between agencies or freelancers.",
    },
    {
      q: "Do you lock clients into long contracts?",
      a: "No. Plans run month to month after an initial 3 month onboarding period, because SEO needs that long to show direction.",
    },
    {
      q: "Who owns the work?",
      a: "You do. Every page, account, report and piece of content we create belongs to your business from day one.",
    },
    {
      q: "How much does an SEO company cost?",
      a: "Pricing depends on scope, competition and how much content or technical work is needed. Local businesses in smaller markets usually need less monthly work than a national e-commerce store or a SaaS company competing for software terms. Ask any agency to show exactly which tasks the retainer covers each month, so you can compare proposals on work delivered rather than headline price.",
    },
    {
      q: "How long does it take to see results from an SEO company?",
      a: "Technical fixes and on-page improvements can show movement within weeks once Google recrawls the pages. Building authority and ranking for competitive terms usually takes several months of consistent work. The timeline depends on your site's current state, how strong competitors are and how quickly changes get implemented. Be cautious of anyone who promises a specific ranking by a specific date.",
    },
    {
      q: "Can an SEO company guarantee first page rankings?",
      a: "No honest SEO company can guarantee rankings, because Google controls its algorithm and results change constantly. What an agency can commit to is a clear scope of work, transparent reporting and sound methods that follow Google's guidelines. Guarantees are often a warning sign of shortcuts such as low quality link schemes that can lead to penalties.",
    },
    {
      q: "What should I ask before hiring an SEO company?",
      a: "Ask how they will diagnose your site, what they deliver each month, who does the work, how they build links and how they report results. Request examples of their process and ask what they need from you, such as developer access or approvals. A good agency will also tell you when SEO is not the right channel for a goal.",
    },
    {
      q: "Do I need to sign a long-term SEO contract?",
      a: "Many agencies use month to month agreements or short initial terms. SEO does need several months to show its full effect, so a commitment of at least a few months is reasonable. Make sure the contract states who owns the content, accounts and data created, and what happens to them if you end the engagement.",
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
            <span aria-current="page">SEO Company</span>
          </nav>
          <div className="phg">
            <div>
              <span className="eyb pill" data-r>
                <i></i>SEO Company services
              </span>
              <h1 data-r>
                The SEO company built for <span className="acc">compounding</span> growth
              </h1>
              <p className="lead" data-r>
                One team for technical SEO, content, links and local search, so every month of work
                stacks on the last instead of starting over.
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
                    <div className="bars">
                      <i style={{ "--h": "22%" } as React.CSSProperties}></i>
                      <i style={{ "--h": "30%" } as React.CSSProperties}></i>
                      <i style={{ "--h": "34%" } as React.CSSProperties}></i>
                      <i style={{ "--h": "42%" } as React.CSSProperties}></i>
                      <i style={{ "--h": "58%" } as React.CSSProperties} className="a"></i>
                      <i style={{ "--h": "70%" } as React.CSSProperties} className="a"></i>
                      <i style={{ "--h": "86%" } as React.CSSProperties} className="a"></i>
                      <i style={{ "--h": "100%" } as React.CSSProperties} className="a"></i>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "12.5px",
                      border: "1px solid #2a2a2e",
                      borderRadius: "999px",
                      padding: "6px 11px",
                      color: "#d4d4d8",
                    }}
                  >
                    Technical foundation
                  </span>
                  <span
                    style={{
                      fontSize: "12.5px",
                      border: "1px solid #2a2a2e",
                      borderRadius: "999px",
                      padding: "6px 11px",
                      color: "#d4d4d8",
                    }}
                  >
                    Search intent mapping
                  </span>
                  <span
                    style={{
                      fontSize: "12.5px",
                      border: "1px solid #2a2a2e",
                      borderRadius: "999px",
                      padding: "6px 11px",
                      color: "#d4d4d8",
                    }}
                  >
                    Content that ranks
                  </span>
                  <span
                    style={{
                      fontSize: "12.5px",
                      border: "1px solid #2a2a2e",
                      borderRadius: "999px",
                      padding: "6px 11px",
                      color: "#d4d4d8",
                    }}
                  >
                    Authority building
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="facts" data-r>
            <div>
              <b>6 deliverables</b>
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
            <a href="#what">What does an SEO company do</a>
            <a href="#why">Why it matters</a>
            <a href="#included">What&apos;s included</a>
            <a href="#monthly">Monthly work</a>
            <a href="#process">Our process</a>
            <a href="#fit">Is it right for you</a>
            <a href="#compare">SEO company vs In-house SEO</a>
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
              <h2>What does an SEO company do?</h2>
              <div className="prose">
                <p>
                  An SEO company improves how often and how prominently a business appears in organic
                  search results on Google and other search engines. The work combines technical
                  fixes, content, on-page optimization, local listings and link acquisition, all
                  guided by keyword research and data from tools like Google Search Console and
                  Google Analytics. A good SEO company starts by finding what is holding a site
                  back, then builds a prioritized plan that matches the business model, whether that
                  means ranking a single location for service searches or growing category traffic
                  for an online store.
                </p>
                <p>
                  Day to day, an SEO company audits crawlability and indexing, maps keywords to
                  pages, rewrites titles and content, improves internal linking, earns mentions from
                  relevant sites and reports on what changed. At RankEmpire we work with local
                  businesses, e-commerce brands and SaaS companies, so the mix of tasks shifts with
                  the goal. A plumber needs map pack visibility and service area pages. A store
                  needs clean category architecture and product page fixes. A SaaS company needs
                  content that captures problem and comparison searches from buyers who are
                  evaluating tools.
                </p>
              </div>
            </section>

            <section className="blk" id="why">
              <span className="eyb">Why it matters</span>
              <h2>Why hiring an SEO company matters for your business</h2>
              <div className="g3" data-stagger>
                <div className="card">
                  <span className="num">01</span>
                  <h3>Search is where buyers start</h3>
                  <p>
                    Many purchases and service calls begin with a search. When your business does not
                    show up for the terms buyers use, those leads go to competitors who do. An SEO
                    company makes sure the right pages exist and are clearly understood by search
                    engines for those searches.
                  </p>
                </div>
                <div className="card">
                  <span className="num">02</span>
                  <h3>Compounding results</h3>
                  <p>
                    Paid ads stop the moment the budget does. Organic visibility built on sound
                    pages, useful content and earned links keeps working month after month, which
                    lowers your reliance on paid channels over time and gives each new page a
                    stronger base to rank from.
                  </p>
                </div>
                <div className="card">
                  <span className="num">03</span>
                  <h3>Specialist skills in one team</h3>
                  <p>
                    SEO spans development, writing, analytics and outreach. Hiring all of those
                    roles in house is expensive and slow. An SEO company gives you access to each
                    skill set and the tooling behind it, coordinated around one plan with clear
                    priorities and one point of contact.
                  </p>
                </div>
              </div>
            </section>

            <section className="blk" id="included">
              <span className="eyb">Deliverables</span>
              <h2>What is included in our SEO company service</h2>
              <div className="g2" data-stagger>
                <div className="card">
                  <span className="num">01</span>
                  <h3>Technical foundation</h3>
                  <p>
                    Crawlability, indexation, Core Web Vitals, internal linking and structured data
                    fixed before anything else.
                  </p>
                </div>
                <div className="card">
                  <span className="num">02</span>
                  <h3>Search intent mapping</h3>
                  <p>
                    Every target keyword mapped to one page with one job, so you stop competing with
                    yourself.
                  </p>
                </div>
                <div className="card">
                  <span className="num">03</span>
                  <h3>Content that ranks</h3>
                  <p>
                    Service pages, location pages and articles written by subject matter writers and
                    edited for search.
                  </p>
                </div>
                <div className="card">
                  <span className="num">04</span>
                  <h3>Authority building</h3>
                  <p>
                    Editorial links, digital PR and citations earned on relevant sites, never bought
                    in bulk.
                  </p>
                </div>
                <div className="card">
                  <span className="num">05</span>
                  <h3>Local visibility</h3>
                  <p>
                    Google Business Profile, reviews and map pack rankings for every location you
                    serve.
                  </p>
                </div>
                <div className="card">
                  <span className="num">06</span>
                  <h3>Clear reporting</h3>
                  <p>
                    A monthly report in plain English plus a live dashboard of rankings, traffic and
                    conversions.
                  </p>
                </div>
              </div>
            </section>

            <section className="blk" id="monthly">
              <span className="eyb">Every month</span>
              <h2>What you get each month</h2>
              <div className="g2" data-stagger>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Prioritized action roadmap</h3>
                  <p>
                    A living plan that ranks every fix and opportunity by expected impact and effort,
                    so the work each month targets what moves revenue first instead of working through
                    a generic checklist.
                  </p>
                </div>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Page level optimization sprints</h3>
                  <p>
                    Each month we rewrite titles, headings, copy and internal links on a set of
                    priority pages, tied to the keywords and buyer intent mapped to them during
                    research.
                  </p>
                </div>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Technical health monitoring</h3>
                  <p>
                    Ongoing crawls catch broken links, indexing problems, redirect chains and speed
                    regressions before they cost you visibility, with fixes documented for your
                    developer or handled by our team.
                  </p>
                </div>
                <div className="card">
                  <span className="ic">
                    <SparkleIcon />
                  </span>
                  <h3>Plain English reporting</h3>
                  <p>
                    A monthly report covering organic traffic, leads, keyword movement and completed
                    work, with notes on what we learned and what comes next, plus a call to walk
                    through it.
                  </p>
                </div>
              </div>
            </section>

            <section className="blk" id="process">
              <span className="eyb">Process</span>
              <h2>How our SEO company process works</h2>
              <div className="steps4 two" data-stagger>
                <div className="card">
                  <span className="num">Step 01</span>
                  <h3>Audit and research</h3>
                  <p>
                    We audit your site, market and competitors to find the biggest opportunities for
                    SEO company.
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

            <section className="blk" id="fit">
              <span className="eyb">Who it is for</span>
              <h2>Signs you need an SEO company</h2>
              <ul className="checks" data-stagger>
                <li>Your website gets little organic traffic despite being live for over a year</li>
                <li>Competitors with weaker offers consistently appear above you on Google</li>
                <li>You rely almost entirely on paid ads or referrals for new leads</li>
                <li>Nobody on your team has time to monitor rankings, content or technical health</li>
                <li>You redesigned or migrated your site and traffic dropped afterward</li>
              </ul>
              <p style={{ marginTop: "20px", color: "var(--mute)" }}>
                Best fit: service businesses that rely on calls and form leads, e-commerce stores that
                want organic revenue, not just traffic, saas companies building a content and
                product-led pipeline.
              </p>
            </section>

            <section className="blk" id="compare">
              <span className="eyb">Comparison</span>
              <h2>SEO company vs in-house SEO</h2>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th scope="col">Aspect</th>
                      <th scope="col">SEO company</th>
                      <th scope="col">In-house SEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cost</td>
                      <td>One retainer covers strategy, content, technical and outreach</td>
                      <td>Salaries, benefits and tool licenses for each role</td>
                    </tr>
                    <tr>
                      <td>Skill range</td>
                      <td>Specialists across technical, content and link building</td>
                      <td>Usually one generalist covering every area</td>
                    </tr>
                    <tr>
                      <td>Ramp up time</td>
                      <td>Starts with proven processes and tools in place</td>
                      <td>Hiring and onboarding can take months</td>
                    </tr>
                    <tr>
                      <td>Business context</td>
                      <td>Learns your business through onboarding and regular calls</td>
                      <td>Knows products, customers and internal priorities deeply</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="blk" id="topics">
              <span className="eyb">Related searches</span>
              <h2>Topics this service covers</h2>
              <div className="chips">
                <span>seo company</span>
                <span>seo agency near me</span>
                <span>best seo company</span>
                <span>hire seo company</span>
                <span>seo firm for small business</span>
                <span>affordable seo company</span>
              </div>
            </section>

            <section className="blk" id="pricing">
              <span className="eyb">Pricing</span>
              <h2>How much does SEO company cost?</h2>
              <div className="prose">
                <p>
                  Our SEO plans start at $799 per month for single-location businesses, $1,499 per
                  month for growing brands and $2,999 per month for competitive markets. SEO Company
                  is included in every plan at the depth your market needs. See our{" "}
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
        title="How we take over search rankings"
        sub="No vanity metrics. Just organic clicks, real search impressions, and verified revenue growth across every campaign."
      />

      {/* 3. Six Commitments Trust Section */}
      <TrustSection />

      {/* 4. SEO Company FAQ Section */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              SEO Company FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: "24px" }}>
              Common questions about SEO company.
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

      {/* 5. Keep Exploring Links */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Keep exploring</span>
            <h2 className="h2">Related services and resources</h2>
          </div>
          <div className="linkgrid" data-stagger>
            <Link href="/seo-services/">SEO Services</Link>
            <Link href="/local-seo/">Local SEO</Link>
            <Link href="/technical-seo/">Technical SEO</Link>
            <Link href="/seo-audit/">SEO Audit</Link>
            <Link href="/ecommerce-seo/">E-commerce SEO</Link>
            <Link href="/saas-seo/">SaaS SEO</Link>
            <Link href="/google-business-profile-seo/">Google Business Profile SEO</Link>
            <Link href="/industries/">Industries We Serve</Link>
            <Link href="/seo-packages/">SEO Packages</Link>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection />
    </>
  );
}
