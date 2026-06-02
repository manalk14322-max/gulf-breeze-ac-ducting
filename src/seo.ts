import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from './contact';

export const SITE_URL = 'https://gulfbreezeacducting.com';
export const SITE_NAME = 'Gulf Breeze AC & Ducting';
export const DEFAULT_DESCRIPTION =
  'Gulf Breeze AC & Ducting provides AC installation, HVAC maintenance, GI and PI ducting, copper pipe welding, duct repair, insulation and air conditioner maintenance across Dubai, Sharjah, Umm Al Quwain and the UAE.';

export const SEO_BY_PAGE = {
  home: {
    title: 'Gulf Breeze AC & Ducting | AC Installation & Ducting Services UAE',
    description: DEFAULT_DESCRIPTION,
  },
  about: {
    title: 'About Gulf Breeze AC & Ducting | HVAC Contractor UAE',
    description:
      'Learn about Gulf Breeze AC & Ducting, a UAE HVAC and ducting team serving commercial, industrial, residential and farmhouse projects.',
  },
  services: {
    title: 'AC & Ducting Services UAE | GI Ducting, PI Ducting, AC Repair',
    description:
      'Professional AC installation, AC repair, duct AC fixing, GI ducting, PI ducting, duct insulation, grille fixing and copper pipe welding services in the UAE.',
  },
  projects: {
    title: 'HVAC & Ducting Projects UAE | Gulf Breeze Work Gallery',
    description:
      'View real Gulf Breeze AC & Ducting work including package units, warehouse ducting, GI fabrication, duct repair and industrial AC installations.',
  },
  'why-us': {
    title: 'Why Choose Gulf Breeze AC & Ducting | UAE HVAC Quality',
    description:
      'Choose Gulf Breeze for experienced engineers, quality materials, UAE safety standards, on-time AC and ducting delivery and transparent pricing.',
  },
  contact: {
    title: 'Contact Gulf Breeze AC & Ducting | AC Service Quote UAE',
    description:
      'Contact Gulf Breeze AC & Ducting for AC installation, ducting, HVAC maintenance, copper pipe welding and repair quotation across the UAE.',
  },
} as const;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/gulf-breeze-logo.png`,
  image: `${SITE_URL}/assets/client-work/industrial-package-unit-platform.jpeg`,
  telephone: CONTACT_PHONE_DISPLAY,
  email: CONTACT_EMAIL,
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'Sharjah' },
    { '@type': 'City', name: 'Umm Al Quwain' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE_TEL,
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['English', 'Arabic', 'Urdu', 'Hindi'],
  },
  makesOffer: [
    'AC installation',
    'AC repair',
    'HVAC maintenance',
    'GI ducting installation',
    'PI ducting making and installation',
    'Duct insulation',
    'Copper pipe installation and welding',
  ].map((name) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name,
      areaServed: 'United Arab Emirates',
      provider: { '@id': `${SITE_URL}/#business` },
    },
  })),
};
