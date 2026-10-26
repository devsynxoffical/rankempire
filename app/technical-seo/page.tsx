import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/technical-seo/V0';
import Statement from '@/components/pages/technical-seo/Statement';
import InDepth from '@/components/pages/technical-seo/InDepth';
import WhyItMatters from '@/components/pages/technical-seo/WhyItMatters';
import Deliverables from '@/components/pages/technical-seo/Deliverables';
import Marquee from '@/components/pages/technical-seo/Marquee';
import Monthly from '@/components/pages/technical-seo/Monthly';
import Process from '@/components/pages/technical-seo/Process';
import WhoItIsFor from '@/components/pages/technical-seo/WhoItIsFor';
import Comparison from '@/components/pages/technical-seo/Comparison';
import Pricing from '@/components/pages/technical-seo/Pricing';
import Faq from '@/components/pages/technical-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/technical-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Technical SEO Services | RankEmpire",
  description: "Technical SEO services that fix crawlability, indexation, Core Web Vitals, structured data, JavaScript rendering and site migrations.",
  alternates: { canonical: "https://www.rankempire.com/technical-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Technical SEO Services | RankEmpire", description: "Technical SEO services that fix crawlability, indexation, Core Web Vitals, structured data, JavaScript rendering and site migrations.", url: "https://www.rankempire.com/technical-seo/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Technical SEO Services | RankEmpire", description: "Technical SEO services that fix crawlability, indexation, Core Web Vitals, structured data, JavaScript rendering and site migrations." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Technical SEO\", \"item\": \"https://www.rankempire.com/technical-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Technical SEO\", \"serviceType\": \"Technical SEO\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Technical SEO services that fix crawlability, indexation, Core Web Vitals, structured data, JavaScript rendering and site migrations.\", \"url\": \"https://www.rankempire.com/technical-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you need access to our developers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It helps. We can implement directly on most CMS platforms or provide developer-ready tickets for your team.\"}}, {\"@type\": \"Question\", \"name\": \"What tools do you use?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Screaming Frog, Sitebulb, Google Search Console, PageSpeed Insights, Lighthouse and server log analysis.\"}}, {\"@type\": \"Question\", \"name\": \"Can you help with a site migration?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Migrations are one of the highest-risk moments for SEO and we plan redirects and checks before launch.\"}}, {\"@type\": \"Question\", \"name\": \"How often should a technical SEO audit be done?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A full technical audit once or twice a year suits most sites, with lighter monthly crawls to catch new problems. Run an additional audit before and after any major change, such as a redesign, migration, platform switch or URL restructure. Large e-commerce and SaaS sites that deploy frequently benefit from continuous monitoring.\"}}, {\"@type\": \"Question\", \"name\": \"Do Core Web Vitals affect rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google uses page experience signals, including Core Web Vitals, as part of its ranking systems, but relevance and content quality carry more weight. Strong vitals will not rescue a page that does not answer the query. Poor performance can still hurt user engagement and conversions, so improving it is worthwhile for both visitors and search.\"}}, {\"@type\": \"Question\", \"name\": \"Can Google index JavaScript websites?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google can render JavaScript, but it adds complexity and can delay indexing. Problems arise when key content or links load only after user interaction, or when rendering fails. Server side rendering or static generation for important pages reduces the risk. Test with the URL Inspection tool in Search Console to see what Google actually renders.\"}}, {\"@type\": \"Question\", \"name\": \"What is crawl budget and should I worry about it?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Crawl budget is the number of URLs a search engine is willing and able to crawl on your site in a given period. Small sites with a few hundred pages rarely need to think about it. Large stores and sites with many filters, parameters or generated pages should manage it to keep important pages crawled regularly.\"}}, {\"@type\": \"Question\", \"name\": \"Do you implement technical fixes or just recommend them?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Both options are available. Some clients have in house developers who prefer detailed tickets, while others want us to make changes directly in their CMS or codebase. For platforms like WordPress and Shopify, we can implement many fixes ourselves. For custom stacks, we usually work alongside your engineering team.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V0 />
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
