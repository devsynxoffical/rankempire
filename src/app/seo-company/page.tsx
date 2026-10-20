import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import DeliverableBoxes from "@/components/common/DeliverableBoxes";
import ProcessSection from "@/components/sections/ProcessSection";
import FitBlock from "@/components/common/FitBlock";
import ValuesSection from "@/components/sections/ValuesSection";
import PlaybooksSection from "@/components/sections/PlaybooksSection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data";

export const metadata: Metadata = {
  title: "SEO Company That Builds Rankings That Compound | RankEmpire",
  description:
    "RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content, links and Google Business Profile under one roof.",
  alternates: {
    canonical: "/seo-company/",
  },
};

export default function SeoCompanyPage() {
  const s = services["seo-company"];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/seo-company/", label: "SEO Company" },
        ]}
        h1={s.h1}
        sub={s.sub}
        img={s.img}
        pills={s.inc.slice(0, 4).map((x) => x[0])}
      />

      <IntroSection
        items={["Audit first", "Roadmap by impact", "Specialist execution", "Revenue reporting"]}
        text={s.intro}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              What is included
            </h2>
            <p data-r>Every deliverable listed up front, no vague retainers.</p>
          </div>
          <DeliverableBoxes items={s.inc} />
        </div>
      </section>

      <ProcessSection
        title="How it works"
        sub="The exact process we follow<br>for compounding growth."
      />

      {s.fit && s.fit.length > 0 && (
        <FitBlock
          title={`Is ${s.name} right for you?`}
          items={s.fit}
        />
      )}

      <ValuesSection />
      <PlaybooksSection />
      <TrustSection />

      <FAQSection
        items={s.faq}
        tabs={false}
        title={`Questions about ${s.name}`}
      />

      <RelatedLinks
        slugs={s.related.concat(["seo-packages", "industries"])}
        title="Keep exploring"
      />

      <CTASection />
    </>
  );
}
