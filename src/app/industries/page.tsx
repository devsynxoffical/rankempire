"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuditForm from "@/components/common/AuditForm";
import CTASection from "@/components/sections/CTASection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import TrustSection from "@/components/sections/TrustSection";

interface IndustryItem {
  name: string;
  slug: string;
  cat: string;
}

const allIndustries: IndustryItem[] = [
  // Home Services
  { name: "Cleaning Companies", slug: "cleaning", cat: "Home Services" },
  { name: "Electricians", slug: "electricians", cat: "Home Services" },
  { name: "Fencing Companies", slug: "fencing-companies", cat: "Home Services" },
  { name: "Flooring Companies", slug: "flooring-companies", cat: "Home Services" },
  { name: "General Contractors", slug: "general-contractors", cat: "Home Services" },
  { name: "HVAC Companies", slug: "hvac", cat: "Home Services" },
  { name: "Landscaping Companies", slug: "landscaping", cat: "Home Services" },
  { name: "Locksmiths", slug: "locksmiths", cat: "Home Services" },
  { name: "Moving Companies", slug: "movers", cat: "Home Services" },
  { name: "Painting Contractors", slug: "painters", cat: "Home Services" },
  { name: "Pest Control Companies", slug: "pest-control", cat: "Home Services" },
  { name: "Plumbers", slug: "plumbers", cat: "Home Services" },
  { name: "Pool Service Companies", slug: "pool-service-companies", cat: "Home Services" },
  { name: "Roofing Companies", slug: "roofing", cat: "Home Services" },

  // Medical and Health
  { name: "Chiropractors", slug: "chiropractors", cat: "Medical and Health" },
  { name: "Dentists", slug: "dentists", cat: "Medical and Health" },
  { name: "Doctors and Medical Practices", slug: "doctors", cat: "Medical and Health" },
  { name: "Orthodontists", slug: "orthodontists", cat: "Medical and Health" },
  { name: "Plastic Surgeons", slug: "plastic-surgeons", cat: "Medical and Health" },
  { name: "Therapists and Counselors", slug: "therapists", cat: "Medical and Health" },
  { name: "Veterinarians", slug: "veterinarians", cat: "Medical and Health" },

  // Legal
  { name: "Lawyers", slug: "lawyers", cat: "Legal" },
  { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers", cat: "Legal" },

  // Automotive
  { name: "Auto Detailing Businesses", slug: "auto-detailing", cat: "Automotive" },
  { name: "Auto Repair Shops", slug: "auto-repair", cat: "Automotive" },
  { name: "Towing Companies", slug: "towing", cat: "Automotive" },

  // Food and Hospitality
  { name: "Bakeries", slug: "bakeries", cat: "Food and Hospitality" },
  { name: "Cafes", slug: "cafes", cat: "Food and Hospitality" },
  { name: "Florists", slug: "florists", cat: "Food and Hospitality" },
  { name: "Photographers", slug: "photographers", cat: "Food and Hospitality" },
  { name: "Restaurants", slug: "restaurants", cat: "Food and Hospitality" },
  { name: "Wedding Planners", slug: "wedding-planners", cat: "Food and Hospitality" },

  // Professional Services
  { name: "Accountants and CPAs", slug: "accountants", cat: "Professional Services" },
  { name: "Daycares and Preschools", slug: "daycares", cat: "Professional Services" },
  { name: "Financial Advisors", slug: "financial-advisors", cat: "Professional Services" },
  { name: "Insurance Agencies", slug: "insurance", cat: "Professional Services" },
  { name: "Tutors and Tutoring Centers", slug: "tutors", cat: "Professional Services" },

  // Real Estate and Property
  { name: "Home Builders", slug: "home-builders", cat: "Real Estate and Property" },
  { name: "Property Management Companies", slug: "property-management", cat: "Real Estate and Property" },
  { name: "Real Estate Agents and Brokerages", slug: "real-estate", cat: "Real Estate and Property" },

  // Beauty, Fitness and Lifestyle
  { name: "Barbershops", slug: "barbers", cat: "Beauty, Fitness and Lifestyle" },
  { name: "Gyms and Fitness Studios", slug: "gyms", cat: "Beauty, Fitness and Lifestyle" },
  { name: "Hair Salons", slug: "salons", cat: "Beauty, Fitness and Lifestyle" },
  { name: "Med Spas", slug: "med-spas", cat: "Beauty, Fitness and Lifestyle" },
  { name: "Yoga Studios", slug: "yoga-studios", cat: "Beauty, Fitness and Lifestyle" },
];

const categoryList = [
  "Home Services",
  "Medical and Health",
  "Legal",
  "Automotive",
  "Food and Hospitality",
  "Professional Services",
  "Real Estate and Property",
  "Beauty, Fitness and Lifestyle",
];

export default function IndustriesHubPage() {
  const [filterQuery, setFilterQuery] = useState("");

  const q = filterQuery.toLowerCase().trim();

  const filtered = allIndustries.filter((ind) => {
    if (!q) return true;
    return (
      ind.name.toLowerCase().includes(q) ||
      ind.slug.toLowerCase().includes(q) ||
      ind.cat.toLowerCase().includes(q)
    );
  });

  const hasMatches = filtered.length > 0;

  return (
    <>
      {/* 1. Page Header */}
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Industries We Serve</span>
          </nav>
          <div className="phg">
            <div>
              <span className="eyb pill" data-r>
                <i></i>45 industries
              </span>
              <h1 data-r>
                SEO for the industries we <span className="acc">know best</span>
              </h1>
              <p className="lead" data-r>
                Every industry searches differently. We build industry-specific SEO strategies with
                the keywords, page types, trust signals and local tactics that work in your market.
              </p>
              <div data-r>
                <AuditForm />
              </div>
            </div>

            <div className="vis" data-r="s">
              <div className="phimg">
                <img
                  src="/img/i-home.webp"
                  alt="Home service business owner"
                  fetchPriority="high"
                />
                <div className="tagc">
                  <span>Home Services</span>
                  <span>Medical and Health</span>
                  <span>Legal</span>
                  <span>Automotive</span>
                  <span>Food and Hospitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter & Categories List */}
      <section className="sec" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <label className="filter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <span className="sr-only">Search industries</span>
            <input
              type="search"
              placeholder="Search your industry, e.g. dentists"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
            />
          </label>

          <div id="indlist">
            {categoryList.map((cat) => {
              const items = filtered.filter((ind) => ind.cat === cat);
              if (items.length === 0) return null;

              return (
                <div key={cat} data-grp style={{ marginBottom: "34px" }}>
                  <h2 className="h3" style={{ marginBottom: "14px" }}>
                    {cat}
                  </h2>
                  <div className="linkgrid">
                    {items.map((ind) => (
                      <Link
                        key={ind.slug}
                        data-k={`${ind.name.toLowerCase()} ${ind.slug}`}
                        href={`/seo-for-${ind.slug}/`}
                      >
                        SEO for {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {!hasMatches && (
            <p className="empty" style={{ display: "block" }}>
              No match.{" "}
              <Link className="tlink" href="/contact-us/">
                Tell us about your industry
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Results Overtake Showcase */}
      <ResultsOvertake
        badge="Industry Takeovers"
        title="How we dominate organic search in competitive niches"
        sub="From local trades to healthcare and professional practices: how our clients overtake their local and national competition."
      />

      {/* Six Commitments Trust Section */}
      <TrustSection />

      {/* 3. CTA */}
      <CTASection
        title="Do not see your industry?"
        sub="We work with many more business types. Get a free audit and an industry-specific plan."
      />
    </>
  );
}
