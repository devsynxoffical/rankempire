"use client";

import React, { useState, useEffect } from "react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mopen");
    } else {
      document.body.classList.remove("mopen");
    }
  }, [mobileOpen]);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/seo-services/", label: "Services" },
    { href: "/industries/", label: "Industries", opt: true },
    { href: "/case-studies/", label: "Results" },
    { href: "/seo-packages/", label: "Pricing" },
    { href: "/seo-tools/", label: "Tools", opt: true },
    { href: "/blog/", label: "Blog", opt: true },
    { href: "/about-us/", label: "About" },
  ];

  return (
    <>
      <header className="nav">
        <div className="in">
          <Link href="/" className="logo" aria-label="RankEmpire home">
            <BrandMark />
            RankEmpire
          </Link>

          <nav className="links" aria-label="Main">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href.replace(/\/$/, ""));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${item.opt ? "opt" : ""} ${isActive ? "on" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mega Menu Dropdown */}
            <div className="dd">
              <button type="button" aria-haspopup="true">
                All Pages <ChevronIcon />
              </button>
              <div className="mega" role="menu">
                {/* Column 1: Company */}
                <div>
                  <h6>Company</h6>
                  <Link href="/">Home</Link>
                  <Link href="/seo-company/">SEO Company</Link>
                  <Link href="/about-us/">About Us</Link>
                  <Link href="/our-team/">Our Team</Link>
                  <Link href="/case-studies/">Case Studies</Link>
                  <Link href="/blog/">SEO Blog</Link>
                  <Link href="/contact-us/">Contact Us</Link>
                </div>

                {/* Column 2: Core Services */}
                <div>
                  <h6>Core services</h6>
                  <Link href="/seo-services/">SEO Services</Link>
                  {serviceOrderCore.map((slug) => (
                    <Link key={slug} href={`/${slug}/`}>
                      {services[slug]?.name || slug}
                    </Link>
                  ))}
                </div>

                {/* Column 3: SEO Services */}
                <div>
                  <h6>SEO services</h6>
                  {serviceOrderSvc.map((slug) => (
                    <Link key={slug} href={`/${slug}/`}>
                      {services[slug]?.name || slug}
                    </Link>
                  ))}
                </div>

                {/* Column 4: Packages */}
                <div>
                  <h6>Packages</h6>
                  <Link href="/seo-packages/">SEO Packages</Link>
                  <Link href="/seo-packages/local-seo/">Local SEO Packages</Link>
                  <Link href="/seo-packages/ecommerce-seo/">E-commerce SEO Packages</Link>
                  <Link href="/seo-packages/saas-seo/">SaaS SEO Packages</Link>
                </div>

                {/* Column 5: Industries */}
                <div>
                  <h6>Industries</h6>
                  {industries.slice(0, 8).map((ind) => (
                    <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                      SEO for {ind.name}
                    </Link>
                  ))}
                  <Link className="more" href="/industries/">
                    All 45 industries
                  </Link>
                </div>

                {/* Column 6: Tools */}
                <div>
                  <h6>Tools</h6>
                  <Link href="/seo-tools/">SEO Tools</Link>
                  {tools.slice(0, 7).map((tool) => (
                    <Link key={tool.slug} href={`/seo-tools/${tool.slug}/`}>
                      {tool.name}
                    </Link>
                  ))}
                  <Link className="more" href="/seo-tools/">
                    All 11 tools
                  </Link>
                </div>

                {/* Column 7: Locations */}
                <div>
                  <h6>Locations</h6>
                  {locations.slice(0, 9).map((loc) => (
                    <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
                      SEO Company in {loc.name}
                    </Link>
                  ))}
                  <Link className="more" href="/locations/">
                    All 17 cities
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="ncta">
            <Link className="btn acc" href="/contact-us/">
              Contact Us
              <ArrowIcon />
            </Link>
            <button
              className="burger"
              type="button"
              aria-label="Menu"
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

      {/* Mobile slide-out drawer */}
      <div className={`mnav ${mobileOpen ? "open" : ""}`} aria-label="Mobile menu">
        <Link href="/">Home</Link>
        <Link href="/seo-services/">Services</Link>
        <Link href="/industries/">Industries</Link>
        <Link href="/case-studies/">Results</Link>
        <Link href="/seo-packages/">Pricing</Link>
        <Link href="/seo-tools/">Tools</Link>
        <Link href="/blog/">Blog</Link>
        <Link href="/about-us/">About</Link>
        <Link href="/contact-us/">Contact</Link>

        <details>
          <summary>Services</summary>
          {serviceOrderCore.concat(serviceOrderSvc).map((slug) => (
            <Link key={slug} href={`/${slug}/`}>
              {services[slug]?.name || slug}
            </Link>
          ))}
        </details>

        <details>
          <summary>Packages</summary>
          {Object.entries(packages).map(([slug, pkg]) => (
            <Link key={slug} href={`/${slug}/`}>
              {pkg.name}
            </Link>
          ))}
        </details>

        <details>
          <summary>Industries</summary>
          <Link href="/industries/">Industries We Serve</Link>
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
              SEO for {ind.name}
            </Link>
          ))}
        </details>

        <details>
          <summary>SEO Tools</summary>
          <Link href="/seo-tools/">SEO Tools</Link>
          {tools.map((tool) => (
            <Link key={tool.slug} href={`/seo-tools/${tool.slug}/`}>
              {tool.name}
            </Link>
          ))}
        </details>

        <details>
          <summary>Locations</summary>
          <Link href="/locations/">Locations</Link>
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
              SEO Company in {loc.name}
            </Link>
          ))}
        </details>

        <div style={{ marginTop: "28px" }}>
          <Link className="btn acc" href="/contact-us/">
            Get a free audit
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
