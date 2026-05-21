import { PageHero } from '../components/PageHero';

const principles = [
  {
    title: 'Truthful commerce',
    body: 'Product presentation should improve clarity and desirability without changing what the customer is actually buying.',
  },
  {
    title: 'Halal business values',
    body: 'Growth should come through honest communication, fair service, and trust that can survive after the sale.',
  },
  {
    title: 'AI transparency',
    body: 'AI can assist visual cleanup and layout, but sellers should understand that final assets are enhanced presentation, not new products.',
  },
  {
    title: 'Seller responsibility',
    body: 'Sellers must review final images and descriptions before sharing with customers, especially for material, size, price, and condition.',
  },
];

export function Principles() {
  return (
    <div className="brand-page theme-principles">
      <PageHero
        eyebrow="Principles"
        title="Trust is the product underneath the product."
        copy="MARZ, SouqOne, and SouqOne Studio separate themselves by treating truthful presentation as a core system requirement, not a marketing claim."
        logoSrc="/brand/marz.png"
        logoAlt="MARZ logo"
      />
      <section className="brand-section">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {principles.map((principle, index) => (
            <article key={principle.title} className="brand-card p-7">
              <p className="text-sm font-black" style={{ color: 'var(--accent)' }}>0{index + 1}</p>
              <h2 className="mt-4 text-3xl font-black">{principle.title}</h2>
              <p className="mt-4 leading-8" style={{ color: 'var(--muted)' }}>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
