import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-general-contractors/V1';
import Statement from '@/components/pages/seo-for-general-contractors/Statement';
import Searches from '@/components/pages/seo-for-general-contractors/Searches';
import Challenges from '@/components/pages/seo-for-general-contractors/Challenges';
import Pages from '@/components/pages/seo-for-general-contractors/Pages';
import Marquee from '@/components/pages/seo-for-general-contractors/Marquee';
import Strategy from '@/components/pages/seo-for-general-contractors/Strategy';
import Services from '@/components/pages/seo-for-general-contractors/Services';
import Cities from '@/components/pages/seo-for-general-contractors/Cities';
import Pricing from '@/components/pages/seo-for-general-contractors/Pricing';
import Faq from '@/components/pages/seo-for-general-contractors/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-general-contractors/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for General Contractors: Rank Higher | RankEmpire",
  description: "SEO for general contractors: rank for kitchen, bathroom, addition and remodel searches with project pages, neighborhood galleries, trust signals and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-general-contractors/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for General Contractors: Rank Higher | RankEmpire", description: "SEO for general contractors: rank for kitchen, bathroom, addition and remodel searches with project pages, neighborhood galleries, trust signals and reviews.", url: "https://www.rankempire.us/seo-for-general-contractors/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for General Contractors: Rank Higher | RankEmpire", description: "SEO for general contractors: rank for kitchen, bathroom, addition and remodel searches with project pages, neighborhood galleries, trust signals and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for General Contractors\", \"item\": \"https://www.rankempire.us/seo-for-general-contractors/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for General Contractors\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"General Contractors\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-general-contractors/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we show quality when every project is different?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Use detailed case studies that explain the starting condition, design decisions, challenges, and finished result. Include photos, timelines, and client feedback. This gives buyers a realistic picture of your work and helps search engines understand your capabilities. Group case studies by project type so visitors and search engines can find the most relevant examples quickly.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish pricing for remodels?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Exact prices are difficult, but general ranges and cost factors help buyers plan. Explain how materials, scope, structural changes, and permits affect cost. Honest pricing context attracts serious leads and builds credibility with careful researchers. It also filters out prospects whose budget does not fit the projects you take on, which saves estimating time for everyone.\"}}, {\"@type\": \"Question\", \"name\": \"Do we need separate pages for each type of remodel?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Kitchen remodels, bathroom renovations, additions, and basements attract different searches and require different information. Separate pages allow you to rank for each and provide specific details buyers want before contacting a contractor. Each page should show photos and case studies of that project type, along with permit and timeline details specific to it.\"}}, {\"@type\": \"Question\", \"name\": \"How important are reviews for large projects?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Very important. Buyers often read many reviews and look for patterns about communication, schedule, and budget. Responding thoughtfully to reviews also shows professionalism and helps reassure prospects who are comparing several contractors. Ask for reviews at the end of every project, not just the smoothest ones, so the overall picture stays genuine and current.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for general contractors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most general contracting firms see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for general contractors cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-general-contractors" />
        <Statement />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
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
