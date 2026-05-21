import { PageHero } from '../components/PageHero';
import { marzPrinciples } from '../data/brand';

const story = [
  {
    title: 'Why MARZ was started',
    body: 'MARZ exists because AI should become useful infrastructure for real businesses, not just impressive demos. The company starts with practical commerce problems where better systems can create immediate value.',
  },
  {
    title: 'Ethical AI mission',
    body: 'The MARZ standard is simple: technology must preserve truth, protect trust, and improve work without misleading customers.',
  },
  {
    title: 'Practical business focus',
    body: 'The first focus is not abstract automation. It is the real operating world of sellers, photos, products, WhatsApp conversations, catalogs, and customer expectations.',
  },
  {
    title: 'First initiative',
    body: 'SouqOne is the first MARZ initiative. SouqOne Studio is its first focused pilot, built to learn from real local sellers before expanding into a wider commerce platform.',
  },
];

export function AboutMarz() {
  return (
    <div className="brand-page theme-marz">
      <PageHero
        eyebrow="About MARZ"
        title="A serious AI company for practical business systems."
        copy="MARZ Enterprises & Solutions is being built around a direct belief: AI should support real-world businesses with systems that are useful, ethical, and operationally grounded."
        logoSrc="/brand/marz.png"
        logoAlt="MARZ logo"
      />
      <section className="brand-section">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          {story.map((item, index) => (
            <article key={item.title} className="brand-card reveal-card p-7" style={{ animationDelay: `${index * 90}ms` }}>
              <span className="text-sm font-black" style={{ color: 'var(--accent)' }}>0{index + 1}</span>
              <h2 className="mt-5 text-3xl font-black">{item.title}</h2>
              <p className="mt-4 leading-8" style={{ color: 'var(--muted)' }}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="brand-section border-y" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,0.28)' }}>
        <div className="section-shell">
          <p className="brand-kicker">Operating principles</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {marzPrinciples.map((principle) => (
              <div key={principle} className="brand-card p-5 text-lg font-black">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
