import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/locations/V0';
import Cities from '@/components/pages/locations/Cities';
import WhyItMatters from '@/components/pages/locations/WhyItMatters';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company Locations Across the US | RankEmpire",
  description: "RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Dallas, Miami and 11 more US cities.",
  alternates: { canonical: "https://www.rankempire.com/locations/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company Locations Across the US | RankEmpire", description: "RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Dallas, Miami and 11 more US cities.", url: "https://www.rankempire.com/locations/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company Locations Across the US | RankEmpire", description: "RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Dallas, Miami and 11 more US cities." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Cities />
        <WhyItMatters />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
