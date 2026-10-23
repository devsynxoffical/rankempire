import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/locations__boston/Hero';
import Statement from '@/components/pages/locations__boston/Statement';
import Considerations from '@/components/pages/locations__boston/Considerations';
import ServiceAreas from '@/components/pages/locations__boston/ServiceAreas';
import Keywords from '@/components/pages/locations__boston/Keywords';
import Marquee from '@/components/pages/locations__boston/Marquee';
import Industries from '@/components/pages/locations__boston/Industries';
import Services from '@/components/pages/locations__boston/Services';
import Pricing from '@/components/pages/locations__boston/Pricing';
import Faq from '@/components/pages/locations__boston/Faq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Boston, MA: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving Boston, Massachusetts. Local SEO, Google Business Profile, technical SEO and content for businesses across Back Bay.",
  alternates: { canonical: "https://www.rankempire.com/locations/boston/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Boston, MA: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Boston, Massachusetts. Local SEO, Google Business Profile, technical SEO and content for businesses across Back Bay.", url: "https://www.rankempire.com/locations/boston/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Boston, MA: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Boston, Massachusetts. Local SEO, Google Business Profile, technical SEO and content for businesses across Back Bay." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Boston\", \"item\": \"https://www.rankempire.com/locations/boston/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Boston\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Boston\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Massachusetts\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/boston/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Boston business target Cambridge and Somerville separately?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually, yes. They are separate cities, and searchers there often see local options first. If you serve customers across the river, dedicated pages with unique content, accurate service area settings, and reviews from those communities give you a better chance than relying on a single Boston page.\"}}, {\"@type\": \"Question\", \"name\": \"How does the student population affect SEO in Boston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Students and their families create predictable spikes in searches around move in and graduation. Businesses in moving, storage, rentals, furniture, and dining can plan content and promotions ahead of those dates. For other businesses, students are a recurring wave of new residents who need to discover local providers.\"}}, {\"@type\": \"Question\", \"name\": \"Can you help biotech and healthcare companies in Boston?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. These organizations usually need content aimed at technical and regulated audiences rather than consumer map rankings. We focus on clear service pages, expertise driven content, and technical site quality. We also take care to avoid claims that conflict with industry regulations, and we review sensitive content with your team.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have a Boston office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. We are a remote first agency working with Boston businesses through video calls, shared documents, and regular reporting. The work that affects rankings happens on your site and across the web, so we do not need a local office. Your knowledge of Boston customers guides our priorities.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <Hero />
        <Statement />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <Pricing />
        <Faq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
