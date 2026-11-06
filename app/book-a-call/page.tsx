import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import BookCall from '@/components/sections/BookCall';
import ProofStrip from '@/components/sections/ProofStrip';
import RelatedLinks from '@/components/sections/RelatedLinks';
import site from '@/content/site.json';

const TITLE = 'Book a Free SEO Strategy Call | RankEmpire';
const DESC = 'Book a free SEO strategy call with RankEmpire founder Gaurav Kapoor. Pick a time online and get your site, local rankings and competitors reviewed live.';
const URL = 'https://www.rankempire.us/book-a-call/';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1',
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: TITLE, description: DESC, url: URL, images: ['https://www.rankempire.us/img/team.webp'] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
};

const STEPS = [
  ['Pick a time', 'Choose any open slot in the calendar above. Google sends you a confirmation and adds the call to your calendar.'],
  ['Share your website', 'Send us your website and the city or market you serve, by email or WhatsApp, so we can look at your rankings before the call.'],
  ['Review it together', 'We go through your site, Google Business Profile, local rankings and the competitors who hold the top spots, live on screen.'],
  ['Leave with a plan', 'You get a prioritized list of what to fix first, with or without us. If we are a fit, we recommend a plan and send pricing.'],
];

const FAQ = [
  ['Is the strategy call really free?', 'Yes. The call and the review are free, with no obligation and no contract to sign. Many business owners book one just to get a second opinion on their current SEO.'],
  ['Who will I speak with?', `You speak with ${site.founder.name}, RankEmpire's founder and lead SEO strategist, or the senior strategist who would run your account. No sales scripts and no junior account managers.`],
  ['What should I prepare before the call?', 'Just your website address and the main services and areas you want to rank for. If you have Google Search Console or Google Business Profile access, have it handy, but it is not required.'],
  ['Can I message you instead of booking a call?', `Yes. Use the WhatsApp button on any page or email ${site.email}. We usually reply within one business day.`],
  ['What happens after the call?', 'You leave knowing what to fix first. If you want our help, we recommend a plan and send pricing; local plans start at $599 a month, month to month after a three-month onboarding.'],
];

export default function Page() {
  const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rankempire.us/' },
    { '@type': 'ListItem', position: 2, name: 'Book a call', item: URL }] };
  const page = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Book a free SEO strategy call', url: URL, description: DESC,
    about: { '@id': 'https://www.rankempire.us/#org' },
    potentialAction: { '@type': 'ReserveAction', target: site.booking.url, name: 'Book a free SEO strategy call' } };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <BookCall page title="Book a free SEO strategy call" />
        <section className="x bk-steps" aria-labelledby="bks-h">
          <div className="wrap">
            <div className="xh" data-r="">
              <span className="xe">
                <i></i>
                How it works
              </span>
              <h2 className="h2" id="bks-h">What happens on the call</h2>
            </div>
            <ol className="bk-st" data-r="">
              {STEPS.map(([h, p], i) => (
                <li key={h}>
                  <span className="bk-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <ProofStrip context="SEO strategy call" />
        <section className="x bk-faq" aria-labelledby="bkf-h">
          <div className="wrap">
            <div className="xh" data-r="">
              <span className="xe">
                <i></i>
                FAQ
              </span>
              <h2 className="h2" id="bkf-h">Questions about the strategy call</h2>
            </div>
            <div className="bk-qa" data-r="">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <RelatedLinks title="Before you book" items={[
          { href: '/seo-audit/', label: 'Free SEO Audit' },
          { href: '/seo-packages/', label: 'SEO Packages and Pricing' },
          { href: '/case-studies/', label: 'Verified client results' },
          { href: '/seo-consulting/', label: 'SEO Consulting' },
          { href: '/local-seo/', label: 'Local SEO' },
          { href: '/blog/how-to-choose-an-seo-company/', label: 'Guide: How to Choose an SEO Company' },
          { href: '/blog/how-much-does-seo-cost/', label: 'Guide: How Much Does SEO Cost' },
          { href: '/contact-us/', label: 'Contact RankEmpire' },
        ]} />
      </main>
      <Footer />
    </>
  );
}
