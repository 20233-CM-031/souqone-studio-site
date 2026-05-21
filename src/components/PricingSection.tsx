import { whatsappLinks } from '../data/contact';

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹149',
    detail: '5 photos, 1 angle',
  },
  {
    name: 'Small',
    price: '₹599',
    detail: '5 items, catalog layout, 2-3 AI ads',
  },
  {
    name: 'Medium',
    price: '₹999',
    detail: '8 items, multi-angle, 2-3 AI ads',
  },
  {
    name: 'Mega',
    price: '₹4,999',
    detail: 'Full shop digitization',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="brand-section border-y" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,0.26)' }}>
      <div className="section-shell">
        <div className="brand-card-strong overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-6 sm:p-8">
              <p className="brand-kicker">Pricing</p>
              <h2 className="section-title mt-4">Start small. See the result first.</h2>
              <p className="section-copy mt-5">
                Free sample before you pay. Catalog-only, basic enhancement, bulk work, and custom
                shop packages can be adjusted with reasonable pricing.
              </p>
              <a href={whatsappLinks.sample} className="brand-button mt-7">
                Get Free Sample on WhatsApp
              </a>
            </div>
            <div className="grid gap-3 p-4 sm:p-6">
              {pricingPlans.map((plan) => (
                <article key={plan.name} className="brand-card rounded-2xl p-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
                  <div>
                    <h3 className="text-xl font-black">{plan.name}: {plan.price}</h3>
                    <p className="mt-2 text-sm font-bold" style={{ color: 'var(--muted)' }}>{plan.detail}</p>
                  </div>
                </article>
              ))}
              <div className="rounded-2xl border p-5" style={{ borderColor: 'var(--line)', background: 'var(--accent-soft)' }}>
                <p className="text-sm font-black">Special AI ads available.</p>
                <p className="mt-2 text-sm leading-6" style={{ color: 'var(--muted)' }}>
                  Ask on WhatsApp for short ad videos, status creatives, or product promo assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
