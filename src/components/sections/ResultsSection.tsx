import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, ChartIcon } from "@/components/common/Icons";

export default function ResultsSection({
  title = "Real results from Google Search Console.",
  alt = false,
}: {
  title?: string;
  alt?: boolean;
}) {
  return (
    <section className={`sec results ${alt ? "alt" : ""}`} id="results">
      <div className="wrap rgrid">
        <div data-r>
          <span className="eyb pill">
            <i></i>Verified client results
          </span>
          <h2 className="h2" style={{ margin: "16px 0 14px" }}>
            {title}
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
            <Image
              src="/img/r-gsc1.webp"
              alt="Google Search Console performance report showing 42.1K clicks, 240K impressions, 17.6% average CTR and 7.5 average position over 6 months"
              loading="lazy"
              width={1600}
              height={868}
              style={{ width: "100%", height: "auto" }}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </span>
            <span>
              <b>Avg. position 7.5</b>first page of Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
