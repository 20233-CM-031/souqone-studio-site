import { Link } from 'react-router-dom';
import { FutureDemo } from '../components/FutureDemo';
import { PilotForm } from '../components/PilotForm';
import { marzPrinciples, openingCopy, storyChapters } from '../data/brand';
import { whatsappLinks } from '../data/contact';

export function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-white/10 py-16 sm:py-20">
        <div className="future-grid absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full border border-cyan/20 opacity-60 [animation:pulse-ring_6s_ease-in-out_infinite]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="reveal-card">
            <p className="eyebrow">MARZ Enterprises & Solutions</p>
            <h1 className="mt-5 font-heading text-5xl font-black leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              Ethical AI commerce systems, starting with local sellers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">{openingCopy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/studio" className="gold-button">
                Explore SouqOne Studio
              </Link>
              <a href={whatsappLinks.sample} className="whatsapp-button">
                Send Sample Photos
              </a>
            </div>
          </div>

          <div className="floating-panel">
            <FutureDemo />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Why MARZ exists</p>
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
                className="panel reveal-card p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="text-sm font-black text-cyan">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black text-white">{principle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Story framework</p>
              <h2 className="section-title mt-4">The path from seller pain to ethical AI.</h2>
            </div>
            <div className="grid gap-4">
              {storyChapters.map((item, index) => (
                <article
                  key={item.title}
                  className="glass-line reveal-card rounded-2xl p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-xs font-black text-coral">{item.chapter}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-mist">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          <article className="panel p-7">
            <p className="eyebrow">SouqOne</p>
            <h2 className="mt-4 text-3xl font-black text-white">The local commerce initiative.</h2>
            <p className="mt-4 leading-7 text-mist">
              SouqOne focuses on helping local sellers grow with practical, trusted digital tools.
            </p>
            <Link to="/souqone" className="outline-button mt-6">
              View SouqOne
            </Link>
          </article>
          <article className="panel p-7 lg:col-span-2">
            <p className="eyebrow">SouqOne Studio</p>
            <h2 className="mt-4 text-3xl font-black text-white">
              The first product: visual commerce assets for WhatsApp sellers.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-mist">
              Studio begins as a managed pilot: product image enhancement, WhatsApp cards, and
              mini-catalog assets with manual review for truth and quality.
            </p>
            <Link to="/studio" className="gold-button mt-6">
              See Product Demo
            </Link>
          </article>
        </div>
      </section>

      <PilotForm />
    </>
  );
}
