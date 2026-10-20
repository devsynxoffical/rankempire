import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LineReveal } from "@/components/common/LineReveal";
import { ArrowIcon } from "@/components/common/Icons";
import { blogPosts } from "@/data";

export default function BlogSection() {
  const [b0, b1, b2] = blogPosts;

  return (
    <section className="sec" style={{ paddingTop: "20px" }}>
      <div className="wrap">
        <div className="shead">
          <LineReveal lines={["Blog & Insights", "That Drive Rankings"]} />
          <div style={{ textAlign: "right" }}>
            <p data-r style={{ marginBottom: "16px", marginLeft: "auto" }}>
              Practical SEO strategy, checklists and explainers to help your business
              grow faster in search.
            </p>
            <Link className="btn acc" href="/blog/">
              See all articles
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="blogg" data-stagger>
          {/* Big Featured Post */}
          {b0 && (
            <Link className="bc big" href={`/blog/${b0.slug}/`}>
              <div className="im">
                <Image
                  src={`/img/${b0.img}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="tx">
                <span className="ct">{b0.cat}</span>
                <h3>{b0.title}</h3>
                <p>{b0.excerpt}</p>
                <span className="btn acc full" style={{ marginTop: "auto" }}>
                  Read article
                </span>
              </div>
            </Link>
          )}

          {/* Secondary Posts */}
          {[b1, b2].filter(Boolean).map((b) => (
            <Link className="bc" href={`/blog/${b.slug}/`} key={b.slug}>
              <div className="im">
                <Image
                  src={`/img/${b.img}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="ct">{b.cat}</span>
              </div>
              <div className="tx">
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
