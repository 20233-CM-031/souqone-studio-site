import { features, improveItems, protectItems } from '../data/services';

function ListColumn({ title, items, tone }: { title: string; items: string[]; tone: 'gold' | 'emerald' }) {
  return (
    <div className="panel p-6">
      <h3 className={`text-xl font-bold ${tone === 'gold' ? 'text-gold' : 'text-emerald'}`}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-semibold text-zinc-700">
            <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${tone === 'gold' ? 'bg-gold' : 'bg-emerald'}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Solution() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">The SouqOne answer</p>
              <h2 className="section-title mt-3">A practical visual-commerce service for local sellers.</h2>
              <p className="section-copy mt-5">
                SouqOne Studio combines AI-assisted image enhancement, catalog design, and manual
                quality review to help sellers create professional product visuals for WhatsApp,
                Instagram, and customer sharing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="panel p-5">
                  <h3 className="text-base font-bold">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white">
        <div className="section-shell">
          <p className="eyebrow">Product truth</p>
          <h2 className="mt-3 font-heading text-4xl font-bold">Enhancement, not deception.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ListColumn title="We improve" items={improveItems} tone="emerald" />
            <ListColumn title="We do not falsely change" items={protectItems} tone="gold" />
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200">
            The final image should look like the same product photographed more professionally -
            not a different product.
          </p>
        </div>
      </section>
    </>
  );
}
