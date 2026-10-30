import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/competitor-seo-analysis/V0';
import Statement from '@/components/pages/competitor-seo-analysis/Statement';
import InDepth from '@/components/pages/competitor-seo-analysis/InDepth';
import WhyItMatters from '@/components/pages/competitor-seo-analysis/WhyItMatters';
import Deliverables from '@/components/pages/competitor-seo-analysis/Deliverables';
import Marquee from '@/components/pages/competitor-seo-analysis/Marquee';
import Monthly from '@/components/pages/competitor-seo-analysis/Monthly';
import Process from '@/components/pages/competitor-seo-analysis/Process';
import WhoItIsFor from '@/components/pages/competitor-seo-analysis/WhoItIsFor';
import Comparison from '@/components/pages/competitor-seo-analysis/Comparison';
import Pricing from '@/components/pages/competitor-seo-analysis/Pricing';
import Faq from '@/components/pages/competitor-seo-analysis/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/competitor-seo-analysis/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Competitor SEO Analysis | RankEmpire",
  description: "Competitor SEO analysis that reveals the keywords, pages, links and technical advantages behind your competitors rankings, with a plan to beat them.",
  alternates: { canonical: "https://www.rankempire.us/competitor-seo-analysis/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Competitor SEO Analysis | RankEmpire", description: "Competitor SEO analysis that reveals the keywords, pages, links and technical advantages behind your competitors rankings, with a plan to beat them.", url: "https://www.rankempire.us/competitor-seo-analysis/", images: ["https://www.rankempire.us/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "Competitor SEO Analysis | RankEmpire", description: "Competitor SEO analysis that reveals the keywords, pages, links and technical advantages behind your competitors rankings, with a plan to beat them." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Competitor SEO Analysis\", \"item\": \"https://www.rankempire.us/competitor-seo-analysis/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Competitor SEO Analysis\", \"serviceType\": \"Competitor SEO Analysis\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Competitor SEO analysis that reveals the keywords, pages, links and technical advantages behind your competitors rankings, with a plan to beat them.\", \"url\": \"https://www.rankempire.us/competitor-seo-analysis/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How many competitors do you analyze?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Typically three to five, chosen from search results rather than only the businesses you consider rivals.\"}}, {\"@type\": \"Question\", \"name\": \"Is this included in your SEO plans?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A lighter version is included in onboarding. The full analysis is available as a standalone service.\"}}, {\"@type\": \"Question\", \"name\": \"How do I find my real SEO competitors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Search your most important keywords and note which domains appear repeatedly in the top results. SEO tools can also list domains with the most keyword overlap with your site. You may find that directories, publishers or marketplaces compete for many of your terms, which changes the strategy compared with only watching direct business rivals.\"}}, {\"@type\": \"Question\", \"name\": \"Can I see competitors' traffic and keywords?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"SEO tools such as Ahrefs and Semrush estimate competitors' organic traffic and ranking keywords based on their own data. These are estimates, not exact figures, but they are useful for spotting trends, top pages and keyword gaps. Only the site owner has accurate traffic data through their own analytics.\"}}, {\"@type\": \"Question\", \"name\": \"Is it okay to copy a competitor's content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Copying content can create duplicate content problems, infringe copyright and rarely outranks the original. Use competitor analysis to understand what topics and formats searchers expect, then create something more useful, with your own expertise, examples and perspective. The goal is to be better and different, not identical.\"}}, {\"@type\": \"Question\", \"name\": \"How often should competitor analysis be done?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A full analysis once or twice a year works for most businesses, with lighter monthly tracking of key competitors' rankings and new content. Repeat the full analysis when a new competitor appears, when you lose rankings suddenly or before entering a new market or launching a new service.\"}}, {\"@type\": \"Question\", \"name\": \"What should I do after a competitor analysis?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Turn the findings into a plan. Prioritize keyword gaps by value and difficulty, improve pages that are thinner than competing ones, target link sources that already link to similar businesses and fix any technical or local profile weaknesses. Then track progress against the same competitors to see how the gap changes.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="competitor-seo-analysis" />
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
