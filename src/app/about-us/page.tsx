import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Founder from "@/components/sections/Founder";

export const metadata: Metadata = {
  title: "About Us | RankEmpire",
  description:
    "RankEmpire was built on a simple idea: SEO should be transparent, measurable and designed to last. Meet our strategists, technical specialists and writers.",
  alternates: {
    canonical: "/about-us/",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* 1. V7 YH Hero with 3D Desk video */}
      <section className="yh">
        <canvas className="grain" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">About Us</span>
          </nav>
          <div className="yh-g">
            <div className="yh-l">
              <span className="eyb pill lt" data-r>
                <i />
                About RankEmpire
              </span>
              <h1 data-r>
                We build search <span className="acc">empires</span> for ambitious businesses
              </h1>
              <p className="lead" data-r>
                RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS
                companies that want rankings to become a lasting asset.
              </p>
              <div className="yh-cta" data-r>
                <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
                  <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                  <label className="sr-only" htmlFor="au-about">
                    Your website
                  </label>
                  <input
                    id="au-about"
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
                <div className="ticks lt">
                  <span>Free audit in 2 business days</span>
                  <span>Month to month</span>
                  <span>Plain-English reporting</span>
                </div>
              </div>
            </div>

            <div className="yh-v" data-r="s">
              <div className="yh-m">
                <video
                  className="mv3d"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/img/m-desk.jpg"
                  aria-label="About RankEmpire"
                >
                  <source src="/img/m-desk.mp4" type="video/mp4" />
                </video>
                <div className="yh-ch">
                  <span style={{ ['--i' as string]: 0 }}>Audit first</span>
                  <span style={{ ['--i' as string]: 1 }}>Plain English</span>
                  <span style={{ ['--i' as string]: 2 }}>You own it</span>
                  <span style={{ ['--i' as string]: 3 }}>Built to last</span>
                </div>
                <div className="yh-ring" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="yfacts" data-r>
            <div style={{ ['--c' as string]: '#ec4e3b' }}>
              <b data-count="45" data-raw="45">
                45
              </b>
              <span>Industry playbooks</span>
            </div>
            <div style={{ ['--c' as string]: '#2b55e8' }}>
              <b data-count="17" data-raw="17">
                17
              </b>
              <span>US metros</span>
            </div>
            <div style={{ ['--c' as string]: '#e37a38' }}>
              <b data-count="11" data-raw="11">
                11
              </b>
              <span>Free SEO tools</span>
            </div>
            <div style={{ ['--c' as string]: '#4a9f5f' }}>
              <b data-count="0" data-raw="0">
                0
              </b>
              <span>Lock-in contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statement Section */}
      <section className="yst">
        <div className="wrap">
          <span className="eyb" data-r>
            Our story
          </span>
          <p className="st" data-words>
            RankEmpire was built on a simple idea: SEO should be transparent, measurable and
            designed to last. Too many businesses pay for activity they cannot see and reports
            they cannot read. We are strategists, technical specialists and writers who do the work
            ourselves, report in plain English and leave you owning everything we build.
          </p>
        </div>
      </section>

      {/* 3. Four Rules We Never Break */}
      <section className="x xfeat" id="beliefs">
        <div className="wrap">
          <div className="xh" data-r>
            <span className="xe">
              <i />
              What we believe
            </span>
            <h2 className="h2">Four rules we never break</h2>
          </div>
          <div className="xf-g n4">
            <article className="xf" style={{ ['--c' as string]: '#ec4e3b' }} data-r>
              <span className="n">01</span>
              <h3>Audit before action</h3>
              <p>Every engagement starts with a full audit, so the first month goes to the work that matters most.</p>
            </article>
            <article className="xf" style={{ ['--c' as string]: '#2b55e8' }} data-r>
              <span className="n">02</span>
              <h3>Report what pays</h3>
              <p>Calls, leads and revenue, not vanity metrics or 40-page PDFs.</p>
            </article>
            <article className="xf" style={{ ['--c' as string]: '#e37a38' }} data-r>
              <span className="n">03</span>
              <h3>Built to last</h3>
              <p>Only tactics that survive algorithm updates. No link networks, no shortcuts.</p>
            </article>
            <article className="xf" style={{ ['--c' as string]: '#4a9f5f' }} data-r>
              <span className="n">04</span>
              <h3>You own it</h3>
              <p>Content, pages, links and data belong to you, during and after our work together.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Founder Section */}
      <Founder />

      {/* 5. Verified Results Stats */}
      <section className="sec results alt" id="results">
        <div className="wrap rgrid">
          <div data-r>
            <span className="eyb pill">
              <i />
              Verified client results
            </span>
            <h2 className="h2" style={{ margin: '16px 0 14px' }}>
              Results we are proud of.
            </h2>
            <p className="lead" style={{ fontSize: '17px' }}>
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
            <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link className="btn dk" href="/case-studies/">
                See case studies
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
              <Link className="btn ln" href="/contact-us/">
                Get results like this
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
        </div>
      </section>

      {/* 6. YCTA Section */}
      <section className="ycta">
        <div className="wrap">
          <div className="ycta-b" data-r>
            <div className="g1" />
            <div className="g2" />
            <span className="eyb pill lt">
              <i />
              Free SEO audit
            </span>
            <h2>Ready to see what is holding your site back?</h2>
            <p>
              We run a full audit across technical SEO, on-page factors, backlinks and competitors,
              then send a prioritized plan within 2 business days.
            </p>
            <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
              <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              <label className="sr-only" htmlFor="au-about-cta">
                Your website
              </label>
              <input
                id="au-about-cta"
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
          </div>
        </div>
      </section>
    </>
  );
}
