import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import RelatedLinks from "@/components/common/RelatedLinks";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((b) => b.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | RankEmpire SEO Blog`,
    description: post.excerpt,
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
  const post = blogPosts.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts
    .filter((b) => b.slug !== post.slug)
    .map((b) => `blog/${b.slug}`);

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog/", label: "Blog" },
          { href: `/blog/${post.slug}/`, label: post.title },
        ]}
        h1={post.title}
        sub={post.excerpt}
        img={post.img}
        pills={[post.cat]}
      />

      <article className="sec" style={{ paddingTop: "20px" }}>
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      <RelatedLinks
        slugs={otherPosts.concat(["seo-services", "local-seo"])}
        title="More articles and services"
      />

      <CTASection />
    </>
  );
}
