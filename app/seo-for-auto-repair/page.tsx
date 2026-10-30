import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-auto-repair/V1';
import Statement from '@/components/pages/seo-for-auto-repair/Statement';
import Searches from '@/components/pages/seo-for-auto-repair/Searches';
import Challenges from '@/components/pages/seo-for-auto-repair/Challenges';
import Pages from '@/components/pages/seo-for-auto-repair/Pages';
import Marquee from '@/components/pages/seo-for-auto-repair/Marquee';
import Strategy from '@/components/pages/seo-for-auto-repair/Strategy';
import Services from '@/components/pages/seo-for-auto-repair/Services';
import Cities from '@/components/pages/seo-for-auto-repair/Cities';
import Pricing from '@/components/pages/seo-for-auto-repair/Pricing';
import Faq from '@/components/pages/seo-for-auto-repair/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-auto-repair/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Auto Repair Shops: Rank Higher | RankEmpire",
  description: "SEO for auto repair shops: rank for brake, AC, transmission and check engine searches with repair pages, profile optimization and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-auto-repair/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Auto Repair Shops: Rank Higher | RankEmpire", description: "SEO for auto repair shops: rank for brake, AC, transmission and check engine searches with repair pages, profile optimization and reviews.", url: "https://www.rankempire.us/seo-for-auto-repair/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Auto Repair Shops: Rank Higher | RankEmpire", description: "SEO for auto repair shops: rank for brake, AC, transmission and check engine searches with repair pages, profile optimization and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Auto Repair Shops\", \"item\": \"https://www.rankempire.us/seo-for-auto-repair/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Auto Repair Shops\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Auto Repair Shops\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-auto-repair/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Why does a shop farther away rank above us on maps?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map rankings weigh relevance and prominence, not just distance. A competitor may have more reviews, better matching categories, more complete services, or more mentions around the web. Auditing your profile against theirs usually shows the specific gaps, such as missing services or fewer recent reviews, that you can close.\"}}, {\"@type\": \"Question\", \"name\": \"Should we create pages for every car brand?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only for brands you service often and well. A thin page for every make adds little value. Focus on the vehicles that already fill your bays, write useful content about common issues for those models, and support each page with real photos and reviews from those owners.\"}}, {\"@type\": \"Question\", \"name\": \"How do we handle a bad review claiming we overcharged?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Respond publicly and politely, explain the work performed without sharing private details, and invite the customer to discuss it offline. Future customers read responses closely. A calm, factual reply often builds more trust than the negative review takes away, especially beside many positive reviews.\"}}, {\"@type\": \"Question\", \"name\": \"Is posting prices for common jobs a good idea?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ranges for routine work like oil changes or brake pads can help, as long as you explain what changes the final cost. Clear pricing context reduces the fear of being overcharged and gives searchers a reason to call you instead of a shop that shares nothing.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for auto repair shops?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most auto repair shops see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for auto repair shops cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-auto-repair" />
        <Statement />
        <SearchSurfaces slug="seo-for-auto-repair" kind="industry" audience="auto repair shops" kw="check engine light diagnostic near me" question="timing belt replacement cost" />
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
