import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSticky from "@/components/sections/ServicesSticky";
import FAQSection from "@/components/sections/FAQSection";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { services, serviceOrderCore, serviceOrderSvc, homeServices } from "@/data";

export const metadata: Metadata = {
  title: "SEO Services: Technical, Local, Content and Link Building | RankEmpire",
  description:
    "Explore every SEO service RankEmpire offers: local SEO, technical SEO, e-commerce, SaaS, content, link building, audits, consulting and more.",
  alternates: {
    canonical: "/seo-services/",
  },
};

export default function SeoServicesPage() {
  const s = services["seo-services"];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/seo-services/", label: "SEO Services" },
        ]}
        h1={s.h1}
        sub={s.sub}
        img={s.img}
      />

      <IntroSection
        items={["Audit first", "Roadmap by impact", "Specialist execution", "Revenue reporting"]}
        text={s.intro}
      />

      {/* Core Services Grid */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              Core services
            </h2>
            <p data-r>The services most of our clients start with.</p>
          </div>
          <div className="g3" data-stagger>
            {serviceOrderCore.map((key, i) => {
              const svc = services[key];
              if (!svc) return null;
              return (
                <Link
                  className={`box ${i === 0 ? "dk" : ""}`}
                  href={`/${key}/`}
                  key={key}
                >
                  <span className="n">0{i + 1}</span>
                  <h3>{svc.name}</h3>
                  <p>{svc.sub}</p>
                  <span className="go">Explore &#8599;</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialist Services Grid */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              Specialist SEO services
            </h2>
            <p data-r>Add depth where your market demands it.</p>
          </div>
          <div className="g3" data-stagger>
            {serviceOrderSvc.map((key, i) => {
              const svc = services[key];
              if (!svc) return null;
              return (
                <Link className="box" href={`/${key}/`} key={key}>
                  <span className="n">{(i + 7).toString().padStart(2, "0")}</span>
                  <h3>{svc.name}</h3>
                  <p>{svc.sub}</p>
                  <span className="go">Explore &#8599;</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesSticky
        serviceKeys={homeServices}
        title="Explore our most requested services"
        sub="Click a service to see what is included."
      />

      <FAQSection
        items={s.faq}
        tabs={false}
        title="Questions about SEO Services"
      />

      <RelatedLinks
        slugs={s.related.concat(["seo-packages", "industries"])}
        title="Keep exploring"
      />

      <CTASection />
    </>
  );
}
