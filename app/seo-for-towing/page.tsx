import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-towing/V1';
import Statement from '@/components/pages/seo-for-towing/Statement';
import Searches from '@/components/pages/seo-for-towing/Searches';
import Challenges from '@/components/pages/seo-for-towing/Challenges';
import Pages from '@/components/pages/seo-for-towing/Pages';
import Marquee from '@/components/pages/seo-for-towing/Marquee';
import Strategy from '@/components/pages/seo-for-towing/Strategy';
import Services from '@/components/pages/seo-for-towing/Services';
import Cities from '@/components/pages/seo-for-towing/Cities';
import Pricing from '@/components/pages/seo-for-towing/Pricing';
import Faq from '@/components/pages/seo-for-towing/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-towing/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Towing Companies: Rank Higher | RankEmpire",
  description: "SEO for towing companies: win urgent tow and roadside assistance searches in the map pack with a verified 24-hour profile, consistent citations and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-towing/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Towing Companies: Rank Higher | RankEmpire", description: "SEO for towing companies: win urgent tow and roadside assistance searches in the map pack with a verified 24-hour profile, consistent citations and reviews.", url: "https://www.rankempire.us/seo-for-towing/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Towing Companies: Rank Higher | RankEmpire", description: "SEO for towing companies: win urgent tow and roadside assistance searches in the map pack with a verified 24-hour profile, consistent citations and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Towing Companies\", \"item\": \"https://www.rankempire.us/seo-for-towing/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Towing Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Towing Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-towing/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we rank for tow truck near me searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"These searches are mostly decided by proximity, profile accuracy, and reviews. Keep your service area realistic, so you only appear where you can arrive quickly, and make sure hours and phone details are correct. A steady flow of reviews mentioning fast arrival strengthens the profile more than almost anything else.\"}}, {\"@type\": \"Question\", \"name\": \"Should we list towing prices online?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Listing a hookup fee and per mile rate, or at least explaining how pricing works, helps customers trust you before you arrive. Be clear about after hours rates, winching, and special equipment charges. Surprise fees are the most common complaint in towing reviews, so transparency protects your reputation.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth creating separate pages for roadside assistance?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many drivers search for a jump start, lockout help, or a tire change rather than a tow, and those calls are quick jobs that can turn into loyal customers. Separate pages let you appear for each of these searches and explain what each service costs.\"}}, {\"@type\": \"Question\", \"name\": \"Do partnerships with repair shops help our SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They help in two ways. Shops and dealerships send direct referral calls, and when they mention or link to you on their websites, it strengthens your local authority. Being listed as a preferred tow provider by trusted local businesses also reassures drivers comparing companies they have never used.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for towing companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most towing companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for towing companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-towing" />
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
