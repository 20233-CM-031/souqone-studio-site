import { Link, useLocation } from 'react-router-dom';
import { whatsappLinks } from '../data/contact';

const navItems = [
  ['Home', '/#home'],
  ['Story', '/#story'],
  ['Services', '/#services'],
  ['How It Works', '/#workflow'],
  ['Pilot Plans', '/#plans'],
  ['Trust Principles', '/#trust'],
  ['Apply', '/#apply'],
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 text-white backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-3" aria-label="SouqOne Studio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 font-heading text-xl font-bold text-gold">
            S
          </span>
          <span>
            <span className="block font-heading text-lg font-bold leading-5">SouqOne Studio</span>
            <span className="block text-xs font-semibold text-mist">A MARZ initiative</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-zinc-200 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition hover:text-gold"
              aria-current={location.hash === href.replace('/', '') ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
          <a href={whatsappLinks.general} className="transition hover:text-gold">
            WhatsApp
          </a>
        </nav>

        <a href={whatsappLinks.sample} className="whatsapp-button px-4 py-2.5">
          <span className="sm:hidden">Send Photos</span>
          <span className="hidden sm:inline">Send Sample Photos</span>
        </a>
      </div>
      <div className="border-t border-white/10 lg:hidden">
        <nav className="section-shell flex gap-5 overflow-x-auto py-3 text-sm font-semibold text-zinc-200">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 transition hover:text-gold">
              {label}
            </a>
          ))}
          <a href={whatsappLinks.general} className="shrink-0 transition hover:text-gold">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
