import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/locations__las-vegas/V1';
import Statement from '@/components/pages/locations__las-vegas/Statement';
import Considerations from '@/components/pages/locations__las-vegas/Considerations';
import ServiceAreas from '@/components/pages/locations__las-vegas/ServiceAreas';
import Keywords from '@/components/pages/locations__las-vegas/Keywords';
import Marquee from '@/components/pages/locations__las-vegas/Marquee';
import Industries from '@/components/pages/locations__las-vegas/Industries';
import Services from '@/components/pages/locations__las-vegas/Services';
import Pricing from '@/components/pages/locations__las-vegas/Pricing';
import Faq from '@/components/pages/locations__las-vegas/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Las Vegas, NV | RankEmpire",
  description: "RankEmpire is an SEO company serving Las Vegas, Nevada. Local SEO, Google Business Profile, technical SEO and content for businesses across Henderson.",
  alternates: { canonical: "https://www.rankempire.com/locations/las-vegas/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Las Vegas, NV | RankEmpire", description: "RankEmpire is an SEO company serving Las Vegas, Nevada. Local SEO, Google Business Profile, technical SEO and content for businesses across Henderson.", url: "https://www.rankempire.com/locations/las-vegas/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Las Vegas, NV | RankEmpire", description: "RankEmpire is an SEO company serving Las Vegas, Nevada. Local SEO, Google Business Profile, technical SEO and content for businesses across Henderson." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Las Vegas\", \"item\": \"https://www.rankempire.com/locations/las-vegas/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Las Vegas\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Las Vegas\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Nevada\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/las-vegas/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Las Vegas business target tourists or locals?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on who buys from you. Restaurants, tours, and entertainment near the Strip benefit from visitor focused SEO, while home services, healthcare, and legal firms should focus on residents. Some businesses serve both, and in that case we build separate content for each audience rather than mixing messages.\"}}, {\"@type\": \"Question\", \"name\": \"How can my business benefit from conventions in Las Vegas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Convention attendees search for transportation, dining, printing, and business services near the venues. Publishing helpful content well before major shows, keeping your Google Business Profile accurate, and earning reviews from past event customers can help you appear when attendees and exhibitors start searching.\"}}, {\"@type\": \"Question\", \"name\": \"Can a Henderson business rank for Las Vegas searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"In map results, Google favors businesses close to the searcher, so a Henderson address is strongest for nearby customers. Organic pages can reach further. We usually solidify your Henderson presence first, then build pages for other parts of the valley you serve, supported by reviews from those customers.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have staff in Las Vegas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. RankEmpire is remote first and has no Las Vegas office. We work with valley businesses through video calls, shared reporting, and online collaboration. The factors that influence rankings, including your website, profile, reviews, and links, are all managed online, with your local knowledge guiding our priorities.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V1 />
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
