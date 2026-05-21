import { Link, NavLink, useLocation } from 'react-router-dom';
import { displayWhatsapp, whatsappLinks } from '../data/contact';

const navItems = [
  ['Home', '/'],
  ['About MARZ', '/about'],
  ['SouqOne', '/souqone'],
  ['Studio', '/studio'],
  ['Principles', '/principles'],
  ['Contact', '/contact'],
];

const themeForPath = (pathname: string) => {
  if (pathname.startsWith('/souqone')) return 'theme-souqone';
  if (pathname.startsWith('/studio')) return 'theme-studio';
  if (pathname.startsWith('/principles') || pathname.startsWith('/contact')) return 'theme-principles';
  return 'theme-marz';
};

export function Header() {
  const { pathname } = useLocation();
  const themeClass = themeForPath(pathname);

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/82 backdrop-blur-2xl ${themeClass}`} style={{ borderColor: 'var(--line)' }}>
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="SouqOne Studio home">
          <span className="brand-logo-card flex h-12 w-16 items-center justify-center rounded-2xl">
            <img src="/brand/souqone-studio.png" alt="SouqOne Studio logo" className="h-full w-full object-cover" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-black" style={{ color: 'var(--ink)' }}>
              SouqOne Studio
            </span>
            <span className="block text-xs font-bold" style={{ color: 'var(--muted)' }}>
              Catalog photos + AI ads
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-2xl border bg-white/58 p-1 text-sm font-bold lg:flex" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-xl px-3.5 py-2 transition ${
                  isActive ? 'bg-[var(--accent)] text-[var(--button-text)]' : 'hover:bg-[var(--accent-soft)]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={whatsappLinks.sample} className="text-sm font-black hover:text-[var(--accent)]">
            {displayWhatsapp}
          </a>
          <a href={whatsappLinks.sample} className="brand-button">
            Get Free Sample
          </a>
        </div>
      </div>
      <nav className="section-shell flex gap-3 overflow-x-auto pb-4 text-sm font-bold lg:hidden" style={{ color: 'var(--muted)' }}>
        {navItems.map(([label, href]) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `shrink-0 rounded-xl border px-3 py-2 transition ${
                isActive ? 'bg-[var(--accent)] text-[var(--button-text)]' : 'bg-white/50'
              }`
            }
            style={{ borderColor: 'var(--line)' }}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
