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
  linkedin: 'https://www.linkedin.com/in/ankit-choudhary-522aa6122',
  github: 'https://github.com/choudhary-ankit',
  locality: 'Gurugram',
  region: 'Haryana',
  country: 'IN',
  resume: '/Ankit_Choudhary_Software_Engineer.pdf',
} as const;

export const SEO = {
  title: 'Ankit Choudhary | Software Engineer, Distributed Systems & LLM Applications',
  description:
    'Ankit Choudhary is a Software Engineer II at Spyne with 5+ years building distributed systems, event-driven microservices and LLM-powered conversational AI.',
  themeColor: '#0e1622',
} as const;
