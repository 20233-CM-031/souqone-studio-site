import { FutureDemo } from '../components/FutureDemo';
import { PageHero } from '../components/PageHero';
import { PilotForm } from '../components/PilotForm';
import { studioFeatures, studioWorkflow } from '../data/brand';
import { whatsappLinks } from '../data/contact';

export function SouqOneStudio() {
  return (
    <>
      <PageHero
        eyebrow="SouqOne Studio"
        title="Showroom-ready catalog assets without losing product truth."
        copy="SouqOne Studio is the first SouqOne product: a practical, seller-friendly visual commerce pilot for local sellers who use WhatsApp, Instagram, and catalogs to sell."
      >
        <a href={whatsappLinks.sample} className="whatsapp-button">
          Send Sample Photos
        </a>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FutureDemo />
          <div>
            <p className="eyebrow">Product demo</p>
            <h2 className="section-title mt-4">Cleaner visuals, sharper catalogs, same product identity.</h2>
            <p className="section-copy mt-5">
              The uploaded sample images and logos will sit here as the primary proof of work:
              before, after, MARZ, SouqOne, and SouqOne Studio.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Features</p>
          <h2 className="section-title mt-4 max-w-3xl">Built for sellers who need repeatable visual assets.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {studioFeatures.map((feature, index) => (
              <article key={feature} className="panel p-6">
                <p className="text-sm font-black text-cyan">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-black text-white">{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Workflow</p>
          <h2 className="section-title mt-4 max-w-3xl">WhatsApp-first, review-backed, pilot-ready.</h2>
          <div className="mt-10 grid gap-4">
            {studioWorkflow.map((step, index) => (
              <article key={step} className="glass-line rounded-2xl p-5 sm:flex sm:items-center sm:gap-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan text-sm font-black text-charcoal">
                  {index + 1}
                </span>
                <p className="mt-4 text-lg font-black text-white sm:mt-0">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PilotForm />
    </>
  );
}
