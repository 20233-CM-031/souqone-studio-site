import { Link } from 'react-router-dom';
import { contactEmail, displayWhatsapp, whatsappLinks } from '../data/contact';

export function Footer() {
  return (
    <footer className="bg-charcoal py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold">MARZ Enterprises & Solutions</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-300">
              SouqOne Studio is currently operating as an early pilot service for selected local
              sellers in Hyderabad, Telangana.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p>SouqOne Studio</p>
              <p>Hyderabad, Telangana</p>
              <a href={whatsappLinks.general} className="block hover:text-gold">
                WhatsApp: {displayWhatsapp}
              </a>
              <a href={`mailto:${contactEmail}`} className="block hover:text-gold">
                {contactEmail}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <Link to="/privacy" className="hover:text-gold">Privacy</Link>
              <Link to="/terms" className="hover:text-gold">Terms</Link>
              <Link to="/ethics" className="hover:text-gold">Ethical Commerce Statement</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-400">
          Currently operating as an early pilot service for selected local sellers.
        </div>
      </div>
    </footer>
  );
}
