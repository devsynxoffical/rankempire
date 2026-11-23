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
import V0 from '@/components/pages/locations__dallas/V0';
import Statement from '@/components/pages/locations__dallas/Statement';
import Considerations from '@/components/pages/locations__dallas/Considerations';
import ServiceAreas from '@/components/pages/locations__dallas/ServiceAreas';
import Keywords from '@/components/pages/locations__dallas/Keywords';
import Marquee from '@/components/pages/locations__dallas/Marquee';
import Industries from '@/components/pages/locations__dallas/Industries';
import Services from '@/components/pages/locations__dallas/Services';
import Pricing from '@/components/pages/locations__dallas/Pricing';
import Faq from '@/components/pages/locations__dallas/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__dallas/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Dallas SEO Company for DFW Businesses | RankEmpire" },
  description: "Dallas SEO company helping DFW businesses rank in Google Maps and AI search. Local plans from $599 a month, with live Search Console reporting.",
  alternates: { canonical: "https://www.rankempire.us/locations/dallas/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Dallas SEO Company for DFW Businesses | RankEmpire", description: "Dallas SEO company helping DFW businesses rank in Google Maps and AI search. Local plans from $599 a month, with live Search Console reporting.", url: "https://www.rankempire.us/locations/dallas/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Dallas SEO Company for DFW Businesses | RankEmpire", description: "Dallas SEO company helping DFW businesses rank in Google Maps and AI search. Local plans from $599 a month, with live Search Console reporting." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Dallas\", \"item\": \"https://www.rankempire.us/locations/dallas/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Dallas\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Dallas\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Texas\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/dallas/\", \"description\": \"RankEmpire is an SEO company serving Dallas and the DFW metroplex, including Uptown, Plano, Frisco, Irving and Arlington. We run local SEO, Google Business Profile optimization, technical SEO and content for Dallas businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How much does SEO cost in Dallas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"RankEmpire local plans start at $599 a month for one location. Multi-location plans are $1,199 and $2,199.\"}}, {\"@type\": \"Question\", \"name\": \"How long does local SEO take in Dallas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Maps and organic rankings usually move within 4 to 12 weeks, depending on competition in your category.\"}}, {\"@type\": \"Question\", \"name\": \"Do you serve all of DFW?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, including Dallas, Fort Worth, Plano, Frisco, Irving and Arlington.\"}}, {\"@type\": \"Question\", \"name\": \"Do you optimize Google Business Profiles?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. GBP setup and optimization are part of every local plan.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/dallas" />
        <Statement />
        <SearchSurfaces slug="locations/dallas" kind="city" audience="businesses in Dallas" city="Dallas" kw="seo company dallas" question="How much does local SEO cost in Dallas?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/dallas" />
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
