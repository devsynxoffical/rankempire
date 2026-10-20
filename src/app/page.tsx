import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import IntroSection from "@/components/sections/IntroSection";
import StackSection from "@/components/sections/StackSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ServicesSticky from "@/components/sections/ServicesSticky";
import PlaybooksSection from "@/components/sections/PlaybooksSection";
import TrustSection from "@/components/sections/TrustSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import { faqHome } from "@/data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <IntroSection />
      <StackSection />
      <ProcessSection />
      <ValuesSection />
      <ServicesSticky />
      <PlaybooksSection />
      <TrustSection />
      <PricingSection />
      <FAQSection items={faqHome} tabs={true} />
      <BlogSection />
      <CTASection />
    </>
  );
}
