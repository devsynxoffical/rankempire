import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import PlaybooksSection from "@/components/sections/PlaybooksSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "SEO Case Studies and Results | RankEmpire",
  description:
    "See how RankEmpire runs SEO programs for local businesses, e-commerce stores, practices and sites recovering from traffic drops.",
  alternates: {
    canonical: "/case-studies/",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/case-studies/", label: "Case Studies" },
        ]}
        h1="Results built on <em>proven</em> playbooks"
        sub="How we run SEO programs for local businesses, stores and practices. Client results are published here with their permission."
        img="w2"
        pills={["Local", "E-commerce", "Technical", "Practices"]}
      />

      <PlaybooksSection
        title="Our SEO playbooks"
        sub="The programs behind our client work."
      />

      {/* Results KPIs */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              SEO results
            </h2>
            <p data-r>What we measure for every client.</p>
          </div>
          <div className="kpis" data-stagger>
            <div className="kpi acc">
              <b>Calls</b>
              <span>Tracked from search and maps</span>
            </div>
            <div className="kpi">
              <b>Leads</b>
              <span>Forms and bookings from organic</span>
            </div>
            <div className="kpi">
              <b>Revenue</b>
              <span>Sales attributed to organic search</span>
            </div>
            <div className="kpi">
              <b>Rankings</b>
              <span>Map grid and organic positions</span>
            </div>
          </div>

          <div className="note" style={{ marginTop: "20px" }} data-r>
            Detailed client case studies with verified numbers are added here as clients approve them. Want to see results from your industry?{" "}
            <Link href="/contact-us/" style={{ color: "var(--acc)", fontWeight: 600 }}>
              Ask us on a call
            </Link>.
          </div>
        </div>
      </section>

      <TrustSection />
      <CTASection />
    </>
  );
}
