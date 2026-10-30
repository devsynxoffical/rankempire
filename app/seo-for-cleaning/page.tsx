import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-cleaning/V2';
import Statement from '@/components/pages/seo-for-cleaning/Statement';
import Searches from '@/components/pages/seo-for-cleaning/Searches';
import Challenges from '@/components/pages/seo-for-cleaning/Challenges';
import Pages from '@/components/pages/seo-for-cleaning/Pages';
import Marquee from '@/components/pages/seo-for-cleaning/Marquee';
import Strategy from '@/components/pages/seo-for-cleaning/Strategy';
import Services from '@/components/pages/seo-for-cleaning/Services';
import Cities from '@/components/pages/seo-for-cleaning/Cities';
import Pricing from '@/components/pages/seo-for-cleaning/Pricing';
import Faq from '@/components/pages/seo-for-cleaning/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-cleaning/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Cleaning Companies: Rank Higher | RankEmpire",
  description: "SEO for cleaning companies: win the map pack for house, office and move-out cleaning searches with profile optimization, service pages, reviews and area pages.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-cleaning/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Cleaning Companies: Rank Higher | RankEmpire", description: "SEO for cleaning companies: win the map pack for house, office and move-out cleaning searches with profile optimization, service pages, reviews and area pages.", url: "https://www.rankempire.us/seo-for-cleaning/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Cleaning Companies: Rank Higher | RankEmpire", description: "SEO for cleaning companies: win the map pack for house, office and move-out cleaning searches with profile optimization, service pages, reviews and area pages." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Cleaning Companies\", \"item\": \"https://www.rankempire.us/seo-for-cleaning/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Cleaning Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Cleaning Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-cleaning/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we publish prices for house cleaning?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Starting prices or price ranges can help customers self qualify and reduce wasted quote requests. Explain what affects pricing, such as home size, condition, and frequency. If prices vary widely, an instant estimate form can provide the transparency customers want while still letting you adjust for specifics.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank in several suburbs, not just our home city?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Set accurate service areas on the profile, then build area pages that mention real jobs, local housing types, and neighborhood details. Encourage reviews from customers in each area. Map rankings still favor proximity, so organic area pages are often the main way to reach farther suburbs.\"}}, {\"@type\": \"Question\", \"name\": \"Do we need separate pages for residential and commercial cleaning?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. These buyers search with different words, have different concerns, and expect different information. A homeowner wants trust and consistency, while an office manager cares about scope, insurance, and after hours service. Separate pages let each audience find exactly what they need.\"}}, {\"@type\": \"Question\", \"name\": \"What if a customer leaves a review about something being missed?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Respond publicly, acknowledge the issue, and explain how you fixed it or offered a reclean. Customers understand mistakes happen. What they look for is how the company responds, so a clear, helpful reply can actually build confidence among people reading the review later.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for cleaning companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most cleaning companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for cleaning companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-cleaning" />
        <Statement />
        <SearchSurfaces slug="seo-for-cleaning" kind="industry" audience="cleaning companies" kw="move out cleaning service this week" question="deep cleaning cost for 3 bedroom house" />
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
