import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/locations__los-angeles/V0';
import Statement from '@/components/pages/locations__los-angeles/Statement';
import Considerations from '@/components/pages/locations__los-angeles/Considerations';
import ServiceAreas from '@/components/pages/locations__los-angeles/ServiceAreas';
import Keywords from '@/components/pages/locations__los-angeles/Keywords';
import Marquee from '@/components/pages/locations__los-angeles/Marquee';
import Industries from '@/components/pages/locations__los-angeles/Industries';
import Services from '@/components/pages/locations__los-angeles/Services';
import Pricing from '@/components/pages/locations__los-angeles/Pricing';
import Faq from '@/components/pages/locations__los-angeles/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__los-angeles/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Los Angeles, CA | RankEmpire",
  description: "SEO company in Los Angeles: local SEO, Google Business Profile optimization and content for businesses in Downtown LA, Santa Monica, Pasadena and the Valley.",
  alternates: { canonical: "https://www.rankempire.us/locations/los-angeles/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Los Angeles, CA | RankEmpire", description: "SEO company in Los Angeles: local SEO, Google Business Profile optimization and content for businesses in Downtown LA, Santa Monica, Pasadena and the Valley.", url: "https://www.rankempire.us/locations/los-angeles/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Los Angeles, CA | RankEmpire", description: "SEO company in Los Angeles: local SEO, Google Business Profile optimization and content for businesses in Downtown LA, Santa Monica, Pasadena and the Valley." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Los Angeles\", \"item\": \"https://www.rankempire.us/locations/los-angeles/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Los Angeles\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Los Angeles\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"California\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/los-angeles/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can you help my business rank in both the Valley and the Westside?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, though it usually takes a deliberate plan. Google ties map results closely to your verified address, so ranking far from it is difficult. We strengthen your profile where you are located, then build distinct service area pages for other communities you serve, supported by reviews and content that genuinely reference those neighborhoods.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth creating Spanish language pages for my LA business?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you have staff who can serve Spanish speaking customers, it is often worth it. Many Los Angeles residents search in Spanish, and competition for those queries can be lighter. The pages should be written properly for that audience, with accurate service descriptions, and your team needs to be ready to respond to inquiries in Spanish.\"}}, {\"@type\": \"Question\", \"name\": \"How do you work with Los Angeles clients without a local office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"RankEmpire is remote first. We work through video calls, shared documents, and regular reports, which suits a metro where in person meetings across town can take half a day anyway. Your local knowledge about customers and neighborhoods feeds into our research, and we handle the technical, content, and profile work.\"}}, {\"@type\": \"Question\", \"name\": \"Does seasonality affect SEO for businesses in Southern California?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It can. Home services see demand shifts around fire season and winter storms, tourism businesses follow travel patterns, and some retail categories follow the holidays. We plan content ahead of those periods so pages are indexed and ranking before demand rises, rather than publishing after customers have already started searching.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Los Angeles?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/los-angeles" />
        <Statement />
        <SearchSurfaces slug="locations/los-angeles" kind="city" audience="businesses in Los Angeles" city="Los Angeles" kw="seo company los angeles" question="How much does local SEO cost in Los Angeles?" />
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
