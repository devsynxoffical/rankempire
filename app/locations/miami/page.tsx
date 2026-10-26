import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/locations__miami/V2';
import Statement from '@/components/pages/locations__miami/Statement';
import Considerations from '@/components/pages/locations__miami/Considerations';
import ServiceAreas from '@/components/pages/locations__miami/ServiceAreas';
import Keywords from '@/components/pages/locations__miami/Keywords';
import Marquee from '@/components/pages/locations__miami/Marquee';
import Industries from '@/components/pages/locations__miami/Industries';
import Services from '@/components/pages/locations__miami/Services';
import Pricing from '@/components/pages/locations__miami/Pricing';
import Faq from '@/components/pages/locations__miami/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__miami/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Miami, FL: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving Miami, Florida. Local SEO, Google Business Profile, technical SEO and content for businesses across Brickell, Wynwood.",
  alternates: { canonical: "https://www.rankempire.com/locations/miami/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Miami, FL: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Miami, Florida. Local SEO, Google Business Profile, technical SEO and content for businesses across Brickell, Wynwood.", url: "https://www.rankempire.com/locations/miami/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Miami, FL: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Miami, Florida. Local SEO, Google Business Profile, technical SEO and content for businesses across Brickell, Wynwood." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Miami\", \"item\": \"https://www.rankempire.com/locations/miami/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Miami\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Miami\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Florida\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/miami/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do I need Spanish language SEO for my Miami business?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If your team can serve Spanish speaking customers, it is usually a strong opportunity. Many Miami residents search in Spanish, and fewer competitors invest in quality Spanish content. We create dedicated pages written for that audience instead of automatic translations, and make sure your profile reflects the languages your staff speaks.\"}}, {\"@type\": \"Question\", \"name\": \"How do I compete in Brickell or Miami Beach where competition is high?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Dense, upscale areas attract many competitors in categories like dining, aesthetics, fitness, and law. Winning there takes a polished Google Business Profile, frequent fresh reviews, and content that speaks to that specific neighborhood. Sometimes the better move is targeting nearby areas with less competition alongside your primary location.\"}}, {\"@type\": \"Question\", \"name\": \"Does the tourist season matter for local SEO in Miami?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For hospitality, dining, rentals, and many service businesses, it matters a lot. Visitors search on their phones once they arrive, often with near me phrasing. Keeping hours, photos, and menus current, and publishing seasonal content in advance, helps you show up when visitor demand is highest.\"}}, {\"@type\": \"Question\", \"name\": \"Can you help Miami real estate and international businesses?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Real estate, import and export, and professional services often attract buyers from other countries who research online before contacting anyone. We build content that answers their questions clearly, structure the site for international visitors where it makes sense, and keep local signals strong for buyers already in South Florida.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <Statement />
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
