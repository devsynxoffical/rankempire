import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-photographers/V1';
import Statement from '@/components/pages/seo-for-photographers/Statement';
import Searches from '@/components/pages/seo-for-photographers/Searches';
import Challenges from '@/components/pages/seo-for-photographers/Challenges';
import Pages from '@/components/pages/seo-for-photographers/Pages';
import Marquee from '@/components/pages/seo-for-photographers/Marquee';
import Strategy from '@/components/pages/seo-for-photographers/Strategy';
import Services from '@/components/pages/seo-for-photographers/Services';
import Cities from '@/components/pages/seo-for-photographers/Cities';
import Pricing from '@/components/pages/seo-for-photographers/Pricing';
import Faq from '@/components/pages/seo-for-photographers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-photographers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Photographers: Rank Higher | RankEmpire",
  description: "SEO for photographers: rank for wedding, family, headshot and real estate photography searches with genre pages, galleries, location pages and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-photographers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Photographers: Rank Higher | RankEmpire", description: "SEO for photographers: rank for wedding, family, headshot and real estate photography searches with genre pages, galleries, location pages and reviews.", url: "https://www.rankempire.us/seo-for-photographers/", images: ["https://www.rankempire.us/img/i-food.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Photographers: Rank Higher | RankEmpire", description: "SEO for photographers: rank for wedding, family, headshot and real estate photography searches with genre pages, galleries, location pages and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Photographers\", \"item\": \"https://www.rankempire.us/seo-for-photographers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Photographers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Photographers\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-photographers/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is a strong portfolio enough to rank in search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Portfolios are essential, but search engines rely on text to understand images. Add a short description to each gallery covering the session type, location, and story, and use descriptive file names and alt text. Compress images so pages load fast on phones, since slow, heavy galleries frustrate visitors and weaken rankings.\"}}, {\"@type\": \"Question\", \"name\": \"Should we create pages for specific shoot locations?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Location pages can help when they feature real sessions and useful details, such as the best season, time of day, parking, and permit requirements. Avoid generic pages that only swap the city name. A genuine guide to a popular park or venue can attract clients searching for ideas before they pick a photographer.\"}}, {\"@type\": \"Question\", \"name\": \"How important are reviews for photographers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Very important. Clients can see the photos in your portfolio, but reviews tell them how the session felt, whether timelines were met, and how you handled stressful moments like a rainy wedding day. Reviews that mention the session type also help you rank for those specific searches in your area.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish our pricing?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many clients look for pricing early and move on if they cannot find any. Publishing starting prices or package ranges helps qualify inquiries and builds trust. Explain what is included, such as hours of coverage, edited images, and albums, and how custom packages work for different needs and budgets.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for photographers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most photography businesss see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for photographers cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-photographers" />
        <Statement />
        <SearchSurfaces slug="seo-for-photographers" kind="industry" audience="photographers" kw="wedding photographer near me" question="family photo session cost" />
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
