import React from "react";
import Link from "next/link";
import { logos } from "@/data";

export default function ResultsOvertake({
  badge = "Verified SEO results",
  title,
  sub,
  id = "results",
}: {
  badge?: string;
  title?: React.ReactNode;
  sub?: React.ReactNode;
  id?: string;
} = {}) {
  const dotsCount = 35;
  const barHeights = [30, 38, 34, 46, 40, 70, 86, 100, 52, 44, 38, 48];

  return (
    <section className="ot" id={id} aria-labelledby="ot-h">
      <div className="box">
        <span className="pl">{badge}</span>

        <h2 id="ot-h" data-r>
          {title || (
            <>
              What if every{" "}
              <span className="ip" aria-hidden="true">
                <b>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </b>
                <i>&rsaquo;&rsaquo;&rsaquo;</i>
              </span>{" "}
              search led straight to you?
            </>
          )}
        </h2>

        <p className="sub" data-r>
          {sub || (
            <>
              <mark>Technical SEO,</mark> local SEO, content and{" "}
              <mark className="k">link building</mark> under one roof, built for
              rankings that compound, not vanity metrics.
            </>
          )}
        </p>

        <div className="cta2" data-r>
          <Link className="rbtn" href="/contact-us/">
            Book a free SEO audit
            <b>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </b>
          </Link>
          <Link className="rbtn l" href="/case-studies/">
            See our results
          </Link>
        </div>

        <div className="duo">
          <figure className="rs" data-io>
            <div className="rsb">
              <i></i>
              <i></i>
              <i></i>
              <span>search.google.com / search-console / performance</span>
              <em>Live client data</em>
            </div>
            <img
              src="/img/r-gsc1.webp"
              alt="Google Search Console performance report showing 42.1K clicks, 240K impressions, 17.6% CTR and 7.5 average position over 6 months"
              width={1600}
              height={868}
            />
            <figcaption>
              <b>Real client result from Google Search Console</b>
              <span>Education website</span>
              <span>Apr to Oct 2026</span>
              <span>42.1K clicks</span>
              <span>240K impressions</span>
            </figcaption>
          </figure>

          <div className="stc" data-r>
            <div className="dg" data-dots aria-hidden="true">
              {Array.from({ length: dotsCount }).map((_, i) => (
                <i key={i} className={i < 26 ? "on" : ""}></i>
              ))}
            </div>

            <div className="bigk">
              <b>
                <span data-count="42.1">42.1</span>K
              </b>
              <span>
                Organic clicks
                <br />
                in 6 months
              </span>
            </div>

            <p>Built for clarity, control and compounding growth.</p>

            <div className="ctr">
              <span>Average CTR, same period</span>
              <b>17.6%</b>
            </div>

            <div className="mb" aria-hidden="true">
              {barHeights.map((h, i) => (
                <i
                  key={i}
                  style={{ "--h": `${h}%` } as React.CSSProperties}
                  className={5 <= i && i <= 7 ? "a" : ""}
                ></i>
              ))}
            </div>
          </div>
        </div>

        <div className="tru">
          <div className="av">
            <img src="/img/t1.webp" alt="" loading="lazy" />
            <img src="/img/t2.webp" alt="" loading="lazy" />
            <img src="/img/t3.webp" alt="" loading="lazy" />
          </div>
          <small>
            Senior specialists working inside the tools you already use
          </small>
          {logos.slice(0, 5).map((l, i) => (
            <span key={i} className="lg">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={l.path} />
              </svg>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
