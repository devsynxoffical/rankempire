import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/locations__austin/V2';
import Statement from '@/components/pages/locations__austin/Statement';
import Considerations from '@/components/pages/locations__austin/Considerations';
import ServiceAreas from '@/components/pages/locations__austin/ServiceAreas';
import Keywords from '@/components/pages/locations__austin/Keywords';
import Marquee from '@/components/pages/locations__austin/Marquee';
import Industries from '@/components/pages/locations__austin/Industries';
import Services from '@/components/pages/locations__austin/Services';
import Pricing from '@/components/pages/locations__austin/Pricing';
import Faq from '@/components/pages/locations__austin/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Austin, TX: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving Austin, Texas. Local SEO, Google Business Profile, technical SEO and content for businesses across Round Rock.",
  alternates: { canonical: "https://www.rankempire.com/locations/austin/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Austin, TX: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Austin, Texas. Local SEO, Google Business Profile, technical SEO and content for businesses across Round Rock.", url: "https://www.rankempire.com/locations/austin/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Austin, TX: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Austin, Texas. Local SEO, Google Business Profile, technical SEO and content for businesses across Round Rock." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Austin\", \"item\": \"https://www.rankempire.com/locations/austin/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Austin\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Austin\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Texas\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/austin/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Austin business target the suburbs or the city core?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"That depends on where your customers live and how far you can travel. Many home service companies find strong opportunity in Round Rock, Cedar Park, and Pflugerville, while restaurants and boutiques may focus on central neighborhoods. We look at your customer data and the competition in each area before recommending where to start.\"}}, {\"@type\": \"Question\", \"name\": \"How can my business benefit from SXSW and other Austin events?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Visitors search on their phones for food, drinks, rides, and services during big events. Keeping your Google Business Profile accurate, posting about event hours or specials ahead of time, and publishing helpful local guides can bring in visitor traffic. Plan this content weeks before the event so it has time to surface.\"}}, {\"@type\": \"Question\", \"name\": \"Is Austin SEO useful for tech startups?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, though the approach differs from local businesses. Startups usually need product focused content, technical SEO, and pages that rank nationally for the problems they solve. If you also hire locally or sell to Austin businesses, we can add local pages and signals that support that goal.\"}}, {\"@type\": \"Question\", \"name\": \"Do you have staff in Austin?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. RankEmpire is a remote first agency without an Austin office. We collaborate through video calls, shared reporting, and regular check ins. The work that drives rankings, including site improvements, content, link building, and profile management, happens online, and your knowledge of Austin customers guides our priorities.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
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
