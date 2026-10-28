import site from '@/content/site.json';

// Person entity for the founder. Shared by the home, about and team pages and used as blog author.
export const PERSON_ID = `${site.url}/our-team/#gaurav`;

export function personJson() {
  const f = site.founder;
  const sameAs = [...f.sameAs, ...Object.values(site.socials).filter(Boolean)];
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: f.name,
    jobTitle: f.jobTitle,
    url: f.url,
    image: f.image,
    description: f.description,
    worksFor: { '@id': `${site.url}/#org` },
    knowsAbout: ['Search engine optimization', 'Local SEO', 'Answer Engine Optimization', 'Generative Engine Optimization', 'Technical SEO', 'Google Search Console'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function PersonSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJson()) }} />;
}
