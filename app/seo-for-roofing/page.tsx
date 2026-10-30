import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-roofing/V0';
import Statement from '@/components/pages/seo-for-roofing/Statement';
import Searches from '@/components/pages/seo-for-roofing/Searches';
import Challenges from '@/components/pages/seo-for-roofing/Challenges';
import Pages from '@/components/pages/seo-for-roofing/Pages';
import Marquee from '@/components/pages/seo-for-roofing/Marquee';
import Strategy from '@/components/pages/seo-for-roofing/Strategy';
import Services from '@/components/pages/seo-for-roofing/Services';
import Cities from '@/components/pages/seo-for-roofing/Cities';
import Pricing from '@/components/pages/seo-for-roofing/Pricing';
import Faq from '@/components/pages/seo-for-roofing/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-roofing/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Roofing Companies: Rank Higher | RankEmpire",
  description: "SEO for roofing companies: rank for roof repair, replacement and storm damage searches with roof-type pages, insurance content and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-roofing/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Roofing Companies: Rank Higher | RankEmpire", description: "SEO for roofing companies: rank for roof repair, replacement and storm damage searches with roof-type pages, insurance content and reviews.", url: "https://www.rankempire.us/seo-for-roofing/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Roofing Companies: Rank Higher | RankEmpire", description: "SEO for roofing companies: rank for roof repair, replacement and storm damage searches with roof-type pages, insurance content and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Roofing Companies\", \"item\": \"https://www.rankempire.us/seo-for-roofing/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Roofing Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Roofing Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-roofing/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we stand out from storm chasers after a hail event?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Lead with what transient crews cannot show: a local address, years in the community, state license numbers, and workmanship warranties backed by a company that will still be here. Publish photos of local projects with neighborhood names and gather reviews from nearby homeowners. Post on your profile right after storms to show you are active.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish roof replacement prices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Price ranges help homeowners plan and reduce shock at estimate time. Explain the factors that drive cost, such as roof size, pitch, number of layers to remove, decking repairs, materials, and permits. Clear context builds trust and helps qualify leads before you spend time on a roof inspection.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing about the insurance claim process?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. After storms, many homeowners search for how roof claims work, what adjusters look for, and how deductibles apply. Clear, accurate explanations help them prepare and position your company as knowledgeable. Avoid suggesting you can guarantee approval or waive deductibles, which can create legal problems in many states.\"}}, {\"@type\": \"Question\", \"name\": \"Do material specific pages help a roofing company rank?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Homeowners often research metal, architectural shingles, tile, or flat roofing systems by name before contacting anyone. Dedicated pages explaining lifespan, maintenance, cost differences, and suitability for the local climate capture those searches and help buyers arrive at your estimate already understanding their options.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for roofing companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most roofing companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for roofing companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-roofing" />
        <Statement />
        <SearchSurfaces slug="seo-for-roofing" kind="industry" audience="roofing companies" kw="emergency roof repair near me" question="roof replacement cost" />
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
