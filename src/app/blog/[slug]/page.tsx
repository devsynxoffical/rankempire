import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { ArrowIcon } from "@/components/common/Icons";

interface ArticleData {
  slug: string;
  title: string;
  lead: string;
  pill: string;
  img: string;
  date: string;
  dateFormatted: string;
  readTime: string;
  toc: { href: string; label: string }[];
  content: React.ReactNode;
}

const articles: Record<string, ArticleData> = {
  "why-most-seo-campaigns-fail": {
    slug: "why-most-seo-campaigns-fail",
    title: "Why Most SEO Campaigns Fail in the First 6 Months",
    lead: "It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work.",
    pill: "SEO Strategy",
    img: "b1",
    date: "2026-10-01",
    dateFormatted: "October 1, 2026",
    readTime: "3 min read",
    toc: [
      { href: "#s1", label: "1. Content before foundation" },
      { href: "#s2", label: "2. Targeting keywords without intent" },
      { href: "#s3", label: "3. One page trying to rank for everything" },
      { href: "#s4", label: "4. Measuring the wrong thing" },
      { href: "#s5", label: "5. Quitting at month four" },
      { href: "#s6", label: "The fix" },
    ],
    content: (
      <>
        <p>
          Most SEO campaigns do not fail because SEO stopped working. They fail because the work is
          done in the wrong order, measured with the wrong numbers or abandoned right before it
          starts paying off.
        </p>

        <h2 id="s1">1. Content before foundation</h2>
        <p>
          Publishing articles on a site that Google struggles to crawl is like stocking shelves in a
          store with a locked front door. If key pages are blocked, slow, duplicated or buried six
          clicks deep, new content will not perform. Fix crawlability, indexation and internal
          linking first.
        </p>

        <h2 id="s2">2. Targeting keywords without intent</h2>
        <p>
          A keyword with high volume is useless if the people searching it do not want what you sell.
          Every target should be checked against the current results page: if Google shows guides and
          you have a sales page, you are fighting the algorithm instead of working with it.
        </p>

        <h2 id="s3">3. One page trying to rank for everything</h2>
        <p>
          Service pages that list ten services rarely rank for any of them. Each meaningful service,
          location and audience deserves its own page with a clear job. This is also how you avoid
          keyword cannibalization, where several of your own pages compete for the same search.
        </p>

        <h2 id="s4">4. Measuring the wrong thing</h2>
        <p>
          Rankings and traffic are leading indicators, not outcomes. Track calls, form submissions,
          booked appointments and revenue from organic search. When the report connects to money,
          decisions get easier.
        </p>

        <h2 id="s5">5. Quitting at month four</h2>
        <p>
          SEO compounds. Months one to three are mostly fixes and foundations, months four to six
          bring the first meaningful movement and the real returns usually show after that. Most
          campaigns that fail are stopped just before the curve bends.
        </p>

        <h2 id="s6">The fix</h2>
        <p>
          Audit first, prioritize by impact, build pages with one clear job, earn real authority and
          measure revenue. It is not glamorous, but it is how rankings become an asset instead of an
          expense.
        </p>
      </>
    ),
  },

  "local-seo-checklist": {
    slug: "local-seo-checklist",
    title: "The Local SEO Checklist for Service Businesses",
    lead: "A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters.",
    pill: "Local SEO",
    img: "b2",
    date: "2026-10-01",
    dateFormatted: "October 1, 2026",
    readTime: "3 min read",
    toc: [
      { href: "#s1", label: "Google Business Profile" },
      { href: "#s2", label: "Consistency across the web" },
      { href: "#s3", label: "Reviews" },
      { href: "#s4", label: "Location and service pages" },
      { href: "#s5", label: "Local links" },
      { href: "#s6", label: "Track the right way" },
    ],
    content: (
      <>
        <p>
          The map pack is where local customers decide who to call. This checklist covers the work
          that moves map rankings, in the order we do it for clients.
        </p>

        <h2 id="s1">Google Business Profile</h2>
        <ul>
          <li>Choose the most specific primary category that matches your main service.</li>
          <li>Add every service you offer with a short description.</li>
          <li>Upload real photos of your team, vehicles, location and work every month.</li>
          <li>Post at least weekly: offers, projects, tips and updates.</li>
          <li>Answer common questions in the Q&amp;A section before customers ask.</li>
        </ul>

        <h2 id="s2">Consistency across the web</h2>
        <p>
          Your business name, address and phone number should match exactly across your website,
          Google, Apple Maps, Bing, Yelp, Facebook and industry directories. Inconsistent listings
          confuse both customers and search engines.
        </p>

        <h2 id="s3">Reviews</h2>
        <ul>
          <li>Ask every happy customer, with a direct link, at the moment of satisfaction.</li>
          <li>Respond to every review within a few days, positive or negative.</li>
          <li>Never buy reviews or offer incentives that break platform rules.</li>
        </ul>

        <h2 id="s4">Location and service pages</h2>
        <p>
          Create a page for each core service and each important area you serve. Include real
          details: projects completed nearby, local regulations, travel times and photos. Avoid
          copying the same page and swapping city names.
        </p>

        <h2 id="s5">Local links</h2>
        <p>
          Sponsor local teams and events, join your chamber of commerce, partner with complementary
          businesses and pitch local news stories. Local links are a strong prominence signal that
          most competitors ignore.
        </p>

        <h2 id="s6">Track the right way</h2>
        <p>
          Map rankings change by location. Use a grid-based rank tracker to see visibility across
          your whole service area, not just at your office.
        </p>
      </>
    ),
  },

  "technical-seo-basics": {
    slug: "technical-seo-basics",
    title: "Technical SEO Basics Every Business Owner Should Know",
    lead: "You do not need to be a developer to understand what holds a website back. Five technical basics, explained in plain English.",
    pill: "Technical SEO",
    img: "b3",
    date: "2026-10-01",
    dateFormatted: "October 1, 2026",
    readTime: "3 min read",
    toc: [
      { href: "#s1", label: "1. Can Google find your pages?" },
      { href: "#s2", label: "2. Are you blocking anything by accident?" },
      { href: "#s3", label: "3. Is each page unique?" },
      { href: "#s4", label: "4. Is the site fast on phones?" },
      { href: "#s5", label: "5. Does Google understand what you are?" },
      { href: "#s6", label: "When to get help" },
    ],
    content: (
      <>
        <p>
          Technical SEO sounds intimidating, but the core ideas are simple: Google needs to find your
          pages, understand them and load them quickly. Here is what to check.
        </p>

        <h2 id="s1">1. Can Google find your pages?</h2>
        <p>
          Every important page should be linked from somewhere on your site and listed in your XML
          sitemap. Pages nobody links to, called orphan pages, are hard for Google to discover. Use
          our <Link href="/seo-tools/sitemap-checker/">Sitemap Checker</Link> to review your sitemap.
        </p>

        <h2 id="s2">2. Are you blocking anything by accident?</h2>
        <p>
          Your robots.txt file tells crawlers what they may visit. One wrong line can block an entire
          section. Test important URLs with our{" "}
          <Link href="/seo-tools/robots-txt-checker/">Robots.txt Checker</Link>.
        </p>

        <h2 id="s3">3. Is each page unique?</h2>
        <p>
          Duplicate pages split ranking signals. Use canonical tags to point duplicates to the main
          version and give each page a unique title and description. Our{" "}
          <Link href="/seo-tools/meta-tag-checker/">Meta Tag Checker</Link> shows these quickly.
        </p>

        <h2 id="s4">4. Is the site fast on phones?</h2>
        <p>
          Google evaluates the mobile version of your site first. Large images, heavy scripts and slow
          hosting hurt both rankings and conversions. Compress images, use modern formats and remove
          scripts you do not need.
        </p>

        <h2 id="s5">5. Does Google understand what you are?</h2>
        <p>
          Structured data, or schema markup, labels your business, services, products, reviews and
          FAQs in a format search engines read directly. It can unlock rich results. Validate yours
          with our <Link href="/seo-tools/schema-checker/">Schema Checker</Link>.
        </p>

        <h2 id="s6">When to get help</h2>
        <p>
          If pages will not index, traffic dropped after a redesign or your site is slow despite
          fixes, it is time for a professional{" "}
          <Link href="/technical-seo/">technical SEO</Link> review.
        </p>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) return {};

  return {
    title: `${post.title} | RankEmpire`,
    description: post.lead,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = articles[slug];

  if (!post) {
    notFound();
  }

  const otherPosts = Object.values(articles).filter((a) => a.slug !== post.slug);

  return (
    <>
      {/* 1. Article Header */}
      <section className="ph" style={{ paddingBottom: "30px" }}>
        <div className="bgd"></div>
        <div className="wrap" style={{ maxWidth: "980px" }}>
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog/">Blog</Link>
            <span className="sep">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <span className="eyb pill" data-r>
            <i></i>{post.pill}
          </span>
          <h1 data-r>{post.title}</h1>
          <p className="lead" data-r>
            {post.lead}
          </p>
          <p style={{ marginTop: "18px", fontSize: "14px", color: "var(--mute)" }} data-r>
            By the RankEmpire team &middot;{" "}
            <time dateTime={post.date}>{post.dateFormatted}</time> &middot; {post.readTime}
          </p>
        </div>
      </section>

      {/* 2. Hero Banner Image */}
      <div className="wrap" style={{ maxWidth: "1100px" }}>
        <div className="phimg" style={{ aspectRatio: "21/9" }} data-r="s">
          <img src={`/img/${post.img}.webp`} alt="" loading="lazy" />
        </div>
      </div>

      {/* 3. Article Content with Side TOC */}
      <section className="sec" style={{ paddingTop: "50px" }}>
        <div className="wrap art" style={{ maxWidth: "1100px" }}>
          <aside className="toc" aria-label="Table of contents">
            <b>In this article</b>
            {post.toc.map((item, idx) => (
              <a href={item.href} key={idx}>
                {item.label}
              </a>
            ))}
            <div className="tc">
              <strong>Need help?</strong>
              <p>Get a free SEO audit from our team.</p>
              <Link className="btn ac sm" href="/contact-us/">
                Get my audit
                <ArrowIcon />
              </Link>
            </div>
          </aside>

          <article className="prose" data-r>
            {post.content}

            {/* Author Card */}
            <div
              className="card"
              style={{
                marginTop: "40px",
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <svg
                style={{ width: "48px", height: "48px", flex: "none" }}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <rect width="32" height="32" fill="#0b0b0c" />
                <path d="M7 21.5 6 11l5 4 5-7.5 5 7.5 5-4-1 10.5Z" fill="#ff3d2e" />
                <rect x="7" y="23" width="18" height="2.6" fill="#fff" />
              </svg>
              <div>
                <b style={{ color: "var(--ink)" }}>RankEmpire team</b>
                <p style={{ margin: 0 }}>
                  Strategists, technical specialists and writers who run SEO programs for US
                  businesses.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 4. Keep Reading Section */}
      <section className="sec tight">
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Keep reading</span>
            <h2 className="h2">More SEO guides</h2>
          </div>
          <div className="posts" data-stagger>
            {otherPosts.map((p) => (
              <Link className="post" href={`/blog/${p.slug}/`} key={p.slug}>
                <div className="im">
                  <img src={`/img/${p.img}.webp`} alt="" loading="lazy" />
                  <em>{p.pill}</em>
                </div>
                <div className="tx">
                  <span className="meta">
                    {p.readTime} &middot; RankEmpire team
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.lead}</p>
                  <span className="tlink">Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection />
    </>
  );
}
