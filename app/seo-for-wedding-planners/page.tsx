import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/seo-for-wedding-planners/V0';
import Statement from '@/components/pages/seo-for-wedding-planners/Statement';
import Searches from '@/components/pages/seo-for-wedding-planners/Searches';
import Challenges from '@/components/pages/seo-for-wedding-planners/Challenges';
import Pages from '@/components/pages/seo-for-wedding-planners/Pages';
import Marquee from '@/components/pages/seo-for-wedding-planners/Marquee';
import Strategy from '@/components/pages/seo-for-wedding-planners/Strategy';
import Services from '@/components/pages/seo-for-wedding-planners/Services';
import Cities from '@/components/pages/seo-for-wedding-planners/Cities';
import Pricing from '@/components/pages/seo-for-wedding-planners/Pricing';
import Faq from '@/components/pages/seo-for-wedding-planners/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-wedding-planners/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Wedding Planners: Rank Higher | RankEmpire",
  description: "SEO for wedding planners that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-wedding-planners/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Wedding Planners: Rank Higher | RankEmpire", description: "SEO for wedding planners that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.us/seo-for-wedding-planners/", images: ["https://www.rankempire.us/img/i-food.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Wedding Planners: Rank Higher | RankEmpire", description: "SEO for wedding planners that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Wedding Planners\", \"item\": \"https://www.rankempire.us/seo-for-wedding-planners/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Wedding Planners\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Wedding Planners\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-wedding-planners/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we publish our planning prices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many couples skip planners who share nothing about cost. Publishing starting prices or typical ranges for each service tier helps couples budget and filters inquiries. Explain what affects pricing, such as guest count, number of events, and destination travel, so couples understand the value of each package.\"}}, {\"@type\": \"Question\", \"name\": \"How do real wedding pages help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Each real wedding page can rank for searches involving the venue, style, or theme, and it shows genuine experience. Including vendor credits encourages photographers, florists, and venues to share or link to the page, which strengthens your authority and introduces you to their audiences.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth targeting destination wedding searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if you plan destination weddings regularly and understand the logistics. Create pages explaining travel planning, guest communication, and local vendor coordination for the regions you serve. Specific destination knowledge builds confidence and helps attract couples planning weddings abroad or in popular regions.\"}}, {\"@type\": \"Question\", \"name\": \"Do venue preferred vendor lists help our visibility?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They help directly and indirectly. Couples who book a venue often review its preferred vendors first, and those listings usually include links to your website. Being recommended by a venue builds trust and increases the likelihood couples will reach out to you.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for wedding planners?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most wedding planning businesss see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for wedding planners cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
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
