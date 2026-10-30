import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/seo-tools/V0';
import Tools from '@/components/pages/seo-tools/Tools';
import WhyItMatters from '@/components/pages/seo-tools/WhyItMatters';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free SEO Tools: Audit, Schema, Sitemap and More | RankEmpire",
  description: "Free SEO tools: audit tool, keyword research, rank checker, backlink checker, SERP preview, meta tag, schema, sitemap and robots.txt checkers.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free SEO Tools: Audit, Schema, Sitemap and More | RankEmpire", description: "Free SEO tools: audit tool, keyword research, rank checker, backlink checker, SERP preview, meta tag, schema, sitemap and robots.txt checkers.", url: "https://www.rankempire.us/seo-tools/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free SEO Tools: Audit, Schema, Sitemap and More | RankEmpire", description: "Free SEO tools: audit tool, keyword research, rank checker, backlink checker, SERP preview, meta tag, schema, sitemap and robots.txt checkers." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ItemList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"url\": \"https://www.rankempire.us/seo-tools/seo-audit-tool/\", \"name\": \"SEO Audit Tool\"}, {\"@type\": \"ListItem\", \"position\": 2, \"url\": \"https://www.rankempire.us/seo-tools/keyword-rank-checker/\", \"name\": \"Keyword Rank Checker\"}, {\"@type\": \"ListItem\", \"position\": 3, \"url\": \"https://www.rankempire.us/seo-tools/keyword-research-tool/\", \"name\": \"Keyword Research Tool\"}, {\"@type\": \"ListItem\", \"position\": 4, \"url\": \"https://www.rankempire.us/seo-tools/backlink-checker/\", \"name\": \"Backlink Checker\"}, {\"@type\": \"ListItem\", \"position\": 5, \"url\": \"https://www.rankempire.us/seo-tools/website-seo-checker/\", \"name\": \"Website SEO Checker\"}, {\"@type\": \"ListItem\", \"position\": 6, \"url\": \"https://www.rankempire.us/seo-tools/serp-checker/\", \"name\": \"SERP Checker\"}, {\"@type\": \"ListItem\", \"position\": 7, \"url\": \"https://www.rankempire.us/seo-tools/seo-score-checker/\", \"name\": \"SEO Score Checker\"}, {\"@type\": \"ListItem\", \"position\": 8, \"url\": \"https://www.rankempire.us/seo-tools/meta-tag-checker/\", \"name\": \"Meta Tag Checker\"}, {\"@type\": \"ListItem\", \"position\": 9, \"url\": \"https://www.rankempire.us/seo-tools/schema-checker/\", \"name\": \"Schema Checker\"}, {\"@type\": \"ListItem\", \"position\": 10, \"url\": \"https://www.rankempire.us/seo-tools/sitemap-checker/\", \"name\": \"Sitemap Checker\"}, {\"@type\": \"ListItem\", \"position\": 11, \"url\": \"https://www.rankempire.us/seo-tools/robots-txt-checker/\", \"name\": \"Robots.txt Checker\"}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="free" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Tools />
        <WhyItMatters />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
