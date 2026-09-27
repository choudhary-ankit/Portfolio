// Single source of truth for the site's public URL.
// Switch this to the custom domain (e.g. https://ankitchoudhary.dev) once it's live.
export const SITE_URL = 'https://choudharyankit.netlify.app';

export const PROFILE = {
  name: 'Ankit Choudhary',
  jobTitle: 'Software Engineer II',
  employer: 'Spyne',
  email: 'ankit_chy@outlook.com',
  phone: '+91 79781 43053',
  phoneHref: 'tel:+917978143053',
  whatsapp: 'https://wa.me/917978143053',
  linkedin: 'https://www.linkedin.com/in/ankit-choudhary-522aa6122',
  github: 'https://github.com/choudhary-ankit',
  locality: 'Gurugram',
  region: 'Haryana',
  country: 'IN',
  resume: '/Ankit_Choudhary_Software_Engineer.pdf',
  photo: '/ankit-choudhary.jpg',
} as const;

export const SEO = {
  // ~60 chars so Google shows it in full; name first, then the words people search with it.
  title: 'Ankit Choudhary | Software Engineer & Developer, Gurugram',
  // ~155 chars; covers "Spyne", "Gurugram/Gurgaon", "developer" and the core skills.
  description:
    'Ankit Choudhary is a Software Engineer II at Spyne in Gurugram (Gurgaon), India: a backend and full-stack developer building distributed systems and LLM AI.',
  themeColor: '#0e1622',
  // Paste the tokens from Google Search Console / Bing Webmaster Tools ("HTML tag" method) to verify ownership.
  googleSiteVerification: '',
  bingSiteVerification: '',
} as const;
