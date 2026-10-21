"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark, ArrowIcon, ChevronIcon } from "@/components/common/Icons";
import {
  services,
  serviceOrderCore,
  serviceOrderSvc,
  packages,
  industries,
  tools,
  locations,
} from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("mopen", mobileOpen);
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 140);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const coreIcons: Record<string, React.ReactNode> = {
    "local-seo": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    "ecommerce-seo": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 8h14l-1 12H6L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    "saas-seo": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M14 4c3 0 6 3 6 6l-7 7-6-6 7-7Z" />
        <circle cx="14.5" cy="9.5" r="1.5" />
      </svg>
    ),
    "technical-seo": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z" />
      </svg>
    ),
    "seo-audit": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    ),
    "google-business-profile-seo": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 10h16v10H4zM3 6l2-3h14l2 3v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
      </svg>
    ),
  };

  return (
    <>
      <header className="hdr">
        <div className="in">
          <Link href="/" className="logo" aria-label="RankEmpire home">
            <BrandMark />
            RankEmpire
          </Link>

          <nav className="mnu" aria-label="Main">
            {/* 1. Services Dropdown */}
            <div
              className={`mi ${openDropdown === "services" ? "op" : ""}`}
              onPointerEnter={() => handleMouseEnter("services")}
              onPointerLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "services"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("services")}
              >
                Services
                <ChevronIcon />
              </button>
              <div className="dd" role="menu">
                <div
                  className="ddg"
                  style={{ gridTemplateColumns: "1.35fr .9fr .85fr" }}
                >
                  <div>
                    <h6>Core SEO services</h6>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2px",
                      }}
                    >
                      {serviceOrderCore.map((slug) => (
                        <Link key={slug} className="dl" href={`/${slug}/`}>
                          <span className="ic">{coreIcons[slug] || coreIcons["seo-audit"]}</span>
                          <span>
                            <b>{services[slug]?.name || slug}</b>
                            <span>{services[slug]?.sub?.slice(0, 32) || "Expert SEO strategy"}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="dsl">
                    <h6>Specialist services</h6>
                    {serviceOrderSvc.concat(["link-building", "content-seo"]).map((slug) => (
                      <Link key={slug} href={`/${slug}/`}>
                        {services[slug]?.name || slug}
                      </Link>
                    ))}
                  </div>

                  <div className="dpro">
                    <span className="eyb" style={{ color: "#ff8a7a" }}>
                      Free
                    </span>
                    <b>Get a free SEO audit</b>
                    <p>
                      We review your site, rankings and competitors and send a
                      prioritized plan within 2 business days.
                    </p>
                    <Link className="btn ac sm" href="/contact-us/">
                      Request audit
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
                <div className="dfoot">
                  <span>18 SEO services for local, e-commerce and SaaS brands</span>
                  <Link className="tlink" href="/seo-services/">
                    All SEO services
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Industries Dropdown */}
            <div
              className={`mi ${openDropdown === "industries" ? "op" : ""}`}
              onPointerEnter={() => handleMouseEnter("industries")}
              onPointerLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "industries"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("industries")}
              >
                Industries
                <ChevronIcon />
              </button>
              <div
                className="dd"
                role="menu"
                style={{ width: "min(1180px, calc(100vw - 32px))" }}
              >
                <div className="dsl dcols">
                  <h6>Home Services</h6>
                  {industries
                    .filter((ind) => ind.cat === "Home Services")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Medical and Health</h6>
                  {industries
                    .filter((ind) => ind.cat === "Medical and Health")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Legal</h6>
                  {industries
                    .filter((ind) => ind.cat === "Legal")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Automotive</h6>
                  {industries
                    .filter((ind) => ind.cat === "Automotive")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Food and Hospitality</h6>
                  {industries
                    .filter((ind) => ind.cat === "Food and Hospitality")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Professional Services</h6>
                  {industries
                    .filter((ind) => ind.cat === "Professional Services")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Real Estate and Property</h6>
                  {industries
                    .filter((ind) => ind.cat === "Real Estate and Property")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}

                  <h6>Beauty and Fitness</h6>
                  {industries
                    .filter((ind) => ind.cat === "Beauty and Fitness" || ind.cat === "Beauty, Fitness and Lifestyle")
                    .map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        {ind.name}
                      </Link>
                    ))}
                </div>
                <div className="dfoot">
                  <span>SEO strategies for 45 industries</span>
                  <Link className="tlink" href="/industries/">
                    All industries
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Pricing Dropdown */}
            <div
              className={`mi ${openDropdown === "pricing" ? "op" : ""}`}
              onPointerEnter={() => handleMouseEnter("pricing")}
              onPointerLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "pricing"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("pricing")}
              >
                Pricing
                <ChevronIcon />
              </button>
              <div className="dd sm" role="menu">
                <div className="ddg">
                  <Link className="dl" href="/seo-packages/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 12V4h8l10 10-8 8L3 12Z" />
                        <circle cx="7.5" cy="8.5" r="1.5" />
                      </svg>
                    </span>
                    <span>
                      <b>SEO Packages</b>
                      <span>Compare all plans and pricing</span>
                    </span>
                  </Link>
                  <Link className="dl" href="/seo-packages/local-seo/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </span>
                    <span>
                      <b>Local SEO Packages</b>
                      <span>Map pack and Google Business Profile</span>
                    </span>
                  </Link>
                  <Link className="dl" href="/seo-packages/ecommerce-seo/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 8h14l-1 12H6L5 8Z" />
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                      </svg>
                    </span>
                    <span>
                      <b>E-commerce SEO Packages</b>
                      <span>Organic revenue for online stores</span>
                    </span>
                  </Link>
                  <Link className="dl" href="/seo-packages/saas-seo/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M14 4c3 0 6 3 6 6l-7 7-6-6 7-7Z" />
                        <circle cx="14.5" cy="9.5" r="1.5" />
                      </svg>
                    </span>
                    <span>
                      <b>SaaS SEO Packages</b>
                      <span>Pipeline from organic search</span>
                    </span>
                  </Link>
                </div>
                <div className="dfoot">
                  <span>Month to month after onboarding</span>
                  <Link className="tlink" href="/seo-packages/">
                    Compare packages
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Free tools Dropdown */}
            <div
              className={`mi ${openDropdown === "tools" ? "op" : ""}`}
              onPointerEnter={() => handleMouseEnter("tools")}
              onPointerLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "tools"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("tools")}
              >
                Free tools
                <ChevronIcon />
              </button>
              <div
                className="dd"
                role="menu"
                style={{ width: "min(760px, calc(100vw - 32px))" }}
              >
                <div
                  className="ddg"
                  style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                  {tools.slice(0, 10).map((tool) => (
                    <Link
                      key={tool.slug}
                      className="dl"
                      href={`/seo-tools/${tool.slug}/`}
                    >
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-4-4" />
                        </svg>
                      </span>
                      <span>
                        <b>{tool.name}</b>
                        <span>{tool.desc?.slice(0, 36) || "Run SEO test"}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="dfoot">
                  <span>11 free tools, private and instant</span>
                  <Link className="tlink" href="/seo-tools/">
                    All SEO tools
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Locations Dropdown */}
            <div
              className={`mi opt ${openDropdown === "locations" ? "op" : ""}`}
              onPointerEnter={() => handleMouseEnter("locations")}
              onPointerLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "locations"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("locations")}
              >
                Locations
                <ChevronIcon />
              </button>
              <div
                className="dd"
                role="menu"
                style={{ width: "min(720px, calc(100vw - 32px))" }}
              >
                <div
                  className="ddg dsl"
                  style={{
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2px 16px",
                  }}
                >
                  {locations.map((loc) => (
                    <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
                      SEO Company in {loc.name}
                    </Link>
                  ))}
                </div>
                <div className="dfoot">
                  <span>Local SEO across 17 US metros</span>
                  <Link className="tlink" href="/locations/">
                    All locations
                  </Link>
                </div>
              </div>
            </div>

            {/* 6. Results Link */}
            <div className="mi">
              <Link href="/case-studies/">Results</Link>
            </div>

            {/* 7. Company Dropdown (Our Team is removed per user request) */}
            <div
              className={`mi ${openDropdown === "company" ? "op" : ""}`}
              onPointerEnter={() => handleMouseEnter("company")}
              onPointerLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "company"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("company")}
              >
                Company
                <ChevronIcon />
              </button>
              <div className="dd sm" role="menu">
                <div className="ddg" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <Link className="dl" href="/about-us/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
                      </svg>
                    </span>
                    <span>
                      <b>About Us</b>
                      <span>Who we are and how we work</span>
                    </span>
                  </Link>

                  <Link className="dl" href="/case-studies/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7" />
                      </svg>
                    </span>
                    <span>
                      <b>Case Studies</b>
                      <span>Playbooks and SEO results</span>
                    </span>
                  </Link>

                  <Link className="dl" href="/blog/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 3h7l5 5v13H7z" />
                        <path d="M14 3v5h5M10 13h6M10 17h6" />
                      </svg>
                    </span>
                    <span>
                      <b>SEO Blog</b>
                      <span>Guides and SEO insights</span>
                    </span>
                  </Link>

                  <Link className="dl" href="/seo-company/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span>
                      <b>SEO Company</b>
                      <span>Why choose RankEmpire</span>
                    </span>
                  </Link>

                  <Link className="dl" href="/contact-us/">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="3" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </span>
                    <span>
                      <b>Contact Us</b>
                      <span>Talk to a strategist</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="rt">
            <Link className="btn ln sm" href="/seo-packages/">
              Pricing
            </Link>
            <Link className="btn dk sm" href="/contact-us/">
              Free SEO audit
              <ArrowIcon />
            </Link>
            <button
              className="burger"
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <i></i>
              <i></i>
              <i></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <div className={`mob ${mobileOpen ? "open" : ""}`} aria-label="Mobile menu">
        <details>
          <summary>Services</summary>
          <div>
            <Link href="/seo-services/">All SEO Services</Link>
            {serviceOrderCore.concat(serviceOrderSvc).map((slug) => (
              <Link key={slug} href={`/${slug}/`}>
                {services[slug]?.name || slug}
              </Link>
            ))}
          </div>
        </details>

        <details>
          <summary>Industries</summary>
          <div>
            <Link href="/industries/">Industries We Serve</Link>
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                SEO for {ind.name}
              </Link>
            ))}
          </div>
        </details>

        <details>
          <summary>Pricing</summary>
          <div>
            <Link href="/seo-packages/">SEO Packages</Link>
            <Link href="/seo-packages/local-seo/">Local SEO Packages</Link>
            <Link href="/seo-packages/ecommerce-seo/">E-commerce SEO Packages</Link>
            <Link href="/seo-packages/saas-seo/">SaaS SEO Packages</Link>
          </div>
        </details>

        <details>
          <summary>Free tools</summary>
          <div>
            <Link href="/seo-tools/">SEO Tools</Link>
            {tools.map((t) => (
              <Link key={t.slug} href={`/seo-tools/${t.slug}/`}>
                {t.name}
              </Link>
            ))}
          </div>
        </details>

        <details>
          <summary>Locations</summary>
          <div>
            <Link href="/locations/">Locations</Link>
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
                {loc.name}
              </Link>
            ))}
          </div>
        </details>

        <details>
          <summary>Company</summary>
          <div>
            <Link href="/about-us/">About Us</Link>
            <Link href="/case-studies/">Case Studies</Link>
            <Link href="/blog/">SEO Blog</Link>
            <Link href="/seo-company/">SEO Company</Link>
            <Link href="/contact-us/">Contact Us</Link>
          </div>
        </details>

        <Link href="/case-studies/">Results</Link>
        <Link className="btn ac lg" href="/contact-us/">
          Get a free SEO audit
          <ArrowIcon />
        </Link>
      </div>
    </>
  );
}
