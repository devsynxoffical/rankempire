import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";

export const metadata: Metadata = {
  title: "SEO Blog | RankEmpire",
  description:
    "Practical guides on local SEO, technical SEO and content strategy, written by the team doing the work.",
  alternates: {
    canonical: "/blog/",
  },
};

const posts = [
  {
    slug: "why-most-seo-campaigns-fail",
    title: "Why Most SEO Campaigns Fail in the First 6 Months",
    desc: "It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work.",
    cat: "SEO Strategy",
    img: "b1",
    readTime: "3 min read",
  },
  {
    slug: "local-seo-checklist",
    title: "The Local SEO Checklist for Service Businesses",
    desc: "A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters.",
    cat: "Local SEO",
    img: "b2",
    readTime: "3 min read",
  },
  {
    slug: "technical-seo-basics",
    title: "Technical SEO Basics Every Business Owner Should Know",
    desc: "You do not need to be a developer to understand what holds a website back. Five technical basics, explained in plain English.",
    cat: "Technical SEO",
    img: "b3",
    readTime: "3 min read",
  },
];

export default function BlogHubPage() {
  const featured = posts[0];

  return (
    <>
      {/* 1. Page Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">SEO Blog</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>SEO blog
          </span>
          <h1 data-r style={{ maxWidth: "860px" }}>
            SEO insights that <span className="acc">drive rankings</span>
          </h1>
          <p className="lead" data-r>
            Practical guides on local SEO, technical SEO and content strategy, written by the team
            doing the work.
          </p>
        </div>
      </section>

      {/* 2. Featured Article & Posts Grid */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link
            className="card"
            href={`/blog/${featured.slug}/`}
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "28px",
              alignItems: "center",
              padding: "16px",
              marginBottom: "16px",
            }}
            data-r
          >
            <div className="phimg" style={{ boxShadow: "none" }}>
              <img src={`/img/${featured.img}.webp`} alt="" loading="lazy" />
            </div>
            <div>
              <span className="eyb">Featured · {featured.cat}</span>
              <h2 className="h3" style={{ margin: "12px 0" }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: "16px" }}>{featured.desc}</p>
              <span className="tlink more">Read article</span>
            </div>
          </Link>

          <div className="posts" data-stagger>
            {posts.map((post) => (
              <Link className="post" href={`/blog/${post.slug}/`} key={post.slug}>
                <div className="im">
                  <img src={`/img/${post.img}.webp`} alt="" loading="lazy" />
                  <em>{post.cat}</em>
                </div>
                <div className="tx">
                  <span className="meta">
                    {post.readTime} · RankEmpire team
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <span className="tlink">Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge="Verified Results"
        title="Strategies that turn into #1 rankings"
        sub="We do not just write about SEO strategy — we execute it for dozens of high-growth companies across the country."
      />

      {/* 3. CTA */}
      <CTASection />
    </>
  );
}
