import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Founder from "@/components/sections/Founder";

export const metadata: Metadata = {
  title: "Our Team | RankEmpire",
  description:
    "Meet the RankEmpire team of SEO strategists, technical specialists and content writers who run every client program.",
  alternates: {
    canonical: "/our-team/",
  },
};

export default function OurTeamPage() {
  return (
    <>
      <section className="yh">
        <canvas className="grain" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Our Team</span>
          </nav>
          <div className="yh-g">
            <div className="yh-l">
              <span className="eyb pill lt" data-r>
                <i />
                Our team
              </span>
              <h1 data-r>
                The people behind your <span className="acc">rankings</span>
              </h1>
              <p className="lead" data-r>
                Strategists, technical specialists and writers who do the work themselves. No
                outsourcing chains, no anonymous account managers.
              </p>
              <div className="yh-cta" data-r>
                <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
                  <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                  <label className="sr-only" htmlFor="au-team">
                    Your website
                  </label>
                  <input
                    id="au-team"
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
                  aria-label="Our team"
                >
                  <source src="/img/m-desk.mp4" type="video/mp4" />
                </video>
                <div className="yh-ch">
                  <span style={{ ['--i' as string]: 0 }}>Strategy</span>
                  <span style={{ ['--i' as string]: 1 }}>Technical SEO</span>
                  <span style={{ ['--i' as string]: 2 }}>Content</span>
                  <span style={{ ['--i' as string]: 3 }}>Local SEO</span>
                  <span style={{ ['--i' as string]: 4 }}>AI search</span>
                </div>
                <div className="yh-ring" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="yfacts" data-r>
            <div style={{ ['--c' as string]: '#ec4e3b' }}>
              <b data-count="1" data-raw="1">
                1
              </b>
              <span>Senior strategist per account</span>
            </div>
            <div style={{ ['--c' as string]: '#2b55e8' }}>
              <b data-count="0" data-raw="0">
                0
              </b>
              <span>Hand-offs</span>
            </div>
            <div style={{ ['--c' as string]: '#e37a38' }}>
              <b data-count="45" data-raw="45">
                45
              </b>
              <span>Industry playbooks</span>
            </div>
            <div style={{ ['--c' as string]: '#4a9f5f' }}>
              <b data-count="24" data-raw="24">
                24
              </b>
              <span>Hour reply time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <Founder />

      {/* Team Specialists Cards */}
      <section className="x xtm">
        <div className="wrap">
          <div className="xh" data-r>
            <span className="xe">
              <i />
              Team
            </span>
            <h2 className="h2">Strategists, engineers and writers</h2>
          </div>
          <div className="tmc-g">
            <article className="tmc" data-r style={{ ['--c' as string]: '#ec4e3b' }}>
              <div className="ph2">
                <img src="/img/t1.webp" alt="Daniel Brooks" loading="lazy" />
              </div>
              <div className="in">
                <h3>Daniel Brooks</h3>
                <span className="rl">Head of Strategy</span>
                <p>Leads high-impact campaigns and enterprise search audits.</p>
              </div>
            </article>
            <article className="tmc" data-r style={{ ['--c' as string]: '#2b55e8' }}>
              <div className="ph2">
                <img src="/img/t2.webp" alt="Sofia Ramirez" loading="lazy" />
              </div>
              <div className="in">
                <h3>Sofia Ramirez</h3>
                <span className="rl">Director of Local SEO</span>
                <p>Runs the local search program for service businesses and multi-location brands.</p>
              </div>
            </article>
            <article className="tmc" data-r style={{ ['--c' as string]: '#e37a38' }}>
              <div className="ph2">
                <img src="/img/t3.webp" alt="Marcus Lee" loading="lazy" />
              </div>
              <div className="in">
                <h3>Marcus Lee</h3>
                <span className="rl">Technical SEO Lead</span>
                <p>Owns crawling, rendering, site speed and migrations.</p>
              </div>
            </article>
            <article className="tmc" data-r style={{ ['--c' as string]: '#4a9f5f' }}>
              <div className="ph2">
                <img src="/img/t4.webp" alt="Helen Carter" loading="lazy" />
              </div>
              <div className="in">
                <h3>Helen Carter</h3>
                <span className="rl">Head of Content</span>
                <p>Plans topic clusters and edits every piece before it ships.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Four Rules Section */}
      <section className="x xfeat" id="rules">
        <div className="wrap">
          <div className="xh" data-r>
            <span className="xe">
              <i />
              How we work
            </span>
            <h2 className="h2">Four rules we never break</h2>
          </div>
          <div className="xf-g n4">
            <article className="xf" style={{ ['--c' as string]: '#ec4e3b' }} data-r>
              <span className="n">01</span>
              <h3>Audit before action</h3>
              <p>Every engagement starts with a full audit.</p>
            </article>
            <article className="xf" style={{ ['--c' as string]: '#2b55e8' }} data-r>
              <span className="n">02</span>
              <h3>Report what pays</h3>
              <p>Calls, leads and revenue, not vanity metrics.</p>
            </article>
            <article className="xf" style={{ ['--c' as string]: '#e37a38' }} data-r>
              <span className="n">03</span>
              <h3>Built to last</h3>
              <p>Only tactics that survive algorithm updates.</p>
            </article>
            <article className="xf" style={{ ['--c' as string]: '#4a9f5f' }} data-r>
              <span className="n">04</span>
              <h3>You own it</h3>
              <p>Content, pages, links and data belong to you.</p>
            </article>
          </div>
        </div>
      </section>

      {/* YCTA Section */}
      <section className="ycta">
        <div className="wrap">
          <div className="ycta-b" data-r>
            <div className="g1" />
            <div className="g2" />
            <span className="eyb pill lt">
              <i />
              Free SEO audit
            </span>
            <h2>Join RankEmpire</h2>
            <p>
              We hire people who love solving search problems and explaining them clearly. Send your portfolio.
            </p>
            <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
              <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              <label className="sr-only" htmlFor="au-team-cta">
                Your website
              </label>
              <input
                id="au-team-cta"
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
