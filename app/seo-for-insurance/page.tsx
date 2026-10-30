import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-insurance/V2';
import Statement from '@/components/pages/seo-for-insurance/Statement';
import Searches from '@/components/pages/seo-for-insurance/Searches';
import Challenges from '@/components/pages/seo-for-insurance/Challenges';
import Pages from '@/components/pages/seo-for-insurance/Pages';
import Marquee from '@/components/pages/seo-for-insurance/Marquee';
import Strategy from '@/components/pages/seo-for-insurance/Strategy';
import Services from '@/components/pages/seo-for-insurance/Services';
import Cities from '@/components/pages/seo-for-insurance/Cities';
import Pricing from '@/components/pages/seo-for-insurance/Pricing';
import Faq from '@/components/pages/seo-for-insurance/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-insurance/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Insurance Agencies: Rank Higher | RankEmpire",
  description: "SEO for insurance agencies: win local auto, home, life and business insurance searches with line pages, Google Business Profile optimization and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-insurance/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Insurance Agencies: Rank Higher | RankEmpire", description: "SEO for insurance agencies: win local auto, home, life and business insurance searches with line pages, Google Business Profile optimization and reviews.", url: "https://www.rankempire.us/seo-for-insurance/", images: ["https://www.rankempire.us/img/i-pro.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Insurance Agencies: Rank Higher | RankEmpire", description: "SEO for insurance agencies: win local auto, home, life and business insurance searches with line pages, Google Business Profile optimization and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Insurance Agencies\", \"item\": \"https://www.rankempire.us/seo-for-insurance/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Insurance Agencies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Insurance Agencies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-insurance/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we compete with national carriers that advertise heavily?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"National carriers dominate broad searches, but agencies can win local and specific searches, such as business insurance for landscapers or home insurance in a particular town. Emphasize personal service, carrier choice, and claim support. Detailed pages and strong reviews make the difference for these more specific queries.\"}}, {\"@type\": \"Question\", \"name\": \"Should captive agents create their own website content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many carriers provide template sites, but they often limit customization. Check your carrier's marketing rules, then add unique local content where allowed, such as community involvement, team bios, and local risk explanations. Unique content helps you stand out from other agents using the same template.\"}}, {\"@type\": \"Question\", \"name\": \"Is it a good idea to publish rate examples?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Generally no. Rates depend on many individual factors and change frequently, so examples can mislead and may conflict with regulations. Instead, explain what affects premiums and how bundling or coverage choices change cost. Invite visitors to request a personalized quote.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for business insurance in specific industries?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a page for each industry you serve with real knowledge of their risks, required coverages, and contract requirements. Include examples of common claims scenarios. Seek reviews and referrals from businesses in that industry to strengthen relevance and trust. Trade association memberships and sponsorships can add links from sources those owners already read.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for insurance agencies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most insurance agencys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for insurance agencies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-insurance" />
        <Statement />
        <SearchSurfaces slug="seo-for-insurance" kind="industry" audience="insurance agencies" kw="insurance agent near me" question="why did my car insurance go up" />
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
