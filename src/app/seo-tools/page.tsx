import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import {
  SearchIcon,
  ChartIcon,
  LinkIcon,
  GlobeIcon,
  TagIcon,
  CodeIcon,
  FileTextIcon,
  ShieldIcon,
  SparkleIcon,
} from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "SEO Tools | RankEmpire",
  description:
    "Eleven free tools for audits, meta tags, schema, sitemaps, robots.txt, keywords, rankings and backlinks. Private and instant, right in your browser.",
  alternates: {
    canonical: "/seo-tools/",
  },
};

const toolList = [
  {
    slug: "seo-audit-tool",
    name: "SEO Audit Tool",
    desc: "Run a quick on-page SEO audit of any page by pasting its HTML. Checks titles, meta tags, headings, images, links, canonical and structured data.",
    icon: <SearchIcon />,
  },
  {
    slug: "keyword-rank-checker",
    name: "Keyword Rank Checker",
    desc: "Find where a domain appears in a results list. Paste the result URLs for a keyword and we show the position of your domain and competitors.",
    icon: <ChartIcon />,
  },
  {
    slug: "keyword-research-tool",
    name: "Keyword Research Tool",
    desc: "Generate hundreds of keyword ideas from a seed term, grouped by intent: questions, commercial, local and comparisons.",
    icon: <SearchIcon />,
  },
  {
    slug: "backlink-checker",
    name: "Backlink Checker",
    desc: "Analyze a backlink export from any tool. Paste URLs to see referring domains, anchor text mix and link patterns.",
    icon: <LinkIcon />,
  },
  {
    slug: "website-seo-checker",
    name: "Website SEO Checker",
    desc: "Check the SEO basics of any page in seconds by pasting the page source code.",
    icon: <SearchIcon />,
  },
  {
    slug: "serp-checker",
    name: "SERP Checker",
    desc: "Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks.",
    icon: <GlobeIcon />,
  },
  {
    slug: "seo-score-checker",
    name: "SEO Score Checker",
    desc: "Get a 0 to 100 SEO score for any page based on 14 on-page checks, with a clear fix for every issue.",
    icon: <SearchIcon />,
  },
  {
    slug: "meta-tag-checker",
    name: "Meta Tag Checker",
    desc: "Check title, description, robots, canonical, Open Graph and Twitter tags from any page source.",
    icon: <TagIcon />,
  },
  {
    slug: "schema-checker",
    name: "Schema Checker",
    desc: "Validate JSON-LD structured data and see which schema types and required properties are present.",
    icon: <CodeIcon />,
  },
  {
    slug: "sitemap-checker",
    name: "Sitemap Checker",
    desc: "Paste an XML sitemap to count URLs, find duplicates, check formats and spot common errors.",
    icon: <FileTextIcon />,
  },
  {
    slug: "robots-txt-checker",
    name: "Robots.txt Checker",
    desc: "Test whether a URL is allowed or blocked for Googlebot and other crawlers based on your robots.txt rules.",
    icon: <ShieldIcon />,
  },
];

export default function SeoToolsHubPage() {
  return (
    <>
      {/* 1. Page Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">SEO Tools</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>Free forever
          </span>
          <h1 data-r style={{ maxWidth: "860px" }}>
            Free SEO tools to <span className="acc">check your site</span>
          </h1>
          <p className="lead" data-r>
            Eleven free tools for audits, meta tags, schema, sitemaps, robots.txt, keywords, rankings
            and backlinks. Private and instant, right in your browser.
          </p>
        </div>
      </section>

      {/* 2. Tools Grid */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="g3" data-stagger>
            {toolList.map((t) => (
              <Link className="card" href={`/seo-tools/${t.slug}/`} key={t.slug}>
                <span className="ic">{t.icon}</span>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <span className="tlink more">Open tool</span>
              </Link>
            ))}

            <Link
              className="card"
              href="/seo-audit/"
              style={{ background: "var(--ink)", borderColor: "var(--ink)" }}
            >
              <span className="ic">
                <SparkleIcon />
              </span>
              <h3 style={{ color: "#fff" }}>Professional SEO audit</h3>
              <p style={{ color: "#a1a1aa" }}>
                Want a human review? Get a full audit with a 90-day plan.
              </p>
              <span className="tlink more" style={{ color: "#fff" }}>
                Learn more
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge="Live SEO Intelligence"
        title="Turn free tool diagnostics into revenue-driving positions"
        sub="Identify indexing gaps, fix on-page bottlenecks, and watch Search Console impressions turn into inbound leads."
      />

      {/* 3. CTA */}
      <CTASection />
    </>
  );
}
