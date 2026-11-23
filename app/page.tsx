import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import OrgSchema from '@/components/seo/OrgSchema';
import PersonSchema from '@/components/seo/PersonSchema';
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
import Popular from '@/components/pages/home/Popular';
import BookCall from '@/components/sections/BookCall';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';
import Script from '@/components/pages/home/Script';

export const metadata: Metadata = {
  title: { absolute: "SEO Services USA: SEO, AEO and GEO Agency | RankEmpire" },
  description: "SEO services for US businesses that want to rank on Google and get cited by AI search. 3.5M+ clicks tracked in client Search Console. Plans from $599.",
  alternates: { canonical: "https://www.rankempire.us/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: {
    type: 'website',
    siteName: 'RankEmpire',
    locale: 'en_US',
    title: "SEO Services USA: SEO, AEO and GEO Agency | RankEmpire",
    description: "SEO services for US businesses that want to rank on Google and get cited by AI search. 3.5M+ clicks tracked in client Search Console. Plans from $599.",
    url: "https://www.rankempire.us/",
    images: [{ url: "https://www.rankempire.us/img/team.webp", width: 1200, height: 630, alt: "RankEmpire SEO Agency Team and Results" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services USA: SEO, AEO and GEO Agency | RankEmpire",
    description: "SEO services for US businesses that want to rank on Google and get cited by AI search. 3.5M+ clicks tracked in client Search Console. Plans from $599.",
    images: ["https://www.rankempire.us/img/team.webp"],
  },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <WebSiteSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How much do SEO services cost in the USA?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local SEO plans start at $599 a month for one location, $1,199 for up to three locations and $2,199 for four or more. National and ecommerce SEO are quoted after an audit.\"}}, {\"@type\": \"Question\", \"name\": \"What is the difference between SEO, AEO and GEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"SEO ranks your pages in search results. AEO (answer engine optimization) structures content so it is chosen as a direct answer. GEO (generative engine optimization) helps AI tools like ChatGPT cite your business.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take to work?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most sites see movement in Search Console within 4 to 12 weeks, and stronger results over 6 to 12 months, depending on competition and the site's starting point.\"}}, {\"@type\": \"Question\", \"name\": \"Do you show real results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. The homepage shows live Search Console reports from client accounts, shared with permission, with clicks, impressions, CTR and position.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with businesses across the US?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We work with local, multi-location and national businesses across the US, with city pages for markets like Dallas, Houston, Chicago and Phoenix.\"}}]}" }} />
      <PersonSchema />
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
        <Popular />
        <BookCall />
        <Faq />
        <Pmq />
        <Robo />
        <Script />
      </main>
      <Footer />
    </>
  );
}
