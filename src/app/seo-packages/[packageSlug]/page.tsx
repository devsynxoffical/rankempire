import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { packages } from "@/data";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";

export async function generateStaticParams() {
  return ["local-seo", "ecommerce-seo", "saas-seo"].map((slug) => ({
    packageSlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}): Promise<Metadata> {
  const { packageSlug } = await params;
  const key = `seo-packages/${packageSlug}`;
  const p = packages[key];
  if (!p) return {};

  return {
    title: p.title,
    description: p.desc,
    alternates: {
      canonical: `/${key}/`,
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}) {
  const { packageSlug } = await params;
  const key = `seo-packages/${packageSlug}`;
  const p = packages[key];

  if (!p) {
    notFound();
  }

  const otherPackages = [
    {
      href: "/seo-packages/",
      title: "SEO Packages",
      desc: "Monthly plans for every stage. No long contracts after onboarding, no hidden fees and every deliverable listed up front.",
    },
    {
      href: "/seo-packages/local-seo/",
      title: "Local SEO Packages",
      desc: "Plans built for service businesses, clinics and multi-location brands that depend on local calls and visits.",
    },
    {
      href: "/seo-packages/ecommerce-seo/",
      title: "E-commerce SEO Packages",
      desc: "Plans for Shopify, WooCommerce and custom stores that want organic sales to carry more of the load.",
    },
    {
      href: "/seo-packages/saas-seo/",
      title: "SaaS SEO Packages",
      desc: "Plans for B2B software companies that want trials, demos and signups from organic search.",
    },
  ].filter((x) => !x.href.includes(packageSlug));

  const pricingFaqs: [string, string][] = [
    [
      "Is there a minimum contract?",
      "Plans include a 3 month onboarding period, then run month to month with 30 days notice.",
    ],
    [
      "What does yearly billing include?",
      "Paying yearly saves 10 percent on any plan. Everything else stays the same.",
    ],
    [
      "Can I switch plans later?",
      "Yes. You can upgrade or downgrade at the start of any month as your needs change.",
    ],
    [
      "Do prices include content and links?",
      "Yes. Every deliverable listed in a plan is included. Ad spend and third-party software for your own accounts are not.",
    ],
    [
      "Which package should I choose?",
      "Single-location service businesses usually start with the first plan. Multi-location brands and competitive markets need the second or third. We recommend a plan after a free audit.",
    ],
  ];

  return (
    <main id="main">
      {/* Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <nav
            className="crumb"
            style={{ justifyContent: "center" }}
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/seo-packages/">SEO Packages</Link>
            <span className="sep">/</span>
            <span aria-current="page">{p.name}</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>
            {p.name}
          </span>
          <h1
            data-r
            style={{
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            dangerouslySetInnerHTML={{
              __html: p.h1.replace(/<em>(.*?)<\/em>/g, '<span class="acc">$1</span>'),
            }}
          />
          <p
            className="lead"
            data-r
            style={{ margin: "0 auto", maxWidth: 760 }}
          >
            {p.sub}
          </p>
        </div>
      </section>

      {/* Pricing Cards with Monthly / Yearly Toggle */}
      <section className="sec" style={{ paddingTop: 0 }} id="pricing" data-price>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="sh c" data-r>
            <span className="eyb">Plans</span>
            <h2 className="h2">Choose your plan</h2>
            <p>
              Every plan includes onboarding, a roadmap, reporting and a
              dedicated strategist.
            </p>
          </div>

          <div className="toggle" role="group" aria-label="Billing period">
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
            {p.plans.map(([name, who, price, pop, features], i) => {
              const yearlyPrice = Math.round(price * 0.9);
              const monthlySavings = (price - yearlyPrice) * 12;
              const isPopular = pop === "pop";

              return (
                <article
                  key={i}
                  className={`plan${isPopular ? " pop" : ""}`}
                  data-r
                >
                  <span className="lbl">{isPopular ? "Most popular" : "Plan"}</span>
                  <h3>{name}</h3>
                  <p className="who">{who}</p>
                  <div className="pr">
                    <b>
                      $
                      <span
                        data-m={price.toLocaleString()}
                        data-y={yearlyPrice.toLocaleString()}
                      >
                        {price.toLocaleString()}
                      </span>
                    </b>
                    <small>/ month</small>
                  </div>
                  <div
                    className="bill"
                    data-mb="Billed monthly"
                    data-yb={`Billed yearly, save $${monthlySavings.toLocaleString()}`}
                  >
                    Billed monthly
                  </div>
                  <Link
                    className={`btn ${isPopular ? "ac" : "dk"}`}
                    href="/contact-us/"
                  >
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
                    {features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p style={{ marginTop: 22, color: "var(--mute)", fontSize: 14.5 }}>
            Need multi-location or enterprise SEO?{" "}
            <Link className="tlink" href="/contact-us/">
              Get a custom quote
            </Link>
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Compare plans</span>
            <h2 className="h2">What changes as you scale</h2>
          </div>
          <div data-r>
            <div className="tbl-wrap">
              <table className="tbl c">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    {p.plans.map(([name], idx) => (
                      <th scope="col" key={idx}>
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Initial SEO audit</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Prioritized 90-day roadmap</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Monthly report and strategy call</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Live ranking dashboard</td>
                    <td className="n">&mdash;</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Technical SEO fixes</td>
                    <td className="n">&mdash;</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Link building</td>
                    <td className="n">&mdash;</td>
                    <td className="y">&#10003;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Digital PR campaigns</td>
                    <td className="n">&mdash;</td>
                    <td className="n">&mdash;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                  <tr>
                    <td>Dedicated senior strategist</td>
                    <td className="n">&mdash;</td>
                    <td className="n">&mdash;</td>
                    <td className="y">&#10003;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Other Packages Grid */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Other packages</span>
            <h2 className="h2">Packages built for your business model</h2>
          </div>
          <div className="g3" data-stagger>
            {otherPackages.map((pkg, i) => (
              <Link key={i} className="card" href={pkg.href}>
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
                <span className="tlink more">View pricing</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge={`${p.name} Proof`}
        title={`Proven search dominance for ${p.name.toLowerCase()}`}
        sub="Real Search Console performance, high-converting organic rankings, and compounding revenue without ongoing ad spend."
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              SEO pricing FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: 24 }}>
              Questions about plans, billing and contracts.
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
            {pricingFaqs.map(([q, a], i) => (
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
            <h2 className="h2">Not sure which plan fits?</h2>
            <p>
              Tell us about your business and we will recommend the right package
              after a free audit.
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
              <label className="sr-only" htmlFor="au-pkg-foot">
                Your website
              </label>
              <input
                id="au-pkg-foot"
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
