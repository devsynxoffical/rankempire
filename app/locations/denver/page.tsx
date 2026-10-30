import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/locations__denver/V1';
import Statement from '@/components/pages/locations__denver/Statement';
import Considerations from '@/components/pages/locations__denver/Considerations';
import ServiceAreas from '@/components/pages/locations__denver/ServiceAreas';
import Keywords from '@/components/pages/locations__denver/Keywords';
import Marquee from '@/components/pages/locations__denver/Marquee';
import Industries from '@/components/pages/locations__denver/Industries';
import Services from '@/components/pages/locations__denver/Services';
import Pricing from '@/components/pages/locations__denver/Pricing';
import Faq from '@/components/pages/locations__denver/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__denver/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Denver, CO: Local SEO Services | RankEmpire",
  description: "SEO company in Denver: local SEO, Google Business Profile optimization and content for businesses in LoDo, RiNo, Capitol Hill, Highlands, Aurora and Lakewood.",
  alternates: { canonical: "https://www.rankempire.us/locations/denver/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Denver, CO: Local SEO Services | RankEmpire", description: "SEO company in Denver: local SEO, Google Business Profile optimization and content for businesses in LoDo, RiNo, Capitol Hill, Highlands, Aurora and Lakewood.", url: "https://www.rankempire.us/locations/denver/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Denver, CO: Local SEO Services | RankEmpire", description: "SEO company in Denver: local SEO, Google Business Profile optimization and content for businesses in LoDo, RiNo, Capitol Hill, Highlands, Aurora and Lakewood." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Denver\", \"item\": \"https://www.rankempire.us/locations/denver/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Denver\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Denver\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Colorado\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/denver/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How should Denver roofing and auto body shops plan SEO around hail season?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prepare before spring and summer storm activity. We create evergreen pages about hail damage, insurance claims, and inspections, then schedule profile updates and review requests around busy periods. Pages built in advance have time to rank, so you are visible when homeowners and drivers start searching after a storm.\"}}, {\"@type\": \"Question\", \"name\": \"Can my Denver business rank in suburbs like Aurora and Lakewood?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with dedicated effort. Google favors businesses near the searcher, so we build unique pages for each suburb you serve, collect reviews from customers there, and reference local details accurately. We prioritize the areas that bring your most valuable customers rather than trying to cover the whole Front Range at once.\"}}, {\"@type\": \"Question\", \"name\": \"Is SEO useful for outdoor and recreation businesses in Denver?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Very much. Visitors and residents search for rentals, guides, gear, and repairs, often on their phones before a trip. Accurate hours, strong reviews, and helpful seasonal content, such as trail or ski preparation guides, can bring steady traffic and earn links from outdoor communities.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire meet Denver clients in person?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. RankEmpire is remote first and has no Denver office. We work through scheduled video calls, shared reporting, and online collaboration. All ranking factors, including your website, Google Business Profile, reviews, and links, are managed online, and your knowledge of Denver customers helps shape our strategy.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Denver?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="locations/denver" />
        <Statement />
        <SearchSurfaces slug="locations/denver" kind="city" audience="businesses in Denver" city="Denver" kw="seo company denver" question="How much does local SEO cost in Denver?" />
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
