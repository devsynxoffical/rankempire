import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/locations__san-diego/Hero';
import Statement from '@/components/pages/locations__san-diego/Statement';
import Considerations from '@/components/pages/locations__san-diego/Considerations';
import ServiceAreas from '@/components/pages/locations__san-diego/ServiceAreas';
import Keywords from '@/components/pages/locations__san-diego/Keywords';
import Marquee from '@/components/pages/locations__san-diego/Marquee';
import Industries from '@/components/pages/locations__san-diego/Industries';
import Services from '@/components/pages/locations__san-diego/Services';
import Pricing from '@/components/pages/locations__san-diego/Pricing';
import Faq from '@/components/pages/locations__san-diego/Faq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in San Diego, CA | RankEmpire",
  description: "RankEmpire is an SEO company serving San Diego, California. Local SEO, Google Business Profile, technical SEO and content for businesses across La Jolla.",
  alternates: { canonical: "https://www.rankempire.com/locations/san-diego/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in San Diego, CA | RankEmpire", description: "RankEmpire is an SEO company serving San Diego, California. Local SEO, Google Business Profile, technical SEO and content for businesses across La Jolla.", url: "https://www.rankempire.com/locations/san-diego/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in San Diego, CA | RankEmpire", description: "RankEmpire is an SEO company serving San Diego, California. Local SEO, Google Business Profile, technical SEO and content for businesses across La Jolla." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in San Diego\", \"item\": \"https://www.rankempire.com/locations/san-diego/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in San Diego\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"San Diego\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"California\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/san-diego/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can a business in North County rank for San Diego searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For searches made near downtown or central neighborhoods, a North County address can be at a disadvantage in the map pack. However, organic results and well built service pages can still reach those customers. We usually strengthen your position close to home first, then expand with content targeting other parts of the county.\"}}, {\"@type\": \"Question\", \"name\": \"Is bilingual SEO useful in San Diego?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For many categories, yes. Many San Diego residents speak Spanish, and some customers cross from Mexico for healthcare, dental work, and shopping. If your staff can serve them, dedicated Spanish pages and accurate profile information can bring in customers that English only competitors miss.\"}}, {\"@type\": \"Question\", \"name\": \"How do you work with San Diego businesses without a local office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"RankEmpire works remotely through video calls, shared dashboards, and clear monthly reporting. We do not have staff in San Diego. Your insights about customers, neighborhoods, and seasonality guide our research, and we handle the technical, content, and Google Business Profile work that drives local visibility.\"}}, {\"@type\": \"Question\", \"name\": \"Does tourism affect SEO for San Diego businesses?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It does for restaurants, rentals, tours, and retail near the beaches, the Gaslamp Quarter, and Old Town. Visitors search on mobile with near me phrasing, so accurate hours, current photos, and strong reviews matter. Seasonal content published before summer helps capture that demand while still serving local residents.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
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
