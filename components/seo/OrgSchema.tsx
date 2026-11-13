import site from '@/content/site.json';
import cities from '@/content/cities.json';

// The one Organization entity for the whole site (same @id everywhere). Typed OnlineBusiness, a
// schema.org Organization subtype Google supports, because RankEmpire has no public street address:
// LocalBusiness types (e.g. ProfessionalService) require one and fail validation without it.
export const ORG_ID = `${site.url}/#org`;

export function orgJson() {
  const sameAs = Object.values(site.socials).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    '@id': ORG_ID,
    name: site.name,
    alternateName: site.alternateName,
    url: `${site.url}/`,
    logo: { '@type': 'ImageObject', '@id': `${site.url}/#logo`, url: site.logo.url, contentUrl: site.logo.url, width: site.logo.width, height: site.logo.height, caption: site.name },
    image: { '@type': 'ImageObject', url: `${site.url}/img/team.webp`, width: 1400, height: 939 },
    description: site.description,
    slogan: site.slogan,
    email: site.email,
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: site.email, availableLanguage: ['en'], areaServed: 'US' },
    founder: { '@type': 'Person', '@id': `${site.url}/our-team/#gaurav`, name: site.founder.name, url: site.founder.url },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      ...cities.map((c) => ({ '@type': 'City', name: c.name, containedInPlace: { '@type': 'State', name: c.state } })),
    ],
    // Local SEO plans as published on /seo-packages/local-seo/ and every city pricing section.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Local SEO plans',
      url: `${site.url}/seo-packages/local-seo/`,
      itemListElement: [
        ['Starter', 599, 'One location, one service area'],
        ['Pro', 1199, 'Up to three locations'],
        ['Multi-location', 2199, 'Four or more locations'],
      ].map(([name, price, description]) => ({
        '@type': 'Offer',
        name: `Local SEO ${name}`,
        description,
        url: `${site.url}/seo-packages/local-seo/`,
        priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'USD', unitText: 'MONTH' },
        itemOffered: { '@type': 'Service', name: `Local SEO ${name} plan`, serviceType: 'Local search engine optimization' },
      })),
    },
    potentialAction: { '@type': 'ReserveAction', name: 'Book a free SEO strategy call', target: `${site.url}/book-a-call/` },
    knowsAbout: ['Search engine optimization', 'Answer engine optimization', 'Generative engine optimization', 'AI agent optimization', 'Local SEO', 'Technical SEO', 'Link building', 'Content strategy', 'Google Business Profile optimization', 'E-commerce SEO', 'SaaS SEO'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function OrgSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson()) }} />;
}
