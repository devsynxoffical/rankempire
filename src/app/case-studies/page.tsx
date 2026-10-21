import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TrustSection from "@/components/sections/TrustSection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import CTASection from "@/components/sections/CTASection";
import { ArrowIcon, ChartIcon, TargetIcon, InfoIcon } from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "Case Studies | RankEmpire",
  description:
    "How we run SEO programs for local businesses, online stores and practices. Verified client results from Google Search Console.",
  alternates: {
    canonical: "/case-studies/",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* 1. Page Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Case Studies</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>SEO results
          </span>
          <h1 data-r style={{ maxWidth: "900px" }}>
            SEO case studies and <span className="acc">proven playbooks</span>
          </h1>
          <p className="lead" data-r>
            How we run SEO programs for local businesses, online stores and practices. Verified
            client results are published here with their permission.
          </p>
        </div>
      </section>

      {/* 2. Verified Results GSC */}
      <section className="sec results" id="results">
        <div className="wrap rgrid">
          <div data-r>
            <span className="eyb pill">
              <i></i>Verified client results
            </span>
            <h2 className="h2" style={{ margin: "16px 0 14px" }}>
              Verified result: education website, 6 months.
            </h2>
            <p className="lead" style={{ fontSize: "17px" }}>
              Real performance data from a client&apos;s Google Search Console, last 6 months. No
              mockups, no estimates, just what Google reports.
            </p>

            <div className="rk" data-stagger>
              <div className="k1">
                <b>
                  <span data-count="42.1">42.1</span>K
                </b>
                <span>Total clicks from Google</span>
              </div>
              <div className="k2">
                <b>
                  <span data-count="240">240</span>K
                </b>
                <span>Total impressions</span>
              </div>
              <div className="k3">
                <b>
                  <span data-count="17.6">17.6</span>%
                </b>
                <span>Average click-through rate</span>
              </div>
              <div className="k4">
                <b>
                  <span data-count="7.5">7.5</span>
                </b>
                <span>Average position</span>
              </div>
            </div>

            <div className="rmeta">
              <span>Education website</span>
              <span>Search type: Web</span>
              <span>Apr to Oct 2026</span>
            </div>

            <div style={{ marginTop: "24px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link className="btn dk" href="/seo-packages/">
                See SEO pricing
                <ArrowIcon />
              </Link>
              <Link className="btn ln" href="/contact-us/">
                Get results like this
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="rwrap" data-r="s">
            <div className="bframe">
              <div className="bb">
                <i></i>
                <i></i>
                <i></i>
                <span>search.google.com / search-console / performance</span>
              </div>
              <img
                src="/img/r-gsc1.webp"
                alt="Google Search Console performance report showing 42.1K clicks, 240K impressions, 17.6% average CTR and 7.5 average position over 6 months"
                loading="lazy"
                width={1600}
                height={868}
              />
            </div>
            <div className="rbadge b">
              <span className="g">
                <ChartIcon />
              </span>
              <span>
                <b>17.6% CTR</b>6-month average
              </span>
            </div>
            <div className="rbadge a">
              <span className="g">
                <TargetIcon />
              </span>
              <span>
                <b>Avg. position 7.5</b>first page of Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Playbooks */}
      <section className="sec">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Playbooks</span>
            <h2 className="h2">How we run SEO programs</h2>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            <article
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px",
                alignItems: "center",
                padding: "18px",
              }}
              data-r
            >
              <div className="phimg" style={{ aspectRatio: "4/3", boxShadow: "none" }}>
                <img src="/img/w1.webp" alt="Map Pack Takeover" loading="lazy" />
              </div>
              <div>
                <span className="eyb">Playbook 01</span>
                <h2 className="h3" style={{ margin: "10px 0 12px" }}>
                  Map Pack Takeover
                </h2>
                <p style={{ fontSize: "16px" }}>
                  A 90-day local program for service businesses: profile rebuild, review engine,
                  location pages and local links designed to move a business into the top three map
                  results.
                </p>
                <div className="tbl-wrap" style={{ marginTop: "18px" }}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>Best for</td>
                        <td>Home services, clinics and multi-location brands</td>
                      </tr>
                      <tr>
                        <td>Services</td>
                        <td>Local SEO, GBP SEO</td>
                      </tr>
                      <tr>
                        <td>Timeline</td>
                        <td>90-day sprint, then monthly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <article
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px",
                alignItems: "center",
                padding: "18px",
              }}
              data-r
            >
              <div className="phimg" style={{ aspectRatio: "4/3", boxShadow: "none" }}>
                <img src="/img/w3.webp" alt="Organic Revenue Engine" loading="lazy" />
              </div>
              <div>
                <span className="eyb">Playbook 02</span>
                <h2 className="h3" style={{ margin: "10px 0 12px" }}>
                  Organic Revenue Engine
                </h2>
                <p style={{ fontSize: "16px" }}>
                  An e-commerce program that cleans up faceted navigation, rewrites priority
                  categories and adds buying guides so organic search drives sales instead of empty
                  sessions.
                </p>
                <div className="tbl-wrap" style={{ marginTop: "18px" }}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>Best for</td>
                        <td>Shopify and WooCommerce stores</td>
                      </tr>
                      <tr>
                        <td>Services</td>
                        <td>E-commerce SEO, Content SEO</td>
                      </tr>
                      <tr>
                        <td>Timeline</td>
                        <td>90-day sprint, then monthly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <article
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px",
                alignItems: "center",
                padding: "18px",
              }}
              data-r
            >
              <div className="phimg" style={{ aspectRatio: "4/3", boxShadow: "none" }}>
                <img src="/img/w2.webp" alt="Technical Recovery" loading="lazy" />
              </div>
              <div>
                <span className="eyb">Playbook 03</span>
                <h2 className="h3" style={{ margin: "10px 0 12px" }}>
                  Technical Recovery
                </h2>
                <p style={{ fontSize: "16px" }}>
                  For sites that lost traffic after a redesign or update: full crawl, indexation
                  fixes, redirect repair and Core Web Vitals work to restore and then grow
                  visibility.
                </p>
                <div className="tbl-wrap" style={{ marginTop: "18px" }}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>Best for</td>
                        <td>Sites after migrations or traffic drops</td>
                      </tr>
                      <tr>
                        <td>Services</td>
                        <td>Technical SEO, SEO Audit</td>
                      </tr>
                      <tr>
                        <td>Timeline</td>
                        <td>90-day sprint, then monthly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <article
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px",
                alignItems: "center",
                padding: "18px",
              }}
              data-r
            >
              <div className="phimg" style={{ aspectRatio: "4/3", boxShadow: "none" }}>
                <img src="/img/w4.webp" alt="Practice Growth" loading="lazy" />
              </div>
              <div>
                <span className="eyb">Playbook 04</span>
                <h2 className="h3" style={{ margin: "10px 0 12px" }}>
                  Practice Growth
                </h2>
                <p style={{ fontSize: "16px" }}>
                  A trust-first program for dental, medical and legal practices: treatment or
                  practice area pages, provider profiles, reviews and local authority built to
                  bring in new patients and clients.
                </p>
                <div className="tbl-wrap" style={{ marginTop: "18px" }}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>Best for</td>
                        <td>Dentists, clinics and law firms</td>
                      </tr>
                      <tr>
                        <td>Services</td>
                        <td>Local SEO, Content SEO</td>
                      </tr>
                      <tr>
                        <td>Timeline</td>
                        <td>90-day sprint, then monthly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. What We Measure Section */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">What we measure</span>
            <h2 className="h2">SEO results we report every month</h2>
          </div>
          <div className="kpis" data-stagger>
            <div className="kpi ac">
              <b>Calls</b>
              <span>Tracked from search and maps</span>
            </div>
            <div className="kpi">
              <b>Leads</b>
              <span>Forms and bookings from organic</span>
            </div>
            <div className="kpi">
              <b>Revenue</b>
              <span>Sales attributed to organic search</span>
            </div>
            <div className="kpi">
              <b>Rankings</b>
              <span>Map grid and organic positions</span>
            </div>
          </div>
          <div className="note" style={{ marginTop: "22px" }}>
            <InfoIcon />
            <span>
              Detailed client case studies with verified numbers are added as clients approve them.
              Want results from your industry?{" "}
              <Link className="tlink" href="/contact-us/">
                Ask us on a call
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* How We Overtake Showcase */}
      <ResultsOvertake
        id="overtake"
        badge="Search Overtake"
        title="How we take over positions from entrenched competitors"
        sub="No vanity metrics. Just organic clicks, real search impressions, and verified revenue growth across every campaign."
      />

      {/* 5. Six Commitments Trust Section */}
      <TrustSection />

      {/* 6. CTA Section */}
      <CTASection />
    </>
  );
}
