export type Plan = {
  name: string;
  price: string;
  includes: string[];
  bestFor: string;
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Go To Pilot',
    price: 'Rs 149',
    includes: [
      '10 clean image enhancements',
      '5 showroom-style images across two angles',
      '3 WhatsApp product cards',
      'Basic support',
    ],
    bestFor: 'First-time sellers who want to test a small sample before a monthly pilot.',
    cta: 'Send Sample Photos',
  },
  {
    name: 'Starter Seller',
    price: 'Rs 999 / month',
    includes: [
      '30 clean image enhancements',
      '5 showroom-style images',
      '5 WhatsApp product cards',
      '1 mini PDF catalog',
      'Basic support',
    ],
    bestFor: 'Home sellers and small Instagram sellers.',
    cta: 'Ask for Starter Pilot',
  },
  {
    name: 'Shop Seller',
    price: 'Rs 2,999 / month',
    includes: [
      '100 clean image enhancements',
      '25 showroom-style images',
      '20 WhatsApp product cards',
      '2 PDF catalogs',
      'Shop logo/contact placement',
      'Priority support',
    ],
    bestFor: 'Jewelry, bangles, pearls, boutique, and accessory shops.',
    cta: 'Apply for Shop Pilot',
    featured: true,
  },
  {
    name: 'Premium Catalog Pack',
    price: 'Rs 4,999 / month or batch',
    includes: [
      '150-200 product image enhancements',
      '40 showroom-style images',
      '40 WhatsApp product cards',
      '3 premium PDF catalogs',
      'Festive or bridal collection design',
      'Priority delivery',
    ],
    bestFor: 'Sellers with large stock or seasonal collections.',
    cta: 'Discuss Premium Pack',
  },
];
