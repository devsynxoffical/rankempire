import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import PackageComparisonTable from "@/components/common/PackageComparisonTable";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { packages } from "@/data";

export const metadata: Metadata = {
  title: "SEO Packages and Pricing | RankEmpire",
  description:
    "Transparent SEO packages for local businesses, e-commerce stores and SaaS companies. Compare plans, deliverables and pricing.",
  alternates: {
    canonical: "/seo-packages/",
  },
};

export default function SeoPackagesPage() {
  const p = packages["seo-packages"];
  const planNames = p.plans.map((x) => x[0]);

  const pricingFaqs: [string, string][] = [
    [
      "Is there a minimum contract?",
      "Plans include a 3 month onboarding period, then run month to month with 30 days notice.",
    ],
    [
      "What does yearly billing include?",
      "Paying yearly saves 10 percent on any plan. Everything else stays the same.",
    ],
    [
      "Can I switch plans?",
      "Yes. Upgrade or downgrade at the start of any month as your needs change.",
    ],
    [
      "Do prices include content and links?",
      "Yes. Every deliverable listed in a plan is included in the price. Ad spend and third-party software for your own accounts are not.",
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/seo-packages/", label: "SEO Packages" },
        ]}
        h1={p.h1}
        sub={p.sub}
        primaryBtn={{ href: "/contact-us/", label: "Get a custom quote" }}
        secondaryBtn={{ href: "/seo-audit/", label: "Start with an audit" }}
      />

      <PricingSection
        packageKey="seo-packages"
        title="Choose your plan"
        sub="Every plan includes onboarding, a roadmap, reporting and a dedicated strategist."
      />

      <PackageComparisonTable planNames={planNames} />

      <ProcessSection
        title="What happens after you sign up"
        sub="From kickoff to compounding results."
      />

      <FAQSection
        items={pricingFaqs}
        tabs={false}
        title="Pricing questions"
      />

      <RelatedLinks
        slugs={["seo-packages/local-seo", "seo-packages/ecommerce-seo", "seo-packages/saas-seo", "seo-services", "seo-audit", "contact-us"]}
        title="Other packages and services"
      />

      <CTASection
        title="Not sure which plan fits?"
        sub="Tell us about your business and we will recommend the right package."
      />
    </>
  );
}
