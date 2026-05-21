import { trustPrinciples } from '../data/services';

export function TrustPrinciples() {
  return (
    <section id="trust" className="bg-cream py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Trust principles</p>
          <h2 className="section-title mt-3">SouqOne Studio is built for truthful commerce.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustPrinciples.map((principle, index) => (
            <article key={principle} className="panel p-6">
              <span className="text-sm font-bold text-gold">0{index + 1}</span>
              <p className="mt-4 text-base font-bold leading-7">{principle}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-700">
          Our goal is to help local businesses grow with clarity, professionalism, and barakah -
          not deception.
        </p>
      </div>
    </section>
  );
}
