import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { roadmap, souqOnePrinciples } from '../data/brand';

export function SouqOne() {
  return (
    <>
      <PageHero
        eyebrow="SouqOne"
        title="A local commerce initiative for seller growth."
        copy="SouqOne is the MARZ initiative focused on helping local businesses become more presentable, organized, and trusted in digital selling environments."
      >
        <Link to="/studio" className="gold-button">
          See First Product
        </Link>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Local seller problem</p>
            <h2 className="section-title mt-4">Good products lose value when digital presentation is weak.</h2>
          </div>
          <div className="grid gap-4">
            {souqOnePrinciples.map((principle, index) => (
              <article key={principle} className="panel p-6">
                <p className="text-sm font-black text-cyan">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{principle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Roadmap</p>
          <h2 className="section-title mt-4 max-w-3xl">Build from real seller needs, not imagined platform features.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.phase} className="panel p-7">
                <p className="text-sm font-black text-coral">{item.phase}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-mist">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
