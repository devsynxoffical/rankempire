import RelatedLinks from '@/components/sections/RelatedLinks';

// Homepage links to the pages Search Console shows the most impressions for, so the site's
// strongest page passes authority to them. Update from `npm run pages` as rankings change.
const ITEMS = [
  { href: '/locations/new-york/', label: 'New York SEO company' },
  { href: '/locations/chicago/', label: 'Chicago SEO company' },
  { href: '/locations/houston/', label: 'Houston SEO agency' },
  { href: '/locations/los-angeles/', label: 'Los Angeles SEO company' },
  { href: '/seo-consulting/', label: 'SEO consulting services' },
  { href: '/seo-audit/', label: 'Professional SEO audit' },
  { href: '/seo-for-electricians/', label: 'Electrician SEO services' },
  { href: '/seo-for-auto-detailing/', label: 'Car detailing SEO' },
  { href: '/seo-for-pool-service-companies/', label: 'Pool service SEO' },
  { href: '/seo-for-painters/', label: 'Painting contractor SEO' },
  { href: '/seo-for-accountants/', label: 'CPA firm SEO services' },
  { href: '/seo-for-salons/', label: 'Hair salon SEO' },
  { href: '/seo-for-dentists/', label: 'Dental SEO services' },
  { href: '/seo-for-plumbers/', label: 'Plumber SEO services' },
  { href: '/blog/how-to-choose-an-seo-company/', label: 'How to choose an SEO company' },
  { href: '/blog/how-much-does-seo-cost/', label: 'How much SEO costs in 2026' },
];

export default function Popular() {
  return <RelatedLinks eyebrow="Most searched" title="Popular services, industries and cities" items={ITEMS} />;
}
