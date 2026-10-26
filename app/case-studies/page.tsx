import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/case-studies/V0';
import Results from '@/components/pages/case-studies/Results';
import MoreResults from '@/components/pages/case-studies/MoreResults';
import Xpb from '@/components/pages/case-studies/Xpb';
import Measure from '@/components/pages/case-studies/Measure';
import Trust from '@/components/sections/Trust';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Case Studies and Results | RankEmpire",
  description: "How RankEmpire runs SEO programs for local businesses, e-commerce stores, practices and sites recovering from traffic drops.",
  alternates: { canonical: "https://www.rankempire.com/case-studies/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Case Studies and Results | RankEmpire", description: "How RankEmpire runs SEO programs for local businesses, e-commerce stores, practices and sites recovering from traffic drops.", url: "https://www.rankempire.com/case-studies/", images: ["https://www.rankempire.com/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Case Studies and Results | RankEmpire", description: "How RankEmpire runs SEO programs for local businesses, e-commerce stores, practices and sites recovering from traffic drops." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Case Studies\", \"item\": \"https://www.rankempire.com/case-studies/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="results" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Results />
        <MoreResults />
        <Xpb />
        <Measure />
        <Trust />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
