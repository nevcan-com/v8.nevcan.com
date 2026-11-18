export const name = 'Nevcan Uludaş';

/** First year in the copyright line. */
export const since = 1987;

/** Contact address in the footer; null hides it. (Alias to be created in Yandex 360.) */
export const email: string | null = 'hello@nevcan.com';

/** Accounts in the footer, shown as icons. Keep it to the ones that fit every side of the work. */
export const social = [
  // same number as dive.nevcan.com (src/data/social.ts) and the old nevcan.com
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/905555435144?text=${encodeURIComponent('Hello 👋')}`,
  },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nevcanuludas' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/nevcanuludas/' },
] as const;

/**
 * true while the site is previewed on v8.nevcan.com: every page is noindex, so search engines
 * don't pick up the preview. Set to false when www.nevcan.com moves to this site.
 */
export const STAGING = true;

/** Where the site is served; absolute URLs (canonical, share image, JSON-LD) start here. */
export const origin = STAGING ? 'https://v8.nevcan.com' : 'https://www.nevcan.com';

/**
 * Every profile that is Nev's own, for search engines (JSON-LD `sameAs`); not shown on the page.
 * The footer shows only `social` above.
 */
export const profiles = [
  'https://www.linkedin.com/in/nevcanuludas',
  'https://www.instagram.com/nevcanuludas/',
  'https://www.youtube.com/nevcanuludas',
  'https://github.com/nevcanuludas',
  'https://x.com/nevcanuludas',
  'https://www.facebook.com/nevcanuludas',
  'https://sketchfab.com/nevcanuludas',
  'https://orcid.org/0009-0008-2027-4072',
  'https://www.gue.com/diver-training/gue-instructors/instructor-resume?id=20397',
];
