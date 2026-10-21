import React from "react";
import Link from "next/link";
import { ArrowIcon, SearchIcon, ChartIcon, PinIcon, LinkIcon, GlobeIcon, TagIcon } from "@/components/common/Icons";
import { tools } from "@/data";

export default function ToolsSection() {
  const toolIcons: Record<string, React.ReactNode> = {
    audit: <SearchIcon />,
    rank: <ChartIcon />,
    keyword: <TagIcon />,
    backlink: <LinkIcon />,
    serp: <GlobeIcon />,
    schema: <TagIcon />,
    sitemap: <GlobeIcon />,
    meta: <TagIcon />,
  };

  return (
    <section className="sec alt">
      <div className="wrap">
        <div className="shr">
          <div className="sh" data-r>
            <span className="eyb">Free SEO tools</span>
            <h2 className="h2">Check your SEO in seconds.</h2>
            <p>Free, private tools that run in your browser. No sign-up required.</p>
          </div>
          <div data-r>
            <Link className="btn ln" href="/seo-tools/">
              All 11 tools
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="g3" data-stagger>
          {tools.slice(0, 6).map((tool) => (
            <Link
              key={tool.slug}
              className="card"
              href={`/seo-tools/${tool.slug}/`}
            >
              <span className="ic">{toolIcons[tool.type] || <SearchIcon />}</span>
              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>
              <span className="tlink more">Open tool</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
