export const name = 'Nevcan Uludaş';

/** First year in the copyright line. */
export const since = 1987;

/** Contact address in the footer; null hides it. (Alias to be created in Yandex 360.) */
export const email: string | null = 'hello@nevcan.com';

/** Accounts in the footer, shown as icons. Keep it to the ones that fit every side of the work. */
export const social = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nevcanuludas' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/nevcanuludas/' },
] as const;

/**
 * true while the site is previewed on v6.nevcan.com: every page is noindex, so search engines
 * don't pick up the preview. Set to false when www.nevcan.com moves to this site.
 */
export const STAGING = true;
