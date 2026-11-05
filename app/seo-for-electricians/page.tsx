import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import ProofStrip from '@/components/sections/ProofStrip';
import DeepGuide from '@/components/sections/DeepGuide';
import TopPlan from '@/components/sections/TopPlan';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-electricians/V1';
import Statement from '@/components/pages/seo-for-electricians/Statement';
import Searches from '@/components/pages/seo-for-electricians/Searches';
import Challenges from '@/components/pages/seo-for-electricians/Challenges';
import Pages from '@/components/pages/seo-for-electricians/Pages';
import Marquee from '@/components/pages/seo-for-electricians/Marquee';
import Strategy from '@/components/pages/seo-for-electricians/Strategy';
import Services from '@/components/pages/seo-for-electricians/Services';
import Cities from '@/components/pages/seo-for-electricians/Cities';
import Pricing from '@/components/pages/seo-for-electricians/Pricing';
import Faq from '@/components/pages/seo-for-electricians/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-electricians/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Electrician SEO Services & Company | RankEmpire" },
  description: "Electrician SEO services that win emergency calls and panel, EV charger and rewiring jobs. Map pack, service pages, reviews. Free audit in 2 days.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-electricians/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Electrician SEO Services & Company | RankEmpire", description: "Electrician SEO services that win emergency calls and panel, EV charger and rewiring jobs. Map pack, service pages, reviews. Free audit in 2 days.", url: "https://www.rankempire.us/seo-for-electricians/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "Electrician SEO Services & Company | RankEmpire", description: "Electrician SEO services that win emergency calls and panel, EV charger and rewiring jobs. Map pack, service pages, reviews. Free audit in 2 days." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Electricians\", \"item\": \"https://www.rankempire.us/seo-for-electricians/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Electricians\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Electricians\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-electricians/\", \"description\": \"Electrician SEO captures both emergency calls and planned work like panel upgrades, EV chargers and rewiring. Emergencies are won in the map pack with an optimized profile, 24-hour hours and reviews; planned jobs are won with detailed service pages that explain scope, pricing ranges and permits. RankEmpire builds both and tracks calls, not just rankings.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we display our license number on the website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many states require license numbers on advertising, and customers often check them. Display the number in the footer and on service pages, and make sure it matches state records. This simple step builds trust and avoids compliance issues with licensing boards.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for EV charger installation searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a detailed page explaining charger types, electrical capacity, permits, and any local utility rebates. Add photos of completed installs and seek reviews from EV owners. If you are certified by charger manufacturers, get listed in their installer directories for added authority.\"}}, {\"@type\": \"Question\", \"name\": \"Can we rank in towns outside our main city?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map visibility weakens with distance, but organic pages can reach nearby towns if they contain real, local content, such as projects completed there and local permit considerations. Reviews from customers in those towns also help strengthen relevance. Avoid copying the same page with only the town name changed, since thin duplicates rarely rank.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth separating residential and commercial services?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. These customers search differently and evaluate different things. Homeowners focus on safety, cleanliness, and price, while commercial buyers want licensing, insurance, scheduling flexibility, and experience with code. Separate pages let each audience find the details they care about most.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for electricians?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most electrical contractors see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for electricians cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-electricians" />
        <ProofStrip context="electrician SEO" />
        <Statement />
        <SearchSurfaces slug="seo-for-electricians" kind="industry" audience="electricians" kw="emergency electrician near me" question="ev charger installation cost" />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
        <DeepGuide slug="seo-for-electricians" />
        <TopPlan slug="seo-for-electricians" />
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
