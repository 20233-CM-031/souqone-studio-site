import { whatsappLinks } from '../data/contact';

const badges = ['WhatsApp-first service', 'Jewelry & local sellers', 'Truthful enhancement', 'Pilot in Hyderabad'];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 opacity-30">
        <img
          src="/samples/catalog-preview.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/92 to-charcoal" />

      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] content-center gap-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl">
          <p className="eyebrow">WhatsApp-first pilot for Hyderabad sellers</p>
          <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Showroom-ready product images and catalogs for Hyderabad sellers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200 sm:text-xl">
            SouqOne Studio is a MARZ initiative helping local jewelry, bangles, pearls, boutique,
            and small-business sellers turn ordinary mobile photos into professional WhatsApp-ready
            catalog assets while preserving the real product shape, color, and details.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLinks.sample} className="whatsapp-button">
              Send Sample Photos on WhatsApp
            </a>
            <a href="#plans" className="gold-button">
              View Pilot Plans
            </a>
          </div>

          <p className="mt-5 text-sm font-semibold text-gold">
            Currently onboarding selected Hyderabad sellers for pilot service.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="dark-panel overflow-hidden">
            <div className="grid md:grid-cols-2">
              <figure className="border-b border-white/10 md:border-b-0 md:border-r">
                <img src="/samples/before-after-1.jpg" alt="Sample representation before enhancement" className="h-64 w-full object-cover" />
                <figcaption className="bg-charcoal/80 px-4 py-3 text-sm font-semibold text-zinc-200">
                  Before - sample representation
                </figcaption>
              </figure>
              <figure>
                <img src="/samples/before-after-2.jpg" alt="Sample representation after showroom enhancement" className="h-64 w-full object-cover" />
                <figcaption className="bg-emerald/90 px-4 py-3 text-sm font-semibold text-white">
                  After - showroom-ready direction
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="dark-panel p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Pilot badges</p>
            <div className="mt-4 grid gap-3">
              {badges.map((badge) => (
                <div key={badge} className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-zinc-100">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
