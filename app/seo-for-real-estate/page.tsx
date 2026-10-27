import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/seo-for-real-estate/V1';
import Statement from '@/components/pages/seo-for-real-estate/Statement';
import Searches from '@/components/pages/seo-for-real-estate/Searches';
import Challenges from '@/components/pages/seo-for-real-estate/Challenges';
import Pages from '@/components/pages/seo-for-real-estate/Pages';
import Marquee from '@/components/pages/seo-for-real-estate/Marquee';
import Strategy from '@/components/pages/seo-for-real-estate/Strategy';
import Services from '@/components/pages/seo-for-real-estate/Services';
import Cities from '@/components/pages/seo-for-real-estate/Cities';
import Pricing from '@/components/pages/seo-for-real-estate/Pricing';
import Faq from '@/components/pages/seo-for-real-estate/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-real-estate/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Real Estate Agents and Brokerages | RankEmpire",
  description: "SEO for real estate agents and brokerages that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-real-estate/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Real Estate Agents and Brokerages | RankEmpire", description: "SEO for real estate agents and brokerages that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.us/seo-for-real-estate/", images: ["https://www.rankempire.us/img/i-realestate.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Real Estate Agents and Brokerages | RankEmpire", description: "SEO for real estate agents and brokerages that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Real Estate Agents and Brokerages\", \"item\": \"https://www.rankempire.us/seo-for-real-estate/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Real Estate Agents and Brokerages\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Real Estate Agents and Brokerages\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-real-estate/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can an agent compete with Zillow and Realtor.com in search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Rarely for broad listing searches, since national portals have enormous inventories. Agents can win neighborhood specific, school specific, and service focused searches, though. Detailed local guides, honest market commentary, and seller resources give value that portals lack, and they attract people who want an expert rather than another listing feed.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish our own market reports?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Regular updates on inventory, median prices, and days on market for the areas you serve show expertise and give sellers a reason to contact you. Add commentary about what the numbers mean for buyers and sellers right now, since raw data alone is easy to find elsewhere.\"}}, {\"@type\": \"Question\", \"name\": \"Do neighborhood pages really generate leads?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They do when they provide genuine information about housing styles, price ranges, schools, amenities, and daily life, ideally with your own photos. Thin pages listing a few facts rarely help. A well researched guide can attract relocation buyers months before they move, keeping you first in line when they are ready.\"}}, {\"@type\": \"Question\", \"name\": \"How important are reviews for real estate agents?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Very important. Buyers and sellers read reviews to understand how an agent communicates, negotiates, and handles stress. Reviews on your Business Profile and major real estate platforms build credibility, and consistent recent reviews support local search visibility far better than a large batch collected years ago.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for real estate agents and brokerages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most real estate brokerages see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for real estate agents and brokerages cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
