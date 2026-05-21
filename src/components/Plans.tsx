import { plans } from '../data/plans';
import { whatsappLinks } from '../data/contact';

export function Plans() {
  return (
    <section id="plans" className="bg-charcoal py-20 text-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Pilot plans</p>
          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Pilot packages for early sellers.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-300">
            Pilot pricing is designed for selected early sellers in Hyderabad. Final pricing may
            change after the pilot.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-6 ${
                plan.featured
                  ? 'border-gold bg-gold text-charcoal shadow-glow'
                  : 'border-white/10 bg-white/[0.06]'
              }`}
            >
              <p className={`text-xs font-bold uppercase tracking-[0.18em] ${plan.featured ? 'text-emerald' : 'text-gold'}`}>
                {plan.featured ? 'Most useful pilot' : 'Pilot option'}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-2xl font-extrabold">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${plan.featured ? 'bg-emerald' : 'bg-gold'}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-sm leading-7 ${plan.featured ? 'text-charcoal/80' : 'text-zinc-300'}`}>
                <strong>Best for:</strong> {plan.bestFor}
              </p>
              <a href={plan.featured ? whatsappLinks.plan : whatsappLinks.general} className={`mt-6 w-full ${plan.featured ? 'whatsapp-button' : 'gold-button'}`}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl rounded-lg border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-zinc-200">
          Payments are currently handled manually through UPI after pilot approval. We verify payment
          before starting work.
        </p>
      </div>
    </section>
  );
}
