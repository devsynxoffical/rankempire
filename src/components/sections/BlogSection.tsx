import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";
import { blogPosts } from "@/data";

export default function BlogSection() {
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="shr">
          <div className="sh" data-r>
            <span className="eyb">SEO blog</span>
            <h2 className="h2">Guides that drive rankings.</h2>
          </div>
          <div data-r>
            <Link className="btn ln" href="/blog/">
              All articles
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="posts" data-stagger>
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              className="post"
              href={`/blog/${post.slug}/`}
            >
              <div className="im">
                <Image
                  src={`/img/${post.img}.webp`}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <em>{post.cat}</em>
              </div>
              <div className="tx">
                <span className="meta">3 min read &middot; RankEmpire team</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="tlink">Read article</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
