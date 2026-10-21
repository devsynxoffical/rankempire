import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StackSection from "@/components/sections/StackSection";
import ResultsSection from "@/components/sections/ResultsSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import ServicesBento from "@/components/sections/ServicesBento";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesTabs from "@/components/sections/IndustriesTabs";
import TrustSection from "@/components/sections/TrustSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PricingSection from "@/components/sections/PricingSection";
import ToolsSection from "@/components/sections/ToolsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { faqHome } from "@/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Platform logo ribbon */}
      <StackSection />

      {/* 3. Search Console proof */}
      <ResultsSection />

      {/* 4. The opportunity */}
      <OpportunitySection />

      {/* 5 & 6. Core services bento & specialist services */}
      <ServicesBento />

      {/* 7. How it works */}
      <ProcessSection />

      {/* 8. Industries by category */}
      <IndustriesTabs />

      {/* 9. Pinned testimonials */}
      <TrustSection />

      {/* 10. Why RankEmpire */}
      <WhyUsSection />

      {/* 11. Transparent pricing */}
      <PricingSection />

      {/* 12. Free SEO tools */}
      <ToolsSection />

      {/* 13. Metros */}
      <LocationsSection />

      {/* 14. Guides & blog */}
      <BlogSection />

      {/* 15. FAQ */}
      <FAQSection items={faqHome.slice(0, 8)} />

      {/* 16. CTA Band */}
      <CTASection />
    </>
  );
}
