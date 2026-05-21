import { Link } from 'react-router-dom';
import { FutureDemo } from '../components/FutureDemo';
import { PilotForm } from '../components/PilotForm';
import { marzPrinciples, openingCopy, storyChapters } from '../data/brand';
import { whatsappLinks } from '../data/contact';

export function Home() {
  return (
    <div className="brand-page theme-marz">
      <section className="brand-hero min-h-[calc(100vh-5rem)]">
        <div className="brand-pattern absolute inset-0" />
        <div className="brand-orbit right-[12%] top-20 h-72 w-72" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.94fr_0.86fr] lg:items-center">
          <div className="reveal-card">
            <p className="brand-kicker">MARZ Enterprises & Solutions</p>
            <h1 className="brand-title mt-5">
              Ethical AI commerce systems, built with calm precision.
            </h1>
            <p className="brand-copy mt-6">{openingCopy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/studio" className="brand-button">
                Explore SouqOne Studio
              </Link>
              <a href={whatsappLinks.sample} className="brand-button-secondary">
                Send Sample Photos
              </a>
            </div>
          </div>

          <div className="brand-logo-card floating-panel min-h-[420px]">
            <img src="/brand/marz.png" alt="MARZ logo" className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="brand-kicker">Why MARZ exists</p>
            <h2 className="section-title mt-4">AI should make business stronger, not less truthful.</h2>
            <p className="section-copy mt-5">
              MARZ is built for the real operating layer: small businesses, repeatable workflows,
              honest presentation, and systems that earn trust before they scale.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {marzPrinciples.map((principle, index) => (
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
              <p className="brand-kicker">Story framework</p>
              <h2 className="section-title mt-4">The path from seller pain to ethical AI.</h2>
            </div>
            <div className="grid gap-4">
              {storyChapters.map((item, index) => (
                <article
                  key={item.title}
                  className="brand-card reveal-card p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-xs font-black" style={{ color: 'var(--accent)' }}>{item.chapter}</p>
                  <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7" style={{ color: 'var(--muted)' }}>{item.body}</p>
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
              Studio begins as a managed pilot: product image enhancement, WhatsApp cards,
              mini-catalog assets, and AI ad creatives with manual review for truth and quality.
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
            <p className="brand-kicker">First pilot surface</p>
            <h2 className="section-title mt-4">A calmer product demo with proof space ready.</h2>
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
