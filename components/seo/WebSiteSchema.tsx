import site from '@/content/site.json';
import { ORG_ID } from './OrgSchema';

// WebSite entity on the homepage: name and alternateName are what Google uses for the site name
// shown above the URL in results. The sitelinks search box was retired by Google in 2024, so no SearchAction.
export default function WebSiteSchema() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    alternateName: site.alternateName,
    url: `${site.url}/`,
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
