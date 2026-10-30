import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import PageHero from '@/components/pages/seo-packages__saas-seo/PageHero';
import Pricing from '@/components/pages/seo-packages__saas-seo/Pricing';
import Alt from '@/components/pages/seo-packages__saas-seo/Alt';
import Tight from '@/components/pages/seo-packages__saas-seo/Tight';
import Faq from '@/components/sections/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SaaS SEO Packages and Pricing | RankEmpire",
  description: "SaaS SEO packages with bottom-funnel pages, comparison pages, topical authority content, technical SEO and pipeline reporting.",
  alternates: { canonical: "https://www.rankempire.us/seo-packages/saas-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SaaS SEO Packages and Pricing | RankEmpire", description: "SaaS SEO packages with bottom-funnel pages, comparison pages, topical authority content, technical SEO and pipeline reporting.", url: "https://www.rankempire.us/seo-packages/saas-seo/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "SaaS SEO Packages and Pricing | RankEmpire", description: "SaaS SEO packages with bottom-funnel pages, comparison pages, topical authority content, technical SEO and pipeline reporting." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Packages\", \"item\": \"https://www.rankempire.us/seo-packages/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SaaS SEO Packages\", \"item\": \"https://www.rankempire.us/seo-packages/saas-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"OfferCatalog\", \"name\": \"SaaS SEO Packages\", \"url\": \"https://www.rankempire.us/seo-packages/saas-seo/\", \"itemListElement\": [{\"@type\": \"Offer\", \"name\": \"Seed\", \"price\": 1499, \"priceCurrency\": \"USD\", \"description\": \"Early-stage SaaS\"}, {\"@type\": \"Offer\", \"name\": \"Series\", \"price\": 2999, \"priceCurrency\": \"USD\", \"description\": \"Growth-stage SaaS\"}, {\"@type\": \"Offer\", \"name\": \"Category leader\", \"price\": 5499, \"priceCurrency\": \"USD\", \"description\": \"Established SaaS\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a minimum contract?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Plans include a 3 month onboarding period, then run month to month with 30 days notice.\"}}, {\"@type\": \"Question\", \"name\": \"What does yearly billing include?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Paying yearly saves 10 percent on any plan. Everything else stays the same.\"}}, {\"@type\": \"Question\", \"name\": \"Can I switch plans later?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. You can upgrade or downgrade at the start of any month as your needs change.\"}}, {\"@type\": \"Question\", \"name\": \"Do prices include content and links?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Every deliverable listed in a plan is included. Ad spend and third-party software for your own accounts are not.\"}}, {\"@type\": \"Question\", \"name\": \"Which package should I choose?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Single-location service businesses usually start with the first plan. Multi-location brands and competitive markets need the second or third. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="pricing" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <SearchSurfaces slug="seo-packages/saas-seo" kind="hub" audience="your business" kw="saas seo pricing" question="How much does SaaS SEO cost?" />
        <Pricing />
        <Alt />
        <Tight />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
