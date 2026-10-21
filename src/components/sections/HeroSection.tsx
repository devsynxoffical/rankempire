"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowIcon, GlobeIcon, PinIcon, ChartIcon } from "@/components/common/Icons";

export default function HeroSection() {
  const router = useRouter();
  const [site, setSite] = useState("");

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = site.trim();
    if (!query) return;
    router.push(`/contact-us/?site=${encodeURIComponent(query)}`);
  };

  return (
    <section className="hero">
      <div className="bgd"></div>
      <div className="wrap hgrid">
        <div>
          <span className="eyb pill" data-r>
            <i></i>SEO company for local, e-commerce and SaaS brands
          </span>

          <h1 className="h1" data-split>
            SEO company that turns search into <span className="acc">revenue.</span>
          </h1>

          <p className="lead" data-r style={{ "--d": ".2s" } as React.CSSProperties}>
            RankEmpire combines technical SEO, local SEO, content and link building
            into one program that grows the numbers that matter: calls, leads and
            sales from Google.
          </p>

          <div data-r style={{ "--d": ".3s" } as React.CSSProperties}>
            <form
              className="audit"
              onSubmit={handleAudit}
              role="search"
              aria-label="Free SEO audit"
            >
              <GlobeIcon className="g" />
              <label className="sr-only" htmlFor="hero-site-input">
                Your website
              </label>
              <input
                id="hero-site-input"
                name="site"
                type="text"
                inputMode="url"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                placeholder="Enter your website, e.g. yourbusiness.com"
                autoComplete="url"
              />
              <button className="btn ac" type="submit">
                Get my free audit
                <ArrowIcon />
              </button>
            </form>

            <div className="ticks">
              <span>Free audit in 2 business days</span>
              <span>No long-term contracts</span>
              <span>You own everything</span>
            </div>
          </div>
        </div>

        {/* Visual Dashboard Mockup */}
        <div className="vis">
          <div
            className="dash"
            data-r="s"
            aria-label="Example SEO performance dashboard"
            role="img"
          >
            <div className="dwin">
              <div className="dbar">
                <b>RankEmpire</b>
                <span>/ Client dashboard</span>
                <span className="seg">
                  <i>Week</i>
                  <i className="on">Month</i>
                  <i>Year</i>
                </span>
              </div>
              <div className="dbody">
                <div className="dhead">
                  <div>
                    <h4>Organic performance</h4>
                    <small>All pages, United States</small>
                  </div>
                  <small>Last 6 months</small>
                </div>

                <div className="kgrid">
                  <div className="kt hi">
                    <small>Organic clicks</small>
                    <b data-count="48210">48,210</b>
                    <em>+212% vs. start</em>
                  </div>
                  <div className="kt">
                    <small>Top 3 keywords</small>
                    <b data-count="186">186</b>
                    <em>+141</em>
                  </div>
                  <div className="kt">
                    <small>Map pack visibility</small>
                    <b>
                      <span data-count="78">78</span>%
                    </b>
                    <em>+46 pts</em>
                  </div>
                  <div className="kt">
                    <small>Organic leads</small>
                    <b data-count="642">642</b>
                    <em>+3.1x</em>
                  </div>
                </div>

                <div className="chart">
                  <div className="ct">
                    <i>Organic clicks</i>
                    <i className="b">Before RankEmpire</i>
                  </div>
                  <svg viewBox="0 0 480 104" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#ff4c39" stopOpacity=".22" />
                        <stop offset="1" stopColor="#ff4c39" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      className="ar"
                      d="M0 96 L40 92 L80 88 L120 90 L160 78 L200 72 L240 70 L280 58 L320 52 L360 44 L400 36 L440 30 L480 18 L480 104 L0 104Z"
                    />
                    <path
                      className="ln2"
                      d="M0 98 L80 95 L160 93 L240 90 L320 88 L400 86 L480 84"
                    />
                    <path
                      className="ln"
                      d="M0 96 L40 92 L80 88 L120 90 L160 78 L200 72 L240 70 L280 58 L320 52 L360 44 L400 36 L440 30 L480 18"
                    />
                  </svg>
                </div>

                <div className="ktab">
                  <div className="r">
                    <span>Keyword</span>
                    <span>Position</span>
                    <span>Change</span>
                  </div>
                  <div className="r">
                    <span>seo company near me</span>
                    <span>#3</span>
                    <span className="up">+9</span>
                  </div>
                  <div className="r">
                    <span>local seo services</span>
                    <span>#2</span>
                    <span className="up">+5</span>
                  </div>
                  <div className="r">
                    <span>technical seo audit</span>
                    <span>#4</span>
                    <span className="up">+12</span>
                  </div>
                  <div className="r">
                    <span>ecommerce seo agency</span>
                    <span>#6</span>
                    <span className="up">+14</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfloat b">
              <span className="g">
                <PinIcon />
              </span>
              <span>
                <b>Map pack #1</b>&ldquo;plumber near me&rdquo;
              </span>
            </div>

            <div className="dfloat a">
              <span className="g">
                <ChartIcon />
              </span>
              <span>
                <b>+38 new leads</b>from organic this week
              </span>
            </div>

            <span className="dnote">Illustrative example dashboard</span>
          </div>
        </div>
      </div>
    </section>
  );
}
