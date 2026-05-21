import { PageHero } from '../components/PageHero';
import { PilotForm } from '../components/PilotForm';
import { contactEmail, displayWhatsapp, founderLinkedIn, whatsappLinks } from '../data/contact';

export function Contact() {
  return (
    <div className="brand-page theme-principles">
      <PageHero
        eyebrow="Contact"
        title="Start the pilot conversation."
        copy="For the fastest response, message SouqOne Studio on WhatsApp with your shop name, product category, and sample product photos."
        logoSrc="/brand/souqone-studio.png"
        logoAlt="SouqOne Studio logo"
      >
        <a href={whatsappLinks.sample} className="brand-button">
          WhatsApp: {displayWhatsapp}
        </a>
        <a href={`mailto:${contactEmail}`} className="brand-button-secondary">
          Email MARZ
        </a>
      </PageHero>

      <section className="brand-section">
        <div className={`section-shell grid gap-5 ${founderLinkedIn ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          <article className="brand-card p-6">
            <p className="brand-kicker">WhatsApp</p>
            <a href={whatsappLinks.general} className="mt-4 block text-2xl font-black hover:text-[var(--accent)]">
              {displayWhatsapp}
            </a>
          </article>
          <article className="brand-card p-6">
            <p className="brand-kicker">Email</p>
            <a href={`mailto:${contactEmail}`} className="mt-4 block text-2xl font-black hover:text-[var(--accent)]">
              {contactEmail}
            </a>
          </article>
          {founderLinkedIn ? (
            <article className="brand-card p-6">
              <p className="brand-kicker">Founder LinkedIn</p>
              <a href={founderLinkedIn} className="mt-4 block text-2xl font-black hover:text-[var(--accent)]">
                View profile
              </a>
            </article>
          ) : null}
        </div>
      </section>

      <PilotForm />
    </div>
  );
}
