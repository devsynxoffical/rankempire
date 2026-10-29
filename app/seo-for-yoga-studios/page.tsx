import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-yoga-studios/V2';
import Statement from '@/components/pages/seo-for-yoga-studios/Statement';
import Searches from '@/components/pages/seo-for-yoga-studios/Searches';
import Challenges from '@/components/pages/seo-for-yoga-studios/Challenges';
import Pages from '@/components/pages/seo-for-yoga-studios/Pages';
import Marquee from '@/components/pages/seo-for-yoga-studios/Marquee';
import Strategy from '@/components/pages/seo-for-yoga-studios/Strategy';
import Services from '@/components/pages/seo-for-yoga-studios/Services';
import Cities from '@/components/pages/seo-for-yoga-studios/Cities';
import Pricing from '@/components/pages/seo-for-yoga-studios/Pricing';
import Faq from '@/components/pages/seo-for-yoga-studios/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-yoga-studios/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Yoga Studios: Rank Higher | RankEmpire",
  description: "SEO for yoga studios: rank for hot yoga, vinyasa and teacher training searches with class pages, schedules, teacher profiles, profile optimization and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-yoga-studios/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Yoga Studios: Rank Higher | RankEmpire", description: "SEO for yoga studios: rank for hot yoga, vinyasa and teacher training searches with class pages, schedules, teacher profiles, profile optimization and reviews.", url: "https://www.rankempire.us/seo-for-yoga-studios/", images: ["https://www.rankempire.us/img/i-beauty.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Yoga Studios: Rank Higher | RankEmpire", description: "SEO for yoga studios: rank for hot yoga, vinyasa and teacher training searches with class pages, schedules, teacher profiles, profile optimization and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Yoga Studios\", \"item\": \"https://www.rankempire.us/seo-for-yoga-studios/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Yoga Studios\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Yoga Studios\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-yoga-studios/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we publish class pricing online?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Most newcomers compare intro offers and drop in rates before choosing a studio, and hidden pricing often sends them elsewhere. Lay out trial offers, class packs, and memberships clearly, including any commitment terms. Transparent pricing makes the decision easier and reduces repetitive questions at the front desk.\"}}, {\"@type\": \"Question\", \"name\": \"Do class style pages really help with SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many people search for a specific style, such as hot yoga, yin, or power vinyasa, rather than yoga in general. A dedicated page explaining that style, its intensity, and when it is offered helps the studio appear for those searches and sends visitors directly to the right class.\"}}, {\"@type\": \"Question\", \"name\": \"How can we attract more beginners through search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a beginner page that answers practical worries, such as flexibility, what to wear, mat rentals, and etiquette. Highlight beginner friendly classes on the schedule and encourage new students to leave reviews. Searches like yoga for beginners near me often favor studios that address newcomers directly.\"}}, {\"@type\": \"Question\", \"name\": \"Is blogging worth the time for a yoga studio?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It can be, when articles answer real questions students ask, such as how often to practice, the difference between styles, or how yoga fits with running or lifting. Helpful articles attract people early in their search, build trust in your teachers, and give you material to share in newsletters.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for yoga studios?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most yoga studios see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for yoga studios cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-yoga-studios" />
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
