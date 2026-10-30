import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-limousine-companies/V0';
import Statement from '@/components/pages/seo-for-limousine-companies/Statement';
import Searches from '@/components/pages/seo-for-limousine-companies/Searches';
import Challenges from '@/components/pages/seo-for-limousine-companies/Challenges';
import Pages from '@/components/pages/seo-for-limousine-companies/Pages';
import Marquee from '@/components/pages/seo-for-limousine-companies/Marquee';
import Strategy from '@/components/pages/seo-for-limousine-companies/Strategy';
import Services from '@/components/pages/seo-for-limousine-companies/Services';
import Cities from '@/components/pages/seo-for-limousine-companies/Cities';
import Pricing from '@/components/pages/seo-for-limousine-companies/Pricing';
import Faq from '@/components/pages/seo-for-limousine-companies/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-limousine-companies/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Limousine Companies: More Bookings | RankEmpire",
  description: "SEO for limousine companies: rank for airport transfer, wedding, prom and corporate car service searches with map pack optimization, fleet pages and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-limousine-companies/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Limousine Companies: More Bookings | RankEmpire", description: "SEO for limousine companies: rank for airport transfer, wedding, prom and corporate car service searches with map pack optimization, fleet pages and reviews.", url: "https://www.rankempire.us/seo-for-limousine-companies/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Limousine Companies: More Bookings | RankEmpire", description: "SEO for limousine companies: rank for airport transfer, wedding, prom and corporate car service searches with map pack optimization, fleet pages and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Limousine Companies\", \"item\": \"https://www.rankempire.us/seo-for-limousine-companies/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Limousine Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Limousine Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-limousine-companies/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How can a limo company compete with rideshare apps in search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"By targeting the bookings apps do not serve well: weddings, proms, corporate accounts, airport meet-and-greet and group travel. Pages for each occasion with clear rates, plus strong reviews, win those searches.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish our hourly rates?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, as starting rates with minimum hours per vehicle type. Riders compare quickly, and published rates filter inquiries and give search engines and AI assistants specific numbers to show.\"}}, {\"@type\": \"Question\", \"name\": \"Do airport pages really help?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Airport transfers are the most frequent limo searches. A page per airport with flat rates, pickup instructions and flight tracking ranks for those searches and converts well because the intent is immediate.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank in more than one city?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Set an accurate service area on the Google Business Profile, publish genuine service area pages with local venues and hotels, and earn reviews from riders in those cities. One profile per real garage location if you have several.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for limousine companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map pack and airport searches often move within 60 to 90 days. Wedding and corporate searches take four to six months, since they depend on content depth and venue partnerships.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for limousine companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month for one location. Operators covering several cities or airports usually need the Pro plan. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-limousine-companies" />
        <Statement />
        <SearchSurfaces slug="seo-for-limousine-companies" kind="industry" audience="limousine companies" kw="limo service near me" question="how much to tip a limo driver" />
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
