import answers from '@/content/answers.json';

// Answer-first block for answer engines and AI assistants (AEO/GEO): the page's core question,
// a complete answer in one paragraph, marked up with Speakable so assistants can read it aloud.
export default function QuickAnswer({ slug }: { slug: string }) {
  const qa = (answers as Record<string, { q: string; a: string }>)[slug];
  if (!qa) return null;
  const url = `https://www.rankempire.us/${slug}/`;
  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.qa-q', '.qa-a'] },
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
        </div>
      </div>
    </section>
  );
}
