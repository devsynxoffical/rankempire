import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";
import { LineReveal } from "@/components/common/LineReveal";

export default function CTASection({
  title = "Ready to Rule Your Rankings?",
  sub = "Get a free SEO audit and a clear plan for your next 90 days.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="cta">
      <Image
        className="obj"
        src="/img/crown.webp"
        alt=""
        width={260}
        height={260}
        priority={false}
      />
      <LineReveal lines={title.split("<br>")} />
      <p data-r>{sub}</p>
      <div data-r>
        <Link className="btn acc" href="/contact-us/">
          Get my free audit
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
