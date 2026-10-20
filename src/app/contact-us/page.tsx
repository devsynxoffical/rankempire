"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowIcon, MailIcon, ClockIcon, PinIcon } from "@/components/common/Icons";
import { BRAND_EMAIL, services, serviceOrderCore, serviceOrderSvc } from "@/data";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    service: "Local SEO",
    message: "",
  });

  const allServices = serviceOrderCore
    .concat(serviceOrderSvc)
    .map((slug) => services[slug]?.name || slug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website}\nService: ${formData.service}\n\nGoals/Message:\n${formData.message}`;

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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap" }}>
            <h1 data-r>
              Contact us <em>today</em>
            </h1>
            <p data-r style={{ maxWidth: "360px", color: "var(--mute)", textAlign: "right" }}>
              Tell us about your business and goals. We reply within one business day with next steps and a free audit offer.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(70px,9vw,120px)" }}>
        <div className="wrap split" style={{ alignItems: "stretch" }}>
          {/* Contact Form */}
          <form className={`form ${submitted ? "sent" : ""}`} onSubmit={handleSubmit} data-r>
            <div className="two">
              <label>
                First name
                <input
                  type="text"
                  required
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </label>
              <label>
                Last name
                <input
                  type="text"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </label>
            </div>

            <div className="two">
              <label>
                Work email
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>
              <label>
                Phone (optional)
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </label>
            </div>

            <div className="two">
              <label>
                Website URL
                <input
                  type="url"
                  required
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </label>
              <label>
                Service of interest
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {allServices.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              Tell us about your goals
              <textarea
                rows={4}
                placeholder="What challenges are you facing with search rankings, traffic or leads?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </label>

            <button className="btn acc" type="submit" style={{ alignSelf: "flex-start" }}>
              Request free audit
              <ArrowIcon />
            </button>

            <div className="ok">
              Thank you! Your request has been sent. We will review your site and reply within one business day.
            </div>
          </form>

          {/* Direct Details Side Box */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="box bg" data-r>
              <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>What happens next?</h3>
              <ol className="checks" style={{ paddingLeft: 0, listStyle: "none" }}>
                <li>1. We crawl your website and review your top local competitors.</li>
                <li>2. We prepare an honest audit finding the bottlenecks holding you back.</li>
                <li>3. We jump on a 20-minute call to share the prioritized roadmap.</li>
              </ol>
            </div>

            <div className="box dk" data-r>
              <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>Direct contact</h3>
              <div style={{ display: "grid", gap: "14px" }}>
                <a href={`mailto:${BRAND_EMAIL}`} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <MailIcon />
                  <span>{BRAND_EMAIL}</span>
                </a>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <ClockIcon />
                  <span>Monday - Friday, 9am - 6pm ET</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <PinIcon />
                  <span>Serving clients nationwide across the US</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
