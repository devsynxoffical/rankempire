import RelatedLinks from '@/components/sections/RelatedLinks';

// Homepage links to the pages Search Console shows the most impressions for, so the site's
// strongest page passes authority to them. Update from `npm run pages` as rankings change.
const ITEMS = [
  { href: '/locations/new-york/', label: 'New York SEO company' },
  { href: '/locations/chicago/', label: 'Chicago SEO company' },
  { href: '/locations/houston/', label: 'Houston SEO agency' },
  { href: '/locations/los-angeles/', label: 'Los Angeles SEO company' },
  { href: '/seo-consulting/', label: 'SEO consultant services' },
  { href: '/seo-audit/', label: 'SEO audit services' },
  { href: '/aeo/', label: 'Answer engine optimization' },
  { href: '/seo-tools/backlink-checker/', label: 'Free backlink checker' },
  { href: '/seo-for-electricians/', label: 'Electrician SEO services' },
  { href: '/seo-for-plumbers/', label: 'SEO for plumbers' },
  { href: '/seo-for-auto-detailing/', label: 'SEO for car detailing' },
  { href: '/seo-for-auto-repair/', label: 'SEO for auto repair shops' },
  { href: '/seo-for-accountants/', label: 'CPA firm SEO services' },
  { href: '/seo-for-flooring-companies/', label: 'Flooring company SEO' },
  { href: '/seo-for-pool-service-companies/', label: 'Pool service SEO' },
  { href: '/seo-for-painters/', label: 'Painting contractor SEO' },
];

export default function Popular() {
  return <RelatedLinks eyebrow="Most searched" title="Popular services, industries and cities" items={ITEMS} />;
}
