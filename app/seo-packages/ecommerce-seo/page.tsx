import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-packages__ecommerce-seo/PageHero';
import Pricing from '@/components/pages/seo-packages__ecommerce-seo/Pricing';
import Alt from '@/components/pages/seo-packages__ecommerce-seo/Alt';
import Tight from '@/components/pages/seo-packages__ecommerce-seo/Tight';
import Faq from '@/components/sections/Faq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "E-commerce SEO Packages and Pricing | RankEmpire",
  description: "E-commerce SEO packages covering technical fixes, category and product optimization, structured data, content and link building.",
  alternates: { canonical: "https://www.rankempire.com/seo-packages/ecommerce-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "E-commerce SEO Packages and Pricing | RankEmpire", description: "E-commerce SEO packages covering technical fixes, category and product optimization, structured data, content and link building.", url: "https://www.rankempire.com/seo-packages/ecommerce-seo/", images: ["https://www.rankempire.com/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "E-commerce SEO Packages and Pricing | RankEmpire", description: "E-commerce SEO packages covering technical fixes, category and product optimization, structured data, content and link building." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Packages\", \"item\": \"https://www.rankempire.com/seo-packages/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"E-commerce SEO Packages\", \"item\": \"https://www.rankempire.com/seo-packages/ecommerce-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"OfferCatalog\", \"name\": \"E-commerce SEO Packages\", \"url\": \"https://www.rankempire.com/seo-packages/ecommerce-seo/\", \"itemListElement\": [{\"@type\": \"Offer\", \"name\": \"Launch\", \"price\": 1199, \"priceCurrency\": \"USD\", \"description\": \"Stores up to 500 products\"}, {\"@type\": \"Offer\", \"name\": \"Scale\", \"price\": 2299, \"priceCurrency\": \"USD\", \"description\": \"Stores up to 5,000 products\"}, {\"@type\": \"Offer\", \"name\": \"Enterprise\", \"price\": 3999, \"priceCurrency\": \"USD\", \"description\": \"Large catalogs and marketplaces\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a minimum contract?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Plans include a 3 month onboarding period, then run month to month with 30 days notice.\"}}, {\"@type\": \"Question\", \"name\": \"What does yearly billing include?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Paying yearly saves 10 percent on any plan. Everything else stays the same.\"}}, {\"@type\": \"Question\", \"name\": \"Can I switch plans later?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. You can upgrade or downgrade at the start of any month as your needs change.\"}}, {\"@type\": \"Question\", \"name\": \"Do prices include content and links?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Every deliverable listed in a plan is included. Ad spend and third-party software for your own accounts are not.\"}}, {\"@type\": \"Question\", \"name\": \"Which package should I choose?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Single-location service businesses usually start with the first plan. Multi-location brands and competitive markets need the second or third. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="pricing" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Pricing />
        <Alt />
        <Tight />
        <Faq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
