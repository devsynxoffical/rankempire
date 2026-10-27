import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/seo-for-fencing-companies/V0';
import Statement from '@/components/pages/seo-for-fencing-companies/Statement';
import Searches from '@/components/pages/seo-for-fencing-companies/Searches';
import Challenges from '@/components/pages/seo-for-fencing-companies/Challenges';
import Pages from '@/components/pages/seo-for-fencing-companies/Pages';
import Marquee from '@/components/pages/seo-for-fencing-companies/Marquee';
import Strategy from '@/components/pages/seo-for-fencing-companies/Strategy';
import Services from '@/components/pages/seo-for-fencing-companies/Services';
import Cities from '@/components/pages/seo-for-fencing-companies/Cities';
import Pricing from '@/components/pages/seo-for-fencing-companies/Pricing';
import Faq from '@/components/pages/seo-for-fencing-companies/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-fencing-companies/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Fencing Companies: Rank Higher | RankEmpire",
  description: "SEO for fencing companies that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-fencing-companies/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Fencing Companies: Rank Higher | RankEmpire", description: "SEO for fencing companies that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.us/seo-for-fencing-companies/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Fencing Companies: Rank Higher | RankEmpire", description: "SEO for fencing companies that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Fencing Companies\", \"item\": \"https://www.rankempire.us/seo-for-fencing-companies/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Fencing Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Fencing Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-fencing-companies/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we post price ranges for fence installation?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Price ranges per linear foot by material can help, as long as you explain what changes the total, such as terrain, gates, removal of old fencing, and permits. Homeowners appreciate the transparency, and it helps qualify leads before scheduling an estimate visit.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank higher during the spring rush?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prepare well before spring by updating your profile, adding fresh project photos, and publishing seasonal content. Collect reviews from fall and winter projects. Rankings take time to build, so groundwork done in the slow season pays off when demand rises.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing about HOA and permit rules?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many homeowners search these questions before contacting a company. Clear explanations of local rules, survey requirements, and approval steps position you as knowledgeable and trustworthy, and these pages often attract buyers early in the decision process. Link them to your estimate form so readers who are ready can request a visit.\"}}, {\"@type\": \"Question\", \"name\": \"Do we need separate pages for each fence material?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. People search for specific materials and compare their pros and cons. A dedicated page for vinyl, wood, aluminum, and chain link allows you to rank for each and gives buyers the detailed information they need to choose. Include photos of each material installed locally, typical lifespan, and the gate and hardware options you offer.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for fencing companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most fence companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for fencing companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
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
