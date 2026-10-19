/** Single source of truth for practice details — placeholders, replace with real content. */
export const site = {
  name: 'Julia Kaplan',
  credentials: 'LCSW',
  tagline: 'TODO: one-line description of the practice',
  description:
    'TODO: 1–2 sentence site description used for search results and link previews.',
  url: 'https://julia-kaplan.com',
  email: 'TODO@julia-kaplan.com',
  phone: '+1-555-555-5555',
  phoneDisplay: '(555) 555-5555',
  address: {
    street: 'TODO street address',
    city: 'TODO city',
    region: 'TODO state',
    postalCode: 'TODO zip',
    country: 'US',
  },
  hours: [
    { days: 'Monday – Thursday', time: 'TODO 9:00am – 5:00pm' },
    { days: 'Friday', time: 'TODO 9:00am – 1:00pm' },
  ],
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
