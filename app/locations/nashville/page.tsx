import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import DeepGuide from '@/components/sections/DeepGuide';
import ProofStrip from '@/components/sections/ProofStrip';
import V2 from '@/components/pages/locations__nashville/V2';
import Statement from '@/components/pages/locations__nashville/Statement';
import Considerations from '@/components/pages/locations__nashville/Considerations';
import ServiceAreas from '@/components/pages/locations__nashville/ServiceAreas';
import Keywords from '@/components/pages/locations__nashville/Keywords';
import Marquee from '@/components/pages/locations__nashville/Marquee';
import Industries from '@/components/pages/locations__nashville/Industries';
import Services from '@/components/pages/locations__nashville/Services';
import Pricing from '@/components/pages/locations__nashville/Pricing';
import Faq from '@/components/pages/locations__nashville/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__nashville/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Nashville SEO Company & SEO Agency | RankEmpire" },
  description: "Nashville SEO company for businesses in Downtown, The Gulch, East Nashville, Franklin and Brentwood. Local SEO, Google Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/nashville/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Nashville SEO Company & SEO Agency | RankEmpire", description: "Nashville SEO company for businesses in Downtown, The Gulch, East Nashville, Franklin and Brentwood. Local SEO, Google Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/nashville/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Nashville SEO Company & SEO Agency | RankEmpire", description: "Nashville SEO company for businesses in Downtown, The Gulch, East Nashville, Franklin and Brentwood. Local SEO, Google Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Nashville\", \"item\": \"https://www.rankempire.us/locations/nashville/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Nashville\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Nashville\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Tennessee\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/nashville/\", \"description\": \"RankEmpire is an SEO company serving Nashville and Middle Tennessee, including Downtown, The Gulch, East Nashville, 12 South, Green Hills, Franklin, Brentwood and Murfreesboro. We run local SEO, Google Business Profile optimization, technical SEO and content for Nashville businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Nashville business target tourists or locals?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on your category. Restaurants, tours and transportation often earn most of their traffic from visitors searching on their phones. Home services, medical practices and professional services depend on residents. We build the plan around the audience that brings revenue.\"}}, {\"@type\": \"Question\", \"name\": \"Is SEO in Nashville harder for medical practices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It can be. Nashville is a major healthcare center with well-funded competitors, so medical practices need strong provider pages, treatment content, credentials and reviews. Specialty and neighborhood searches are usually the fastest place to start.\"}}, {\"@type\": \"Question\", \"name\": \"Should I target Franklin, Brentwood and Murfreesboro separately?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you serve them, yes. These suburbs have their own searches and often thinner competition than downtown. Each page needs real local detail, such as projects, reviews and the services offered there, not just a swapped city name.\"}}, {\"@type\": \"Question\", \"name\": \"Can you run a free SEO audit for my Nashville business?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. The free audit covers technical health, Google Business Profile, local rankings across your service area, content and competitors, and comes with a prioritized plan in two business days.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Nashville?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/nashville" />
        <ProofStrip context="Nashville SEO" />
        <Statement />
        <SearchSurfaces slug="locations/nashville" kind="city" audience="businesses in Nashville" city="Nashville" kw="seo company nashville" question="How much does local SEO cost in Nashville?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/nashville" />
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
