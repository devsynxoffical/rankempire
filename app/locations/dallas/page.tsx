import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/locations__dallas/V0';
import Statement from '@/components/pages/locations__dallas/Statement';
import Considerations from '@/components/pages/locations__dallas/Considerations';
import ServiceAreas from '@/components/pages/locations__dallas/ServiceAreas';
import Keywords from '@/components/pages/locations__dallas/Keywords';
import Marquee from '@/components/pages/locations__dallas/Marquee';
import Industries from '@/components/pages/locations__dallas/Industries';
import Services from '@/components/pages/locations__dallas/Services';
import Pricing from '@/components/pages/locations__dallas/Pricing';
import Faq from '@/components/pages/locations__dallas/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__dallas/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Dallas, TX: Local SEO Services | RankEmpire",
  description: "SEO company in Dallas: local SEO, Google Business Profile optimization and content for businesses in Uptown, Plano, Frisco, Irving and across the DFW metroplex.",
  alternates: { canonical: "https://www.rankempire.us/locations/dallas/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Dallas, TX: Local SEO Services | RankEmpire", description: "SEO company in Dallas: local SEO, Google Business Profile optimization and content for businesses in Uptown, Plano, Frisco, Irving and across the DFW metroplex.", url: "https://www.rankempire.us/locations/dallas/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Dallas, TX: Local SEO Services | RankEmpire", description: "SEO company in Dallas: local SEO, Google Business Profile optimization and content for businesses in Uptown, Plano, Frisco, Irving and across the DFW metroplex." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Dallas\", \"item\": \"https://www.rankempire.us/locations/dallas/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Dallas\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Dallas\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Texas\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/dallas/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should I target Dallas or the whole DFW metroplex?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Start with the area where your business is located and where your best customers come from, then expand. A clinic in Plano and a contractor in Garland have very different target areas. We often build a core Dallas page alongside dedicated pages for key suburbs, each with unique content rather than copied text.\"}}, {\"@type\": \"Question\", \"name\": \"How can my business reach people relocating to Dallas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Newcomers search broadly, using phrases like best pediatrician near Frisco or family dentist Plano, and they rely on reviews because they lack personal referrals. Strong review profiles, clear location pages, and helpful guides about the areas you serve make your business easier to find and easier to trust.\"}}, {\"@type\": \"Question\", \"name\": \"Is SEO useful for B2B companies in Dallas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many Dallas buyers in corporate settings start with a search before contacting vendors. For B2B firms, we focus on service pages that explain expertise clearly, industry specific content, and technical site quality. Map pack rankings matter less here than ranking for the specific problems your buyers are trying to solve.\"}}, {\"@type\": \"Question\", \"name\": \"How do you work with Dallas businesses remotely?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We run everything through video meetings, shared project boards, and monthly reporting. RankEmpire has no Dallas office, and we do not pretend otherwise. Since SEO work happens on your website, your Google Business Profile, and across the web, being remote does not limit results. Your input on local customers guides our priorities.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Dallas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/dallas" />
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
