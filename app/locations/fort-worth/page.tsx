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
import V2 from '@/components/pages/locations__fort-worth/V2';
import Statement from '@/components/pages/locations__fort-worth/Statement';
import Considerations from '@/components/pages/locations__fort-worth/Considerations';
import ServiceAreas from '@/components/pages/locations__fort-worth/ServiceAreas';
import Keywords from '@/components/pages/locations__fort-worth/Keywords';
import Marquee from '@/components/pages/locations__fort-worth/Marquee';
import Industries from '@/components/pages/locations__fort-worth/Industries';
import Services from '@/components/pages/locations__fort-worth/Services';
import Pricing from '@/components/pages/locations__fort-worth/Pricing';
import Faq from '@/components/pages/locations__fort-worth/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__fort-worth/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Fort Worth SEO Company & SEO Agency, TX | RankEmpire" },
  description: "Fort Worth SEO company for Tarrant County businesses in Downtown, Near Southside, Alliance, Keller and Southlake. Local SEO and Maps. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/fort-worth/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Fort Worth SEO Company & SEO Agency, TX | RankEmpire", description: "Fort Worth SEO company for Tarrant County businesses in Downtown, Near Southside, Alliance, Keller and Southlake. Local SEO and Maps. Free audit.", url: "https://www.rankempire.us/locations/fort-worth/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Fort Worth SEO Company & SEO Agency, TX | RankEmpire", description: "Fort Worth SEO company for Tarrant County businesses in Downtown, Near Southside, Alliance, Keller and Southlake. Local SEO and Maps. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Fort Worth\", \"item\": \"https://www.rankempire.us/locations/fort-worth/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Fort Worth\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Fort Worth\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Texas\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/fort-worth/\", \"description\": \"RankEmpire is an SEO company serving Fort Worth and Tarrant County, including Downtown, the Near Southside, the Cultural District, the Stockyards, Alliance, Keller, Southlake, Arlington, Burleson and Weatherford. We run local SEO, Google Business Profile optimization, technical SEO and content for Fort Worth businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should a Fort Worth business target Dallas too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually not at first. Customers mostly hire nearby, and Dallas terms are more competitive. We start with Fort Worth and the Tarrant County suburbs you serve, then expand east only if you work there and the numbers justify it.\"}}, {\"@type\": \"Question\", \"name\": \"Can a new business rank in growing areas like Alliance or Burleson?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Often within a few months. Newer areas have fewer established competitors, so a complete Google Business Profile, a few strong service pages and steady local reviews make the biggest difference.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with Fort Worth roofers and HVAC companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We build storm damage, roof replacement and AC service pages with starting prices, insurance and financing details, and publish seasonal content before hail and summer seasons.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Fort Worth?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Suburban and long-tail searches often move within 60 to 90 days. Competitive Fort Worth terms usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Fort Worth?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/fort-worth" />
        <Statement />
        <SearchSurfaces slug="locations/fort-worth" kind="city" audience="businesses in Fort Worth" city="Fort Worth" kw="seo company fort worth" question="How much does local SEO cost in Fort Worth?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/fort-worth" />
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
