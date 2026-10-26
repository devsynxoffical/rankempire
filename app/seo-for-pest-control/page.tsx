import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/seo-for-pest-control/V1';
import Statement from '@/components/pages/seo-for-pest-control/Statement';
import Searches from '@/components/pages/seo-for-pest-control/Searches';
import Challenges from '@/components/pages/seo-for-pest-control/Challenges';
import Pages from '@/components/pages/seo-for-pest-control/Pages';
import Marquee from '@/components/pages/seo-for-pest-control/Marquee';
import Strategy from '@/components/pages/seo-for-pest-control/Strategy';
import Services from '@/components/pages/seo-for-pest-control/Services';
import Cities from '@/components/pages/seo-for-pest-control/Cities';
import Pricing from '@/components/pages/seo-for-pest-control/Pricing';
import Faq from '@/components/pages/seo-for-pest-control/Faq';
import Pmq from '@/components/sections/Pmq';
import Related2 from '@/components/sections/Related2';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Pest Control Companies: Rank Higher | RankEmpire",
  description: "SEO for pest control companies that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-pest-control/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Pest Control Companies: Rank Higher | RankEmpire", description: "SEO for pest control companies that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-pest-control/", images: ["https://www.rankempire.com/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Pest Control Companies: Rank Higher | RankEmpire", description: "SEO for pest control companies that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Pest Control Companies\", \"item\": \"https://www.rankempire.com/seo-for-pest-control/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Pest Control Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Pest Control Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-pest-control/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we create pages for every type of pest?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Focus on the pests common in your area and services you actually provide. A detailed page on termites or bed bugs is more useful than many thin pages. Include identification tips, treatment methods, and prevention advice that answer the questions customers ask during service calls.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for emergency pest control searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Accurate hours, real availability, and a complete profile are essential. Mention same day or emergency service only if you can deliver it consistently. Reviews mentioning fast response help, and pages explaining urgent pests like wasps or rodents can capture these searches.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth publishing pricing for pest control?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Starting prices or plan ranges help customers understand costs, especially for recurring services. Explain what affects pricing, such as home size and infestation level. For complex treatments like termites, focus on explaining the inspection process and estimate details instead of fixed numbers.\"}}, {\"@type\": \"Question\", \"name\": \"Can blog content help a pest control company?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, when it answers real questions customers ask, such as how to tell if you have termites or how to prepare for bed bug treatment. These articles attract early research traffic and position the company as knowledgeable before customers ever call.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for pest control companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most pest control companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for pest control companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
        <Related2 />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
