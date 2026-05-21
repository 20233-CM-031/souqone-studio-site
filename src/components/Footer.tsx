import { Link } from 'react-router-dom';
import { contactEmail, displayWhatsapp, founderLinkedIn, whatsappLinks } from '../data/contact';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="eyebrow">MARZ Enterprises & Solutions</p>
            <h2 className="mt-3 max-w-md font-heading text-3xl font-black leading-tight">
              Serious AI systems for truthful local commerce.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-mist">
              MARZ builds ethical AI and digital commerce systems. SouqOne is the first initiative;
              SouqOne Studio is the first seller-facing pilot.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Explore</h3>
            <div className="mt-4 grid gap-2 text-sm text-mist">
              <Link to="/about" className="hover:text-cyan">About MARZ</Link>
              <Link to="/souqone" className="hover:text-cyan">SouqOne</Link>
              <Link to="/studio" className="hover:text-cyan">SouqOne Studio</Link>
              <Link to="/principles" className="hover:text-cyan">Principles</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Trust</h3>
            <div className="mt-4 grid gap-2 text-sm text-mist">
              <Link to="/privacy" className="hover:text-cyan">Privacy</Link>
              <Link to="/terms" className="hover:text-cyan">Terms</Link>
              <Link to="/ethics" className="hover:text-cyan">Ethical Commerce</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm text-mist">
              <a href={whatsappLinks.general} className="hover:text-cyan">
                WhatsApp: {displayWhatsapp}
              </a>
              <a href={`mailto:${contactEmail}`} className="hover:text-cyan">
                {contactEmail}
              </a>
              {founderLinkedIn ? (
                <a href={founderLinkedIn} className="hover:text-cyan">
                  Founder LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>Currently operating as a selected Hyderabad seller pilot.</span>
          <span>MARZ / SouqOne / SouqOne Studio</span>
        </div>
      </div>
    </footer>
  );
}
