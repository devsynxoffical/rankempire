import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/data";

export const metadata: Metadata = {
  title: "SEO Blog & Strategic Insights | RankEmpire",
  description:
    "Practical SEO strategy, technical explainers and local search checklists from the strategists at RankEmpire.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogHubPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog/", label: "SEO Blog" },
        ]}
        h1="Practical SEO strategy <em>that compounds</em>"
        sub="No recycled advice or vanity hacks. Actionable playbooks on local search, technical SEO and content architecture."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="blogg" data-stagger>
            {blogPosts.map((post, i) => (
              <Link
                className={`bc ${i === 0 ? "big" : ""}`}
                href={`/blog/${post.slug}/`}
                key={post.slug}
              >
                <div className="im">
                  <Image
                    src={`/img/${post.img}.webp`}
                    alt={post.title}
                    fill
                    sizes={i === 0 ? "(max-width: 980px) 100vw, 60vw" : "(max-width: 980px) 100vw, 30vw"}
                    style={{ objectFit: "cover" }}
                  />
                  <span className="ct">{post.cat}</span>
                </div>
                <div className="tx">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  {i === 0 && (
                    <span className="btn acc full" style={{ marginTop: "auto" }}>
                      Read article
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
