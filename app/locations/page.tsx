import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import V0 from '@/components/pages/locations/V0';
import Cities from '@/components/pages/locations/Cities';
import WhyItMatters from '@/components/pages/locations/WhyItMatters';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "SEO Companies in the USA: Local SEO by City | RankEmpire" },
  description: "RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Phoenix, Dallas, Miami and 13 more US cities. Free audit in 2 days.",
  alternates: { canonical: "https://www.rankempire.us/locations/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Companies in the USA: Local SEO by City | RankEmpire", description: "RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Phoenix, Dallas, Miami and 13 more US cities. Free audit in 2 days.", url: "https://www.rankempire.us/locations/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Companies in the USA: Local SEO by City | RankEmpire", description: "RankEmpire provides local SEO services in New York, Los Angeles, Chicago, Houston, Phoenix, Dallas, Miami and 13 more US cities. Free audit in 2 days." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <SearchSurfaces slug="locations" kind="hub" audience="your business" kw="local seo company near me" question="Do I need a local SEO company in my city?" />
        <Cities />
        <WhyItMatters />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
