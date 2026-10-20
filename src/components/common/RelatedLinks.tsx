import React from "react";
import Link from "next/link";
import { services, packages, industries, tools, locations, blogPosts } from "@/data";

// Helper to resolve title from slug
function getLinkTitle(slug: string): string {
  const clean = slug.replace(/^\/|\/$/g, "");
  if (!clean) return "Home";
  if (services[clean]) return services[clean].name;
  if (packages[clean]) return packages[clean].name;

  if (clean.startsWith("seo-for-")) {
    const indSlug = clean.replace("seo-for-", "");
    const ind = industries.find((i) => i.slug === indSlug);
    if (ind) return `SEO for ${ind.name}`;
  }

  if (clean.startsWith("locations/")) {
    const citySlug = clean.replace("locations/", "");
    const loc = locations.find((l) => l.slug === citySlug);
    if (loc) return `SEO Company in ${loc.name}`;
  }

  if (clean.startsWith("seo-tools/")) {
    const toolSlug = clean.replace("seo-tools/", "");
    const tool = tools.find((t) => t.slug === toolSlug);
    if (tool) return tool.name;
  }

  if (clean.startsWith("blog/")) {
    const blogSlug = clean.replace("blog/", "");
    const post = blogPosts.find((b) => b.slug === blogSlug);
    if (post) return post.title;
  }

  const staticNames: Record<string, string> = {
    "seo-services": "SEO Services",
    "industries": "Industries We Serve",
    "case-studies": "Case Studies",
    "blog": "SEO Blog",
    "seo-tools": "SEO Tools",
    "about-us": "About Us",
    "contact-us": "Contact Us",
    "locations": "Locations",
    "privacy-policy": "Privacy Policy",
    "terms": "Terms and Conditions",
  };

  return staticNames[clean] || clean.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default function RelatedLinks({
  slugs,
  title = "Keep exploring",
}: {
  slugs: string[];
  title?: string;
}) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="shead">
          <h2 className="h2" data-lines>
            {title}
          </h2>
        </div>
        <div className="links-grid" data-stagger>
          {slugs.map((slug, i) => {
            const clean = slug.replace(/^\/|\/$/g, "");
            return (
              <Link href={`/${clean}/`} key={i}>
                <span>{getLinkTitle(clean)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
