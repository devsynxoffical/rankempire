import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data";

export async function generateStaticParams() {
  return industries.map((ind) => ({
    industry: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const d = industries.find((i) => i.slug === industry);
  if (!d) return {};

  return {
    title: `SEO for ${d.name}: Rank in the Map Pack and Google | RankEmpire`,
    description: `Specialized SEO for ${d.name.toLowerCase()}: Google Business Profile optimization, emergency and service pages, local citations and reviews. ${d.angle}`,
    alternates: {
      canonical: `/seo-for-${d.slug}/`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const d = industries.find((i) => i.slug === industry);

  if (!d) {
    notFound();
  }

  const relatedInds = industries
    .filter((x) => x.cat === d.cat && x.slug !== d.slug)
    .slice(0, 6)
    .map((x) => `seo-for-${x.slug}`);

  const faqs: [string, string][] = [
    [
      `How long does SEO take for a ${d.noun}?`,
      `Most ${d.name.toLowerCase()} see map pack and organic movement within 60 to 90 days, with lead volume compounding over 6 to 12 months.`,
    ],
    [
      "Why not just buy leads from lead generation sites?",
      "Lead sites sell the same lead to three or four competitors. Organic search brings customers directly to you with no middleman.",
    ],
    [
      "Do I need a physical address to rank in the map pack?",
      "Google requires a verified address to show in map results. For service-area businesses, we can hide the street address while ranking across your territory.",
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/industries/", label: "Industries" },
          { href: `/seo-for-${d.slug}/`, label: `SEO for ${d.name}` },
        ]}
        h1={`SEO for <em>${d.name}</em> that brings in customers`}
        sub={d.angle}
        img={d.grp}
        pills={d.kws.slice(0, 3)}
      />

      <IntroSection
        items={["High-intent search", "Map pack dominance", "Service area pages", "Verified leads"]}
        text={`A potential customer searches for a ${d.noun} right when the need is urgent. We position your business as the obvious first choice with optimized local listings, dedicated service pages and genuine local authority.`}
      />

      {/* Target Searches Chips */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              High-intent searches we target
            </h2>
            <p data-r>The searches customers type right before they call or book.</p>
          </div>
          <div className="chipset" data-stagger>
            {d.kws.map((kw, i) => (
              <span key={i}>{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points / Challenges Grid */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              {`The challenges holding most ${d.name.toLowerCase()} back`}
            </h2>
            <p data-r>Where other campaigns stall and how we fix it.</p>
          </div>
          <div className="g3" data-stagger>
            {d.pains.map(([title, desc], i) => (
              <div className="box" key={i}>
                <span className="n">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        title={`Our framework for ${d.name.toLowerCase()}`}
        sub="Four disciplined steps from audit to incoming leads."
      />

      <FAQSection
        items={faqs}
        tabs={false}
        title={`Common questions from ${d.name.toLowerCase()}`}
      />

      <RelatedLinks
        slugs={relatedInds.concat(["local-seo", "google-business-profile-seo", "seo-packages"])}
        title={`More in ${d.cat}`}
      />

      <CTASection
        title="Ready to dominate search in your market?"
        sub="Get a free competitive review of your rankings against local competitors."
      />
    </>
  );
}
