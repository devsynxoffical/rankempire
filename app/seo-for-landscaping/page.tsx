import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-landscaping/V1';
import Statement from '@/components/pages/seo-for-landscaping/Statement';
import Searches from '@/components/pages/seo-for-landscaping/Searches';
import Challenges from '@/components/pages/seo-for-landscaping/Challenges';
import Pages from '@/components/pages/seo-for-landscaping/Pages';
import Marquee from '@/components/pages/seo-for-landscaping/Marquee';
import Strategy from '@/components/pages/seo-for-landscaping/Strategy';
import Services from '@/components/pages/seo-for-landscaping/Services';
import Cities from '@/components/pages/seo-for-landscaping/Cities';
import Pricing from '@/components/pages/seo-for-landscaping/Pricing';
import Faq from '@/components/pages/seo-for-landscaping/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-landscaping/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Landscaping Companies: Rank Higher | RankEmpire",
  description: "SEO for landscaping companies: rank for lawn care, landscape design, hardscape and irrigation searches with service pages, galleries and map pack optimization.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-landscaping/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Landscaping Companies: Rank Higher | RankEmpire", description: "SEO for landscaping companies: rank for lawn care, landscape design, hardscape and irrigation searches with service pages, galleries and map pack optimization.", url: "https://www.rankempire.us/seo-for-landscaping/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Landscaping Companies: Rank Higher | RankEmpire", description: "SEO for landscaping companies: rank for lawn care, landscape design, hardscape and irrigation searches with service pages, galleries and map pack optimization." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Landscaping Companies\", \"item\": \"https://www.rankempire.us/seo-for-landscaping/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Landscaping Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Landscaping Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-landscaping/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we focus SEO on maintenance or design projects?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on your goals and capacity. Maintenance brings steady recurring revenue, while design and hardscaping bring larger projects. Many companies build pages for both but put extra effort into the service with the best margins or growth potential. Keep in mind that maintenance clients often become design clients later, so strong maintenance pages can feed bigger projects.\"}}, {\"@type\": \"Question\", \"name\": \"How do we show quality for large projects?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Use detailed project galleries and case studies that explain the design goals, materials, and timeline. Include before and after photos and client feedback. This helps buyers visualize results and gives search engines more context about your expertise. Mention the town, plant palette, and materials used, since those details match how homeowners search for ideas and contractors.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth posting seasonal content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many searches spike at predictable times, such as spring cleanups or fall leaf removal. Publishing seasonal pages and updates ahead of time helps you appear when demand rises and keeps customers informed about booking windows. Refresh the same seasonal pages each year rather than creating new ones, so they keep the visibility they earned in previous seasons.\"}}, {\"@type\": \"Question\", \"name\": \"Can we rank in neighboring towns?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map rankings favor proximity, but organic pages featuring projects completed in nearby towns can attract those customers. Add local details, such as soil conditions or common plant choices, and encourage reviews from clients in those areas. Yard signs at active job sites and door hangers for neighbors also drive branded searches from the surrounding streets.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for landscaping companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most landscaping companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for landscaping companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-landscaping" />
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
