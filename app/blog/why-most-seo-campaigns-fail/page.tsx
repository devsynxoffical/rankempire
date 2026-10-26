import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/blog__why-most-seo-campaigns-fail/PageHero';
import Wrap from '@/components/pages/blog__why-most-seo-campaigns-fail/Wrap';
import Sec from '@/components/pages/blog__why-most-seo-campaigns-fail/Sec';
import Tight from '@/components/pages/blog__why-most-seo-campaigns-fail/Tight';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Why Most SEO Campaigns Fail in the First 6 Months",
  description: "It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work.",
  alternates: { canonical: "https://www.rankempire.com/blog/why-most-seo-campaigns-fail/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Why Most SEO Campaigns Fail in the First 6 Months", description: "It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work.", url: "https://www.rankempire.com/blog/why-most-seo-campaigns-fail/", images: ["https://www.rankempire.com/img/b1.webp"] },
  twitter: { card: 'summary_large_image', title: "Why Most SEO Campaigns Fail in the First 6 Months", description: "It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Blog\", \"item\": \"https://www.rankempire.com/blog/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Why Most SEO Campaigns Fail in the First 6 Months\", \"item\": \"https://www.rankempire.com/blog/why-most-seo-campaigns-fail/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BlogPosting\", \"headline\": \"Why Most SEO Campaigns Fail in the First 6 Months\", \"description\": \"It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work.\", \"image\": \"https://www.rankempire.com/img/b1.webp\", \"author\": {\"@type\": \"Organization\", \"name\": \"RankEmpire\"}, \"publisher\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"datePublished\": \"2026-10-01\", \"dateModified\": \"2026-10-21\", \"mainEntityOfPage\": \"https://www.rankempire.com/blog/why-most-seo-campaigns-fail/\"}" }} />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Wrap />
        <Sec />
        <Tight />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
