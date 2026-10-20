import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import PackageComparisonTable from "@/components/common/PackageComparisonTable";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { packages } from "@/data";

export async function generateStaticParams() {
  return ["local-seo", "ecommerce-seo", "saas-seo"].map((slug) => ({
    packageSlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}): Promise<Metadata> {
  const { packageSlug } = await params;
  const key = `seo-packages/${packageSlug}`;
  const p = packages[key];
  if (!p) return {};

  return {
    title: p.title,
    description: p.desc,
    alternates: {
      canonical: `/${key}/`,
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}) {
  const { packageSlug } = await params;
  const key = `seo-packages/${packageSlug}`;
  const p = packages[key];

  if (!p) {
    notFound();
  }

  const planNames = p.plans.map((x) => x[0]);
  const others = Object.keys(packages).filter((x) => x !== key);

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
          { href: `/${key}/`, label: p.name },
        ]}
        h1={p.h1}
        sub={p.sub}
        primaryBtn={{ href: "/contact-us/", label: "Get a custom quote" }}
        secondaryBtn={{ href: "/seo-audit/", label: "Start with an audit" }}
      />

      <PricingSection
        packageKey={key}
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
        slugs={others.concat(["seo-services", "seo-audit", "contact-us"])}
        title="Other packages and services"
      />

      <CTASection
        title="Not sure which plan fits?"
        sub="Tell us about your business and we will recommend the right package."
      />
    </>
  );
}
