import { whatsappLinks } from '../data/contact';

export function FinalCTA() {
  return (
    <section className="bg-emerald py-20 text-white">
      <div className="section-shell text-center">
        <p className="eyebrow text-gold">Final step</p>
        <h2 className="mx-auto mt-3 max-w-4xl font-heading text-4xl font-bold sm:text-5xl">
          Want to see how your product photos can look?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
          Send a few sample product photos on WhatsApp and we will guide you through the pilot
          process.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={whatsappLinks.sample} className="gold-button">
            Send Sample Photos on WhatsApp
          </a>
          <a href="#apply" className="inline-flex items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-emerald">
            Apply for Pilot
          </a>
        </div>
      </div>
    </section>
  );
}
