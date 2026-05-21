import { AdsVideoShowcase } from '../components/AdsVideoShowcase';
import { FutureDemo } from '../components/FutureDemo';
import { PilotForm } from '../components/PilotForm';
import { PricingSection } from '../components/PricingSection';
import { ShowcaseGallery } from '../components/ShowcaseGallery';
import { StudioProofHero } from '../components/StudioProofHero';
import { studioFeatures, studioWorkflow } from '../data/brand';

export function SouqOneStudio() {
  return (
    <div className="brand-page theme-studio">
      <StudioProofHero />
      <PricingSection />

      <section className="brand-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FutureDemo />
          <div>
            <p className="brand-kicker">Product demo</p>
            <h2 className="section-title mt-4">Original phone photo vs SouqOne Studio output.</h2>
            <p className="section-copy mt-5">
              These are direct before and after examples for jewellery, clothing, and furniture.
              The goal is simple: make the product easier to sell without confusing the customer.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section border-y" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,0.24)' }}>
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="brand-kicker">Sample outputs</p>
            <h2 className="section-title mt-4">Real transformations sellers can understand fast.</h2>
            <p className="section-copy mt-5">
              The gallery shows the core promise clearly: ordinary seller photos become
              showroom-ready assets while the product identity remains recognizable.
            </p>
          </div>
          <div className="mt-10">
            <ShowcaseGallery />
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="section-shell">
          <AdsVideoShowcase />
        </div>
      </section>

      <section className="brand-section border-y" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,0.18)' }}>
        <div className="section-shell">
          <p className="brand-kicker">Features</p>
          <h2 className="section-title mt-4 max-w-3xl">Built for sellers who need repeatable visual assets.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {studioFeatures.map((feature, index) => (
              <article key={feature} className="brand-card p-6">
                <p className="text-sm font-black" style={{ color: 'var(--accent)' }}>0{index + 1}</p>
                <h3 className="mt-4 text-xl font-black">{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="section-shell">
          <p className="brand-kicker">Workflow</p>
          <h2 className="section-title mt-4 max-w-3xl">Get Started in 2 Minutes.</h2>
          <div className="mt-10 grid gap-4">
            {studioWorkflow.map((step, index) => (
              <article key={step} className="brand-card p-5 sm:flex sm:items-center sm:gap-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black" style={{ background: 'var(--accent)', color: 'var(--button-text)' }}>
                  {index + 1}
                </span>
                <p className="mt-4 text-lg font-black sm:mt-0">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PilotForm />
    </div>
  );
}
