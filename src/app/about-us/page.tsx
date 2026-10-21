"use client";

import React, { useState } from "react";
import Link from "next/link";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { ArrowIcon, GlobeIcon, ChartIcon, TargetIcon } from "@/components/common/Icons";
import { faqHome } from "@/data";

export default function AboutUsPage() {
  const [backdrop, setBackdrop] = useState<"l" | "o" | "d">("l");

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--lx", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
    el.style.setProperty("--ly", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
  };

  const cycleBackdrop = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    const order: ("l" | "o" | "d")[] = ["l", "o", "d"];
    const nextIdx = (order.indexOf(backdrop) + 1) % 3;
    setBackdrop(order[nextIdx]);
  };

  return (
    <>
      {/* 1. Mara Voss Interactive Hero */}
      <section
        className="mv"
        data-bd={backdrop}
        aria-labelledby="mv-h"
        onPointerMove={handlePointerMove}
        onClick={cycleBackdrop}
      >
        <div className="w2">
          <div>
            <nav className="crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <h1 id="mv-h" style={{ marginTop: "22px" }}>
              SEO strategists &amp; builders
            </h1>
            <p className="ld">
              RankEmpire is an SEO company for local businesses, e-commerce brands
              and SaaS companies that want rankings to become a lasting asset.
            </p>
            <div className="bts">
              <Link className="vb" href="/case-studies/">
                See our results
                <b>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </b>
              </Link>
              <Link className="vb l" href="#team">
                Meet the team
                <b>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </b>
              </Link>
            </div>
          </div>

          <div className="meta">
            <div>
              <i></i>Taking new clients &middot; Nov 2026
            </div>
            <div>Remote &middot; US business hours</div>
            <div>45 industry playbooks</div>
          </div>
        </div>

        <div className="giant" aria-hidden="true">
          RankEmpire
        </div>

        <div className="person">
          <img src="/img/v3-person.webp" alt="Senior SEO Strategist" fetchPriority="high" />
        </div>

        <div className="hint" aria-hidden="true">
          Move the light &middot; pick a backdrop
        </div>

        <div className="bd" role="group" aria-label="Backdrop color">
          Backdrop
          <button
            type="button"
            data-bd="l"
            aria-pressed={backdrop === "l"}
            style={{ background: "#e9e3da" }}
            aria-label="Sand"
            onClick={() => setBackdrop("l")}
          />
          <button
            type="button"
            data-bd="o"
            aria-pressed={backdrop === "o"}
            style={{ background: "#ff5a3c" }}
            aria-label="Coral"
            onClick={() => setBackdrop("o")}
          />
          <button
            type="button"
            data-bd="d"
            aria-pressed={backdrop === "d"}
            style={{ background: "#141416" }}
            aria-label="Dark"
            onClick={() => setBackdrop("d")}
          />
        </div>
      </section>

      {/* 2. Stand for KPIs */}
      <section className="sec tight">
        <div className="wrap">
          <div className="kpis" data-stagger>
            <div className="kpi ac">
              <b>45+</b>
              <span>Industries with dedicated strategies</span>
            </div>
            <div className="kpi">
              <b>17</b>
              <span>US metro markets served</span>
            </div>
            <div className="kpi">
              <b>11</b>
              <span>Free SEO tools for anyone</span>
            </div>
            <div className="kpi">
              <b>0</b>
              <span>Long-term lock-in contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="sec">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">Our story</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>
              Not just another SEO agency.
            </h2>
          </div>
          <div className="prose" data-r>
            <p>
              RankEmpire was built on a simple idea: SEO should be transparent,
              measurable and designed to last. Too many businesses pay for activity
              they cannot see and reports they cannot read.
            </p>
            <p>
              We are a team of strategists, technical specialists and writers who do
              the work ourselves. Every engagement starts with an audit, follows a
              roadmap ranked by revenue impact and is reported in plain English.
            </p>
            <h3>What we believe</h3>
            <ul>
              <li>Audit before action, always.</li>
              <li>Report on calls, leads and revenue, not vanity metrics.</li>
              <li>Use only tactics that survive algorithm updates.</li>
              <li>Clients own everything we build.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Results Section */}
      <section className="sec results alt" id="results">
        <div className="wrap rgrid">
          <div data-r>
            <span className="eyb pill">
              <i></i>Verified client results
            </span>
            <h2 className="h2" style={{ margin: "16px 0 14px" }}>
              Results we are proud of.
            </h2>
            <p className="lead" style={{ fontSize: "17px" }}>
              Real performance data from a client&apos;s Google Search Console, last 6
              months. No mockups, no estimates, just what Google reports.
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
              <Link className="btn dk" href="/case-studies/">
                See case studies
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

      {/* 5. Six Commitments Trust Section */}
      <TrustSection />

      {/* 6. Team */}
      <section className="sec" id="team">
        <div className="wrap">
          <div className="shr">
            <div className="sh" data-r>
              <span className="eyb">Team</span>
              <h2 className="h2">The people behind the work</h2>
            </div>
            <div data-r>
              <Link className="btn ln" href="/our-team/">
                Meet the team
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="team" data-stagger>
            <div className="tm">
              <div className="ph2">
                <img
                  src="/img/t1.webp"
                  alt="Daniel Brooks, Founder and Head of Strategy"
                  loading="lazy"
                />
              </div>
              <h3>Daniel Brooks</h3>
              <p className="rl">Founder and Head of Strategy</p>
              <p>Leads strategy across every account and still runs audits himself.</p>
            </div>

            <div className="tm">
              <div className="ph2">
                <img
                  src="/img/t2.webp"
                  alt="Sofia Ramirez, Director of Local SEO"
                  loading="lazy"
                />
              </div>
              <h3>Sofia Ramirez</h3>
              <p className="rl">Director of Local SEO</p>
              <p>Runs the local search program for service businesses and multi-location brands.</p>
            </div>

            <div className="tm">
              <div className="ph2">
                <img
                  src="/img/t3.webp"
                  alt="Marcus Lee, Technical SEO Lead"
                  loading="lazy"
                />
              </div>
              <h3>Marcus Lee</h3>
              <p className="rl">Technical SEO Lead</p>
              <p>Owns crawling, rendering, site speed and migrations.</p>
            </div>

            <div className="tm">
              <div className="ph2">
                <img
                  src="/img/t4.webp"
                  alt="Helen Carter, Head of Content"
                  loading="lazy"
                />
              </div>
              <h3>Helen Carter</h3>
              <p className="rl">Head of Content</p>
              <p>Plans topic clusters and edits every piece before it ships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <FAQSection
        items={faqHome.slice(0, 6)}
        title="About working with us"
        sub="Straight answers about SEO and how we work."
      />

      {/* 8. CTA */}
      <CTASection />
    </>
  );
}
