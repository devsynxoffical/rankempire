import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-cafes/Hero';
import Statement from '@/components/pages/seo-for-cafes/Statement';
import Searches from '@/components/pages/seo-for-cafes/Searches';
import Challenges from '@/components/pages/seo-for-cafes/Challenges';
import Pages from '@/components/pages/seo-for-cafes/Pages';
import Marquee from '@/components/pages/seo-for-cafes/Marquee';
import Strategy from '@/components/pages/seo-for-cafes/Strategy';
import Services from '@/components/pages/seo-for-cafes/Services';
import Cities from '@/components/pages/seo-for-cafes/Cities';
import Pricing from '@/components/pages/seo-for-cafes/Pricing';
import Faq from '@/components/pages/seo-for-cafes/Faq';
import Related from '@/components/pages/seo-for-cafes/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Cafes: More Calls and Customers | RankEmpire",
  description: "SEO for cafes that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for cafes.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-cafes/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Cafes: More Calls and Customers | RankEmpire", description: "SEO for cafes that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for cafes.", url: "https://www.rankempire.com/seo-for-cafes/", images: ["https://www.rankempire.com/img/i-food.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Cafes: More Calls and Customers | RankEmpire", description: "SEO for cafes that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for cafes." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Cafes\", \"item\": \"https://www.rankempire.com/seo-for-cafes/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Cafes\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Cafes\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-cafes/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"We are a small cafe. Can we compete with big coffee chains on maps?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Chains have brand recognition, but independent cafes often earn stronger reviews, better photos, and more specific attributes. Map rankings reward relevance and engagement, so a complete, active profile with loyal reviewers can outrank a nearby chain for many local searches.\"}}, {\"@type\": \"Question\", \"name\": \"Should we post on our Google profile like on Instagram?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Short posts about new drinks, seasonal menus, or events keep the profile fresh and can appear in search results. You do not need to post daily. A consistent rhythm, perhaps weekly, with good photos is enough to show the cafe is active and current.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for remote work searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Mention wifi, outlets, and seating on the profile and website, and enable the relevant attributes. Encourage regulars who work there to mention it in reviews. Google pulls these details from multiple sources, so consistent mentions help the cafe appear for laptop friendly searches.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth having a website if we have a profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A website gives you control over your menu, story, catering, and bean sales, and it supports the profile with extra content Google can trust. It also captures searches that want more detail before visiting, such as event information or catering options.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for cafes?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most cafes see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for cafes cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
