import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ResultsOvertake from "@/components/sections/ResultsOvertake";
import MoreResults from "@/components/sections/MoreResults";
import AISearch from "@/components/sections/AISearch";
import HowWeWorkBento from "@/components/sections/HowWeWorkBento";
import SignalBento from "@/components/sections/SignalBento";
import GroovoryDoors from "@/components/sections/GroovoryDoors";
import RankGrid from "@/components/sections/RankGrid";
import Founder from "@/components/sections/Founder";
import FAQChat from "@/components/sections/FAQChat";
import Robo from "@/components/sections/Robo";

export default function HomePage() {
  return (
    <>
      {/* 1. Neiden Hero with letter reveal, grain canvas, and marquee */}
      <HeroSection />

      {/* 2. Overtake verified results, Search Console window, dot grid & CTR chart */}
      <ResultsOvertake />

      {/* 3. More Results: 2-column verified Search Console cards (Progenius & Education) */}
      <MoreResults />

      {/* 4. AI Search Revolution: 3D Orb video, SEO/AEO/GEO/AGO cards, typing simulator */}
      <AISearch />

      {/* 5. How We Work bento with 3D objects, floating badges and counters */}
      <HowWeWorkBento />

      {/* 6. Signal Bento with 10 interactive tiles, live dashboard mock and hover effects */}
      <SignalBento />

      {/* 7. Groovory doors: Explore the Empire with 4 expandable colorful doors */}
      <GroovoryDoors />

      {/* 8. RankGrid: 121-point interactive local ranking grid with Before/After slider & tooltip */}
      <RankGrid />

      {/* 9. Founder: Gaurav Kapoor with interactive spotlight, perspective tilt & backdrop switcher */}
      <Founder />

      {/* 10. FAQ Chat: Conversational interactive FAQ with category filters, typing bubbles & ask form */}
      <FAQChat />

      {/* 11. Robo: 'We rank with Robots. Let's Talk' with 3D tilt robot */}
      <Robo />
    </>
  );
}
