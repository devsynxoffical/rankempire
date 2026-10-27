import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/locations__new-york/V2';
import Statement from '@/components/pages/locations__new-york/Statement';
import Considerations from '@/components/pages/locations__new-york/Considerations';
import ServiceAreas from '@/components/pages/locations__new-york/ServiceAreas';
import Keywords from '@/components/pages/locations__new-york/Keywords';
import Marquee from '@/components/pages/locations__new-york/Marquee';
import Industries from '@/components/pages/locations__new-york/Industries';
import Services from '@/components/pages/locations__new-york/Services';
import Pricing from '@/components/pages/locations__new-york/Pricing';
import Faq from '@/components/pages/locations__new-york/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__new-york/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in New York, NY: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving New York, New York. Local SEO, Google Business Profile, technical SEO and content for businesses across Manhattan.",
  alternates: { canonical: "https://www.rankempire.us/locations/new-york/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in New York, NY: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving New York, New York. Local SEO, Google Business Profile, technical SEO and content for businesses across Manhattan.", url: "https://www.rankempire.us/locations/new-york/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in New York, NY: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving New York, New York. Local SEO, Google Business Profile, technical SEO and content for businesses across Manhattan." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in New York\", \"item\": \"https://www.rankempire.us/locations/new-york/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in New York\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"New York\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"New York\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/new-york/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you need an office in New York to rank my business here?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Rankings depend on your business location, relevance, and authority, not on where your SEO team sits. RankEmpire works remotely with New York businesses, handling research, on page work, Google Business Profile optimization, and content through regular calls and shared reporting. What matters is that your own address, service areas, and neighborhood signals are set up correctly.\"}}, {\"@type\": \"Question\", \"name\": \"Can a small Brooklyn or Queens business compete with Manhattan brands?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Often, yes. Google weighs proximity heavily in local results, so a shop in Astoria or Bay Ridge is mainly competing with nearby businesses, not every brand in Manhattan. Focusing on your own neighborhood, earning local reviews, and building pages around the areas you actually serve is usually a more efficient path than chasing broad citywide terms.\"}}, {\"@type\": \"Question\", \"name\": \"How do you handle a business with several locations across the boroughs?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Each location needs its own verified Google Business Profile, a dedicated landing page with unique content, and consistent name, address, and phone details everywhere it appears. We avoid duplicate pages with swapped place names, because they rarely perform well. Instead, each page reflects the neighborhood, nearby transit, and the services that location actually offers.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in a market as competitive as New York?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Timelines vary by category, your site's current authority, and how established your competitors are. Less contested neighborhood terms can move sooner, while broad citywide phrases in fields like law or real estate usually take sustained work over many months. We set expectations after an audit and report progress transparently rather than promising specific rankings.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
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
