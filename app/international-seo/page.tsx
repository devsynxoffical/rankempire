import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/international-seo/V2';
import Statement from '@/components/pages/international-seo/Statement';
import InDepth from '@/components/pages/international-seo/InDepth';
import WhyItMatters from '@/components/pages/international-seo/WhyItMatters';
import Deliverables from '@/components/pages/international-seo/Deliverables';
import Marquee from '@/components/pages/international-seo/Marquee';
import Monthly from '@/components/pages/international-seo/Monthly';
import Process from '@/components/pages/international-seo/Process';
import WhoItIsFor from '@/components/pages/international-seo/WhoItIsFor';
import Comparison from '@/components/pages/international-seo/Comparison';
import Pricing from '@/components/pages/international-seo/Pricing';
import Faq from '@/components/pages/international-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/international-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "International SEO Services | RankEmpire",
  description: "International SEO for brands entering new countries and languages: market research, hreflang, site structure, localization and global link building.",
  alternates: { canonical: "https://www.rankempire.com/international-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "International SEO Services | RankEmpire", description: "International SEO for brands entering new countries and languages: market research, hreflang, site structure, localization and global link building.", url: "https://www.rankempire.com/international-seo/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "International SEO Services | RankEmpire", description: "International SEO for brands entering new countries and languages: market research, hreflang, site structure, localization and global link building." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"International SEO\", \"item\": \"https://www.rankempire.com/international-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"International SEO\", \"serviceType\": \"International SEO\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"International SEO for brands entering new countries and languages: market research, hreflang, site structure, localization and global link building.\", \"url\": \"https://www.rankempire.com/international-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you translate content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We work with native speakers who localize content for search, not just translate it.\"}}, {\"@type\": \"Question\", \"name\": \"Which structure is best for international SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on budget, markets and brand. We recommend a structure after reviewing your goals.\"}}, {\"@type\": \"Question\", \"name\": \"Should I use ccTLDs, subdirectories or subdomains?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Each option works when implemented well. Country code domains such as .de send a strong local signal but require building authority for each domain. Subdirectories such as /de/ share the main domain's authority and are easier to manage. Subdomains sit in between. The best choice depends on budget, legal requirements, team structure and how many markets you plan to enter.\"}}, {\"@type\": \"Question\", \"name\": \"What is hreflang and why does it matter?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Hreflang is an attribute that tells search engines which language and region a page targets, and which alternate versions exist. It helps Google show the correct version to each user. It must be implemented with return links between all versions and self references. Errors are common, so regular audits are important.\"}}, {\"@type\": \"Question\", \"name\": \"Can I use machine translation for international pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Machine translation can produce a first draft, but publishing it without review risks errors, awkward phrasing and missed local terms. Google's spam policies also cover automatically generated content created without adding value. Have native speakers review and adapt the text, and research keywords in each market rather than translating them directly.\"}}, {\"@type\": \"Question\", \"name\": \"Should I redirect users based on their location?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Automatic redirects based on IP address can prevent search engines, which often crawl from the US, from seeing your other versions. A better approach is showing a banner that suggests the local version and lets the user choose. Use hreflang so search engines can surface the right version directly in results.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need separate pages for the US and UK?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only if they differ in a meaningful way, such as pricing, currency, spelling, shipping, legal requirements or products offered. If content is genuinely identical, one English version may be enough. If you create both, use hreflang to tell search engines which version serves each country so they do not compete.\"}}]}" }} />
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
