import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-orthodontists/Hero';
import Statement from '@/components/pages/seo-for-orthodontists/Statement';
import Searches from '@/components/pages/seo-for-orthodontists/Searches';
import Challenges from '@/components/pages/seo-for-orthodontists/Challenges';
import Pages from '@/components/pages/seo-for-orthodontists/Pages';
import Marquee from '@/components/pages/seo-for-orthodontists/Marquee';
import Strategy from '@/components/pages/seo-for-orthodontists/Strategy';
import Services from '@/components/pages/seo-for-orthodontists/Services';
import Cities from '@/components/pages/seo-for-orthodontists/Cities';
import Pricing from '@/components/pages/seo-for-orthodontists/Pricing';
import Faq from '@/components/pages/seo-for-orthodontists/Faq';
import Related from '@/components/pages/seo-for-orthodontists/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Orthodontists: Rank Higher | RankEmpire",
  description: "SEO for orthodontists that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-orthodontists/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Orthodontists: Rank Higher | RankEmpire", description: "SEO for orthodontists that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-orthodontists/", images: ["https://www.rankempire.com/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Orthodontists: Rank Higher | RankEmpire", description: "SEO for orthodontists that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Orthodontists\", \"item\": \"https://www.rankempire.com/seo-for-orthodontists/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Orthodontists\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Orthodontists\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-orthodontists/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we compete with mail order aligner companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Rather than competing on price, explain the value of in person diagnosis, X rays, treatment planning, and monitoring by a specialist. Educational content comparing supervised and unsupervised treatment helps patients understand the difference, especially for bite issues that need careful attention. Offering a clear aligner payment plan also removes a common reason people choose mail order options.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for clear aligner searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a detailed page explaining how aligners work, who is a good candidate, typical treatment length, attachments, and daily wear requirements. Include consented before and after photos and reviews from aligner patients. Mention the aligner systems you use and any provider tier only if it is current and accurately described.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth publishing pricing information?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many families research cost early and feel uneasy when it is hidden. Providing typical ranges and explaining what affects pricing, such as case complexity, appliance type, and treatment length, builds trust. Pair it with financing details and invite visitors to schedule a consultation for an exact estimate tailored to their situation.\"}}, {\"@type\": \"Question\", \"name\": \"Do dentist referrals still matter if we invest in SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dentist referrals remain a major source of patients, and referred families still look up the practice online before booking. Strong reviews, clear treatment pages, and an easy consultation form reinforce the referral and make it more likely the family actually schedules instead of shopping around for another option.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for orthodontists?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most orthodontic practices see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for orthodontists cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
