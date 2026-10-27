import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/terms/PageHero';
import Section from '@/components/pages/terms/Section';

export const metadata: Metadata = {
  title: "Terms and Conditions | RankEmpire",
  description: "Read the RankEmpire terms and conditions: how we handle your information, our free SEO tools and the terms for using this website.",
  alternates: { canonical: "https://www.rankempire.us/terms/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Terms and Conditions | RankEmpire", description: "Read the RankEmpire terms and conditions: how we handle your information, our free SEO tools and the terms for using this website.", url: "https://www.rankempire.us/terms/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "Terms and Conditions | RankEmpire", description: "Read the RankEmpire terms and conditions: how we handle your information, our free SEO tools and the terms for using this website." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Terms and Conditions\", \"item\": \"https://www.rankempire.us/terms/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Section />
      </main>
      <Footer />
    </>
  );
}
