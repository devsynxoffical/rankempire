import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-yacht-charter/V0';
import Statement from '@/components/pages/seo-for-yacht-charter/Statement';
import Searches from '@/components/pages/seo-for-yacht-charter/Searches';
import Challenges from '@/components/pages/seo-for-yacht-charter/Challenges';
import Pages from '@/components/pages/seo-for-yacht-charter/Pages';
import Marquee from '@/components/pages/seo-for-yacht-charter/Marquee';
import Strategy from '@/components/pages/seo-for-yacht-charter/Strategy';
import Services from '@/components/pages/seo-for-yacht-charter/Services';
import Cities from '@/components/pages/seo-for-yacht-charter/Cities';
import Pricing from '@/components/pages/seo-for-yacht-charter/Pricing';
import Faq from '@/components/pages/seo-for-yacht-charter/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-yacht-charter/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Yacht Charter Companies: More Bookings | RankEmpire",
  description: "SEO for yacht charter companies: rank for destination, yacht type and day charter searches with destination pages, fleet pages, reviews and AI visibility.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-yacht-charter/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Yacht Charter Companies: More Bookings | RankEmpire", description: "SEO for yacht charter companies: rank for destination, yacht type and day charter searches with destination pages, fleet pages, reviews and AI visibility.", url: "https://www.rankempire.us/seo-for-yacht-charter/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Yacht Charter Companies: More Bookings | RankEmpire", description: "SEO for yacht charter companies: rank for destination, yacht type and day charter searches with destination pages, fleet pages, reviews and AI visibility." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Yacht Charter Companies\", \"item\": \"https://www.rankempire.us/seo-for-yacht-charter/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Yacht Charter Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Yacht Charter Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-yacht-charter/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can a yacht charter company compete with booking platforms in search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"On broad terms like yacht rental, platforms usually win. On specific marinas, destinations, yacht types and cost questions, an operator with detailed pages and strong reviews can outrank them, and those searches convert better.\"}}, {\"@type\": \"Question\", \"name\": \"Should each yacht have its own page?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Guests search by size, type and amenities, and a dedicated page per yacht with specifications, cabins, crew and photos ranks for those searches and answers the questions that would otherwise delay a booking.\"}}, {\"@type\": \"Question\", \"name\": \"How do we explain APA and extra costs without scaring guests?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"With a clear guide and worked examples. Show the charter fee, the typical APA percentage and what it covers, fuel and dockage expectations and gratuity norms. Transparency builds trust and reduces back-and-forth before booking.\"}}, {\"@type\": \"Question\", \"name\": \"Does Google Business Profile matter for yacht charters?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For day charters it is essential. A profile per marina with photos, reviews, hours and booking links decides the map pack for searches like yacht rental near me, which are often booked within days.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for yacht charter companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Day charter and marina searches often move within 60 to 90 days. Destination and week charter searches take four to six months, because they depend on content depth and travel site mentions.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for yacht charter companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month for a single marina; multi-destination fleets usually need a Pro or Multi-location plan. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-yacht-charter" />
        <Statement />
        <SearchSurfaces slug="seo-for-yacht-charter" kind="industry" audience="yacht charter companies" kw="yacht charter miami" question="what is apa on a yacht charter" />
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
