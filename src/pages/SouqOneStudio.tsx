import { AdsVideoShowcase } from '../components/AdsVideoShowcase';
import { FutureDemo } from '../components/FutureDemo';
import { PageHero } from '../components/PageHero';
import { PilotForm } from '../components/PilotForm';
import { ShowcaseGallery } from '../components/ShowcaseGallery';
import { studioFeatures, studioWorkflow } from '../data/brand';
import { whatsappLinks } from '../data/contact';

export function SouqOneStudio() {
  return (
    <div className="brand-page theme-studio">
      <PageHero
        eyebrow="SouqOne Studio"
        title="Premium catalog assets and AI ads without losing product truth."
        copy="SouqOne Studio takes its visual tone from the warm studio logo: premium, seller-friendly, and practical. It helps local sellers turn ordinary photos into showroom-ready catalog assets and AI ad creatives while preserving identity."
        logoSrc="/brand/souqone-studio.png"
        logoAlt="SouqOne Studio logo"
      >
        <a href={whatsappLinks.sample} className="brand-button">
          Send Sample Photos
        </a>
      </PageHero>

      <section className="brand-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FutureDemo />
          <div>
            <p className="brand-kicker">Product demo</p>
            <h2 className="section-title mt-4">Cleaner visuals, sharper catalogs, same product identity.</h2>
            <p className="section-copy mt-5">
              The proof area now uses your real before and after effect images. The surrounding
              system keeps the SouqOne Studio logo palette: warm, premium, practical, and focused
              on seller conversion.
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
          <h2 className="section-title mt-4 max-w-3xl">WhatsApp-first, review-backed, pilot-ready.</h2>
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
