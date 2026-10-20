import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { faqHome } from "@/data";

export const metadata: Metadata = {
  title: "About RankEmpire: The SEO Agency Built for Compounding Growth",
  description:
    "Learn about RankEmpire, an SEO agency for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work.",
  alternates: {
    canonical: "/about-us/",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about-us/", label: "About Us" },
        ]}
        h1="We build search <em>empires</em> for ambitious businesses"
        sub="RankEmpire is an SEO agency for local businesses, e-commerce brands and SaaS companies that want rankings to become a lasting asset."
      />

      <IntroSection
        items={["Strategy", "Technical", "Content", "Local"]}
        text="We are not just another SEO agency. We are a small team of strategists, technical specialists and writers who believe SEO should be transparent, measurable and built to last. No shortcuts, no jargon and no long contracts, just work that compounds month after month."
      />

      {/* Stand for KPIs */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              What we stand for
            </h2>
            <p data-r>Numbers that describe how we work.</p>
          </div>
          <div className="kpis" data-stagger>
            <div className="kpi acc">
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

      <ValuesSection />
      <ProcessSection />
      <TrustSection />

      <FAQSection items={faqHome} tabs={true} />
      <CTASection />
    </>
  );
}
