import { Link } from 'react-router-dom';
import { FutureDemo } from '../components/FutureDemo';
import { PilotForm } from '../components/PilotForm';
import { PricingSection } from '../components/PricingSection';
import { StudioProofHero } from '../components/StudioProofHero';

const sellerProofPoints = [
  'Free sample before payment',
  'Starting ₹149 for 5 photos',
  'Jewellery, clothing, and furniture',
  'Catalog images and AI ads',
];

const quickSteps = [
  'WhatsApp your product photo',
  'I send a free edited sample',
  'Pay only if you like it',
];

export function Home() {
  return (
    <div className="brand-page theme-marz">
      <StudioProofHero />
      <PricingSection />

      <section className="brand-section">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="brand-kicker">Why sellers use SouqOne Studio</p>
            <h2 className="section-title mt-4">Better photos make products easier to sell.</h2>
            <p className="section-copy mt-5">
              The WhatsApp pitch is simple: send a product photo, get one edited sample free,
              and continue only if the result looks useful for your shop.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sellerProofPoints.map((principle, index) => (
              <article
                key={principle}
                className="brand-card reveal-card p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="text-sm font-black" style={{ color: 'var(--accent)' }}>0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black">{principle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section border-y" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,0.28)' }}>
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="brand-kicker">Get Started in 2 Minutes</p>
              <h2 className="section-title mt-4">No form-first friction. WhatsApp first.</h2>
            </div>
            <div className="grid gap-4">
              {quickSteps.map((step, index) => (
                <article
                  key={step}
                  className="brand-card reveal-card p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-xs font-black" style={{ color: 'var(--accent)' }}>Step {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          <article className="brand-card p-7 theme-souqone">
            <div className="brand-logo-card mb-6 h-24 rounded-3xl">
              <img src="/brand/souqone.png" alt="SouqOne logo" />
            </div>
            <p className="brand-kicker">SouqOne</p>
            <h2 className="mt-4 text-3xl font-black">The local commerce initiative.</h2>
            <p className="mt-4 leading-7" style={{ color: 'var(--muted)' }}>
              SouqOne focuses on helping local sellers grow with practical, trusted digital tools.
            </p>
            <Link to="/souqone" className="brand-button mt-6">
              View SouqOne
            </Link>
          </article>
          <article className="brand-card p-7 lg:col-span-2 theme-studio">
            <div className="brand-logo-card mb-6 h-28 rounded-3xl">
              <img src="/brand/souqone-studio.png" alt="SouqOne Studio logo" />
            </div>
            <p className="brand-kicker">SouqOne Studio</p>
            <h2 className="mt-4 text-3xl font-black">
              The first product: visual commerce and AI ad assets for WhatsApp sellers.
            </h2>
            <p className="mt-4 max-w-3xl leading-7" style={{ color: 'var(--muted)' }}>
              Studio begins as a hands-on WhatsApp service: I edit your photos personally,
              prepare catalog-ready visuals, and can create short AI ad assets when needed.
            </p>
            <Link to="/studio" className="brand-button mt-6">
              See Product Demo
            </Link>
          </article>
        </div>
      </section>

      <section className="brand-section theme-studio">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="brand-kicker">Proof first</p>
            <h2 className="section-title mt-4">Real before and after examples before the form.</h2>
            <p className="section-copy mt-5">
              
            </p>
          </div>
          <FutureDemo />
        </div>
      </section>

      <PilotForm />
    </div>
  );
}
