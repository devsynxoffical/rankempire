import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/ecommerce-seo/V2';
import Statement from '@/components/pages/ecommerce-seo/Statement';
import InDepth from '@/components/pages/ecommerce-seo/InDepth';
import WhyItMatters from '@/components/pages/ecommerce-seo/WhyItMatters';
import Deliverables from '@/components/pages/ecommerce-seo/Deliverables';
import Marquee from '@/components/pages/ecommerce-seo/Marquee';
import Monthly from '@/components/pages/ecommerce-seo/Monthly';
import Process from '@/components/pages/ecommerce-seo/Process';
import WhoItIsFor from '@/components/pages/ecommerce-seo/WhoItIsFor';
import Comparison from '@/components/pages/ecommerce-seo/Comparison';
import Pricing from '@/components/pages/ecommerce-seo/Pricing';
import Faq from '@/components/pages/ecommerce-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/ecommerce-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "E-commerce SEO Services for Shopify and WooCommerce",
  description: "E-commerce SEO that grows organic revenue: category and product page optimization, technical fixes for faceted navigation, structured data and content.",
  alternates: { canonical: "https://www.rankempire.com/ecommerce-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "E-commerce SEO Services for Shopify and WooCommerce", description: "E-commerce SEO that grows organic revenue: category and product page optimization, technical fixes for faceted navigation, structured data and content.", url: "https://www.rankempire.com/ecommerce-seo/", images: ["https://www.rankempire.com/img/s-ecom.webp"] },
  twitter: { card: 'summary_large_image', title: "E-commerce SEO Services for Shopify and WooCommerce", description: "E-commerce SEO that grows organic revenue: category and product page optimization, technical fixes for faceted navigation, structured data and content." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"E-commerce SEO\", \"item\": \"https://www.rankempire.com/ecommerce-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"E-commerce SEO\", \"serviceType\": \"E-commerce SEO\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"E-commerce SEO that grows organic revenue: category and product page optimization, technical fixes for faceted navigation, structured data and content.\", \"url\": \"https://www.rankempire.com/ecommerce-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Which platforms do you work with?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Shopify, WooCommerce, BigCommerce, Magento and custom builds.\"}}, {\"@type\": \"Question\", \"name\": \"Will SEO changes affect my store design?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most changes are invisible to shoppers. Where copy is added, we design it to fit your layout.\"}}, {\"@type\": \"Question\", \"name\": \"How do you measure e-commerce SEO success?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Organic revenue, transactions and conversion rate from organic search, reported monthly.\"}}, {\"@type\": \"Question\", \"name\": \"Which platform is best for e-commerce SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Shopify, WooCommerce, BigCommerce and Magento can all rank well when configured correctly. Each has tradeoffs. Shopify has a fixed URL structure and limited control over some files, WooCommerce depends on plugin quality, and Magento needs careful handling of layered navigation. The platform matters less than how categories, filters, duplicates and content are managed on it.\"}}, {\"@type\": \"Question\", \"name\": \"Should I write unique descriptions for every product?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prioritize unique descriptions for your best selling and highest margin products first, especially if your current copy comes from the manufacturer. Many retailers share that same text, which gives search engines little reason to rank your page. For very large catalogs, templates that combine unique attributes with original copy can scale the work sensibly.\"}}, {\"@type\": \"Question\", \"name\": \"What should I do with out of stock products?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If the product will return, keep the page live, mark it out of stock in your structured data and suggest alternatives. If it is permanently discontinued, redirect it to the closest matching product or category when one exists. If nothing relevant exists, a 404 or 410 status is acceptable. Avoid redirecting everything to the homepage.\"}}, {\"@type\": \"Question\", \"name\": \"Does blog content help an online store rank?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, when it targets real questions shoppers ask before buying and links to relevant categories and products. A guide on how to choose a running shoe, for example, can attract searchers who are not ready for a product page yet. Content unrelated to your products rarely helps sales and can dilute the focus of your site.\"}}, {\"@type\": \"Question\", \"name\": \"How do I handle product variants for SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on whether people search for the variant. If shoppers search for a specific color or size, a separate indexable page may make sense. If not, keep variants on one product page and use selectors or canonical tags to avoid duplicate URLs competing with each other in search results.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <Statement />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
        <Pricing />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
