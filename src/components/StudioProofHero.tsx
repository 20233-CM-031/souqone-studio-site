import { Link } from 'react-router-dom';
import { displayWhatsapp, whatsappLinks } from '../data/contact';
import { showcaseSamples } from '../data/showcase';

const moneyShot = showcaseSamples.find((sample) => sample.slug === 'earrings') ?? showcaseSamples[0];

export function StudioProofHero() {
  return (
    <section className="brand-hero theme-studio">
      <div className="brand-pattern absolute inset-0" />
      <div className="brand-orbit right-[7%] top-20 h-80 w-80" />
      <div className="section-shell relative grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <figure className="brand-card-strong order-1 overflow-hidden lg:order-2">
          <img
            src={moneyShot.src}
            alt={moneyShot.alt}
            width={moneyShot.width}
            height={moneyShot.height}
            className="w-full bg-white/45 object-contain"
          />
          <figcaption className="border-t px-5 py-4 text-center text-sm font-black sm:text-base" style={{ borderColor: 'var(--line)', color: 'var(--accent-2)' }}>
            Same product. Same phone. Different result.
          </figcaption>
        </figure>

        <div className="order-2 lg:order-1">
          <div className="brand-logo-card mb-6 h-28 w-full max-w-sm rounded-3xl">
            <img src="/brand/souqone-studio.png" alt="SouqOne Studio logo" />
          </div>
          <p className="brand-kicker">Hyderabad sellers</p>
          <h1 className="brand-title mt-4">
            Turn your phone photos into showroom catalogs.
          </h1>
          <p className="mt-6 text-2xl font-black leading-tight" style={{ color: 'var(--accent)' }}>
            Starting ₹149 for 5 professional images. Free sample before you pay.
          </p>
          <p className="section-copy mt-5">
            Serving jewellery, clothing, and furniture sellers in Hyderabad. WhatsApp your product photo,
            I edit your photos personally, and you pay only if you like the result.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLinks.sample} className="brand-button">
              Get Free Sample on WhatsApp
            </a>
            <Link to="/studio" className="brand-button-secondary">
              See More Results
            </Link>
          </div>
          <a href={whatsappLinks.sample} className="mt-5 inline-block text-lg font-black hover:text-[var(--accent)]">
            WhatsApp: {displayWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
