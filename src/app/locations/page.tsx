import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import AuditForm from "@/components/common/AuditForm";
import CTASection from "@/components/sections/CTASection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";
import { PinIcon, InfoIcon } from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "Locations | RankEmpire",
  description:
    "City-specific SEO built around how each market searches, with local keyword research, neighborhood pages and map pack strategy.",
  alternates: {
    canonical: "/locations/",
  },
};

const cityList = [
  { slug: "new-york", name: "New York", sub: "New York · Manhattan, Brooklyn, Queens" },
  { slug: "los-angeles", name: "Los Angeles", sub: "California · Downtown LA, Santa Monica, Pasadena" },
  { slug: "chicago", name: "Chicago", sub: "Illinois · The Loop, Lincoln Park, Wicker Park" },
  { slug: "houston", name: "Houston", sub: "Texas · Downtown, The Heights, Katy" },
  { slug: "dallas", name: "Dallas", sub: "Texas · Uptown, Plano, Frisco" },
  { slug: "miami", name: "Miami", sub: "Florida · Brickell, Miami Beach, Coral Gables" },
  { slug: "phoenix", name: "Phoenix", sub: "Arizona · Scottsdale, Tempe, Mesa" },
  { slug: "san-diego", name: "San Diego", sub: "California · Downtown, La Jolla, North Park" },
  { slug: "san-francisco", name: "San Francisco", sub: "California · SoMa, Mission District, Marina" },
  { slug: "austin", name: "Austin", sub: "Texas · Downtown, South Congress, East Austin" },
  { slug: "atlanta", name: "Atlanta", sub: "Georgia · Buckhead, Midtown, Decatur" },
  { slug: "seattle", name: "Seattle", sub: "Washington · Capitol Hill, Ballard, Bellevue" },
  { slug: "denver", name: "Denver", sub: "Colorado · LoDo, Capitol Hill, Highlands" },
  { slug: "boston", name: "Boston", sub: "Massachusetts · Back Bay, Cambridge, Somerville" },
  { slug: "las-vegas", name: "Las Vegas", sub: "Nevada · The Strip, Henderson, Summerlin" },
  { slug: "charlotte", name: "Charlotte", sub: "North Carolina · Uptown, South End, Ballantyne" },
  { slug: "orlando", name: "Orlando", sub: "Florida · Downtown, Winter Park, Kissimmee" },
];

export default function LocationsHubPage() {
  return (
    <>
      {/* 1. Page Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Locations</span>
          </nav>
          <div className="phg">
            <div>
              <span className="eyb pill" data-r>
                <i></i>17 US metros
              </span>
              <h1 data-r>
                SEO company serving <span className="acc">17 US cities</span>
              </h1>
              <p className="lead" data-r>
                City-specific SEO built around how each market searches, with local keyword
                research, neighborhood pages and map pack strategy.
              </p>
              <div data-r>
                <AuditForm />
              </div>
            </div>

            <div className="vis" data-r="s">
              <div className="phimg">
                <img src="/img/city.webp" alt="US city skyline at dusk" fetchPriority="high" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. City Cards Grid */}
      <section className="sec" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="sh" data-r>
            <span className="eyb">Choose your city</span>
            <h2 className="h2">SEO services by city</h2>
          </div>

          <div className="g3" data-stagger>
            {cityList.map((c) => (
              <Link className="card" href={`/locations/${c.slug}/`} key={c.slug}>
                <span className="ic">
                  <PinIcon />
                </span>
                <h3>SEO Company in {c.name}</h3>
                <p>{c.sub}</p>
                <span className="tlink more">View {c.name}</span>
              </Link>
            ))}
          </div>

          <div className="note" style={{ marginTop: "24px" }}>
            <InfoIcon />
            <span>
              We publish city pages only where we can add real local insight. New city and industry
              pages are added with unique local content, never mass-produced templates.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Verified Results */}
      <ResultsOvertake
        badge="Metro SEO results"
        title={
          <>
            Compounding organic traffic in{" "}
            <span className="ip" aria-hidden="true">
              <b>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </b>
              <i>&rsaquo;&rsaquo;&rsaquo;</i>
            </span>{" "}
            every major US market
          </>
        }
        sub={
          <>
            From local map packs to metro-wide dominance. Real Google Search Console performance from clients across the country.
          </>
        }
      />

      {/* 4. Six Commitments Trust Section */}
      <TrustSection />

      {/* 5. CTA */}
      <CTASection
        title="Your city not listed?"
        sub="We work with businesses across the US. Get a free audit for your market."
      />
    </>
  );
}
