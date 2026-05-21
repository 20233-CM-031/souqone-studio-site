import { contactEmail, displayWhatsapp } from '../data/contact';
import { LegalPage } from './LegalPage';

export function Privacy() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="SouqOne Studio is an early pilot service under SouqOne, a MARZ Enterprises & Solutions initiative. During the pilot, we collect information such as name, shop name, WhatsApp number, locality, business category, product requirements, and product images shared voluntarily through WhatsApp or forms."
      sections={[
        {
          title: 'Who we are',
          body: 'SouqOne Studio operates under SouqOne, a local commerce initiative by MARZ Enterprises & Solutions for Hyderabad sellers.',
        },
        {
          title: 'What data we collect',
          body: 'We may collect name, shop name, WhatsApp number, locality, business category, plan interest, service requirements, and product images voluntarily sent through WhatsApp or pilot forms.',
        },
        {
          title: 'Why we collect it',
          body: 'We use this information only to provide image enhancement, catalog design, customer support, pilot communication, and service improvement.',
        },
        {
          title: 'How product images are used',
          body: 'Product images are used to prepare enhanced visuals, WhatsApp product cards, catalog previews, and related pilot deliverables requested by the seller.',
        },
        {
          title: 'Third-party tools and AI processing',
          body: 'Product images may be processed using third-party AI or design tools. We do not sell seller data or product images.',
        },
        {
          title: 'Payment handling through UPI during pilot',
          body: 'Pilot payments are handled manually through UPI after plan confirmation. Do not submit payment information through this website.',
        },
        {
          title: 'Data retention',
          body: 'Pilot data and product images may be retained while the service is active so we can deliver revisions, support, and catalog updates.',
        },
        {
          title: 'User deletion requests',
          body: `Sellers may request deletion of submitted product images and business information by contacting us on WhatsApp at ${displayWhatsapp} or email at ${contactEmail}.`,
        },
        {
          title: 'Legal review note',
          body: 'This is a starter privacy notice for pilot operations and should be legally reviewed before large-scale public launch.',
        },
      ]}
    />
  );
}
