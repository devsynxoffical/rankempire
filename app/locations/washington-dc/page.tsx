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
import V2 from '@/components/pages/locations__washington-dc/V2';
import Statement from '@/components/pages/locations__washington-dc/Statement';
import Considerations from '@/components/pages/locations__washington-dc/Considerations';
import ServiceAreas from '@/components/pages/locations__washington-dc/ServiceAreas';
import Keywords from '@/components/pages/locations__washington-dc/Keywords';
import Marquee from '@/components/pages/locations__washington-dc/Marquee';
import Industries from '@/components/pages/locations__washington-dc/Industries';
import Services from '@/components/pages/locations__washington-dc/Services';
import Pricing from '@/components/pages/locations__washington-dc/Pricing';
import Faq from '@/components/pages/locations__washington-dc/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__washington-dc/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "DC SEO Company: Washington DC SEO Services | RankEmpire" },
  description: "DC SEO company for Washington DC businesses in Georgetown, Capitol Hill, Arlington, Bethesda and the DMV. Local SEO, Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/washington-dc/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "DC SEO Company: Washington DC SEO Services | RankEmpire", description: "DC SEO company for Washington DC businesses in Georgetown, Capitol Hill, Arlington, Bethesda and the DMV. Local SEO, Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/washington-dc/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "DC SEO Company: Washington DC SEO Services | RankEmpire", description: "DC SEO company for Washington DC businesses in Georgetown, Capitol Hill, Arlington, Bethesda and the DMV. Local SEO, Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Washington DC\", \"item\": \"https://www.rankempire.us/locations/washington-dc/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Washington DC\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Washington DC\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"District of Columbia\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/washington-dc/\", \"description\": \"RankEmpire is an SEO company serving Washington DC and the DMV, including Georgetown, Capitol Hill, Dupont Circle, Navy Yard, Arlington, Alexandria, Bethesda and Silver Spring. We run local SEO, Google Business Profile optimization, technical SEO and content for DC businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my DC business target Northern Virginia and Maryland too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only where you genuinely work and are licensed. Google weighs proximity, and many customers filter by jurisdiction. If you serve the whole DMV, we build separate service area content for DC, Northern Virginia and suburban Maryland and track each with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with DC law firms?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We build practice area pages, attorney profiles and FAQ content written with bar advertising rules in mind, plus local pages for the courts and neighborhoods you serve. See our law firm SEO page for the full approach.\"}}, {\"@type\": \"Question\", \"name\": \"Can SEO help government contractors and B2B firms in DC?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with a different focus than local SEO. Capability pages, contract vehicle and certification details, case studies and content that answers buyer questions help agencies and primes find you and shortlist you.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Washington DC?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Neighborhood and long-tail searches often move within 60 to 90 days. Competitive DC terms such as legal and real estate searches usually take four to six months or longer.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Washington DC?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/washington-dc" />
        <Statement />
        <SearchSurfaces slug="locations/washington-dc" kind="city" audience="businesses in Washington DC" city="Washington DC" kw="dc seo company" question="How much does local SEO cost in Washington DC?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/washington-dc" />
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
