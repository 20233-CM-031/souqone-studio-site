import { PageHero } from '../components/PageHero';
import { PilotForm } from '../components/PilotForm';
import { contactEmail, displayWhatsapp, founderLinkedIn, whatsappLinks } from '../data/contact';

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the pilot conversation."
        copy="For the fastest response, message SouqOne Studio on WhatsApp with your shop name, product category, and sample product photos."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLinks.sample} className="whatsapp-button">
            WhatsApp: {displayWhatsapp}
          </a>
          <a href={`mailto:${contactEmail}`} className="outline-button">
            Email MARZ
          </a>
        </div>
      </PageHero>

      <section className="py-20">
        <div className={`section-shell grid gap-5 ${founderLinkedIn ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          <article className="panel p-6">
            <p className="eyebrow">WhatsApp</p>
            <a href={whatsappLinks.general} className="mt-4 block text-2xl font-black text-white hover:text-cyan">
              {displayWhatsapp}
            </a>
          </article>
          <article className="panel p-6">
            <p className="eyebrow">Email</p>
            <a href={`mailto:${contactEmail}`} className="mt-4 block text-2xl font-black text-white hover:text-cyan">
              {contactEmail}
            </a>
          </article>
          {founderLinkedIn ? (
            <article className="panel p-6">
              <p className="eyebrow">Founder LinkedIn</p>
              <a href={founderLinkedIn} className="mt-4 block text-2xl font-black text-white hover:text-cyan">
                View profile
              </a>
            </article>
          ) : null}
        </div>
      </section>

      <PilotForm />
    </>
  );
}
