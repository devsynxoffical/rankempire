import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/blog/V0';
import X from '@/components/pages/blog/X';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Blog & AI Search Guides | RankEmpire",
  description: "Practical SEO guides from RankEmpire on local SEO, technical SEO, AI search, content strategy and growing organic revenue.",
  alternates: { canonical: "https://www.rankempire.us/blog/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Blog & AI Search Guides | RankEmpire", description: "Practical SEO guides from RankEmpire on local SEO, technical SEO, AI search, content strategy and growing organic revenue.", url: "https://www.rankempire.us/blog/", images: ["https://www.rankempire.us/img/b1.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Blog & AI Search Guides | RankEmpire", description: "Practical SEO guides from RankEmpire on local SEO, technical SEO, AI search, content strategy and growing organic revenue." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Blog\", \"item\": \"https://www.rankempire.us/blog/\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <X />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
