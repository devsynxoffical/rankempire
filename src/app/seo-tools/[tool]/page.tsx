import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import ToolRunner from "@/components/tools/ToolRunner";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
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

  const otherTools = tools
    .filter((x) => x.slug !== t.slug)
    .slice(0, 6)
    .map((x) => `seo-tools/${x.slug}`);

  const faqs: [string, string][] = [
    [
      `How does the ${t.name} work?`,
      "Our tool runs purely in your browser for privacy and speed. Paste your source or parameters and receive an immediate diagnostic breakdown.",
    ],
    [
      "Is any data saved on your servers?",
      "No. All checks are processed client-side. We do not store or log your content or search terms.",
    ],
    [
      "What should I do if my score is low?",
      "Start with the critical red alerts first: verify title, meta description, mobile viewport and indexing tags, or book a free consultation for expert assistance.",
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/seo-tools/", label: "SEO Tools" },
          { href: `/seo-tools/${t.slug}/`, label: t.name },
        ]}
        h1={`${t.name}`}
        sub={t.desc}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: "1000px" }}>
          <ToolRunner toolSlug={t.slug} toolType={t.type} />
        </div>
      </section>

      <FAQSection
        items={faqs}
        tabs={false}
        title={`Questions about the ${t.name}`}
      />

      <RelatedLinks
        slugs={otherTools.concat(["seo-audit", "technical-seo"])}
        title="Other free SEO tools"
      />

      <CTASection
        title="Want our team to fix these issues for you?"
        sub="We handle technical SEO, schema, content updates and link building with transparent monthly reporting."
      />
    </>
  );
}
