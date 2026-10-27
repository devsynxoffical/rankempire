import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/locations__seattle/V0';
import Statement from '@/components/pages/locations__seattle/Statement';
import Considerations from '@/components/pages/locations__seattle/Considerations';
import ServiceAreas from '@/components/pages/locations__seattle/ServiceAreas';
import Keywords from '@/components/pages/locations__seattle/Keywords';
import Marquee from '@/components/pages/locations__seattle/Marquee';
import Industries from '@/components/pages/locations__seattle/Industries';
import Services from '@/components/pages/locations__seattle/Services';
import Pricing from '@/components/pages/locations__seattle/Pricing';
import Faq from '@/components/pages/locations__seattle/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Seattle, WA: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving Seattle, Washington. Local SEO, Google Business Profile, technical SEO and content for businesses across Capitol Hill.",
  alternates: { canonical: "https://www.rankempire.us/locations/seattle/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Seattle, WA: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Seattle, Washington. Local SEO, Google Business Profile, technical SEO and content for businesses across Capitol Hill.", url: "https://www.rankempire.us/locations/seattle/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Seattle, WA: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Seattle, Washington. Local SEO, Google Business Profile, technical SEO and content for businesses across Capitol Hill." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Seattle\", \"item\": \"https://www.rankempire.us/locations/seattle/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Seattle\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Seattle\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Washington\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/seattle/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Seattle business also target Bellevue and the Eastside?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you regularly serve Eastside customers, yes, but it needs its own strategy. Searchers in Bellevue or Redmond tend to see nearby businesses first. We build dedicated pages for those cities, collect reviews from customers there, and make sure your service area settings reflect where you actually travel.\"}}, {\"@type\": \"Question\", \"name\": \"When should Seattle roofing and gutter companies invest in SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ideally in late spring or summer, before the rainy season begins. Content and profile improvements take time to be indexed and build trust. Starting early means your business is visible when homeowners start noticing leaks or clogged gutters in fall, rather than catching up after demand has peaked.\"}}, {\"@type\": \"Question\", \"name\": \"Do tech companies in Seattle need local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many do not need map pack rankings, since they sell nationally or globally. They usually benefit more from technical SEO, product content, and authority building. However, Seattle tech firms that hire locally or serve regional clients can add local pages where it makes sense.\"}}, {\"@type\": \"Question\", \"name\": \"How does RankEmpire work with Seattle clients?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We are a remote first agency without a Seattle office. Collaboration happens through video calls, shared dashboards, and clear monthly reports. We rely on your knowledge of local customers and neighborhoods, while handling the research, technical work, content, and profile management that drive visibility in search.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
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
