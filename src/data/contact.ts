export const whatsappNumber = '919391114126';
export const displayWhatsapp = '+91 9391114126';
export const contactEmail = 'marzsolution37@gmail.com';
export const founderLinkedIn = '';

const encode = (message: string) => encodeURIComponent(message);

export const whatsappMessages = {
  general:
    'Hi SouqOne, I want a free sample for my shop. I sell [product type] in Hyderabad. Please guide me.',
  sample:
    'Hi SouqOne, I want a free sample for my shop.',
  plan:
    'Hi SouqOne, I want to know the best SouqOne Studio package for my shop.',
};

export const whatsappLinks = {
  general: `https://wa.me/${whatsappNumber}?text=${encode(whatsappMessages.general)}`,
  sample: `https://wa.me/${whatsappNumber}?text=${encode(whatsappMessages.sample)}`,
  plan: `https://wa.me/${whatsappNumber}?text=${encode(whatsappMessages.plan)}`,
};
