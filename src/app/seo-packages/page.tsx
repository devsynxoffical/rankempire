"use client";

import React, { useState } from "react";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";
import { ArrowIcon } from "@/components/common/Icons";

export default function SeoPackagesPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is there a minimum contract?",
      a: "Plans include a 3 month onboarding period, then run month to month with 30 days notice.",
    },
    {
      q: "What does yearly billing include?",
      a: "Paying yearly saves 10 percent on any plan. Everything else stays the same.",
    },
    {
      q: "Can I switch plans later?",
      a: "Yes. You can upgrade or downgrade at the start of any month as your needs change.",
    },
    {
      q: "Do prices include content and links?",
      a: "Yes. Every deliverable listed in a plan is included. Ad spend and third-party software for your own accounts are not.",
    },
    {
      q: "Which package should I choose?",
      a: "Single-location service businesses usually start with the first plan. Multi-location brands and competitive markets need the second or third. We recommend a plan after a free audit.",
    },
  ];

  return (
    <>
      {/* 1. Page Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <nav className="crumb" style={{ justifyContent: "center" }} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">SEO Packages</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>SEO Packages
          </span>
          <h1 data-r style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
            SEO packages with <span className="acc">clear</span> pricing
          </h1>
          <p className="lead" data-r style={{ margin: "0 auto" }}>
            Monthly plans for every stage. No long contracts after onboarding, no hidden fees and
            every deliverable listed up front.
          </p>
        </div>
      </section>

      {/* 2. Pricing Plans */}
      <section className="sec" style={{ paddingTop: 0 }} id="pricing" data-price>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="sh c" data-r>
            <span className="eyb">Plans</span>
            <h2 className="h2">Choose your plan</h2>
            <p>Every plan includes onboarding, a roadmap, reporting and a dedicated strategist.</p>
          </div>

          <div className="toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={!isYearly ? "on" : ""}
              data-v="m"
              aria-pressed={!isYearly}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={isYearly ? "on" : ""}
              data-v="y"
              aria-pressed={isYearly}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
          <p className="save">Save 10% with yearly billing</p>

          <div className="plans">
            {/* Local Plan */}
            <article className="plan" data-r>
              <span className="lbl">Plan</span>
              <h3>Local</h3>
              <p className="who">Single-location businesses</p>
              <div className="pr">
                <b>${isYearly ? "719" : "799"}</b>
                <small>/ month</small>
              </div>
              <div className="bill">
                {isYearly ? "Billed yearly, save $960" : "Billed monthly"}
              </div>
              <Link className="btn dk" href="/contact-us/">
                Get started
                <ArrowIcon />
              </Link>
              <ul>
                <li>Google Business Profile optimization</li>
                <li>Up to 10 tracked keywords</li>
                <li>4 optimized pages per month</li>
                <li>Citation cleanup and building</li>
                <li>Monthly report and call</li>
              </ul>
            </article>

            {/* Growth Plan */}
            <article className="plan pop" data-r>
              <span className="lbl">Most popular</span>
              <h3>Growth</h3>
              <p className="who">Growing businesses and multi-location brands</p>
              <div className="pr">
                <b>${isYearly ? "1,349" : "1,499"}</b>
                <small>/ month</small>
              </div>
              <div className="bill">
                {isYearly ? "Billed yearly, save $1,800" : "Billed monthly"}
              </div>
              <Link className="btn ac" href="/contact-us/">
                Get started
                <ArrowIcon />
              </Link>
              <ul>
                <li>Everything in Local</li>
                <li>Up to 30 tracked keywords</li>
                <li>8 optimized or new pages per month</li>
                <li>Technical SEO fixes</li>
                <li>Monthly link building</li>
                <li>Live ranking dashboard</li>
              </ul>
            </article>

            {/* Empire Plan */}
            <article className="plan" data-r>
              <span className="lbl">Plan</span>
              <h3>Empire</h3>
              <p className="who">Competitive markets and national brands</p>
              <div className="pr">
                <b>${isYearly ? "2,699" : "2,999"}</b>
                <small>/ month</small>
              </div>
              <div className="bill">
                {isYearly ? "Billed yearly, save $3,600" : "Billed monthly"}
              </div>
              <Link className="btn dk" href="/contact-us/">
                Get started
                <ArrowIcon />
              </Link>
              <ul>
                <li>Everything in Growth</li>
                <li>Up to 100 tracked keywords</li>
                <li>16 optimized or new pages per month</li>
                <li>Digital PR campaign</li>
                <li>Dedicated strategist</li>
                <li>Quarterly roadmap workshop</li>
              </ul>
            </article>
          </div>

          <p style={{ marginTop: "22px", color: "var(--mute)", fontSize: "14.5px" }}>
            Need multi-location or enterprise SEO?{" "}
            <Link className="tlink" href="/contact-us/">
              Get a custom quote
            </Link>
          </p>
        </div>
      </section>

      {/* 3. Comparison Table */}
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
                    <th scope="col">Local</th>
                    <th scope="col">Growth</th>
                    <th scope="col">Empire</th>
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

      {/* 4. Business Model Packages */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Other packages</span>
            <h2 className="h2">Packages built for your business model</h2>
          </div>
          <div className="g3" data-stagger>
            <Link className="card" href="/seo-packages/local-seo/">
              <h3>Local SEO Packages</h3>
              <p>
                Plans built for service businesses, clinics and multi-location brands that depend on
                local calls and visits.
              </p>
              <span className="tlink more">View pricing</span>
            </Link>
            <Link className="card" href="/seo-packages/ecommerce-seo/">
              <h3>E-commerce SEO Packages</h3>
              <p>
                Plans for Shopify, WooCommerce and custom stores that want organic sales to carry
                more of the load.
              </p>
              <span className="tlink more">View pricing</span>
            </Link>
            <Link className="card" href="/seo-packages/saas-seo/">
              <h3>SaaS SEO Packages</h3>
              <p>
                Plans for B2B software companies that want trials, demos and signups from organic
                search.
              </p>
              <span className="tlink more">View pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge="Package Results"
        title="Rankings that pay for the package"
        sub="Transparent deliverables and real Search Console growth across every tier."
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* 5. FAQ */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              SEO pricing FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: "24px" }}>
              Questions about plans, billing and contracts.
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
              <div key={i} className={`fq ${openFaq === i ? "on" : ""}`}>
                <button
                  type="button"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <i className="pm" aria-hidden="true" />
                </button>
                <div className="a">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title="Not sure which plan fits?"
        sub="Tell us about your business and we will recommend the right package after a free audit."
      />
    </>
  );
}
