import React from "react";

export default function HowWeWorkBento() {
  return (
    <section className="hw cols3" aria-labelledby="hw-h">
      <div className="wrap">
        <div className="top">
          <div>
            <span className="eyb">
              [ RE&reg; Features <span className="br">/ How we work</span> ]
            </span>
            <p>
              A closer look at the thinking, process and tools that shape every
              SEO program we run.
            </p>
          </div>
          <div>
            <h2 id="hw-h" data-r>
              How We Work
            </h2>
          </div>
        </div>

        <div className="grid">
          {/* Card 1: Turning search into revenue */}
          <div className="c" data-r>
            <div className="hd">
              <b>rankempire&reg;</b>
              <div className="av">
                <img src="/img/t1.webp" alt="" loading="lazy" />
                <img src="/img/t2.webp" alt="" loading="lazy" />
                <img src="/img/t3.webp" alt="" loading="lazy" />
                <img src="/img/t4.webp" alt="" loading="lazy" />
              </div>
            </div>
            <div style={{ marginTop: "auto" }}>
              <h3>Turning search into revenue</h3>
              <p style={{ marginTop: "14px" }}>
                We simplify technical problems, connect scattered marketing data
                and turn ambitious goals into rankings you can measure.
              </p>
              <ul className="chk">
                <li>Strategy that guides every decision</li>
                <li>Pages built for real searches</li>
                <li>Reporting in plain English</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Phone with 3 floating cards */}
          <div className="c ph" data-io>
            <img
              src="/img/v3-phone.webp"
              alt="Phone showing a rising organic traffic chart"
              loading="lazy"
            />
            <div className="fc" style={{ left: "7%", top: "12%" }}>
              <span className="g">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span>
                <b>42.1K</b>
                <span>Organic clicks</span>
              </span>
            </div>

            <div
              className="fc dk"
              style={{
                right: "6%",
                top: "40%",
                animationDelay: "-2s",
              }}
            >
              <span className="g">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <span>
                <b>Response time</b>
                <span>Under 1 business day</span>
              </span>
            </div>

            <div
              className="fc k"
              style={{
                left: "6%",
                bottom: "14%",
                animationDelay: "-4s",
              }}
            >
              <span className="g">
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
              </span>
              <span>
                <b>17.6%</b>
                <span>Average CTR</span>
              </span>
            </div>
          </div>

          {/* Card 3: 45+ Playbooks coral */}
          <div className="c red" data-r>
            <div className="hd">
              <b>[ Expertise ]</b>
              <small>Industry playbooks</small>
            </div>
            <div className="big">
              <span data-count="45">45</span>+
            </div>
            <div className="lb">
              Industry
              <br />
              SEO
              <br />
              Playbooks
            </div>
          </div>

          {/* Card 4: Simplicity */}
          <div className="c" data-r>
            <div className="hd">
              <h3>Simplicity</h3>
              <small>Less noise</small>
            </div>
            <div className="obj">
              <img src="/img/v3-ring.webp" alt="" loading="lazy" />
            </div>
            <h3>Less noise. More rankings.</h3>
            <p style={{ marginTop: "12px" }}>
              We cut busywork and vanity metrics and focus every month on the
              pages and links that move revenue.
            </p>
          </div>

          {/* Card 5: Client growth dark card */}
          <div className="c dark" data-io>
            <img
              src="/img/v3-shake.webp"
              alt="Handshake between a business owner and an SEO strategist"
              loading="lazy"
            />
            <div className="in2">
              <h3>Client growth</h3>
              <div className="mm">&uarr; Verified in Google Search Console</div>
              <div className="bg2">
                <span data-count="240">240</span>K
              </div>
              <p>Impressions earned for one education client in 6 months</p>
            </div>
          </div>

          {/* Card 6: Faster execution */}
          <div className="c wh" data-r>
            <div className="hd">
              <b>rankempire&reg;</b>
            </div>
            <div className="fc">
              <span className="g" style={{ background: "var(--ink)" }}>
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
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <span>
                <b>Audit time</b>
                <span>2 business days</span>
              </span>
            </div>
            <div className="obj">
              <img src="/img/v3-watch.webp" alt="" loading="lazy" />
            </div>
            <h3>Faster execution</h3>
            <p style={{ marginTop: "12px" }}>
              Less waiting. Less complexity. Progress from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
