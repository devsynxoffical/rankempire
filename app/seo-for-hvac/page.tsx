import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/seo-for-hvac/V1';
import Statement from '@/components/pages/seo-for-hvac/Statement';
import Searches from '@/components/pages/seo-for-hvac/Searches';
import Challenges from '@/components/pages/seo-for-hvac/Challenges';
import Pages from '@/components/pages/seo-for-hvac/Pages';
import Marquee from '@/components/pages/seo-for-hvac/Marquee';
import Strategy from '@/components/pages/seo-for-hvac/Strategy';
import Services from '@/components/pages/seo-for-hvac/Services';
import Cities from '@/components/pages/seo-for-hvac/Cities';
import Pricing from '@/components/pages/seo-for-hvac/Pricing';
import Faq from '@/components/pages/seo-for-hvac/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-hvac/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for HVAC Companies: Rank Higher | RankEmpire",
  description: "SEO for HVAC companies that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-hvac/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for HVAC Companies: Rank Higher | RankEmpire", description: "SEO for HVAC companies that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.us/seo-for-hvac/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for HVAC Companies: Rank Higher | RankEmpire", description: "SEO for HVAC companies that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for HVAC Companies\", \"item\": \"https://www.rankempire.us/seo-for-hvac/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for HVAC Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"HVAC Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-hvac/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we rank well during summer and winter peaks?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Rankings are built before demand rises, not during it. Update the profile, add fresh photos, publish seasonal pages, and collect reviews during spring and fall. When the first heat wave or cold snap hits, the company is already visible instead of trying to catch up while phones are ringing.\"}}, {\"@type\": \"Question\", \"name\": \"Should we create pages for each equipment brand we install?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you hold certifications with specific brands and customers search for them, a dedicated page can help. Focus on your experience installing that brand, warranty registration, and service support rather than copying manufacturer specifications that already appear on hundreds of other sites.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing about energy efficiency and rebates?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many replacement buyers research SEER2 ratings, heat pump incentives, and operating costs before calling anyone. Clear, current explanations help them decide and position your company as an advisor. Keep rebate details dated and updated, since programs change and outdated information frustrates readers.\"}}, {\"@type\": \"Question\", \"name\": \"Do maintenance plan pages help with SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They can attract people searching for tune ups, especially before seasonal changes, and they support recurring revenue. A strong page explains what each visit includes, pricing, scheduling, and member benefits. It also gives you a place to send customers after repairs to keep the relationship going.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for HVAC companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most HVAC companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for HVAC companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <Statement />
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
