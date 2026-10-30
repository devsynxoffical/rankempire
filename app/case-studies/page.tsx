import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import V0 from '@/components/pages/case-studies/V0';
import Results from '@/components/pages/case-studies/Results';
import MoreResults from '@/components/pages/case-studies/MoreResults';
import Xpb from '@/components/pages/case-studies/Xpb';
import Measure from '@/components/pages/case-studies/Measure';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Case Studies & Client Results: 3.5M+ Clicks | RankEmpire",
  description: "Explore 9 verified SEO case studies with live Google Search Console proof: 3.5M+ clicks and proven revenue growth across local, e-commerce, and SaaS brands.",
  alternates: { canonical: "https://www.rankempire.us/case-studies/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Case Studies & Client Results: 3.5M+ Clicks | RankEmpire", description: "Explore 9 verified SEO case studies with live Google Search Console proof: 3.5M+ clicks and proven revenue growth across local, e-commerce, and SaaS brands.", url: "https://www.rankempire.us/case-studies/", images: ["https://www.rankempire.us/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Case Studies & Client Results: 3.5M+ Clicks | RankEmpire", description: "Explore 9 verified SEO case studies with live Google Search Console proof: 3.5M+ clicks and proven revenue growth across local, e-commerce, and SaaS brands." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Case Studies\", \"item\": \"https://www.rankempire.us/case-studies/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="results" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <SearchSurfaces slug="case-studies" kind="hub" audience="your business" kw="seo results case study" question="How long does SEO take to show results?" />
        <Results />
        <MoreResults />
        <Xpb />
        <Measure />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
