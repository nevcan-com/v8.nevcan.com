import type { APIRoute } from 'astro';
import { STAGING } from '../data/profile';

// While the site is previewed on v8.nevcan.com (STAGING) its pages are noindex, and robots.txt
// doesn't point to the sitemap, so the preview isn't advertised to search engines.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (!STAGING) lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
