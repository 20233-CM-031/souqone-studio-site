import { contactEmail } from '../data/contact';
import { LegalPage } from './LegalPage';

export function Terms() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="SouqOne Studio provides AI-assisted and manually reviewed product image enhancement, product cards, and catalog design services for local sellers. During the pilot, the service is managed manually through WhatsApp and may not operate like a fully automated software platform."
      sections={[
        {
          title: 'Service description',
          body: 'The service helps sellers prepare clean product images, showroom-style visuals, WhatsApp product cards, PDF mini-catalogs, and related promotional assets.',
        },
        {
          title: 'Pilot-stage nature',
          body: 'SouqOne Studio is currently an early managed pilot. Service scope, pricing, timelines, and delivery format may change as we learn from real sellers.',
        },
        {
          title: 'Seller responsibilities',
          body: 'Sellers are responsible for ensuring that all product details, prices, materials, claims, and final images shared with customers are truthful and accurate.',
        },
        {
          title: 'Product truth and accuracy',
          body: 'We improve presentation, lighting, background, framing, and catalog layout. We do not support false changes to material, size, condition, design, or product identity.',
        },
        {
          title: 'Payment and delivery',
          body: 'Payments are handled manually through UPI after pilot approval and plan confirmation. Delivery is handled through WhatsApp or Drive link.',
        },
        {
          title: 'Revisions and refunds',
          body: 'If an output is technically broken or clearly inaccurate due to our process, we may provide correction or replacement. Refunds, if any, are handled case by case during the pilot.',
        },
        {
          title: 'Prohibited use',
          body: 'Do not use the service to mislead customers, impersonate brands, hide serious product defects, or make false material, quality, price, or availability claims.',
        },
        {
          title: 'Limitation of liability',
          body: 'SouqOne Studio does not guarantee sales, revenue growth, customer conversion, or marketplace acceptance.',
        },
        {
          title: 'Changes to service',
          body: 'We may update service packages, workflow, pricing, or policies as the pilot develops.',
        },
        {
          title: 'Contact',
          body: `For terms questions, contact ${contactEmail}.`,
        },
      ]}
    />
  );
}
