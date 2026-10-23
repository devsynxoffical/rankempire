import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/privacy-policy/PageHero';
import Section from '@/components/pages/privacy-policy/Section';

export const metadata: Metadata = {
  title: "Privacy Policy | RankEmpire",
  description: "Read the RankEmpire privacy policy: how we handle your information, our free SEO tools and the terms for using this website.",
  alternates: { canonical: "https://www.rankempire.com/privacy-policy/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Privacy Policy | RankEmpire", description: "Read the RankEmpire privacy policy: how we handle your information, our free SEO tools and the terms for using this website.", url: "https://www.rankempire.com/privacy-policy/", images: ["https://www.rankempire.com/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "Privacy Policy | RankEmpire", description: "Read the RankEmpire privacy policy: how we handle your information, our free SEO tools and the terms for using this website." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
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
