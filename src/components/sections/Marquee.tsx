import React from "react";

export default function Marquee({
  items = [
    "Local SEO",
    "Technical SEO",
    "Link Building",
    "Content SEO",
    "E-commerce SEO",
    "SaaS SEO",
    "Google Business Profile",
    "SEO Audits",
  ],
}: {
  items?: string[];
}) {
  return (
    <div className="marq" aria-hidden="true">
      <div className="tr">
        {items.concat(items).map((item, i) => (
          <span className="it" key={i}>
            <i>/</i>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
