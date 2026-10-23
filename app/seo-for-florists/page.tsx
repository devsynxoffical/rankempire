import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-florists/Hero';
import Statement from '@/components/pages/seo-for-florists/Statement';
import Searches from '@/components/pages/seo-for-florists/Searches';
import Challenges from '@/components/pages/seo-for-florists/Challenges';
import Pages from '@/components/pages/seo-for-florists/Pages';
import Marquee from '@/components/pages/seo-for-florists/Marquee';
import Strategy from '@/components/pages/seo-for-florists/Strategy';
import Services from '@/components/pages/seo-for-florists/Services';
import Cities from '@/components/pages/seo-for-florists/Cities';
import Pricing from '@/components/pages/seo-for-florists/Pricing';
import Faq from '@/components/pages/seo-for-florists/Faq';
import Related from '@/components/pages/seo-for-florists/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Florists: More Calls and Customers | RankEmpire",
  description: "SEO for florists that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for florists.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-florists/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Florists: More Calls and Customers | RankEmpire", description: "SEO for florists that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for florists.", url: "https://www.rankempire.com/seo-for-florists/", images: ["https://www.rankempire.com/img/i-food.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Florists: More Calls and Customers | RankEmpire", description: "SEO for florists that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for florists." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Florists\", \"item\": \"https://www.rankempire.com/seo-for-florists/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Florists\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Florists\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-florists/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Why do order gatherer sites outrank us?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"These sites often have large budgets and many pages, but local shops can compete through a strong Business Profile, real photos, consistent reviews, and clear delivery information. Highlight that you are a local shop arranging flowers yourself, and build pages for specific delivery areas.\"}}, {\"@type\": \"Question\", \"name\": \"When should we start preparing for Valentine's Day SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Several months ahead is ideal. Update the holiday page with new arrangements, add fresh photos, and publish helpful content early. Rankings take time to settle, so pages updated just days before the holiday often miss the main wave of search activity.\"}}, {\"@type\": \"Question\", \"name\": \"Should we use wire service listings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Wire services can bring orders, but they may compete with your own website. Many florists use them selectively while focusing on building direct traffic through their own site and profile. Keep your business information consistent wherever you are listed. Track which orders come from each source so you can see whether direct traffic is growing.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth creating pages for each funeral home?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A delivery areas page that lists the funeral homes you regularly serve can be helpful. Avoid creating many thin pages with copied text. Instead, include useful details about delivery timing, arrangement types, and how to coordinate with the funeral home.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for florists?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most florists see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for florists cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <Hero />
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
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
