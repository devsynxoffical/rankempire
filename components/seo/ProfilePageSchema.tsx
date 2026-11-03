import site from '@/content/site.json';
import { personJson } from './PersonSchema';

// ProfilePage for the founder's author page (/our-team/), which every blog post links as the author URL.
export default function ProfilePageSchema() {
  const { ['@context']: _ctx, ...person } = personJson();
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${site.url}/our-team/#profile`,
    url: `${site.url}/our-team/`,
    name: `${site.founder.name}, ${site.founder.jobTitle} at ${site.name}`,
    dateModified: '2026-11-03',
    mainEntity: person,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
