import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-accountants/V2';
import Statement from '@/components/pages/seo-for-accountants/Statement';
import Searches from '@/components/pages/seo-for-accountants/Searches';
import Challenges from '@/components/pages/seo-for-accountants/Challenges';
import Pages from '@/components/pages/seo-for-accountants/Pages';
import Marquee from '@/components/pages/seo-for-accountants/Marquee';
import Strategy from '@/components/pages/seo-for-accountants/Strategy';
import Services from '@/components/pages/seo-for-accountants/Services';
import Cities from '@/components/pages/seo-for-accountants/Cities';
import Pricing from '@/components/pages/seo-for-accountants/Pricing';
import Faq from '@/components/pages/seo-for-accountants/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-accountants/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Accountants and CPAs: Rank Higher | RankEmpire",
  description: "SEO for accountants and CPAs: rank for tax preparation, bookkeeping and small business accounting searches with service pages, reviews and seasonal content.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-accountants/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Accountants and CPAs: Rank Higher | RankEmpire", description: "SEO for accountants and CPAs: rank for tax preparation, bookkeeping and small business accounting searches with service pages, reviews and seasonal content.", url: "https://www.rankempire.us/seo-for-accountants/", images: ["https://www.rankempire.us/img/i-pro.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Accountants and CPAs: Rank Higher | RankEmpire", description: "SEO for accountants and CPAs: rank for tax preparation, bookkeeping and small business accounting searches with service pages, reviews and seasonal content." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Accountants and CPAs\", \"item\": \"https://www.rankempire.us/seo-for-accountants/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Accountants and CPAs\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Accountants and CPAs\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-accountants/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is SEO worth it if most of our clients come from referrals?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Referrals still search your name before calling, so a strong website and review profile help close those leads. SEO also opens a second channel for clients outside your network, such as new business owners or people with IRS problems, who search for specific help rather than asking friends for a name.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank outside of tax season?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Build content and pages around year round services like bookkeeping, payroll, entity formation, and tax planning. Publish timely articles on estimated payments, year end planning, and new rules. Search interest for these topics continues through the year, keeping the site visible when competitors only push during filing season.\"}}, {\"@type\": \"Question\", \"name\": \"Should we target local searches or national ones?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most firms do best combining both. Local terms like accountant near me rely on the Business Profile and proximity, while niche advisory services, such as accounting for dental practices, can attract virtual clients nationwide. Your licensing, capacity, and preferred client type should decide how much weight each gets.\"}}, {\"@type\": \"Question\", \"name\": \"Can we write about tax topics without creating liability?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, as long as articles stay educational and general. Include a note that content is not individualized advice, keep information dated and updated when rules change, and encourage readers to book a consultation for their situation. Accurate, current content builds trust and avoids misleading anyone.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for accountants and CPAs?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most accounting firms see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for accountants and CPAs cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-accountants" />
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
