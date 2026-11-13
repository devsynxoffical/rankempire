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
import V2 from '@/components/pages/locations__columbus/V2';
import Statement from '@/components/pages/locations__columbus/Statement';
import Considerations from '@/components/pages/locations__columbus/Considerations';
import ServiceAreas from '@/components/pages/locations__columbus/ServiceAreas';
import Keywords from '@/components/pages/locations__columbus/Keywords';
import Marquee from '@/components/pages/locations__columbus/Marquee';
import Industries from '@/components/pages/locations__columbus/Industries';
import Services from '@/components/pages/locations__columbus/Services';
import Pricing from '@/components/pages/locations__columbus/Pricing';
import Faq from '@/components/pages/locations__columbus/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__columbus/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Columbus SEO Company & SEO Agency, Ohio | RankEmpire" },
  description: "Columbus SEO company for Ohio businesses in the Short North, German Village, Dublin, Westerville and Easton. Local SEO, Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/columbus/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Columbus SEO Company & SEO Agency, Ohio | RankEmpire", description: "Columbus SEO company for Ohio businesses in the Short North, German Village, Dublin, Westerville and Easton. Local SEO, Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/columbus/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Columbus SEO Company & SEO Agency, Ohio | RankEmpire", description: "Columbus SEO company for Ohio businesses in the Short North, German Village, Dublin, Westerville and Easton. Local SEO, Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Columbus\", \"item\": \"https://www.rankempire.us/locations/columbus/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Columbus\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Columbus\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Ohio\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/columbus/\", \"description\": \"RankEmpire is an SEO company serving Columbus and central Ohio, including Downtown, the Short North, German Village, Clintonville, Easton, Dublin, Westerville, Worthington and Hilliard. We run local SEO, Google Business Profile optimization, technical SEO and content for Columbus businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Columbus business target suburbs like Dublin and Westerville?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you serve them, yes. Each suburb has its own map results, and newer suburbs often have fewer established competitors. We build service area content for the places you work and track each with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Does the Ohio State calendar affect local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For restaurants, bars, apartments, movers, storage and retail near campus, yes. Searches spike around move-in, football weekends and graduation. Publishing seasonal content ahead of those dates lets it rank in time.\"}}, {\"@type\": \"Question\", \"name\": \"Can a new business rank quickly in Columbus?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Often within a few months in the suburbs, where competition is thinner. A complete Google Business Profile, a few strong service pages and steady reviews from local customers make the biggest difference.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Columbus?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Suburban and long-tail searches often move within 60 to 90 days. Competitive Columbus terms usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Columbus?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/columbus" />
        <Statement />
        <SearchSurfaces slug="locations/columbus" kind="city" audience="businesses in Columbus" city="Columbus" kw="columbus seo company" question="How much does local SEO cost in Columbus?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/columbus" />
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
