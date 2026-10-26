import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/seo-for-flooring-companies/V2';
import Statement from '@/components/pages/seo-for-flooring-companies/Statement';
import Searches from '@/components/pages/seo-for-flooring-companies/Searches';
import Challenges from '@/components/pages/seo-for-flooring-companies/Challenges';
import Pages from '@/components/pages/seo-for-flooring-companies/Pages';
import Marquee from '@/components/pages/seo-for-flooring-companies/Marquee';
import Strategy from '@/components/pages/seo-for-flooring-companies/Strategy';
import Services from '@/components/pages/seo-for-flooring-companies/Services';
import Cities from '@/components/pages/seo-for-flooring-companies/Cities';
import Pricing from '@/components/pages/seo-for-flooring-companies/Pricing';
import Faq from '@/components/pages/seo-for-flooring-companies/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-flooring-companies/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Flooring Companies: Rank Higher | RankEmpire",
  description: "SEO for flooring companies that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-flooring-companies/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Flooring Companies: Rank Higher | RankEmpire", description: "SEO for flooring companies that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-flooring-companies/", images: ["https://www.rankempire.com/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Flooring Companies: Rank Higher | RankEmpire", description: "SEO for flooring companies that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Flooring Companies\", \"item\": \"https://www.rankempire.com/seo-for-flooring-companies/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Flooring Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Flooring Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-flooring-companies/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should our website list every product we carry?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Listing every product can create many thin pages. Focus on material categories and highlight popular brands and lines, with detailed descriptions. If you sell online or many buyers search for specific product names, a curated catalog with real information can help.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank against big box stores?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Big box stores have strong brand recognition, but local companies can win with detailed installation content, real project photos, strong reviews, and personal service. Emphasize expertise, local crews, and showroom guidance that larger retailers often cannot match. Reviews that mention your installers by name and describe a smooth project are hard for a national chain to replicate.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing comparison articles?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Buyers frequently search comparisons like laminate vs vinyl or hardwood vs engineered wood. Honest, balanced articles help them decide and position the company as a helpful expert. Link these articles to product pages and estimate requests. Update them when products change, and be honest about where each material falls short, since balanced advice earns more trust than a sales pitch.\"}}, {\"@type\": \"Question\", \"name\": \"Should we target water damage searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you handle urgent replacement after leaks or floods, a dedicated page helps. Explain the process, coordination with restoration companies, and timelines. Be clear about what you handle versus water mitigation, which is often a separate specialty. Partnering with local restoration companies can also bring referrals once the drying phase is finished.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for flooring companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most flooring companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for flooring companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
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
