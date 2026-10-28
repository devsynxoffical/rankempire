import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PersonSchema from '@/components/seo/PersonSchema';
import V0 from '@/components/pages/about-us/V0';
import Statement from '@/components/pages/about-us/Statement';
import Beliefs from '@/components/pages/about-us/Beliefs';
import Fd5 from '@/components/sections/Fd5';
import Results from '@/components/pages/about-us/Results';
import Trust from '@/components/sections/Trust';
import Faq from '@/components/pages/about-us/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "About RankEmpire: SEO Built for Compounding Growth",
  description: "Learn about RankEmpire, an SEO company for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work.",
  alternates: { canonical: "https://www.rankempire.us/about-us/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "About RankEmpire: SEO Built for Compounding Growth", description: "Learn about RankEmpire, an SEO company for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work.", url: "https://www.rankempire.us/about-us/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "About RankEmpire: SEO Built for Compounding Growth", description: "Learn about RankEmpire, an SEO company for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About Us\", \"item\": \"https://www.rankempire.us/about-us/\"}]}" }} />
      <PersonSchema />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Statement />
        <Beliefs />
        <Fd5 />
        <Results />
        <Trust />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
