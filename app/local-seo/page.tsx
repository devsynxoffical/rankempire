import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/local-seo/V1';
import Statement from '@/components/pages/local-seo/Statement';
import InDepth from '@/components/pages/local-seo/InDepth';
import WhyItMatters from '@/components/pages/local-seo/WhyItMatters';
import Deliverables from '@/components/pages/local-seo/Deliverables';
import Marquee from '@/components/pages/local-seo/Marquee';
import Monthly from '@/components/pages/local-seo/Monthly';
import Process from '@/components/pages/local-seo/Process';
import WhoItIsFor from '@/components/pages/local-seo/WhoItIsFor';
import Comparison from '@/components/pages/local-seo/Comparison';
import Pricing from '@/components/pages/local-seo/Pricing';
import Faq from '@/components/pages/local-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/local-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Local SEO Services: Rank in the Map Pack | RankEmpire",
  description: "Local SEO that puts your business in the Google map pack and local results. Google Business Profile optimization, citations, reviews and location pages.",
  alternates: { canonical: "https://www.rankempire.com/local-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Local SEO Services: Rank in the Map Pack | RankEmpire", description: "Local SEO that puts your business in the Google map pack and local results. Google Business Profile optimization, citations, reviews and location pages.", url: "https://www.rankempire.com/local-seo/", images: ["https://www.rankempire.com/img/s-local.webp"] },
  twitter: { card: 'summary_large_image', title: "Local SEO Services: Rank in the Map Pack | RankEmpire", description: "Local SEO that puts your business in the Google map pack and local results. Google Business Profile optimization, citations, reviews and location pages." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Local SEO\", \"item\": \"https://www.rankempire.com/local-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Local SEO\", \"serviceType\": \"Local SEO\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Local SEO that puts your business in the Google map pack and local results. Google Business Profile optimization, citations, reviews and location pages.\", \"url\": \"https://www.rankempire.com/local-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How long does local SEO take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many businesses see map pack movement within 60 to 90 days. Competitive markets and new profiles take longer.\"}}, {\"@type\": \"Question\", \"name\": \"Can you rank me in a city where I have no address?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google heavily favors proximity for map results, so we focus map work on areas near your locations and use organic location pages to win wider areas.\"}}, {\"@type\": \"Question\", \"name\": \"Do you handle multiple locations?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We manage profiles, pages and reporting for multi-location brands with one consistent system.\"}}, {\"@type\": \"Question\", \"name\": \"How long does local SEO take to work?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Profile fixes and citation cleanup can affect map visibility within a few weeks, once Google processes the changes. Building reviews, local links and strong location pages takes longer, often several months. Markets with many established competitors, such as personal injury law or HVAC in large metros, generally take more time than smaller towns or niche services.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need a physical address for local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"You need a real address to verify a Google Business Profile, but service area businesses can hide it and list the areas they serve instead. Virtual offices and coworking addresses often violate Google's guidelines and can lead to suspension. If you serve customers at their location, set up your profile as a service area business.\"}}, {\"@type\": \"Question\", \"name\": \"How do reviews affect local rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google lists reviews as a factor in local prominence. The number, recency and content of reviews, along with your responses, all contribute. Reviews also strongly influence whether searchers call you after seeing your listing. Never buy reviews or offer incentives for them, because that violates Google's policies and can lead to removed reviews or a suspended profile.\"}}, {\"@type\": \"Question\", \"name\": \"Can I rank in cities where I do not have an office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ranking in the map pack outside your verified location is difficult because proximity is a major factor. You can still rank in standard organic results for searches in nearby cities with strong, unique service area pages that show real work and details for each area. Some businesses open legitimate additional locations to compete in the map pack.\"}}, {\"@type\": \"Question\", \"name\": \"What are local citations?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Citations are online mentions of your business name, address and phone number on directories, social platforms and data aggregators such as Yelp, Apple Business Connect and Bing Places. Consistent citations help search engines confirm your business details. Inconsistent ones, often caused by moves or old phone numbers, can create confusion and should be corrected.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <Statement />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
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
