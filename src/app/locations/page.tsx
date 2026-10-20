import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/sections/CTASection";
import { locations } from "@/data";

export const metadata: Metadata = {
  title: "Locations: Local SEO Agency Across 17 US Metros | RankEmpire",
  description:
    "Explore our local SEO hubs across the United States. Local SEO, Google Business Profile optimization and neighborhood rankings in 17 major metros.",
  alternates: {
    canonical: "/locations/",
  },
};

export default function LocationsHubPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/locations/", label: "Locations" },
        ]}
        h1="Local SEO agency across <em>17 US metros</em>"
        sub="From New York to Los Angeles, we help local businesses dominate the map pack, outrank competitors and capture nearby customers."
        img="city"
        pills={locations.slice(0, 4).map((l) => l.name)}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-lines>
              Our metro hubs
            </h2>
            <p data-r>City-specific strategies for America&apos;s most competitive markets.</p>
          </div>

          <div className="links-grid" data-stagger>
            {locations.map((loc) => (
              <Link href={`/locations/${loc.slug}/`} key={loc.slug}>
                <span>SEO Company in {loc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your city?"
        sub="We rank businesses across all 50 states. Book a free consultation to review your local market."
      />
    </>
  );
}
