import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, locationsLong, industries } from "@/data";
import {
  XHero,
  XOverview,
  XFeatures,
  XChips,
  XSearch,
  XImageCards,
  XLinks,
  XPricing,
  XRelated,
} from "@/components/common/V4Cards";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

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

  const cLong = locationsLong[city] || {};
  const areas: string[] = cLong.suburbs || c.areas || [];

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations/" },
    { label: `SEO Company in ${c.name}`, href: `/locations/${c.slug}/` },
  ];

  const faqs = (cLong.faq || []).concat([
    [
      "How much does local SEO cost?",
      "Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.",
    ],
  ]);

  const others = locations.filter((x) => x.slug !== c.slug);

  const indCards = c.inds
    .map((x) => {
      const ind = industries.find((i) => i.slug === x);
      if (!ind) return null;
      return {
        href: `/seo-for-${x}/`,
        img: ind.grp,
        title: `SEO for ${ind.name}`,
        desc: ind.angle,
      };
    })
    .filter(Boolean) as { href: string; img: string; title: string; desc: string }[];

  const svcLinks = [
    { href: "/local-seo/", title: "Local SEO", desc: "Map pack and local rankings" },
    { href: "/google-business-profile-seo/", title: "Google Business Profile", desc: "More calls from your map listing" },
    { href: "/technical-seo/", title: "Technical SEO", desc: "Speed, crawling and site health" },
    { href: "/content-seo/", title: "Content SEO", desc: "Service and location landing pages" },
    { href: "/link-building/", title: "Link Building", desc: "Local citations and authority links" },
    { href: "/seo-audit/", title: "SEO Audit", desc: "A prioritized 90-day execution plan" },
  ];

  return (
    <main id="main">
      <XHero
        crumbs={crumbs}
        pill={`${c.name}, ${c.st}`}
        h1={`SEO company in <span class="acc">${c.name}</span>`}
        lead={`Local SEO, technical SEO and content for ${c.name} businesses that want more calls, bookings and sales from Google.`}
        img="city"
        alt={`${c.name} skyline`}
        chips={areas}
        facts={[
          [areas.length.toString(), `Areas covered around ${c.name}`],
          ["Grid", "Map pack rank tracking"],
          [c.inds.length.toString(), "Popular local industries"],
          ["$799", "Local plans from, per month"],
        ]}
        extra={
          <div
            className="dfloat b"
            style={{
              top: 18,
              right: -14,
              background: "#0b0b0c",
              color: "#fff",
              borderRadius: 14,
              padding: 12,
            }}
          >
            <div
              className="grid9"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 16px)",
                gap: 4,
              }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <i
                  key={i}
                  style={{
                    display: "block",
                    width: 16,
                    height: 16,
                    borderRadius: 3,
                    background: i === 12 ? "#ff4c39" : "#27272a",
                  }}
                ></i>
              ))}
            </div>
          </div>
        }
      />

      <XOverview
        eyb="Local market"
        h2={`How local search works in ${c.name}`}
        paras={cLong.intro || [c.note]}
        facts={[
          [areas.length.toString(), "Neighborhoods and suburbs"],
          ["Street level", "Map pack visibility tracking"],
          ["US hours", "Strategy calls"],
        ]}
        img="city"
        alt={c.name}
        id="market"
      />

      {cLong.market && cLong.market.length > 0 && (
        <XFeatures
          eyb="What we plan for"
          h2={`${c.name} SEO considerations`}
          items={cLong.market}
          id="considerations"
        />
      )}

      <XChips
        eyb="Service areas"
        h2={`Areas we serve in and around ${c.name}`}
        chips={areas}
        sub="We build visibility neighborhood by neighborhood, so customers across the metro can find you."
        id="areas"
      />

      {cLong.keywords && cLong.keywords.length > 0 && (
        <XSearch
          eyb="Keyword targets"
          h2={`${c.name} searches we target`}
          items={cLong.keywords.map((q: string) => [q, "Local"])}
          sub="Local phrases we build pages and Google Business Profile content around."
          id="keywords"
        />
      )}

      {indCards.length > 0 && (
        <XImageCards
          eyb="Industries"
          h2={`Popular industries in ${c.name}`}
          items={indCards}
        />
      )}

      <XLinks
        eyb="Services"
        h2={`SEO services in ${c.name}`}
        items={svcLinks}
      />

      <XPricing
        h2={`Local SEO pricing in ${c.name}`}
        sub="Plans for single and multi-location businesses."
      />

      <FAQSection
        items={faqs}
        title={`SEO in ${c.name}: FAQ`}
        sub={`Questions ${c.name} business owners ask before hiring an SEO company.`}
      />

      <XRelated
        title="Other cities and services"
        items={[
          ...others.slice(0, 6).map((x) => ({
            href: `/locations/${x.slug}/`,
            label: `SEO Company in ${x.name}`,
          })),
          { href: "/locations/", label: "All 17 US Locations" },
          { href: "/local-seo/", label: "Local SEO" },
          { href: "/seo-packages/local-seo/", label: "Local SEO Packages" },
        ]}
      />

      <CTASection
        title={`Ready to rank in ${c.name}?`}
        sub="Get a free local SEO audit for your business."
      />
    </main>
  );
}
