import React from "react";
import Link from "next/link";
import { locations } from "@/data";

export default function LocationsSection() {
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="sh" data-r>
          <span className="eyb">Locations</span>
          <h2 className="h2">Local SEO across 17 US metros.</h2>
          <p>City-specific strategies built around how each market searches.</p>
        </div>

        <div className="chips" data-r>
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
              {loc.name}, {loc.st}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
