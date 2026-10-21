import React from "react";
import Link from "next/link";
import { ArrowIcon, ArrowUpRightIcon } from "@/components/common/Icons";
import { services, serviceOrderSvc } from "@/data";

export default function ServicesBento() {
  const bentoItems = [
    {
      slug: "local-seo",
      cls: "w3",
      kind: "map",
      tag: "Local SEO",
      title: "Win the map pack",
      desc: "Rank in the top three map results across your whole service area, not just next to your office.",
    },
    {
      slug: "technical-seo",
      cls: "w3",
      kind: "ring",
      tag: "Technical SEO",
      title: "Remove the ceiling",
      desc: "Crawlability, Core Web Vitals, structured data and site architecture fixed at the template level.",
    },
    {
      slug: "ecommerce-seo",
      cls: "",
      kind: "rich",
      tag: "E-commerce SEO",
      title: "Rank products that sell",
      desc: "Category pages, product schema and faceted navigation built for organic revenue.",
    },
    {
      slug: "content-seo",
      cls: "",
      kind: "nodes",
      tag: "Content SEO",
      title: "Own your topic",
      desc: "Topic clusters written by specialists that make your site the most useful answer.",
    },
    {
      slug: "link-building",
      cls: "",
      kind: "links",
      tag: "Link building",
      title: "Earn real authority",
      desc: "Editorial links from relevant, real websites. No networks, no shortcuts.",
    },
    {
      slug: "saas-seo",
      cls: "w4",
      kind: "bars",
      tag: "SaaS SEO",
      title: "Turn search into pipeline",
      desc: "Bottom-funnel pages first, then the topical authority that makes your whole domain rank for your category.",
    },
    {
      slug: "seo-audit",
      cls: "",
      kind: "ring",
      tag: "SEO audit",
      title: "Start with clarity",
      desc: "A prioritized 90-day roadmap ranked by revenue impact, walked through on a call.",
    },
  ];

  const specialistSlugs = serviceOrderSvc.concat([
    "google-business-profile-seo",
    "seo-company",
  ]);

  const renderVis = (kind: string) => {
    switch (kind) {
      case "map":
        return (
          <div className="grid9" aria-hidden="true">
            {Array.from({ length: 49 }).map((_, i) => (
              <i key={i}></i>
            ))}
          </div>
        );
      case "ring":
        return (
          <div style={{ textAlign: "center" }}>
            <div className="ring" style={{ "--off": "38" } as React.CSSProperties}>
              <svg viewBox="0 0 120 120">
                <circle className="tk" cx="60" cy="60" r="55" />
                <circle className="vl" cx="60" cy="60" r="55" />
              </svg>
              <b>89</b>
              <small>SITE HEALTH</small>
            </div>
            <div className="cwv">
              <span>LCP 1.8s</span>
              <span>INP 92ms</span>
              <span>CLS 0.02</span>
            </div>
          </div>
        );
      case "rich":
        return (
          <div className="rich">
            <span style={{ color: "#5f6368" }}>yourstore.com &rsaquo; products</span>
            <b>Linen Throw Blanket, Oatmeal</b>
            <span className="st">&#9733;&#9733;&#9733;&#9733;&#9733;</span>{" "}
            <span style={{ color: "#5f6368" }}>4.8 (212)</span>
            <div className="pr">
              <em>$89.00</em>
              <span>In stock</span>
              <span>Free shipping</span>
            </div>
          </div>
        );
      case "nodes":
        return (
          <div className="nodes">
            <svg viewBox="0 0 240 150">
              <path d="M120 75 L40 22" />
              <path d="M120 75 L200 22" />
              <path d="M120 75 L30 120" />
              <path d="M120 75 L210 124" />
              <path d="M120 75 L120 10" />
            </svg>
            <span className="n h">local seo</span>
            <span className="n" style={{ left: 0, top: "10px" }}>
              map pack
            </span>
            <span className="n" style={{ right: 0, top: "10px" }}>
              reviews
            </span>
            <span className="n" style={{ left: "-6px", bottom: "14px" }}>
              citations
            </span>
            <span className="n" style={{ right: "-6px", bottom: "10px" }}>
              gbp posts
            </span>
          </div>
        );
      case "bars":
        return (
          <div className="bars">
            {[22, 30, 34, 42, 58, 70, 86, 100].map((h, i) => (
              <i
                key={i}
                style={{ "--h": `${h}%` } as React.CSSProperties}
                className={i > 3 ? "a" : ""}
              ></i>
            ))}
          </div>
        );
      case "links":
        return (
          <div className="links3">
            <div>
              localnews.com <em>DR 71 &#10003;</em>
            </div>
            <div>
              industryguide.org <em>DR 64 &#10003;</em>
            </div>
            <div>
              chamber.org <em>DR 58 &#10003;</em>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Core Services Bento */}
      <section className="sec dark" id="services">
        <div className="wrap">
          <div className="shr">
            <div className="sh" data-r>
              <span className="eyb pill">
                <i></i>Core SEO services
              </span>
              <h2 className="h2" style={{ marginTop: "16px" }}>
                Everything search needs, under one roof.
              </h2>
              <p>
                One team handles the technical, content, local and authority work,
                so every month builds on the last.
              </p>
            </div>
            <div data-r>
              <Link className="btn ln" href="/seo-services/">
                View all SEO services
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="bento" data-stagger>
            {bentoItems.map((item) => (
              <Link
                key={item.slug}
                className={`card ${item.cls}`}
                href={`/${item.slug}/`}
              >
                <div className="vis" data-vis>
                  {renderVis(item.kind)}
                </div>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="tlink more" style={{ color: "#fff" }}>
                  Explore {item.tag.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Services List */}
      <section className="sec">
        <div className="wrap">
          <div className="shr">
            <div className="sh" data-r>
              <span className="eyb">Specialist services</span>
              <h2 className="h2">Add depth where your market demands it.</h2>
            </div>
            <div data-r>
              <Link className="btn ln" href="/seo-packages/">
                Compare SEO packages
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="slist" data-stagger>
            {specialistSlugs.map((slug, i) => {
              const svc = services[slug];
              if (!svc) return null;
              const subPreview =
                svc.sub && svc.sub.length > 80
                  ? svc.sub.slice(0, 80).split(" ").slice(0, -1).join(" ") + "..."
                  : svc.sub;

              return (
                <Link key={slug} href={`/${slug}/`}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <b>{svc.name}</b>
                    <span>{subPreview}</span>
                  </span>
                  <ArrowUpRightIcon />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
