import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/locations__kansas-city/V2';
import Statement from '@/components/pages/locations__kansas-city/Statement';
import Considerations from '@/components/pages/locations__kansas-city/Considerations';
import ServiceAreas from '@/components/pages/locations__kansas-city/ServiceAreas';
import Keywords from '@/components/pages/locations__kansas-city/Keywords';
import Marquee from '@/components/pages/locations__kansas-city/Marquee';
import Industries from '@/components/pages/locations__kansas-city/Industries';
import Services from '@/components/pages/locations__kansas-city/Services';
import Pricing from '@/components/pages/locations__kansas-city/Pricing';
import Faq from '@/components/pages/locations__kansas-city/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__kansas-city/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Kansas City SEO Agency & SEO Company | RankEmpire" },
  description: "Kansas City SEO agency for businesses on both sides of State Line: Crossroads, Westport, Overland Park, Olathe and Lee's Summit. Local SEO and Maps. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/kansas-city/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Kansas City SEO Agency & SEO Company | RankEmpire", description: "Kansas City SEO agency for businesses on both sides of State Line: Crossroads, Westport, Overland Park, Olathe and Lee's Summit. Local SEO and Maps. Free audit.", url: "https://www.rankempire.us/locations/kansas-city/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Kansas City SEO Agency & SEO Company | RankEmpire", description: "Kansas City SEO agency for businesses on both sides of State Line: Crossroads, Westport, Overland Park, Olathe and Lee's Summit. Local SEO and Maps. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Kansas City\", \"item\": \"https://www.rankempire.us/locations/kansas-city/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Kansas City\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Kansas City\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Missouri\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/kansas-city/\", \"description\": \"RankEmpire is an SEO agency serving Kansas City in Missouri and Kansas, including Downtown, the Crossroads, Westport, the Country Club Plaza, the River Market, Overland Park, Olathe, Lee's Summit, Independence and Kansas City, Kansas. We run local SEO, Google Business Profile optimization, technical SEO and content for Kansas City businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Kansas City business target both Missouri and Kansas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only where you work and are licensed. Customers in Overland Park see different map results from customers in Lee's Summit. If you serve both states, we build separate service area content and track each side with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Can a business rank in Overland Park and Olathe?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with service area pages that show real work there, reviews from local customers and an accurate Google Business Profile service area. Johnson County suburbs are competitive, so local proof matters more than citywide keywords.\"}}, {\"@type\": \"Question\", \"name\": \"Does storm season affect local SEO in Kansas City?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For roofing, restoration, gutters and tree service, yes. Searches rise sharply after hail and severe storms. Content published before spring has time to rank when demand peaks.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Kansas City?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Suburban and long-tail searches often move within 60 to 90 days. Competitive Kansas City terms usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Kansas City?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/kansas-city" />
        <Statement />
        <SearchSurfaces slug="locations/kansas-city" kind="city" audience="businesses in Kansas City" city="Kansas City" kw="seo agency kansas city" question="How much does local SEO cost in Kansas City?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/kansas-city" />
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
