import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/geo/V0';
import Statement from '@/components/pages/geo/Statement';
import Deliverables from '@/components/pages/geo/Deliverables';
import Marquee from '@/components/pages/geo/Marquee';
import Process from '@/components/pages/geo/Process';
import WhoItIsFor from '@/components/pages/geo/WhoItIsFor';
import Pricing from '@/components/pages/geo/Pricing';
import Faq from '@/components/pages/geo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/geo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "GEO | RankEmpire",
  description: "Generative engine optimization that gets your business cited in Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot answers.",
  alternates: { canonical: "https://www.rankempire.com/geo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "GEO | RankEmpire", description: "Generative engine optimization that gets your business cited in Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot answers.", url: "https://www.rankempire.com/geo/", images: ["https://www.rankempire.com/img/x-ai.webp"] },
  twitter: { card: 'summary_large_image', title: "GEO | RankEmpire", description: "Generative engine optimization that gets your business cited in Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot answers." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Generative Engine Optimization\", \"item\": \"https://www.rankempire.com/geo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Generative Engine Optimization\", \"serviceType\": \"Generative Engine Optimization\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Generative engine optimization that gets your business cited in Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot answers.\", \"url\": \"https://www.rankempire.com/geo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can you guarantee citations in ChatGPT or AI Overviews?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No one can guarantee AI output. We can show measurable growth in how often and how favorably you are cited, which is what we report on.\"}}, {\"@type\": \"Question\", \"name\": \"Does GEO replace SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. AI engines draw heavily on top-ranking pages. Strong SEO is the base, and GEO adds the entity, data and access work on top.\"}}, {\"@type\": \"Question\", \"name\": \"How do you measure GEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We run a fixed set of prompts across each engine every month and record citations, position in the answer and sentiment.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Statement />
        <Deliverables />
        <Marquee />
        <Process />
        <WhoItIsFor />
        <Pricing />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
