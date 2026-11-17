import answers from '@/content/answers.json';
import lastmod from '@/content/lastmod.json';

// Answer-first block for answer engines and AI assistants (AEO/GEO): the page's core question,
// a complete answer in one paragraph, marked up with Speakable so assistants can read it aloud.
export default function QuickAnswer({ slug }: { slug: string }) {
  const qa = (answers as Record<string, { q: string; a: string }>)[slug];
  if (!qa) return null;
  const url = `https://www.rankempire.us/${slug}/`;
  const updated = (lastmod as Record<string, string>)[slug];
  const shown = updated ? new Date(updated + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '';
  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.qa-q', '.qa-a'] },
    ...(updated ? { dateModified: updated } : {}),
    inLanguage: 'en-US',
    isPartOf: { '@id': 'https://www.rankempire.us/#website' },
    publisher: { '@id': 'https://www.rankempire.us/#org' },
    author: { '@id': 'https://www.rankempire.us/our-team/#gaurav' },
    reviewedBy: { '@id': 'https://www.rankempire.us/our-team/#gaurav' },
  };
  return (
    <section className="qa" aria-labelledby="qa-h">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <div className="wrap">
        <div className="qa-box" data-r="">
          <span className="eyb">
            <i></i>
            Quick answer
          </span>
          <h2 id="qa-h" className="qa-q">{qa.q}</h2>
          <p className="qa-a">{qa.a}</p>
          <p className="qa-by" style={{ fontSize: '.8rem', opacity: 0.7, marginTop: '.75rem' }}>
            {shown ? <>Updated <time dateTime={updated}>{shown}</time> · </> : null}
            Reviewed by <a href="/our-team/">Gaurav Kapoor</a>, Founder and Lead SEO Strategist
          </p>
        </div>
      </div>
    </section>
  );
}
