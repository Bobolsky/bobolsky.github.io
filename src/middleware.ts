import { defineMiddleware } from 'astro:middleware';
import { PLACEHOLDER_RE } from './lib/placeholders.mjs';

// Highlights placeholder markers ([TO COMPLETE], [TO COMPLETE: ...], [PRICE TBD]) in page text
// by wrapping them in <mark class="todo">. Runs at build time for static pages (and in dev),
// so it works for Markdown content and frontmatter alike. Only text inside <body> is touched,
// never attributes or <head>, so titles and meta descriptions stay plain.
export const onRequest = defineMiddleware(async (_ctx, next) => {
  const response = await next();
  const type = response.headers.get('content-type') ?? '';
  if (!type.includes('text/html')) return response;

  const html = await response.text();
  const bodyStart = html.indexOf('<body');
  if (bodyStart === -1) return new Response(html, response);

  const head = html.slice(0, bodyStart);
  // Only replace inside text nodes: the segment between '>' and the next '<'.
  const body = html
    .slice(bodyStart)
    .replace(
      />([^<]+)</g,
      (_whole, text: string) =>
        '>' + text.replace(PLACEHOLDER_RE, (m) => `<mark class="todo">${m}</mark>`) + '<',
    );

  return new Response(head + body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
});
