import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/blog__local-seo-checklist/PageHero';
import Wrap from '@/components/pages/blog__local-seo-checklist/Wrap';
import Sec from '@/components/pages/blog__local-seo-checklist/Sec';
import Tight from '@/components/pages/blog__local-seo-checklist/Tight';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "The Local SEO Checklist for Service Businesses | RankEmpire",
  description: "A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters.",
  alternates: { canonical: "https://www.rankempire.us/blog/local-seo-checklist/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "The Local SEO Checklist for Service Businesses | RankEmpire", description: "A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters.", url: "https://www.rankempire.us/blog/local-seo-checklist/", images: ["https://www.rankempire.us/img/b2.webp"] },
  twitter: { card: 'summary_large_image', title: "The Local SEO Checklist for Service Businesses | RankEmpire", description: "A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Blog\", \"item\": \"https://www.rankempire.us/blog/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"The Local SEO Checklist for Service Businesses\", \"item\": \"https://www.rankempire.us/blog/local-seo-checklist/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BlogPosting\", \"headline\": \"The Local SEO Checklist for Service Businesses\", \"description\": \"A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters.\", \"image\": \"https://www.rankempire.us/img/b2.webp\", \"author\": {\"@type\": \"Organization\", \"name\": \"RankEmpire\"}, \"publisher\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"datePublished\": \"2026-10-01\", \"dateModified\": \"2026-10-21\", \"mainEntityOfPage\": \"https://www.rankempire.us/blog/local-seo-checklist/\"}" }} />
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
