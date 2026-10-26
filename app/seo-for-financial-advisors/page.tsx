import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/seo-for-financial-advisors/V2';
import Statement from '@/components/pages/seo-for-financial-advisors/Statement';
import Searches from '@/components/pages/seo-for-financial-advisors/Searches';
import Challenges from '@/components/pages/seo-for-financial-advisors/Challenges';
import Pages from '@/components/pages/seo-for-financial-advisors/Pages';
import Marquee from '@/components/pages/seo-for-financial-advisors/Marquee';
import Strategy from '@/components/pages/seo-for-financial-advisors/Strategy';
import Services from '@/components/pages/seo-for-financial-advisors/Services';
import Cities from '@/components/pages/seo-for-financial-advisors/Cities';
import Pricing from '@/components/pages/seo-for-financial-advisors/Pricing';
import Faq from '@/components/pages/seo-for-financial-advisors/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-financial-advisors/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Financial Advisors: Rank Higher | RankEmpire",
  description: "SEO for financial advisors that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-financial-advisors/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Financial Advisors: Rank Higher | RankEmpire", description: "SEO for financial advisors that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-financial-advisors/", images: ["https://www.rankempire.com/img/i-pro.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Financial Advisors: Rank Higher | RankEmpire", description: "SEO for financial advisors that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Financial Advisors\", \"item\": \"https://www.rankempire.com/seo-for-financial-advisors/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Financial Advisors\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Financial Advisors\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-financial-advisors/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Are Google reviews allowed for financial advisors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Registered investment advisers may use testimonials and third party ratings under the SEC Marketing Rule, provided required disclosures and policies are in place. Broker dealer representatives follow FINRA rules. Review your firm's policies and compliance guidance before encouraging reviews or responding to them publicly.\"}}, {\"@type\": \"Question\", \"name\": \"Can we publish market commentary on our blog?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, as long as it is reviewed and approved under your firm's compliance process, avoids promissory language, and includes appropriate disclaimers. Educational topics like retirement account rules, savings strategies, and planning concepts often perform better in search than short term market predictions.\"}}, {\"@type\": \"Question\", \"name\": \"Should we target local searches if we work with clients virtually?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Both can work. Local searches attract clients who want in person meetings, while niche content can attract virtual clients across your registered states. Make sure your licensing and registration cover the clients you target and mention those limits clearly on the website.\"}}, {\"@type\": \"Question\", \"name\": \"How specific should our niche pages be?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Specific enough to show real understanding. A page for physicians might cover student debt, practice ownership, and disability insurance considerations. Shallow pages that swap the profession name with no unique substance add little value and may not help rankings. One deep page for a niche you truly serve beats five shallow ones.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for financial advisors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most financial advisory firms see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for financial advisors cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
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
