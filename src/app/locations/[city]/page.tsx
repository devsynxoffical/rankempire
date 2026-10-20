import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSticky from "@/components/sections/ServicesSticky";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { locations, homeServices, industries } from "@/data";

export async function generateStaticParams() {
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = locations.find((l) => l.slug === city);
  if (!c) return {};

  return {
    title: `SEO Company in ${c.name}, ${c.st} | Local SEO Agency | RankEmpire`,
    description: `RankEmpire is the local SEO company in ${c.name}, ${c.st}. Google Business Profile optimization, local citations, map pack rankings and high-converting pages.`,
    alternates: {
      canonical: `/locations/${c.slug}/`,
    },
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = locations.find((l) => l.slug === city);

  if (!c) {
    notFound();
  }

  const topInds = c.inds.map((slug) => {
    const ind = industries.find((i) => i.slug === slug);
    return {
      slug,
      name: ind ? `SEO for ${ind.name}` : `SEO for ${slug}`,
    };
  });

  const otherCities = locations
    .filter((x) => x.slug !== c.slug)
    .slice(0, 6)
    .map((x) => `locations/${x.slug}`);

  const faqs: [string, string][] = [
    [
      `How long does local SEO take in ${c.name}?`,
      `In competitive metros like ${c.name}, expect initial map movement in 60 to 90 days. Competitive categories and dense neighborhoods take longer.`,
    ],
    [
      `Can you rank my business in multiple ${c.name} neighborhoods?`,
      "Yes. We build targeted location and neighborhood pages and optimize your Google Business Profile to win outside your immediate ZIP code.",
    ],
    [
      `Do you work with competing businesses in ${c.name}?`,
      `No. We offer category exclusivity in your primary service area, so we never work for your direct local competitor while we work for you.`,
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/locations/", label: "Locations" },
          { href: `/locations/${c.slug}/`, label: c.name },
        ]}
        h1={`SEO Company in <em>${c.name}, ${c.st}</em>`}
        sub={`Local SEO, Google Business Profile optimization and high-intent rankings for businesses across ${c.name} and surrounding areas.`}
        img="city"
        pills={c.areas.slice(0, 4)}
      />

      <IntroSection
        items={[`${c.name} Metro`, `${c.st} Local Search`, "Map Pack Rankings", "Neighborhood Pages"]}
        text={`Search behavior in ${c.name} has its own rhythm. Between intense density in the core and sprawling suburbs, winning here takes neighborhood-level relevance and a review profile that outranks established local players.`}
      />

      {/* Market Insight Split */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="sticky">
            <span className="eyb">{c.name} market insight</span>
            <h2 className="h2" data-lines>
              How search works in {c.name}
            </h2>
          </div>
          <div className="prose">
            <p>{c.note}</p>
            <h3>Neighborhoods and areas we cover</h3>
            <div className="chipset" style={{ marginTop: "14px" }}>
              {c.areas.map((area, i) => (
                <span key={i}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Priority Industries */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              Priority industries in {c.name}
            </h2>
            <p data-r>High-volume categories where we have proven playbooks.</p>
          </div>
          <div className="links-grid" data-stagger>
            {topInds.map((ind, i) => (
              <Link href={`/seo-for-${ind.slug}/`} key={i}>
                <span>{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesSticky
        serviceKeys={homeServices}
        title={`Local SEO programs for ${c.name}`}
        sub="Built to win the map pack, organic results and nearby customers."
      />

      <FAQSection
        items={faqs}
        tabs={false}
        title={`Local SEO questions in ${c.name}`}
      />

      <RelatedLinks
        slugs={otherCities.concat(["local-seo", "google-business-profile-seo", "seo-packages/local-seo"])}
        title="Other cities we serve"
      />

      <CTASection
        title={`Ready to dominate ${c.name} search?`}
        sub="Get a free local audit of your rankings and map pack visibility."
      />
    </>
  );
}
