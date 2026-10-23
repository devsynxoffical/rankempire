import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-painters/Hero';
import Statement from '@/components/pages/seo-for-painters/Statement';
import Searches from '@/components/pages/seo-for-painters/Searches';
import Challenges from '@/components/pages/seo-for-painters/Challenges';
import Pages from '@/components/pages/seo-for-painters/Pages';
import Marquee from '@/components/pages/seo-for-painters/Marquee';
import Strategy from '@/components/pages/seo-for-painters/Strategy';
import Services from '@/components/pages/seo-for-painters/Services';
import Cities from '@/components/pages/seo-for-painters/Cities';
import Pricing from '@/components/pages/seo-for-painters/Pricing';
import Faq from '@/components/pages/seo-for-painters/Faq';
import Related2 from '@/components/sections/Related2';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Painting Contractors: Rank Higher | RankEmpire",
  description: "SEO for painting contractors that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-painters/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Painting Contractors: Rank Higher | RankEmpire", description: "SEO for painting contractors that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-painters/", images: ["https://www.rankempire.com/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Painting Contractors: Rank Higher | RankEmpire", description: "SEO for painting contractors that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Painting Contractors\", \"item\": \"https://www.rankempire.com/seo-for-painters/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Painting Contractors\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Painting Contractors\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-painters/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we post price ranges for painting projects?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ranges help customers plan and reduce unqualified estimate requests. Explain the factors that move the price, such as surface condition, ceiling height, number of colors, trim detail, and paint quality. Transparent context builds trust and helps customers understand why a careful quote may differ from the lowest bid they received.\"}}, {\"@type\": \"Question\", \"name\": \"How do we show the quality of our work online?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Use before and after galleries with short descriptions of what was done, and include photos of prep steps like sanding, caulking, patching, and priming. Customers rarely see this work, so showing it explains the value behind your price and gives search engines richer content about your services.\"}}, {\"@type\": \"Question\", \"name\": \"Do we need separate pages for interior and exterior painting?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. These services involve different processes, seasons, and concerns. Interior customers worry about mess and disruption, while exterior customers ask about weather, durability, and prep. Separate pages let each audience find relevant answers and allow you to rank for each type of search independently.\"}}, {\"@type\": \"Question\", \"name\": \"Can seasonal content help a painting company?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Articles about the best time to paint exteriors in your climate, how temperature and humidity affect paint, and how to prepare for a project attract homeowners in the planning stage. Publishing them before spring helps you appear when people start comparing companies and booking dates.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for painting contractors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most painting companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for painting contractors cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
        <Related2 />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
