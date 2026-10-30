import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-exotic-car-rental/V0';
import Statement from '@/components/pages/seo-for-exotic-car-rental/Statement';
import Searches from '@/components/pages/seo-for-exotic-car-rental/Searches';
import Challenges from '@/components/pages/seo-for-exotic-car-rental/Challenges';
import Pages from '@/components/pages/seo-for-exotic-car-rental/Pages';
import Marquee from '@/components/pages/seo-for-exotic-car-rental/Marquee';
import Strategy from '@/components/pages/seo-for-exotic-car-rental/Strategy';
import Services from '@/components/pages/seo-for-exotic-car-rental/Services';
import Cities from '@/components/pages/seo-for-exotic-car-rental/Cities';
import Pricing from '@/components/pages/seo-for-exotic-car-rental/Pricing';
import Faq from '@/components/pages/seo-for-exotic-car-rental/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-exotic-car-rental/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Exotic Car Rental Companies | RankEmpire",
  description: "SEO for exotic car rental companies: rank for Lamborghini, Ferrari and luxury car rental searches with model pages, requirements, reviews and AI visibility.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-exotic-car-rental/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Exotic Car Rental Companies | RankEmpire", description: "SEO for exotic car rental companies: rank for Lamborghini, Ferrari and luxury car rental searches with model pages, requirements, reviews and AI visibility.", url: "https://www.rankempire.us/seo-for-exotic-car-rental/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Exotic Car Rental Companies | RankEmpire", description: "SEO for exotic car rental companies: rank for Lamborghini, Ferrari and luxury car rental searches with model pages, requirements, reviews and AI visibility." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Exotic Car Rental Companies\", \"item\": \"https://www.rankempire.us/seo-for-exotic-car-rental/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Exotic Car Rental Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Exotic Car Rental Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-exotic-car-rental/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do we need a separate page for each car?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Renters search for the specific model, and a dedicated page with specifications, photos, rates and requirements ranks for those searches and answers the questions that otherwise delay a booking.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish our deposit and insurance requirements?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Absolutely. Requirements are the most researched topic before booking. A clear page reduces abandoned inquiries, filters unqualified renters and is the content AI assistants quote when asked about renting exotic cars.\"}}, {\"@type\": \"Question\", \"name\": \"How do we compete with peer-to-peer rental apps?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Emphasize what apps cannot guarantee: a maintained fleet, delivery, chauffeur options, transparent policies and consistent service. Model and occasion pages plus strong reviews win the searches where renters care about reliability.\"}}, {\"@type\": \"Question\", \"name\": \"Do occasion pages like weddings and proms help?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Occasion searches carry higher budgets and longer rentals, and a page with packages, chauffeur options and photos converts better than a general fleet page.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for exotic car rental companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map pack and model searches in your city often move within 60 to 90 days. Competitive metros like Miami, Los Angeles and Las Vegas take four to six months for the broad terms.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for exotic car rental companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month; fleets with several locations or delivery areas usually need the Pro plan. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-exotic-car-rental" />
        <Statement />
        <SearchSurfaces slug="seo-for-exotic-car-rental" kind="industry" audience="exotic car rental companies" kw="exotic car rental near me" question="exotic car rental vs turo" />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
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
