import { MetadataRoute } from "next";
import {
  SITE_URL,
  services,
  packages,
  industries,
  locations,
  tools,
  blogPosts,
} from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "seo-company",
    "seo-services",
    "about-us",
    "our-team",
    "case-studies",
    "contact-us",
    "privacy-policy",
    "terms",
    "seo-packages",
    "industries",
    "locations",
    "seo-tools",
    "blog",
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}/${path ? path + "/" : ""}`,
    lastModified: now,
    changeFrequency: path === "" || path === "blog" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Services
  Object.keys(services).forEach((slug) => {
    if (slug !== "seo-services" && slug !== "seo-company") {
      entries.push({
        url: `${SITE_URL}/${slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  });

  // Packages
  Object.keys(packages).forEach((key) => {
    if (key !== "seo-packages") {
      entries.push({
        url: `${SITE_URL}/${key}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  });

  // Industries
  industries.forEach((ind) => {
    entries.push({
      url: `${SITE_URL}/seo-for-${ind.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  // Locations
  locations.forEach((loc) => {
    entries.push({
      url: `${SITE_URL}/locations/${loc.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  // Tools
  tools.forEach((tool) => {
    entries.push({
      url: `${SITE_URL}/seo-tools/${tool.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // Blog
  blogPosts.forEach((post) => {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return entries;
}
