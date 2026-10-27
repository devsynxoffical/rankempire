import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/seo-for-salons/V2';
import Statement from '@/components/pages/seo-for-salons/Statement';
import Searches from '@/components/pages/seo-for-salons/Searches';
import Challenges from '@/components/pages/seo-for-salons/Challenges';
import Pages from '@/components/pages/seo-for-salons/Pages';
import Marquee from '@/components/pages/seo-for-salons/Marquee';
import Strategy from '@/components/pages/seo-for-salons/Strategy';
import Services from '@/components/pages/seo-for-salons/Services';
import Cities from '@/components/pages/seo-for-salons/Cities';
import Pricing from '@/components/pages/seo-for-salons/Pricing';
import Faq from '@/components/pages/seo-for-salons/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-salons/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Hair Salons: More Calls and Customers | RankEmpire",
  description: "SEO for hair salons that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for hair salons.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-salons/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Hair Salons: More Calls and Customers | RankEmpire", description: "SEO for hair salons that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for hair salons.", url: "https://www.rankempire.us/seo-for-salons/", images: ["https://www.rankempire.us/img/i-beauty.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Hair Salons: More Calls and Customers | RankEmpire", description: "SEO for hair salons that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for hair salons." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Hair Salons\", \"item\": \"https://www.rankempire.us/seo-for-salons/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Hair Salons\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Hair Salons\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-salons/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we post prices on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Starting prices help clients understand what to expect and reduce no shows caused by sticker shock. Explain what affects cost, such as hair length, density, and the time a color service takes. Clear pricing context builds trust and gives searchers a reason to book with you instead of guessing.\"}}, {\"@type\": \"Question\", \"name\": \"Do stylist pages really help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Clients often search for a stylist by name after seeing their work, or by specialty, such as curly cuts or blonding. Dedicated pages with photos, training, and booking links help these searches land on your site, and they make it easier to keep clients when chairs change.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for specific color services like balayage?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a detailed page for each technique with real photos, an explanation of the process, maintenance tips, and starting prices. Encourage reviews that mention the service by name. Together, these signals help search engines connect the salon with searches for that technique in your area.\"}}, {\"@type\": \"Question\", \"name\": \"Is Instagram enough to bring in new clients?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Instagram is great for showing work, but many new clients start on Google, especially after moving or when searching for a specific service. A website and Business Profile capture that search demand. Reuse your best Instagram photos on both, so every channel shows the same quality and style.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for hair salons?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most hair salons see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for hair salons cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
