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
import V2 from '@/components/pages/locations__sacramento/V2';
import Statement from '@/components/pages/locations__sacramento/Statement';
import Considerations from '@/components/pages/locations__sacramento/Considerations';
import ServiceAreas from '@/components/pages/locations__sacramento/ServiceAreas';
import Keywords from '@/components/pages/locations__sacramento/Keywords';
import Marquee from '@/components/pages/locations__sacramento/Marquee';
import Industries from '@/components/pages/locations__sacramento/Industries';
import Services from '@/components/pages/locations__sacramento/Services';
import Pricing from '@/components/pages/locations__sacramento/Pricing';
import Faq from '@/components/pages/locations__sacramento/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__sacramento/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Sacramento SEO Company & SEO Agency, CA | RankEmpire" },
  description: "Sacramento SEO company for businesses in Midtown, East Sacramento, Natomas, Roseville, Elk Grove and Folsom. Local SEO, Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/sacramento/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Sacramento SEO Company & SEO Agency, CA | RankEmpire", description: "Sacramento SEO company for businesses in Midtown, East Sacramento, Natomas, Roseville, Elk Grove and Folsom. Local SEO, Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/sacramento/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Sacramento SEO Company & SEO Agency, CA | RankEmpire", description: "Sacramento SEO company for businesses in Midtown, East Sacramento, Natomas, Roseville, Elk Grove and Folsom. Local SEO, Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Sacramento\", \"item\": \"https://www.rankempire.us/locations/sacramento/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Sacramento\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Sacramento\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"California\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/sacramento/\", \"description\": \"RankEmpire is an SEO company serving Sacramento and the capital region, including Downtown, Midtown, East Sacramento, Land Park, Natomas, Roseville, Elk Grove, Folsom, Rocklin and Davis. We run local SEO, Google Business Profile optimization, technical SEO and content for Sacramento businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do I find an SEO agency near me in Sacramento?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Shortlist agencies that show real Google Search Console results, name the strategist who will do the work and explain their first 90 days. Ask how they would rank you across the Sacramento areas you serve, from Midtown to Roseville, Elk Grove and Folsom.\"}}, {\"@type\": \"Question\", \"name\": \"What does an SEO company in Sacramento do?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It improves how your business shows up when people in the Sacramento region search for your services: your Google Business Profile, service and area pages, reviews, technical fixes and content, measured in calls and leads.\"}}, {\"@type\": \"Question\", \"name\": \"Should my Sacramento business target Roseville, Elk Grove and Folsom?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you serve them, yes. Each suburb has its own map results and competitors. We build service area content for the places you work and track each with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Can SEO help Sacramento associations, consultancies and law firms?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Practice area and capability pages, credentials, case results and content that answers specific questions help organizations and professionals find and shortlist you.\"}}, {\"@type\": \"Question\", \"name\": \"Does summer heat affect local SEO in Sacramento?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For HVAC, pool, solar and roofing companies, yes. Searches rise as temperatures climb. Publishing seasonal content in spring gives it time to rank before demand peaks.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Sacramento?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Suburban and long-tail searches often move within 60 to 90 days. Competitive Sacramento terms usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Sacramento?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/sacramento" />
        <Statement />
        <SearchSurfaces slug="locations/sacramento" kind="city" audience="businesses in Sacramento" city="Sacramento" kw="seo company sacramento" question="How much does local SEO cost in Sacramento?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/sacramento" />
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
