import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import DeliverableBoxes from "@/components/common/DeliverableBoxes";
import ProcessSection from "@/components/sections/ProcessSection";
import FitBlock from "@/components/common/FitBlock";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { LineReveal } from "@/components/common/LineReveal";
import { services, industries } from "@/data";

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

  // Check if it's an industry page (e.g. seo-for-plumbers)
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

  // Otherwise check services
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

  // 1. Industry Detail Page
  if (service.startsWith("seo-for-")) {
    const indSlug = service.replace(/^seo-for-/, "");
    const d = industries.find((i) => i.slug === indSlug);

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
              <LineReveal lines={["High-intent searches we target"]} />
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
              <LineReveal lines={[`The challenges holding most ${d.name.toLowerCase()} back`]} />
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

  // 2. Service Detail Page
  const s = services[service];

  if (!s) {
    notFound();
  }

  const steps = s.steps?.map((step) => ({
    title: step[0],
    desc: step[1],
  }));

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/seo-services/", label: "SEO Services" },
          { href: `/${service}/`, label: s.name },
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
            <LineReveal lines={["What is included"]} />
            <p data-r>Every deliverable listed up front, no vague retainers.</p>
          </div>
          <DeliverableBoxes items={s.inc} />
        </div>
      </section>

      {steps && steps.length > 0 && (
        <ProcessSection
          steps={steps}
          title="How it works"
          sub={`The exact process we follow<br>for ${s.name.toLowerCase()}.`}
        />
      )}

      {s.fit && s.fit.length > 0 && (
        <FitBlock
          title={`Is ${s.name} right for you?`}
          items={s.fit}
        />
      )}

      {s.faq && s.faq.length > 0 && (
        <FAQSection
          items={s.faq}
          tabs={false}
          title={`Questions about ${s.name}`}
        />
      )}

      <RelatedLinks
        slugs={s.related ? s.related.concat(["seo-packages", "industries"]) : ["seo-packages", "industries"]}
        title="Keep exploring"
      />

      <CTASection />
    </>
  );
}
