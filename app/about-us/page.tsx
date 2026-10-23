import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/about-us/Hero';
import Statement from '@/components/pages/about-us/Statement';
import Beliefs from '@/components/pages/about-us/Beliefs';
import Founder from '@/components/sections/Founder';
import Results from '@/components/pages/about-us/Results';
import Trust from '@/components/sections/Trust';
import Faq from '@/components/pages/about-us/Faq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "About RankEmpire: SEO Built for Compounding Growth",
  description: "Learn about RankEmpire, an SEO company for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work.",
  alternates: { canonical: "https://www.rankempire.com/about-us/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "About RankEmpire: SEO Built for Compounding Growth", description: "Learn about RankEmpire, an SEO company for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work.", url: "https://www.rankempire.com/about-us/", images: ["https://www.rankempire.com/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "About RankEmpire: SEO Built for Compounding Growth", description: "Learn about RankEmpire, an SEO company for local businesses, e-commerce brands and SaaS companies, and the principles behind how we work." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About Us\", \"item\": \"https://www.rankempire.com/about-us/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <Hero />
        <Statement />
        <Beliefs />
        <Founder />
        <Results />
        <Trust />
        <Faq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
