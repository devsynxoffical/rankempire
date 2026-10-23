import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-daycares/Hero';
import Statement from '@/components/pages/seo-for-daycares/Statement';
import Searches from '@/components/pages/seo-for-daycares/Searches';
import Challenges from '@/components/pages/seo-for-daycares/Challenges';
import Pages from '@/components/pages/seo-for-daycares/Pages';
import Marquee from '@/components/pages/seo-for-daycares/Marquee';
import Strategy from '@/components/pages/seo-for-daycares/Strategy';
import Services from '@/components/pages/seo-for-daycares/Services';
import Cities from '@/components/pages/seo-for-daycares/Cities';
import Pricing from '@/components/pages/seo-for-daycares/Pricing';
import Faq from '@/components/pages/seo-for-daycares/Faq';
import Related from '@/components/pages/seo-for-daycares/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Daycares and Preschools: Rank Higher | RankEmpire",
  description: "SEO for daycares and preschools that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-daycares/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Daycares and Preschools: Rank Higher | RankEmpire", description: "SEO for daycares and preschools that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-daycares/", images: ["https://www.rankempire.com/img/i-pro.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Daycares and Preschools: Rank Higher | RankEmpire", description: "SEO for daycares and preschools that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Daycares and Preschools\", \"item\": \"https://www.rankempire.com/seo-for-daycares/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Daycares and Preschools\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Daycares and Preschools\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-daycares/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"We usually have a waitlist. Is SEO still useful?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. A steady flow of inquiries keeps the waitlist healthy, lets you fill openings quickly when families move on, and supports expansion. SEO also helps you attract families who fit your program best, such as those seeking your specific curriculum or schedule options.\"}}, {\"@type\": \"Question\", \"name\": \"Can we post photos of the children on our site?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only with written parental consent, and many centers choose to show classrooms, activities, or hands instead of faces. Keep a clear photo policy and follow it consistently. Parents notice and appreciate when a center treats privacy seriously, which supports trust during the decision process.\"}}, {\"@type\": \"Question\", \"name\": \"Should we list tuition on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many parents look for tuition before touring, and some skip centers that share nothing. Listing ranges or starting rates, along with what is included, helps qualify families. If rates vary, explain the factors and invite parents to request a detailed breakdown during the tour.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for searches near employers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map rankings depend on location, but organic pages can mention nearby business districts, hospitals, or campuses where parents work, along with commute details and flexible schedules. Partnerships with those employers can also bring mentions and listings that help the center appear for work related searches.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for daycares and preschools?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most childcare centers see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for daycares and preschools cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <Hero />
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
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
