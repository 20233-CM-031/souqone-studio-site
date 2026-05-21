import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { roadmap, souqOnePrinciples } from '../data/brand';

export function SouqOne() {
  return (
    <div className="brand-page theme-souqone">
      <PageHero
        eyebrow="SouqOne Marketplace"
        title="A calm growth layer for local sellers."
        copy="SouqOne takes its theme from the deep green marketplace identity: local, trusted, steady, and practical. It exists to help sellers improve digital selling without losing the human trust of local business."
        logoSrc="/brand/souqone.png"
        logoAlt="SouqOne logo"
      >
        <Link to="/studio" className="brand-button">
          See First Product
        </Link>
      </PageHero>

      <section className="brand-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="brand-kicker">Local seller problem</p>
            <h2 className="section-title mt-4">Good products lose value when digital presentation is weak.</h2>
          </div>
          <div className="grid gap-4">
            {souqOnePrinciples.map((principle, index) => (
              <article key={principle} className="brand-card p-6">
                <p className="text-sm font-black" style={{ color: 'var(--accent-2)' }}>0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-black">{principle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section border-y" style={{ borderColor: 'var(--line)', background: 'rgba(255,245,216,0.18)' }}>
        <div className="section-shell">
          <p className="brand-kicker">Roadmap</p>
          <h2 className="section-title mt-4 max-w-3xl">Build from real seller needs, not imagined platform features.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.phase} className="brand-card p-7">
                <p className="text-sm font-black" style={{ color: 'var(--accent-2)' }}>{item.phase}</p>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7" style={{ color: 'var(--muted)' }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
