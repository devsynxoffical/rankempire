import site from '@/content/site.json';

export default function AuthorCard() {
  const f = site.founder;
  return (
    <div className="card author" style={{ marginTop: '40px' }}>
      <img src="/img/gaurav-sit.webp" alt={f.name} width="64" height="64" loading="lazy" />
      <div>
        <b style={{ color: 'var(--ink)' }}>
          <a href="/our-team/#gaurav">{f.name}</a>
          {` · ${f.jobTitle}`}
        </b>
        <p style={{ margin: '6px 0 0' }}>{f.description}</p>
        <p style={{ margin: '10px 0 0', fontSize: '14px' }}>
          <a href="/case-studies/">See the verified Search Console results</a>
          {' or '}
          <a href="/contact-us/">request a free SEO audit</a>.
        </p>
      </div>
    </div>
  );
}
