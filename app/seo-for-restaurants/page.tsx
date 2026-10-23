import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-restaurants/Hero';
import Statement from '@/components/pages/seo-for-restaurants/Statement';
import Searches from '@/components/pages/seo-for-restaurants/Searches';
import Challenges from '@/components/pages/seo-for-restaurants/Challenges';
import Pages from '@/components/pages/seo-for-restaurants/Pages';
import Marquee from '@/components/pages/seo-for-restaurants/Marquee';
import Strategy from '@/components/pages/seo-for-restaurants/Strategy';
import Services from '@/components/pages/seo-for-restaurants/Services';
import Cities from '@/components/pages/seo-for-restaurants/Cities';
import Pricing from '@/components/pages/seo-for-restaurants/Pricing';
import Faq from '@/components/pages/seo-for-restaurants/Faq';
import Related from '@/components/pages/seo-for-restaurants/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Restaurants: More Calls and Customers | RankEmpire",
  description: "SEO for restaurants that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for restaurants.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-restaurants/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Restaurants: More Calls and Customers | RankEmpire", description: "SEO for restaurants that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for restaurants.", url: "https://www.rankempire.com/seo-for-restaurants/", images: ["https://www.rankempire.com/img/i-food.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Restaurants: More Calls and Customers | RankEmpire", description: "SEO for restaurants that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for restaurants." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Restaurants\", \"item\": \"https://www.rankempire.com/seo-for-restaurants/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Restaurants\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Restaurants\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-restaurants/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is our menu PDF hurting our search visibility?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"PDFs and images are harder for search engines to read and frustrating on phones. Keep a text version of the menu on a normal web page, with dish names and short descriptions. You can still link a printable PDF, but the main menu should be readable content that supports dish and cuisine searches.\"}}, {\"@type\": \"Question\", \"name\": \"Do delivery app listings help or hurt us?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Delivery apps add visibility, but they can also outrank your own site for your name and take a commission on orders. Make sure your website has its own ordering or reservation path, keep your information consistent across apps, and link to your direct ordering from the Business Profile where possible.\"}}, {\"@type\": \"Question\", \"name\": \"How do we handle unfair negative reviews?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Respond politely and briefly, thank the guest for the feedback, and invite them to contact a manager directly. Avoid arguing or sharing private details. If a review clearly violates Google's policies, such as fake or off topic content, report it. Future guests mostly judge the tone of your reply.\"}}, {\"@type\": \"Question\", \"name\": \"Should we post on our Google profile regularly?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Posts about specials, seasonal menus, and events keep the profile fresh and give searchers a reason to choose you today. A weekly rhythm with a good photo is enough. Update photos often as well, since outdated images of dishes no longer on the menu can disappoint guests.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for restaurants?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most restaurants see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for restaurants cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
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
