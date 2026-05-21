import { whatsappLinks } from '../data/contact';

export function StickyWhatsAppButton() {
  return (
    <a
      href={whatsappLinks.sample}
      className="whatsapp-sticky"
      aria-label="Chat on WhatsApp for a free SouqOne Studio sample"
    >
      <span aria-hidden="true">💬</span>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
