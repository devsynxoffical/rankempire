import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ToolRunner from "@/components/tools/ToolRunner";
import { tools } from "@/data";

export async function generateStaticParams() {
  return tools.map((t) => ({
    tool: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;
  const t = tools.find((x) => x.slug === tool);
  if (!t) return {};

  return {
    title: `${t.name} (Free Online Checker) | RankEmpire`,
    description: t.desc,
    alternates: {
      canonical: `/seo-tools/${t.slug}/`,
    },
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const t = tools.find((x) => x.slug === tool);

  if (!t) {
    notFound();
  }

  const otherTools = tools.filter((x) => x.slug !== t.slug).slice(0, 6);

  const faqs: [string, string][] = [
    [
      "Why paste the source code instead of a URL?",
      "Browsers block websites from reading other websites directly for cross-origin security reasons. Pasting the source lets the check run instantly and privately in your browser without proxying your data.",
    ],
    [
      "Is my data stored or logged?",
      "No. Everything runs purely client-side in your browser and nothing is transmitted to our servers.",
    ],
    [
      "Does a high score guarantee Google rankings?",
      "No. On-page basics are only one part of SEO. Content quality, backlink authority, technical crawl health and competition all matter.",
    ],
  ];

  return (
    <main id="main">
      {/* Header */}
      <section className="ph" style={{ paddingBottom: 30 }}>
        <div className="bgd"></div>
        <div className="wrap" style={{ maxWidth: 1060 }}>
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/seo-tools/">SEO Tools</Link>
            <span className="sep">/</span>
            <span aria-current="page">{t.name}</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>Free SEO tool
          </span>
          <h1 data-r>
            Free <span className="acc">{t.name}</span>
          </h1>
          <p className="lead" data-r>
            {t.desc}
          </p>
        </div>
      </section>

      {/* Tool Runner Container */}
      <section style={{ paddingBottom: "clamp(60px,7vw,100px)" }}>
        <div className="wrap" style={{ maxWidth: 1060 }}>
          <ToolRunner toolSlug={t.slug} toolType={t.type} />
          <div className="note" style={{ marginTop: 16 }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>
              Free and private: this tool runs entirely in your browser. Want
              experts to review everything?{" "}
              <Link className="tlink" href="/seo-audit/">
                Get a professional SEO audit
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">How to use it</span>
            <h2 className="h2">How to use the {t.name}</h2>
            <p>Three steps, under a minute.</p>
          </div>
          <div className="g3" data-stagger>
            <div className="card">
              <span className="num">Step 01</span>
              <h3>Open the page you want to check</h3>
              <p>
                Use the live page in your browser, not an editor preview, so the
                check evaluates what search engines see.
              </p>
            </div>
            <div className="card">
              <span className="num">Step 02</span>
              <h3>Copy the page source or data</h3>
              <p>
                Press Ctrl+U on Windows or Cmd+Option+U on Mac, select all and
                copy the HTML into your clipboard.
              </p>
            </div>
            <div className="card">
              <span className="num">Step 03</span>
              <h3>Paste and analyze</h3>
              <p>
                The tool instantly evaluates key ranking factors and explains
                recommended optimizations for each element.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More free tools */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">More free tools</span>
            <h2 className="h2">More free SEO tools</h2>
          </div>
          <div className="g3" data-stagger>
            {otherTools.map((tool, i) => (
              <Link
                key={i}
                className="card"
                href={`/seo-tools/${tool.slug}/`}
              >
                <span className="ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </span>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
                <span className="tlink more">Open tool</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              {t.name} FAQ
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: 24 }}>
              How the tool works and what to do with the results.
            </p>
            <div className="card" style={{ padding: 20 }}>
              <b style={{ fontFamily: "var(--fd)", fontSize: 18 }}>
                Still have a question?
              </b>
              <p style={{ margin: "6px 0 14px" }}>
                Talk to a strategist. We reply within one business day.
              </p>
              <Link className="btn dk sm" href="/contact-us/">
                Contact us
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

          <div className="faqs" data-r>
            {faqs.map(([q, a], i) => (
              <div className={`fq${i === 0 ? " on" : ""}`} key={i}>
                <button type="button" aria-expanded={i === 0}>
                  <span>{q}</span>
                  <i className="pm" aria-hidden="true"></i>
                </button>
                <div className="a">
                  <div>
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="sec tight">
        <div className="wrap">
          <div className="ctap" data-r>
            <span
              className="eyb pill"
              style={{
                background: "#151517",
                borderColor: "#26262a",
                color: "#d4d4d8",
              }}
            >
              <i></i>Free SEO audit
            </span>
            <h2 className="h2">Want experts to fix it for you?</h2>
            <p>Our team turns tool results into rankings. Get a free SEO audit.</p>
            <form
              className="audit"
              action="/contact-us/"
              role="search"
              aria-label="Free SEO audit"
            >
              <svg
                className="g"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              <label className="sr-only" htmlFor="au-tool-foot">
                Your website
              </label>
              <input
                id="au-tool-foot"
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
            <div className="ticks">
              <span>Delivered in 2 business days</span>
              <span>No contract required</span>
              <span>Real people, not a PDF generator</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
