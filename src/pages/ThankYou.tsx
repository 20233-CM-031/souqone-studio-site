import { Link } from 'react-router-dom';
import { whatsappLinks } from '../data/contact';

export function ThankYou() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="panel mx-auto max-w-3xl p-8 text-center">
          <p className="eyebrow">Request received</p>
          <h1 className="mt-3 font-heading text-4xl font-black text-white">Thank you.</h1>
          <p className="mt-5 text-lg leading-8 text-mist">
            Your pilot request has been received. Please also message us on WhatsApp with your shop
            name and sample product photos.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLinks.sample} className="whatsapp-button">
              Message on WhatsApp
            </a>
            <Link to="/" className="outline-button">
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
