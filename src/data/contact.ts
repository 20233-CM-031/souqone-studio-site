export const whatsappNumber = '919391114126';
export const displayWhatsapp = '+91 9391114126';
export const contactEmail = 'marzsolution37@gmail.com';
export const founderLinkedIn = '';

const encode = (message: string) => encodeURIComponent(message);

export const whatsappMessages = {
  general:
    'Assalamu Alaikum, I want to join the SouqOne Studio pilot. I sell [product type] in Hyderabad. Please guide me.',
  sample:
    'Assalamu Alaikum, I want to send sample product photos for SouqOne Studio showroom/catalog enhancement.',
  plan:
    'Assalamu Alaikum, I am interested in the Shop Seller Pilot plan for SouqOne Studio. Please share the next steps.',
};

export const whatsappLinks = {
  general: `https://wa.me/${whatsappNumber}?text=${encode(whatsappMessages.general)}`,
  sample: `https://wa.me/${whatsappNumber}?text=${encode(whatsappMessages.sample)}`,
  plan: `https://wa.me/${whatsappNumber}?text=${encode(whatsappMessages.plan)}`,
};
