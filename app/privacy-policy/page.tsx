import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/privacy-policy/PageHero';
import Section from '@/components/pages/privacy-policy/Section';

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | RankEmpire" },
  description: "Read the RankEmpire privacy policy: how we handle your information, our free SEO tools and the terms for using this website.",
  alternates: { canonical: "https://www.rankempire.us/privacy-policy/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Privacy Policy | RankEmpire", description: "Read the RankEmpire privacy policy: how we handle your information, our free SEO tools and the terms for using this website.", url: "https://www.rankempire.us/privacy-policy/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "Privacy Policy | RankEmpire", description: "Read the RankEmpire privacy policy: how we handle your information, our free SEO tools and the terms for using this website." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Privacy Policy\", \"item\": \"https://www.rankempire.us/privacy-policy/\"}]}" }} />
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
