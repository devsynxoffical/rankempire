import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/on-page-seo/V1';
import Statement from '@/components/pages/on-page-seo/Statement';
import InDepth from '@/components/pages/on-page-seo/InDepth';
import WhyItMatters from '@/components/pages/on-page-seo/WhyItMatters';
import Deliverables from '@/components/pages/on-page-seo/Deliverables';
import Marquee from '@/components/pages/on-page-seo/Marquee';
import Monthly from '@/components/pages/on-page-seo/Monthly';
import Process from '@/components/pages/on-page-seo/Process';
import WhoItIsFor from '@/components/pages/on-page-seo/WhoItIsFor';
import Comparison from '@/components/pages/on-page-seo/Comparison';
import Pricing from '@/components/pages/on-page-seo/Pricing';
import Faq from '@/components/pages/on-page-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/on-page-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "On-Page SEO Services | RankEmpire",
  description: "On-page SEO that aligns every page with search intent: titles, headings, content, internal links, images and structured data.",
  alternates: { canonical: "https://www.rankempire.us/on-page-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "On-Page SEO Services | RankEmpire", description: "On-page SEO that aligns every page with search intent: titles, headings, content, internal links, images and structured data.", url: "https://www.rankempire.us/on-page-seo/", images: ["https://www.rankempire.us/img/s-content.webp"] },
  twitter: { card: 'summary_large_image', title: "On-Page SEO Services | RankEmpire", description: "On-page SEO that aligns every page with search intent: titles, headings, content, internal links, images and structured data." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"On-Page SEO\", \"item\": \"https://www.rankempire.us/on-page-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"On-Page SEO\", \"serviceType\": \"On-Page SEO\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"On-page SEO that aligns every page with search intent: titles, headings, content, internal links, images and structured data.\", \"url\": \"https://www.rankempire.us/on-page-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How many pages do you optimize per month?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on page length and plan. Most clients see 8 to 20 pages optimized each month.\"}}, {\"@type\": \"Question\", \"name\": \"Will on-page changes hurt my current rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We track every change and avoid rewriting pages that already perform well without reason.\"}}, {\"@type\": \"Question\", \"name\": \"What are the most important on-page SEO factors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Matching search intent is the most important, followed by content quality and completeness. Title tags, headings, internal links and descriptive URLs help search engines understand the page. Image optimization, structured data and page speed support the experience. Checking all of these against what currently ranks for your target query keeps the work focused.\"}}, {\"@type\": \"Question\", \"name\": \"How long should my page content be?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"There is no ideal word count. The right length is whatever fully answers the query in the format searchers expect. A local service page might need a few hundred focused words, while a buying guide may need several thousand. Look at the pages currently ranking to see what depth the topic requires.\"}}, {\"@type\": \"Question\", \"name\": \"Do meta descriptions affect rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google has said meta descriptions are not a direct ranking factor. They can still influence whether searchers click your result, which affects traffic. Google often rewrites them based on the query, but a clear, accurate description that matches the page content gives you a better chance of a useful snippet.\"}}, {\"@type\": \"Question\", \"name\": \"How many keywords should one page target?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Each page should focus on one main topic and its closely related variations, rather than one exact phrase. A page about emergency plumbing can rank for many related searches. If two keywords need different content or answer different questions, they usually deserve separate pages to avoid confusing both readers and search engines.\"}}, {\"@type\": \"Question\", \"name\": \"How quickly do on-page changes affect rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Changes take effect once Google recrawls and reprocesses the page, which can happen within days for frequently crawled sites or take weeks for smaller ones. You can request indexing in Search Console to speed this up. Ranking movement depends on the competition, so some updates show results quickly and others take longer.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <Statement />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
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
