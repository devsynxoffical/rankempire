"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, StarSparkIcon, MailIcon, ClockIcon, PinIcon } from "@/components/common/Icons";
import { LineReveal } from "@/components/common/LineReveal";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { BRAND_EMAIL, services, serviceOrderCore, serviceOrderSvc, faqHome } from "@/data";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    service: "",
    message: "",
  });

  const allServices = serviceOrderCore
    .concat(serviceOrderSvc)
    .map((slug) => services[slug]?.name || slug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nService: ${formData.service || "Not sure yet"}\n\nGoals/Message:\n${formData.message}`;

    window.location.href = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(
      "Free SEO audit request"
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="ph l" style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <nav className="crumb" data-r>
            <Link href="/">Home</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Contact Us</span>
          </nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <h1 data-r>
              Contact us <em>today</em>
            </h1>
            <p data-r style={{ maxWidth: "360px", color: "var(--mute)", textAlign: "right" }}>
              Tell us about your business and goals. We reply within one business day with next steps
              and a free audit offer.
            </p>
          </div>
        </div>
      </section>

      {/* Form Split Section */}
      <section style={{ paddingBottom: "clamp(70px,9vw,120px)" }}>
        <div className="wrap split" style={{ alignItems: "stretch" }}>
          <form className={`form ${submitted ? "sent" : ""}`} onSubmit={handleSubmit} data-r>
            <div className="two">
              <label>
                First name
                <input
                  type="text"
                  required
                  placeholder="Please enter your name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </label>
              <label>
                Last name
                <input
                  type="text"
                  placeholder="Please enter your last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </label>
            </div>

            <div className="two">
              <label>
                Email
                <input
                  type="email"
                  required
                  placeholder="Please enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>
              <label>
                Website
                <input
                  type="text"
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </label>
            </div>

            <label>
              Select service
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                {allServices.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                placeholder="Tell us about your business, your market and your goals"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </label>

            <button className="btn acc full" type="submit">
              Send message
              <ArrowIcon />
            </button>

            <div className="ok">
              Your email app has opened with your message. Press send and we will reply within one
              business day.
            </div>
          </form>

          {/* Right image */}
          <div
            className="phimg"
            data-r="s"
            style={{
              aspectRatio: "auto",
              minHeight: "520px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/img/contact.webp"
              alt="RankEmpire SEO team"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* We would love to hear from you */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead c">
            <LineReveal lines={["We would love to hear from you"]} />
          </div>

          <div className="g4" data-stagger>
            <a className="box bg" href={`mailto:${BRAND_EMAIL}`} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  margin: "0 auto 18px",
                  color: "var(--acc)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <MailIcon size={30} />
              </div>
              <h3>{BRAND_EMAIL}</h3>
              <p>Pricing, plans and new projects</p>
            </a>

            <Link className="box bg" href="/seo-tools/seo-audit-tool/" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  margin: "0 auto 18px",
                  color: "var(--acc)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <StarSparkIcon className="ic" />
              </div>
              <h3>Free SEO audit</h3>
              <p>Start with a review of your site</p>
            </Link>

            <Link className="box bg" href="/locations/" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  margin: "0 auto 18px",
                  color: "var(--acc)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <PinIcon size={30} />
              </div>
              <h3>Across the US</h3>
              <p>Remote-first, serving 17 metros</p>
            </Link>

            <div className="box bg" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  margin: "0 auto 18px",
                  color: "var(--acc)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <ClockIcon size={30} />
              </div>
              <h3>Mon to Fri</h3>
              <p>9am to 6pm Eastern Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        items={faqHome}
        tabs={true}
        title="Frequently Asked Questions"
        sub="Straight answers about how RankEmpire works"
      />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
