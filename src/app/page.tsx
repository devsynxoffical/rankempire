import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import PointOfView from "@/components/sections/PointOfView";
import HowWeWorkBento from "@/components/sections/HowWeWorkBento";
import SignalBento from "@/components/sections/SignalBento";
import GroovoryDoors from "@/components/sections/GroovoryDoors";
import SpartanPricing from "@/components/sections/SpartanPricing";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { faqHome } from "@/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Neiden Hero with letter reveal, grain canvas, and marquee */}
      <HeroSection />

      {/* 2. Overtake verified results, Search Console window, dot grid & CTR chart */}
      <ResultsOvertake />

      {/* 3. Dark Point of view with scroll-driven word lighting and 5 disciplines tabs */}
      <PointOfView />

      {/* 4. How We Work bento with 3D objects, floating badges and counters */}
      <HowWeWorkBento />

      {/* 5. Signal Bento with 10 interactive tiles, live dashboard mock and hover effects */}
      <SignalBento />

      {/* 6. Groovory doors: Explore the Empire with 4 expandable colorful doors */}
      <GroovoryDoors />

      {/* 7. Spartan Pricing with spinning gear, pricing ticker, 10% discount toggle and paper texture cards */}
      <SpartanPricing />

      {/* 8. Six commitments trust section with dual parallax columns */}
      <TrustSection />

      {/* 9. SEO Company FAQ with plus-minus accordion */}
      <FAQSection items={faqHome.slice(0, 8)} />

      {/* 10. CTA band with v3-hero background */}
      <CTASection />
    </>
  );
}
