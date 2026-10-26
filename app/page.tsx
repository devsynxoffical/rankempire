import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/home/Hero';
import Results from '@/components/pages/home/Results';
import MoreResults from '@/components/pages/home/MoreResults';
import AiSearch from '@/components/pages/home/AiSearch';
import Cols3 from '@/components/pages/home/Cols3';
import Benefits from '@/components/pages/home/Benefits';
import Explore from '@/components/pages/home/Explore';
import Rankgrid from '@/components/pages/home/Rankgrid';
import Fd5 from '@/components/sections/Fd5';
import Faq from '@/components/pages/home/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';
import Script from '@/components/pages/home/Script';

export const metadata: Metadata = {
  title: "RankEmpire: SEO Company for Local, E-commerce and SaaS",
  description: "RankEmpire is an SEO company that grows organic traffic, leads and revenue with technical SEO, local SEO, content and link building. Get a free SEO audit.",
  alternates: { canonical: "https://www.rankempire.com/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "RankEmpire: SEO Company for Local, E-commerce and SaaS", description: "RankEmpire is an SEO company that grows organic traffic, leads and revenue with technical SEO, local SEO, content and link building. Get a free SEO audit.", url: "https://www.rankempire.com/", images: ["https://www.rankempire.com/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "RankEmpire: SEO Company for Local, E-commerce and SaaS", description: "RankEmpire is an SEO company that grows organic traffic, leads and revenue with technical SEO, local SEO, content and link building. Get a free SEO audit." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebSite\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How long does SEO take to work?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most clients see early movement in 60 to 90 days and meaningful results in 4 to 6 months. Competitive markets and new websites take longer. We share a realistic timeline after the audit.\"}}, {\"@type\": \"Question\", \"name\": \"What is included in every RankEmpire plan?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"An initial audit, a prioritized roadmap, the work itself, monthly reporting in plain English and a live dashboard. You also get a named strategist you can reach directly.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with businesses outside the US?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Our focus is the US market, but we support international SEO for US companies expanding abroad and for brands entering the US.\"}}, {\"@type\": \"Question\", \"name\": \"Do I have to sign a long contract?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. After a 3 month onboarding period, plans are month to month. You can cancel with 30 days notice.\"}}, {\"@type\": \"Question\", \"name\": \"Are there setup fees?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No setup fees on standard plans. Custom enterprise programs may include a one-time onboarding project, quoted up front.\"}}, {\"@type\": \"Question\", \"name\": \"Can I change plans later?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. You can upgrade or downgrade at the start of any month.\"}}, {\"@type\": \"Question\", \"name\": \"Do you guarantee first page rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No honest SEO company can guarantee rankings, because Google controls the results. We commit to the work, the transparency and the process that produce results.\"}}, {\"@type\": \"Question\", \"name\": \"How do you report results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Monthly reports cover rankings, traffic, conversions and the work completed, plus a live dashboard you can check anytime.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="" />
      <MobileMenu />
      <main id="main">
        <Hero />
        <Results />
        <MoreResults />
        <AiSearch />
        <Cols3 />
        <Benefits />
        <Explore />
        <Rankgrid />
        <Fd5 />
        <Faq />
        <Pmq />
        <Robo />
        <Script />
      </main>
      <Footer />
    </>
  );
}
