import { Link, NavLink } from 'react-router-dom';
import { whatsappLinks } from '../data/contact';

const navItems = [
  ['Home', '/'],
  ['About MARZ', '/about'],
  ['SouqOne', '/souqone'],
  ['Studio', '/studio'],
  ['Principles', '/principles'],
  ['Contact', '/contact'],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/78 text-white backdrop-blur-2xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3" aria-label="MARZ home">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-cyan/40 bg-cyan/10 font-heading text-lg font-black text-cyan shadow-glow">
            <span className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-emerald/20" />
            <span className="relative">M</span>
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-black">MARZ</span>
            <span className="block text-xs font-bold text-mist">Ethical AI commerce systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.045] p-1 text-sm font-bold text-mist lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-xl px-3.5 py-2 transition ${
                  isActive ? 'bg-white text-charcoal' : 'hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a href={whatsappLinks.sample} className="whatsapp-button hidden sm:inline-flex">
          Send Sample Photos
        </a>
      </div>
      <nav className="section-shell flex gap-3 overflow-x-auto pb-4 text-sm font-bold text-mist lg:hidden">
        {navItems.map(([label, href]) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `shrink-0 rounded-xl border px-3 py-2 transition ${
                isActive
                  ? 'border-cyan bg-cyan/15 text-cyan'
                  : 'border-white/10 bg-white/[0.04] hover:text-white'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
