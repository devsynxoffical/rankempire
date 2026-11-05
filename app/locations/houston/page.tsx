import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import ProofStrip from '@/components/sections/ProofStrip';
import DeepGuide from '@/components/sections/DeepGuide';
import TopPlan from '@/components/sections/TopPlan';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/locations__houston/V0';
import Statement from '@/components/pages/locations__houston/Statement';
import Considerations from '@/components/pages/locations__houston/Considerations';
import ServiceAreas from '@/components/pages/locations__houston/ServiceAreas';
import Keywords from '@/components/pages/locations__houston/Keywords';
import Marquee from '@/components/pages/locations__houston/Marquee';
import Industries from '@/components/pages/locations__houston/Industries';
import Services from '@/components/pages/locations__houston/Services';
import Pricing from '@/components/pages/locations__houston/Pricing';
import Faq from '@/components/pages/locations__houston/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__houston/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Houston SEO Company & SEO Agency | RankEmpire" },
  description: "Houston SEO company and agency covering Katy, Sugar Land, The Woodlands and the whole metro. Local SEO and AI search. Free audit in 2 days.",
  alternates: { canonical: "https://www.rankempire.us/locations/houston/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Houston SEO Company & SEO Agency | RankEmpire", description: "Houston SEO company and agency covering Katy, Sugar Land, The Woodlands and the whole metro. Local SEO and AI search. Free audit in 2 days.", url: "https://www.rankempire.us/locations/houston/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Houston SEO Company & SEO Agency | RankEmpire", description: "Houston SEO company and agency covering Katy, Sugar Land, The Woodlands and the whole metro. Local SEO and AI search. Free audit in 2 days." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Houston\", \"item\": \"https://www.rankempire.us/locations/houston/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Houston\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Houston\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Texas\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/houston/\", \"description\": \"RankEmpire is an SEO company serving Houston and its sprawling metro, including Downtown, The Heights, Katy, Sugar Land, The Woodlands and Pearland. We run local SEO, Google Business Profile optimization, technical SEO and content for Houston businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do I rank across such a large metro like Houston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually not all at once. Google prioritizes businesses near the searcher, so we start with the areas closest to your location and the submarkets that bring the most valuable customers. From there, we expand with service area pages, reviews from those communities, and content that references local landmarks and conditions.\"}}, {\"@type\": \"Question\", \"name\": \"Should my Houston business prepare SEO content before hurricane season?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you work in roofing, restoration, plumbing, electrical, or similar trades, yes. Pages need time to be crawled and earn trust. We plan storm related content and profile updates well before the season, so when residents start searching urgently, your business is already visible with clear, helpful information.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with energy and industrial companies in Houston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. B2B companies in energy, petrochemicals, and industrial services often need SEO focused on technical buyers rather than map packs. That means detailed service pages, clear specifications, and content that answers procurement questions. We tailor the approach to how your buyers research, which differs from consumer local search.\"}}, {\"@type\": \"Question\", \"name\": \"Do you meet Houston clients in person?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"RankEmpire is a remote first agency without a Houston office. We work through scheduled video calls, shared dashboards, and written reports. Many clients prefer this because it saves drive time across the metro, and all the work that affects rankings, from technical fixes to content and profile management, is done online anyway.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Houston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/houston" />
        <ProofStrip context="Houston SEO" />
        <Statement />
        <SearchSurfaces slug="locations/houston" kind="city" audience="businesses in Houston" city="Houston" kw="seo company houston" question="How much does local SEO cost in Houston?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/houston" />
        <TopPlan slug="locations/houston" />
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
