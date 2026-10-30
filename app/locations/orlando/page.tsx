import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/locations__orlando/V0';
import Statement from '@/components/pages/locations__orlando/Statement';
import Considerations from '@/components/pages/locations__orlando/Considerations';
import ServiceAreas from '@/components/pages/locations__orlando/ServiceAreas';
import Keywords from '@/components/pages/locations__orlando/Keywords';
import Marquee from '@/components/pages/locations__orlando/Marquee';
import Industries from '@/components/pages/locations__orlando/Industries';
import Services from '@/components/pages/locations__orlando/Services';
import Pricing from '@/components/pages/locations__orlando/Pricing';
import Faq from '@/components/pages/locations__orlando/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__orlando/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Orlando, FL: Local SEO Services | RankEmpire",
  description: "SEO company in Orlando: local SEO, Google Business Profile optimization and content for businesses in Downtown, Winter Park, Kissimmee, Lake Nona and Sanford.",
  alternates: { canonical: "https://www.rankempire.us/locations/orlando/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Orlando, FL: Local SEO Services | RankEmpire", description: "SEO company in Orlando: local SEO, Google Business Profile optimization and content for businesses in Downtown, Winter Park, Kissimmee, Lake Nona and Sanford.", url: "https://www.rankempire.us/locations/orlando/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Orlando, FL: Local SEO Services | RankEmpire", description: "SEO company in Orlando: local SEO, Google Business Profile optimization and content for businesses in Downtown, Winter Park, Kissimmee, Lake Nona and Sanford." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Orlando\", \"item\": \"https://www.rankempire.us/locations/orlando/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Orlando\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Orlando\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Florida\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/orlando/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Orlando business focus on tourists or residents?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on your customers. Restaurants, attractions, and transportation near the parks benefit from visitor focused SEO, while home services, healthcare, and legal firms should focus on residents. If you serve both, we build separate content for each audience so neither message gets diluted.\"}}, {\"@type\": \"Question\", \"name\": \"Is Spanish language SEO worth it in Orlando?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For many businesses, yes. Central Florida has a large Spanish speaking population, and fewer competitors produce quality Spanish content. If your team can serve these customers, we create dedicated pages written for them and make sure your profile reflects the languages you speak.\"}}, {\"@type\": \"Question\", \"name\": \"How should Orlando businesses plan SEO around hurricane season?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Roofing, restoration, tree service, and electrical companies should publish storm related content before the season starts. Pages need time to be indexed and trusted. We also prepare profile posts and review requests so you stay visible when homeowners search urgently after a storm.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have an Orlando office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. RankEmpire is remote first with no office in Orlando. We work with Central Florida businesses through video calls, shared dashboards, and regular reports. Everything that affects your rankings is managed online, and your knowledge of local customers shapes our strategy and priorities.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Orlando?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/orlando" />
        <Statement />
        <SearchSurfaces slug="locations/orlando" kind="city" audience="businesses in Orlando" city="Orlando" kw="seo company orlando" question="How much does local SEO cost in Orlando?" />
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
