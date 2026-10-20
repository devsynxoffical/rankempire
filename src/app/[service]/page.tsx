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
import { services } from "@/data";

export async function generateStaticParams() {
  return Object.keys(services)
    .filter((slug) => slug !== "seo-services" && slug !== "seo-company")
    .map((slug) => ({
      service: slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
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
            <h2 className="h2" data-lines>
              What is included
            </h2>
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
