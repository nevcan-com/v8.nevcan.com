/**
 * The words that rotate after "I'm a", in order. Each one leads to its own site.
 *
 * - `label`: the rotating word (it follows "I'm a", so start it with a consonant sound)
 * - `name`: the short name in the list at the bottom of the page
 * - `host`: the subdomain it opens
 * - `live`: only live sites are shown; flip it to true when the site is up
 */
export type Site = {
  label: string;
  name: string;
  host: string;
  live: boolean;
};

export const sites: Site[] = [
  { label: 'scuba instructor', name: 'Diving', host: 'dive.nevcan.com', live: true },
  { label: 'software architect', name: 'Software', host: 'dev.nevcan.com', live: true },
  { label: 'filmmaker', name: 'Film', host: 'film.nevcan.com', live: false },
  { label: 'game developer', name: 'Games', host: 'game.nevcan.com', live: false },
];

/** How long each word stays before the next one (ms). */
export const ROTATE_MS = 1800;
