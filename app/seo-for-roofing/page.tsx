import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-roofing/Hero';
import Statement from '@/components/pages/seo-for-roofing/Statement';
import Searches from '@/components/pages/seo-for-roofing/Searches';
import Challenges from '@/components/pages/seo-for-roofing/Challenges';
import Pages from '@/components/pages/seo-for-roofing/Pages';
import Marquee from '@/components/pages/seo-for-roofing/Marquee';
import Strategy from '@/components/pages/seo-for-roofing/Strategy';
import Services from '@/components/pages/seo-for-roofing/Services';
import Cities from '@/components/pages/seo-for-roofing/Cities';
import Pricing from '@/components/pages/seo-for-roofing/Pricing';
import Faq from '@/components/pages/seo-for-roofing/Faq';
import Related2 from '@/components/sections/Related2';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Roofing Companies: Rank Higher | RankEmpire",
  description: "SEO for roofing companies that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-roofing/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Roofing Companies: Rank Higher | RankEmpire", description: "SEO for roofing companies that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-roofing/", images: ["https://www.rankempire.com/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Roofing Companies: Rank Higher | RankEmpire", description: "SEO for roofing companies that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Roofing Companies\", \"item\": \"https://www.rankempire.com/seo-for-roofing/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Roofing Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Roofing Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-roofing/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we stand out from storm chasers after a hail event?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Lead with what transient crews cannot show: a local address, years in the community, state license numbers, and workmanship warranties backed by a company that will still be here. Publish photos of local projects with neighborhood names and gather reviews from nearby homeowners. Post on your profile right after storms to show you are active.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish roof replacement prices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Price ranges help homeowners plan and reduce shock at estimate time. Explain the factors that drive cost, such as roof size, pitch, number of layers to remove, decking repairs, materials, and permits. Clear context builds trust and helps qualify leads before you spend time on a roof inspection.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing about the insurance claim process?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. After storms, many homeowners search for how roof claims work, what adjusters look for, and how deductibles apply. Clear, accurate explanations help them prepare and position your company as knowledgeable. Avoid suggesting you can guarantee approval or waive deductibles, which can create legal problems in many states.\"}}, {\"@type\": \"Question\", \"name\": \"Do material specific pages help a roofing company rank?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Homeowners often research metal, architectural shingles, tile, or flat roofing systems by name before contacting anyone. Dedicated pages explaining lifespan, maintenance, cost differences, and suitability for the local climate capture those searches and help buyers arrive at your estimate already understanding their options.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for roofing companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most roofing companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for roofing companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
