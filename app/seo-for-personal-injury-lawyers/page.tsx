import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-personal-injury-lawyers/V0';
import Statement from '@/components/pages/seo-for-personal-injury-lawyers/Statement';
import Searches from '@/components/pages/seo-for-personal-injury-lawyers/Searches';
import Challenges from '@/components/pages/seo-for-personal-injury-lawyers/Challenges';
import Pages from '@/components/pages/seo-for-personal-injury-lawyers/Pages';
import Marquee from '@/components/pages/seo-for-personal-injury-lawyers/Marquee';
import Strategy from '@/components/pages/seo-for-personal-injury-lawyers/Strategy';
import Services from '@/components/pages/seo-for-personal-injury-lawyers/Services';
import Cities from '@/components/pages/seo-for-personal-injury-lawyers/Cities';
import Pricing from '@/components/pages/seo-for-personal-injury-lawyers/Pricing';
import Faq from '@/components/pages/seo-for-personal-injury-lawyers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-personal-injury-lawyers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Personal Injury Lawyers: Rank Higher | RankEmpire",
  description: "SEO for personal injury lawyers: compete for car accident, truck and injury case searches with case-type pages, attorney authority, reviews and local links.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-personal-injury-lawyers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Personal Injury Lawyers: Rank Higher | RankEmpire", description: "SEO for personal injury lawyers: compete for car accident, truck and injury case searches with case-type pages, attorney authority, reviews and local links.", url: "https://www.rankempire.us/seo-for-personal-injury-lawyers/", images: ["https://www.rankempire.us/img/i-legal.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Personal Injury Lawyers: Rank Higher | RankEmpire", description: "SEO for personal injury lawyers: compete for car accident, truck and injury case searches with case-type pages, attorney authority, reviews and local links." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Personal Injury Lawyers\", \"item\": \"https://www.rankempire.us/seo-for-personal-injury-lawyers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Personal Injury Lawyers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Personal Injury Lawyers\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-personal-injury-lawyers/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we publish settlement amounts on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many states allow past results with specific disclaimers, while others restrict them heavily. Even where allowed, results must not imply future outcomes. Review your state bar rules carefully, include required disclaimers, and consider whether case descriptions focused on the type of claim and challenges involved communicate value without the risk.\"}}, {\"@type\": \"Question\", \"name\": \"Why are personal injury SEO results so competitive?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Injury cases can be valuable, so many firms invest heavily in websites, content, and advertising. That competition means quick fixes rarely work. Firms that build depth around specific accident types, strong reviews, and genuine local authority tend to make steadier progress than those relying only on broad pages or paid directories.\"}}, {\"@type\": \"Question\", \"name\": \"Should we create content about every accident type?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Focus on the cases you actually handle and want more of. A strong page for truck accidents with details about federal regulations, evidence, and insurance is better than many thin pages. Quality and accuracy matter more than covering every possible injury scenario with generic text.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank in nearby cities without an office there?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map rankings depend heavily on office locations, so ranking in distant cities is difficult without a real presence. Organic content about local courts, roads, and community involvement can help reach nearby areas. Avoid creating fake offices or virtual addresses, which violate guidelines and can damage trust.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for personal injury lawyers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most personal injury firms see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for personal injury lawyers cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-personal-injury-lawyers" />
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
