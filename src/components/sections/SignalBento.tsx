import React from "react";
import Link from "next/link";
import { logos } from "@/data";

export default function SignalBento() {
  const chartPath = (
    <svg viewBox="0 0 200 70" preserveAspectRatio="none">
      <path
        d="M0 60 L25 56 L50 58 L75 46 L100 42 L125 30 L150 26 L175 14 L200 8"
        fill="none"
        stroke="#ff3d2e"
        strokeWidth="2.5"
      />
      <path
        d="M0 60 L25 56 L50 58 L75 46 L100 42 L125 30 L150 26 L175 14 L200 8 L200 70 L0 70Z"
        fill="rgba(255,61,46,.1)"
      />
    </svg>
  );

  return (
    <section className="sb" aria-labelledby="sb-h">
      <div className="wrap">
        <div className="hd2">
          <div>
            <span className="eyb">
              [ RE&reg; Benefits <span className="br">/ Why RankEmpire</span> ]
            </span>
            <h2
              id="sb-h"
              className="h2"
              style={{ marginTop: "18px", maxWidth: "14ch" }}
              data-r
            >
              Everything you need to rank.
            </h2>
          </div>

          <Link className="btn dk" href="/seo-company/">
            Why choose us
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </Link>
        </div>

        <div className="grid" data-stagger>
          {/* Tile 1: Tall photo SEO Packages */}
          <Link className="t tall photo top" href="/seo-packages/">
            <img
              className="bg"
              src="/img/v3-desk.webp"
              alt="Laptop showing an SEO analytics dashboard"
              loading="lazy"
            />
            <div className="pz">
              <h3>
                <sup></sup>SEO Packages
              </h3>
              <p>
                Monthly plans from $799 with every deliverable listed up front.
              </p>
            </div>
          </Link>

          {/* Tile 2: Goals & Terms */}
          <div className="t c">
            <span className="pillt">Your goals, our playbook</span>
            <div className="ics">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              +
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(22px,2vw,30px)" }}>
              Great rankings built
              <br />
              on your terms
            </h3>
          </div>

          {/* Tile 3: Tall photo Transparent Pricing */}
          <Link className="t tall photo" href="/seo-packages/">
            <img
              className="bg"
              src="/img/team.webp"
              alt="RankEmpire strategists planning a campaign"
              loading="lazy"
            />
            <div className="pz">
              <h3>
                <sup></sup>Transparent Pricing
              </h3>
              <p>
                Clear, predictable monthly rates. Month to month after onboarding.
              </p>
            </div>
          </Link>

          {/* Tile 4: Live SEO Dashboard with graph */}
          <div className="t org">
            <h3>Live SEO Dashboard</h3>
            <p>Track rankings, calls and leads as they happen.</p>
            <div className="mock" aria-hidden="true">
              <div className="mt">
                <b>RankEmpire</b>
                <span>Today</span>
              </div>
              <div className="mr">
                <div>
                  Organic clicks<b>1,284</b>
                  <em>+18%</em>
                </div>
                <div>
                  Top 3 keywords<b>46</b>
                  <em>+7</em>
                </div>
              </div>
              {chartPath}
            </div>
          </div>

          {/* Tile 5: Audit to action box */}
          <div className="t">
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                padding: "16px",
                maxWidth: "300px",
                boxShadow: "0 20px 40px rgba(255,61,46,.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "var(--ink)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <b style={{ fontSize: "14px" }}>Kickoff</b>
              </div>
              <p
                style={{
                  color: "var(--acc)",
                  fontWeight: 600,
                  marginTop: "14px",
                  fontSize: "20px",
                }}
              >
                Audit to action
              </p>
              <p style={{ margin: "2px 0 0", fontSize: "13.5px" }}>
                From signed to first fixes in 2 business days
              </p>
            </div>
            <h3
              style={{
                marginTop: "auto",
                fontSize: "clamp(24px,2.2vw,32px)",
              }}
            >
              Real-time progress tracking
            </h3>
          </div>

          {/* Tile 6: Free SEO tools & US Metros Pair */}
          <div className="pair">
            <div className="t stat">
              <h4>Free SEO tools</h4>
              <span className="ii">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <b>
                <span data-count="11">11</span>
              </b>
              <span>
                Free tools anyone
                <br />
                can use today
              </span>
            </div>
            <div className="t stat">
              <h4>US metros</h4>
              <span className="ii">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <b>
                <span data-count="17">17</span>
              </b>
              <span>
                Cities with local
                <br />
                SEO strategies
              </span>
            </div>
          </div>

          {/* Tile 7: Tools & Integration */}
          <div className="t c">
            <h3 style={{ fontSize: "clamp(24px,2.2vw,32px)" }}>
              Tools &amp; Integration
            </h3>
            <p>We work inside the platforms you already use.</p>
            <div className="lgs">
              {logos.slice(0, 6).map((l, i) => (
                <span key={i} title={l.name}>
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label={l.name}
                  >
                    <path d={l.path} />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {/* Tile 8: 7.5 Average Position Lens */}
          <div className="t photo">
            <img className="bg" src="/img/v3-lens.webp" alt="" loading="lazy" />
            <div className="pz">
              <h3 style={{ fontSize: "clamp(22px,2vw,30px)" }}>
                Average position
              </h3>
              <div className="big">7.5</div>
              <p style={{ marginTop: 0 }}>
                First page of Google, verified client data
              </p>
            </div>
          </div>

          {/* Tile 9: Flexible & Scalable */}
          <div className="t">
            <div
              className="ics"
              style={{ color: "var(--ink)", marginTop: 0 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <h3 style={{ color: "var(--acc)" }}>Flexible &amp; Scalable</h3>
            <p>
              Upgrade or downgrade at the start of any month as your business
              grows.
            </p>
          </div>

          {/* Tile 10: Dedicated Strategist */}
          <div
            className="t photo dkp"
            style={{ background: "#cfc7bd" }}
          >
            <img
              className="bg"
              src="/img/v3-person.webp"
              alt=""
              loading="lazy"
              style={{
                objectFit: "contain",
                objectPosition: "100% 100%",
                left: "30%",
                width: "70%",
              }}
            />
            <div className="pz" style={{ marginTop: "auto" }}>
              <span className="stars" aria-hidden="true">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <h3>Dedicated Strategist</h3>
              <span className="badge2">Direct access, no account managers</span>
              <p>One named senior strategist who knows your market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
