"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  services,
  serviceOrderCore,
  serviceOrderSvc,
  industries,
  locations,
  tools,
} from "@/data";

export default function GroovoryDoors() {
  const [openDoor, setOpenDoor] = useState<number | null>(null);

  const doors = [
    {
      title: "Services",
      num: "01",
      bg: "#f2711c",
      desc: "18 SEO services for local, e-commerce and SaaS brands, from audits to link building.",
      hubHref: "/seo-services/",
      allLabel: "All services",
      links: serviceOrderCore.concat(serviceOrderSvc.slice(0, 4)).map((s) => ({
        label: services[s]?.name || s,
        href: `/${s}/`,
      })),
    },
    {
      title: "Industries",
      num: "02",
      bg: "#9b1fe8",
      desc: "45 industry playbooks with their own keywords, page types and trust signals.",
      hubHref: "/industries/",
      allLabel: "All industries",
      links: industries.slice(0, 10).map((ind) => ({
        label: ind.name,
        href: `/seo-for-${ind.slug}/`,
      })),
    },
    {
      title: "Locations",
      num: "03",
      bg: "#1554f0",
      desc: "Local SEO strategies for 17 US metros, built around how each city searches.",
      hubHref: "/locations/",
      allLabel: "All locations",
      links: locations.slice(0, 10).map((loc) => ({
        label: loc.name,
        href: `/locations/${loc.slug}/`,
      })),
    },
    {
      title: "Free tools",
      num: "04",
      bg: "#0e9f5a",
      desc: "11 free SEO tools that run privately in your browser.",
      hubHref: "/seo-tools/",
      allLabel: "All free tools",
      links: tools.slice(0, 10).map((tool) => ({
        label: tool.name,
        href: `/seo-tools/${tool.slug}/`,
      })),
    },
  ];

  const handleDoorClick = (index: number) => {
    setOpenDoor((prev) => (prev === index ? null : index));
  };

  const handlePointerEnter = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth > 1024) {
      setOpenDoor(index);
    }
  };

  return (
    <section className="gv" aria-labelledby="gv-h">
      <div className="lft">
        <span
          className="sp"
          style={{ left: "12%", top: "16%" }}
          aria-hidden="true"
        >
          &#10033;
        </span>
        <span
          className="sp"
          style={{
            right: "14%",
            top: "12%",
            animationDirection: "reverse",
          }}
          aria-hidden="true"
        >
          &#10022;
        </span>
        <span
          className="sp"
          style={{
            left: "8%",
            bottom: "30%",
            animationDuration: "14s",
          }}
          aria-hidden="true"
        >
          &#10039;
        </span>
        <span
          className="sp"
          style={{ right: "10%", bottom: "34%" }}
          aria-hidden="true"
        >
          &#10035;
        </span>

        <span className="tag2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ marginRight: "6px" }}
          >
            <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Serving businesses across the US
        </span>

        <h2 id="gv-h">
          Explore
          <br />
          the Empire
        </h2>
        <p>Services, industries, cities and free tools. Pick a door.</p>

        <div className="line" aria-hidden="true">
          <b>01</b>
          <i>
            <span></span>
          </i>
          <b>04</b>
        </div>
      </div>

      <div className="pan">
        {doors.map((door, index) => {
          const isOpen = openDoor === index;
          return (
            <div
              key={door.num}
              className={`p ${isOpen ? "on" : ""}`}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-label={`Open ${door.title}`}
              onClick={() => handleDoorClick(index)}
              onPointerEnter={() => handlePointerEnter(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleDoorClick(index);
                }
              }}
            >
              <span className="vt" aria-hidden="true">
                {door.title}
              </span>
              <span className="nm" aria-hidden="true">
                {door.num}
              </span>

              <div className="body">
                <h3>{door.title}</h3>
                <p>{door.desc}</p>
                <div className="lk">
                  {door.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      tabIndex={isOpen ? 0 : -1}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  className="all"
                  href={door.hubHref}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={(e) => e.stopPropagation()}
                >
                  {door.allLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
