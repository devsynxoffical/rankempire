import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data";

export const metadata: Metadata = {
  title: "Industries We Serve: SEO for 45 Business Types | RankEmpire",
  description:
    "Explore our industry-specific SEO programs for home services, medical practices, law firms, automotive, hospitality and professional services.",
  alternates: {
    canonical: "/industries/",
  },
};

export default function IndustriesHubPage() {
  const categories = [
    "Home Services",
    "Medical and Health",
    "Legal",
    "Automotive",
    "Food and Hospitality",
    "Professional Services",
    "Real Estate and Property",
    "Beauty, Fitness and Lifestyle",
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/industries/", label: "Industries We Serve" },
        ]}
        h1="SEO for the industries we <em>know best</em>"
        sub="Every industry searches differently. We build industry-specific strategies for 45 local and professional business types."
        img="i-home"
        pills={categories.slice(0, 4)}
      />

      {categories.map((cat) => {
        const catIndustries = industries.filter((d) => d.cat === cat);
        return (
          <section className="sec" style={{ padding: "40px 0" }} key={cat}>
            <div className="wrap">
              <h2 className="h3" style={{ marginBottom: "20px" }} data-r>
                {cat}
              </h2>
              <div className="links-grid" data-stagger>
                {catIndustries.map((ind) => (
                  <Link href={`/seo-for-${ind.slug}/`} key={ind.slug}>
                    <span>{ind.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Don't see your exact industry?"
        sub="We work with unique and multi-niche businesses every day. Book a call to discuss your market."
      />
    </>
  );
}
