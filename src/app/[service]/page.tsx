import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  servicesLong,
  industries,
  industriesLong,
  locations,
} from "@/data";
import {
  XHero,
  XOverview,
  XFeatures,
  XBento,
  XMonthly,
  XSteps,
  XFit,
  XComparison,
  XChips,
  XSearch,
  XLinks,
  XImageCards,
  XPricing,
  XRelated,
} from "@/components/common/V4Cards";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TrustSection from "@/components/sections/TrustSection";
import { SearchIcon } from "@/components/common/Icons";

export async function generateStaticParams() {
  const serviceParams = Object.keys(services)
    .filter((slug) => slug !== "seo-services" && slug !== "seo-company")
    .map((slug) => ({
      service: slug,
    }));

  const industryParams = industries.map((ind) => ({
    service: `seo-for-${ind.slug}`,
  }));

  return [...serviceParams, ...industryParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;

  if (service.startsWith("seo-for-")) {
    const indSlug = service.replace(/^seo-for-/, "");
    const d = industries.find((i) => i.slug === indSlug);
    if (!d) return {};

    return {
      title: `SEO for ${d.name}: Rank in the Map Pack and Google | RankEmpire`,
      description: `Specialized SEO for ${d.name.toLowerCase()}: Google Business Profile optimization, emergency and service pages, local citations and reviews. ${d.angle}`,
      alternates: {
        canonical: `/seo-for-${d.slug}/`,
      },
    };
  }

  const s = services[service];
  if (!s) return {};

  return {
    title: s.title,
    description: s.desc,
    alternates: {
      canonical: `/${service}/`,
    },
  };
}

export default async function DynamicRootDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  // ==========================================
  // 1. INDUSTRY DETAIL PAGE (seo-for-[slug])
  // ==========================================
  if (service.startsWith("seo-for-")) {
    const indSlug = service.replace(/^seo-for-/, "");
    const d = industries.find((i) => i.slug === indSlug);

    if (!d) {
      notFound();
    }

    const iLong = industriesLong[indSlug] || {};
    const nl = d.name.toLowerCase();
    const crumbs = [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries/" },
      { label: `SEO for ${d.name}`, href: `/seo-for-${d.slug}/` },
    ];

    const searches: [string, string][] =
      iLong.searches ||
      d.kws.slice(0, 8).map((kw, i) => [
        kw,
        i < 3 ? "Urgent" : i < 5 ? "Local" : "Commercial",
      ]);

    const faqs = (iLong.faq || []).concat([
      [
        `How long does SEO take for ${nl}?`,
        `Most ${d.noun}s see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months. Competition in your city changes the timeline.`,
      ],
      [
        `What does SEO for ${nl} cost?`,
        "Local plans start at $799 per month. We recommend a plan after reviewing your market and competition in a free audit.",
      ],
    ]);

    const sib = industries
      .filter((x) => x.cat === d.cat && x.slug !== d.slug)
      .slice(0, 6);

    const strat: [string, string][] = iLong.strategy || [
      [
        "Research your market",
        `We study how customers search for a ${d.noun} in your area.`,
      ],
      [
        "Fix the foundation",
        "Technical issues and site structure are fixed first.",
      ],
      [
        "Build pages that match searches",
        "A dedicated page for each service and area.",
      ],
      [
        "Win the map and earn trust",
        "Google Business Profile, reviews and local links.",
      ],
    ];

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
          pill={d.cat}
          h1={`SEO for <span class="acc">${d.name}</span>`}
          lead={`More calls, bookings and qualified leads for your ${d.noun}, from customers already searching for what you do.`}
          img={d.grp}
          alt={`${d.noun} owner`}
          chips={searches.map((x) => x[0])}
          facts={[
            [searches.length.toString(), "High-intent searches mapped"],
            ["Top 3", "Map pack target"],
            ["60 to 90", "Days to early movement"],
            ["$799", "Local plans from, per month"],
          ]}
          extra={
            <div
              className="dfloat b"
              style={{ top: 18, right: -14, background: "#0b0b0c", color: "#fff", display: "flex", gap: 10, alignItems: "center", borderRadius: 14, padding: "10px 14px" }}
            >
              <span className="g" style={{ color: "#ff4c39" }}>
                <SearchIcon />
              </span>
              <span>
                <b>&quot;{searches[0]?.[0] || d.kws[0]}&quot;</b>
                <span style={{ display: "block", fontSize: 12, color: "#a1a1aa" }}>Map pack #1 target</span>
              </span>
            </div>
          }
        />

        <XOverview
          eyb="Overview"
          h2={`Why ${nl} need SEO`}
          paras={iLong.intro || [d.angle]}
          facts={[
            [d.pains.length.toString(), "Industry challenges solved"],
            [(iLong.pages?.length || 4).toString(), "Page types to build"],
            ["Local", "Map pack plus organic"],
          ]}
          img="v3-people.webp"
          alt="Team planning an SEO campaign"
          id="overview"
        />

        <XSearch
          eyb="Keyword targets"
          h2={`Searches that bring ${nl} customers`}
          items={searches}
          sub="Examples of high-intent searches we build pages and profiles around. Your final list comes from research in your market."
        />

        <XFeatures
          eyb="Challenges"
          h2={`What makes SEO for ${nl} different`}
          items={d.pains}
          id="challenges"
        />

        {iLong.pages && iLong.pages.length > 0 && (
          <XBento
            eyb="Site structure"
            h2={`Pages every ${d.noun} website needs`}
            items={iLong.pages}
            img={d.grp}
            title={`Website plan for ${d.name}`}
            id="pages"
          />
        )}

        <XSteps
          eyb="Strategy"
          h2={`Our SEO strategy for ${nl}`}
          steps={strat}
          note={iLong.compliance}
          id="strategy"
        />

        <XLinks
          eyb="Services"
          h2={`SEO services for ${nl}`}
          items={svcLinks}
        />

        <XChips
          eyb="Locations"
          h2={`SEO for ${nl} across the US`}
          sub="We run industry campaigns in all major US metros."
          id="cities"
          links={locations.map((loc) => [loc.name, `/locations/${loc.slug}/`])}
        />

        <XPricing
          h2={`SEO pricing for ${nl}`}
          sub="Local SEO plans built for businesses like yours."
        />

        <FAQSection
          items={faqs}
          title={`SEO for ${d.name}: FAQ`}
          sub={`Questions ${nl} ask before hiring an SEO company.`}
        />

        <XRelated
          title="Related industries and services"
          items={[
            ...sib.map((x) => ({
              href: `/seo-for-${x.slug}/`,
              label: `SEO for ${x.name}`,
            })),
            { href: "/industries/", label: "Industries We Serve" },
            { href: "/local-seo/", label: "Local SEO" },
            { href: "/seo-packages/local-seo/", label: "Local SEO Packages" },
          ]}
        />

        <CTASection
          title={`Ready to grow your ${d.noun}?`}
          sub="Get a free audit of your website and Google Business Profile."
        />
      </main>
    );
  }

  // ==========================================
  // 2. SERVICE DETAIL PAGE (16 core/specialist)
  // ==========================================
  const s = services[service];

  if (!s) {
    notFound();
  }

  const sLong = servicesLong[service] || {};
  const nm = s.name.toLowerCase();

  const crumbs = [
    { label: "Home", href: "/" },
    ...(service !== "seo-services" && service !== "seo-company"
      ? [{ label: "SEO Services", href: "/seo-services/" }]
      : []),
    { label: s.name, href: `/${service}/` },
  ];

  const faqs = (s.faq || [])
    .concat(
      (sLong.faq || []).filter(
        (f: [string, string]) => !s.faq.some((sf) => sf[0] === f[0])
      )
    )
    .slice(0, 8);

  const steps: [string, string][] = s.steps && s.steps.length > 0
    ? s.steps
    : [
        [
          "Audit and research",
          `We audit your site, market and competitors to find the biggest opportunities for ${nm}.`,
        ],
        [
          "Roadmap",
          "Findings become a prioritized plan ranked by impact and effort.",
        ],
        [
          "Implementation",
          "Our specialists do the work, with every task visible in your dashboard.",
        ],
        [
          "Measure and refine",
          "We report on rankings, traffic and conversions and adjust the plan monthly.",
        ],
      ];

  const chips = s.inc && s.inc.length > 0 ? s.inc.map((x) => x[0]) : (s as unknown as { chips?: string[] }).chips || [];

  const relatedKeys = (s as unknown as { related?: string[] }).related || [
    "seo-audit",
    "technical-seo",
    "local-seo",
    "link-building",
    "content-seo",
    "ecommerce-seo",
    "saas-seo",
    "google-business-profile-seo",
  ];

  const relatedItems = relatedKeys
    .filter((k: string) => k !== service && services[k])
    .slice(0, 6)
    .map((k: string) => ({
      href: `/${k}/`,
      label: services[k].name,
    }))
    .concat([
      { href: "/industries/", label: "Industries We Serve" },
      { href: "/seo-packages/", label: "Compare all SEO packages" },
    ]);

  return (
    <main id="main">
      <XHero
        crumbs={crumbs}
        pill={`${s.name} services`}
        h1={s.h1.replace(/<em>/g, '<span class="acc">').replace(/<\/em>/g, "</span>")}
        lead={s.sub}
        img={s.img}
        alt={s.name}
        chips={chips}
        facts={[
          [(s.inc?.length || 6).toString(), "Deliverables listed up front"],
          ["90 days", "Prioritized roadmap"],
          ["1", "Senior strategist on your account"],
          ["0", "Long-term contracts"],
        ]}
      />

      <XOverview
        eyb="Overview"
        h2={sLong.what_h || `${s.name} with RankEmpire`}
        paras={sLong.what || [s.intro]}
        facts={[
          [(s.inc?.length || 6).toString(), "Core deliverables"],
          ["Monthly", "Reporting and strategy call"],
          ["Live", "Ranking dashboard"],
        ]}
        img="v3-desk.webp"
        alt={s.name}
        id="what"
      />

      {sLong.why && sLong.why.length > 0 && (
        <XFeatures
          eyb="Why it matters"
          h2={sLong.why_h || `Why ${nm} matters for your business`}
          items={sLong.why}
          id="why"
        />
      )}

      {s.inc && s.inc.length > 0 && (
        <XBento
          eyb="Deliverables"
          h2={`What is included in our ${nm} service`}
          items={s.inc}
          img={s.img}
          title={s.name}
          id="included"
        />
      )}

      {sLong.deliver && sLong.deliver.length > 0 && (
        <XMonthly
          eyb="Every month"
          h2={sLong.deliver_h || "What you get each month"}
          items={sLong.deliver}
          id="monthly"
        />
      )}

      <XSteps
        eyb="Process"
        h2={`How our ${nm} process works`}
        steps={steps}
        id="process"
      />

      {(sLong.signs || s.fit) && (
        <XFit
          eyb="Who it is for"
          h2={sLong.signs_h || `Signs you need ${nm}`}
          items={sLong.signs || s.fit || []}
          best={sLong.signs ? s.fit : undefined}
          id="fit"
        />
      )}

      {sLong.compare && sLong.compare.length > 0 && (
        <XComparison
          h2={sLong.compare_h || `${s.name} vs alternatives`}
          cols={sLong.compare_cols || [s.name, "Paid Ads"]}
          rows={sLong.compare}
          id="compare"
        />
      )}

      {sLong.kws && sLong.kws.length > 0 && (
        <XChips
          eyb="Related searches"
          h2="Topics this service covers"
          chips={sLong.kws}
          sub="The searches and subtopics this work is built around."
          id="topics"
        />
      )}

      <XPricing
        h2={`How much does ${nm} cost?`}
        sub={`${s.name} is included in every plan at the depth your market needs.`}
        id="pricing"
      />

      {service === "seo-company" && <TrustSection />}

      <FAQSection
        items={faqs}
        title={`${s.name} FAQ`}
        sub={`Common questions about ${nm}.`}
      />

      <XRelated
        title="Related services and resources"
        items={relatedItems}
      />

      <CTASection />
    </main>
  );
}
