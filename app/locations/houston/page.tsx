import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
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
  title: "SEO Company in Houston, TX: Local SEO Services | RankEmpire",
  description: "SEO company in Houston: local SEO, Google Business Profile optimization and content for businesses in The Heights, Katy, Sugar Land, The Woodlands and Pearland.",
  alternates: { canonical: "https://www.rankempire.us/locations/houston/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Houston, TX: Local SEO Services | RankEmpire", description: "SEO company in Houston: local SEO, Google Business Profile optimization and content for businesses in The Heights, Katy, Sugar Land, The Woodlands and Pearland.", url: "https://www.rankempire.us/locations/houston/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Houston, TX: Local SEO Services | RankEmpire", description: "SEO company in Houston: local SEO, Google Business Profile optimization and content for businesses in The Heights, Katy, Sugar Land, The Woodlands and Pearland." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Houston\", \"item\": \"https://www.rankempire.us/locations/houston/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Houston\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Houston\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Texas\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/houston/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do I rank across such a large metro like Houston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually not all at once. Google prioritizes businesses near the searcher, so we start with the areas closest to your location and the submarkets that bring the most valuable customers. From there, we expand with service area pages, reviews from those communities, and content that references local landmarks and conditions.\"}}, {\"@type\": \"Question\", \"name\": \"Should my Houston business prepare SEO content before hurricane season?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you work in roofing, restoration, plumbing, electrical, or similar trades, yes. Pages need time to be crawled and earn trust. We plan storm related content and profile updates well before the season, so when residents start searching urgently, your business is already visible with clear, helpful information.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with energy and industrial companies in Houston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. B2B companies in energy, petrochemicals, and industrial services often need SEO focused on technical buyers rather than map packs. That means detailed service pages, clear specifications, and content that answers procurement questions. We tailor the approach to how your buyers research, which differs from consumer local search.\"}}, {\"@type\": \"Question\", \"name\": \"Do you meet Houston clients in person?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"RankEmpire is a remote first agency without a Houston office. We work through scheduled video calls, shared dashboards, and written reports. Many clients prefer this because it saves drive time across the metro, and all the work that affects rankings, from technical fixes to content and profile management, is done online anyway.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Houston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/houston" />
        <Statement />
        <SearchSurfaces slug="locations/houston" kind="city" audience="businesses in Houston" city="Houston" kw="seo company houston" question="How much does local SEO cost in Houston?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
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
