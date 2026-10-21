import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main">
      <section className="ph" style={{ minHeight: "60vh", textAlign: "center" }}>
        <div className="bgd"></div>
        <div className="wrap">
          <span className="eyb pill">
            <i></i>Error 404
          </span>
          <h1 style={{ fontSize: "clamp(60px,10vw,140px)" }}>404</h1>
          <p className="lead" style={{ margin: "0 auto 26px" }}>
            This page lost its ranking. It may have moved or never existed.
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link className="btn dk" href="/">
              Back to home
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
            <Link className="btn ln" href="/seo-tools/">
              Try our free tools
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
      </section>
    </main>
  );
}
