import site from '@/content/site.json';

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
    areaServed: { '@type': 'Country', name: 'United States' },
    knowsAbout: ['Search engine optimization', 'Answer engine optimization', 'Generative engine optimization', 'AI agent optimization', 'Local SEO', 'Technical SEO', 'Link building', 'Content strategy', 'Google Business Profile optimization', 'E-commerce SEO', 'SaaS SEO'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function OrgSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson()) }} />;
}
