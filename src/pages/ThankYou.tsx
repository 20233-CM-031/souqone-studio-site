import { Link } from 'react-router-dom';
import { whatsappLinks } from '../data/contact';

export function ThankYou() {
  return (
    <div className="brand-page theme-studio">
      <section className="brand-section">
        <div className="section-shell">
        <div className="brand-card mx-auto max-w-3xl p-8 text-center">
          <p className="eyebrow">Request received</p>
          <h1 className="mt-3 font-heading text-4xl font-black">Thank you.</h1>
          <p className="mt-5 text-lg leading-8" style={{ color: 'var(--muted)' }}>
            Your request has been received. Please also message us on WhatsApp with your shop
            name and one product photo so I can send the free sample.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLinks.sample} className="brand-button">
              Get Free Sample on WhatsApp
            </a>
            <Link to="/" className="brand-button-secondary">
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
