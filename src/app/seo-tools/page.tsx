import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/sections/CTASection";
import { tools } from "@/data";

export const metadata: Metadata = {
  title: "Free SEO Tools: Audit, SERP, Schema and Robots Checkers | RankEmpire",
  description:
    "Free on-page SEO tools for business owners and developers: audit tool, SERP preview, schema validator, keyword research, meta tag checker and robots.txt tester.",
  alternates: {
    canonical: "/seo-tools/",
  },
};

export default function SeoToolsHubPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/seo-tools/", label: "SEO Tools" },
        ]}
        h1="Free SEO tools that give <em>straight answers</em>"
        sub="Check your on-page basics, preview SERP snippets, test schema markup and diagnose crawl issues in seconds. No signup required."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="g3" data-stagger>
            {tools.map((t, i) => (
              <Link className="box" href={`/seo-tools/${t.slug}/`} key={t.slug}>
                <span className="n">0{i + 1}</span>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <span className="go">Open tool &#8599;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need an in-depth audit by a human specialist?"
        sub="Our strategists crawl your full site, review competitors and build a 90-day roadmap ranked by revenue."
      />
    </>
  );
}
