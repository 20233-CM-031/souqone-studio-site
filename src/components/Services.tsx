import { services, sellerCategories } from '../data/services';

export function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title mt-3">What SouqOne Studio creates for sellers.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-700">
            Built first for catalog sellers who need consistent visual assets without a full photoshoot
            cycle every time new stock arrives.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="panel p-6">
              <span className="text-sm font-bold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700">{service.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-charcoal p-6 text-white lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Target sellers</p>
              <h3 className="mt-3 font-heading text-3xl font-bold">Built first for Hyderabad local markets.</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                We are starting narrow so the service can become strong before expanding to more categories.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sellerCategories.map((category) => (
                <div key={category} className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
