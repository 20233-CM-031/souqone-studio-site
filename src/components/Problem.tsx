import { problemCards } from '../data/services';

export function Problem() {
  return (
    <section id="story" className="bg-cream py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">The problem</p>
          <h2 className="section-title mt-3">Good products often lose value because of weak photos.</h2>
          <p className="section-copy mt-5">
            Many local sellers have beautiful products, but their mobile photos look dull, dark,
            cluttered, or unprofessional. Professional photoshoots are costly to repeat, and catalog
            design takes time. SouqOne Studio starts with this simple problem: help sellers present
            better online without misrepresenting the product.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {problemCards.map((item, index) => (
            <article key={item} className="panel p-5">
              <span className="text-sm font-bold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-bold leading-6">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
