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
import V2 from '@/components/pages/locations__brooklyn/V2';
import Statement from '@/components/pages/locations__brooklyn/Statement';
import Considerations from '@/components/pages/locations__brooklyn/Considerations';
import ServiceAreas from '@/components/pages/locations__brooklyn/ServiceAreas';
import Keywords from '@/components/pages/locations__brooklyn/Keywords';
import Marquee from '@/components/pages/locations__brooklyn/Marquee';
import Industries from '@/components/pages/locations__brooklyn/Industries';
import Services from '@/components/pages/locations__brooklyn/Services';
import Pricing from '@/components/pages/locations__brooklyn/Pricing';
import Faq from '@/components/pages/locations__brooklyn/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__brooklyn/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Brooklyn SEO Company & SEO Agency | RankEmpire" },
  description: "Brooklyn SEO company for businesses in Williamsburg, Park Slope, DUMBO, Bushwick and Bay Ridge. Local SEO, Google Maps and AI search. Free audit in 2 days.",
  alternates: { canonical: "https://www.rankempire.us/locations/brooklyn/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Brooklyn SEO Company & SEO Agency | RankEmpire", description: "Brooklyn SEO company for businesses in Williamsburg, Park Slope, DUMBO, Bushwick and Bay Ridge. Local SEO, Google Maps and AI search. Free audit in 2 days.", url: "https://www.rankempire.us/locations/brooklyn/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Brooklyn SEO Company & SEO Agency | RankEmpire", description: "Brooklyn SEO company for businesses in Williamsburg, Park Slope, DUMBO, Bushwick and Bay Ridge. Local SEO, Google Maps and AI search. Free audit in 2 days." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Brooklyn\", \"item\": \"https://www.rankempire.us/locations/brooklyn/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Brooklyn\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Brooklyn\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"New York\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/brooklyn/\", \"description\": \"RankEmpire is an SEO company serving Brooklyn businesses in Williamsburg, Park Slope, DUMBO, Bushwick, Greenpoint, Bay Ridge and Downtown Brooklyn. We run neighborhood-level local SEO, Google Business Profile optimization, technical SEO and content, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should a Brooklyn business target Brooklyn or New York City keywords?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Start with Brooklyn and your neighborhood. Citywide NYC terms are dominated by Manhattan firms and national brands, while Brooklyn and neighborhood searches have local competitors and customers who are already nearby. Once those rank, we expand to wider NYC terms where it makes commercial sense.\"}}, {\"@type\": \"Question\", \"name\": \"How small is the local search radius in Brooklyn?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Often just a few blocks for walk-in categories like cafes, salons and dentists, and wider for service businesses that travel. We measure it with a rank grid around your address so you can see exactly where you appear and where you drop off.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need separate pages for Williamsburg, Park Slope and other neighborhoods?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only for neighborhoods you genuinely serve with something specific to say. A page per neighborhood with swapped names rarely ranks. Pages that mention real landmarks, transit, projects you completed there and reviews from those customers do.\"}}, {\"@type\": \"Question\", \"name\": \"Can you help a Brooklyn business reach customers who search in other languages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. If your staff serves Spanish, Russian, Chinese or Yiddish speaking customers, we build properly written pages and profile details for those audiences instead of automatic translations, which often ranks with far less competition.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Brooklyn?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/brooklyn" />
        <ProofStrip context="Brooklyn SEO" />
        <Statement />
        <SearchSurfaces slug="locations/brooklyn" kind="city" audience="businesses in Brooklyn" city="Brooklyn" kw="brooklyn seo company" question="How much does local SEO cost in Brooklyn?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/brooklyn" />
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
