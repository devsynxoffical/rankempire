import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import HowWeWorkBento from "@/components/sections/HowWeWorkBento";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";

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
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Our Team</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>Our team
          </span>
          <h1 data-r style={{ maxWidth: "880px" }}>
            Meet the team behind your <span className="acc">rankings</span>
          </h1>
          <p className="lead" data-r>
            Strategists, technical specialists and writers who do the work themselves. No
            outsourcing chains, no anonymous account managers.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
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

      {/* How We Work Bento Grid */}
      <HowWeWorkBento />

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge="Team Results"
        title="Results our strategists deliver every day"
        sub="Search Console performance, organic impressions, and compounding revenue across client campaigns."
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* Join RankEmpire Career CTA */}
      <section className="sec tight">
        <div className="wrap">
          <div
            className="ctap"
            style={{
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
            data-r
          >
            <div>
              <h2 className="h3" style={{ color: "#fff" }}>
                Join RankEmpire
              </h2>
              <p style={{ margin: "8px 0 0" }}>
                We hire people who love solving search problems and explaining them clearly.
              </p>
            </div>
            <a className="btn ac" href="mailto:hello@rankempire.com?subject=Careers">
              Send your portfolio
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
            </a>
          </div>
        </div>
      </section>

      {/* Free SEO Audit CTA */}
      <CTASection />
    </>
  );
}
