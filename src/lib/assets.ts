import { existsSync } from 'node:fs';
import { join } from 'node:path';

// True when a root-relative URL (e.g. "/work/photo.jpg") exists as a file in public/.
// Used at build time so a missing optional image never ships as a broken <img>.
export function publicAssetExists(src: string | undefined): src is string {
  if (!src || !src.startsWith('/')) return false;
  return existsSync(join(process.cwd(), 'public', decodeURIComponent(src)));
}

// Removes <figure> blocks whose local <img> is missing from public/ (with a build warning).
export function dropMissingFigures(html: string, context: string): string {
  return html.replace(/<figure\b[\s\S]*?<\/figure>/g, (fig) => {
    const src = fig.match(/<img[^>]*\ssrc="([^"]+)"/)?.[1];
    if (src && src.startsWith('/') && !publicAssetExists(src)) {
      console.warn(`[images] ${context}: ${src} is missing from public/, figure skipped.`);
      return '';
    }
    return fig;
  });
}
