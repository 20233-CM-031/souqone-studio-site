import { Link } from 'react-router-dom';
import { contactEmail, displayWhatsapp, founderLinkedIn, whatsappLinks } from '../data/contact';

export function Footer() {
  return (
    <footer className="theme-marz border-t bg-[#f6f1e8] py-12" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="brand-logo-card mb-5 h-20 w-36 rounded-3xl">
              <img src="/brand/marz.png" alt="MARZ logo" className="h-full w-full object-cover" />
            </div>
            <p className="eyebrow">MARZ Enterprises & Solutions</p>
            <h2 className="mt-3 max-w-md font-heading text-3xl font-black leading-tight">
              Calm, ethical AI systems for real businesses.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7" style={{ color: 'var(--muted)' }}>
              MARZ builds ethical AI and digital commerce systems. SouqOne is the first initiative
              SouqOne Studio is the first seller-facing pilot.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black">Explore</h3>
            <div className="mt-4 grid gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <Link to="/about" className="hover:text-[var(--accent)]">About MARZ</Link>
              <Link to="/souqone" className="hover:text-[var(--accent)]">SouqOne</Link>
              <Link to="/studio" className="hover:text-[var(--accent)]">SouqOne Studio</Link>
              <Link to="/principles" className="hover:text-[var(--accent)]">Principles</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black">Trust</h3>
            <div className="mt-4 grid gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <Link to="/privacy" className="hover:text-[var(--accent)]">Privacy</Link>
              <Link to="/terms" className="hover:text-[var(--accent)]">Terms</Link>
              <Link to="/ethics" className="hover:text-[var(--accent)]">Ethical Commerce</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <a href={whatsappLinks.general} className="hover:text-[var(--accent)]">
                WhatsApp: {displayWhatsapp}
              </a>
              <a href={`mailto:${contactEmail}`} className="hover:text-[var(--accent)]">
                {contactEmail}
              </a>
              {founderLinkedIn ? (
                <a href={founderLinkedIn} className="hover:text-[var(--accent)]">
                  Founder LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
          <span>Currently operating as a selected Hyderabad seller pilot.</span>
          <span>MARZ / SouqOne / SouqOne Studio</span>
        </div>
      </div>
    </footer>
  );
}
