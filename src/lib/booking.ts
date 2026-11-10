import site from '../data/site.json';

/** True when `value` is a real http(s) URL (not empty, not a placeholder). */
export function isHttpUrl(value: unknown): value is string {
  if (typeof value !== 'string' || !value.trim()) return false;
  try {
    const u = new URL(value);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

/** Booking link + label, or null when no real calendar URL is configured. */
export const booking = isHttpUrl(site.calendarUrl)
  ? { url: site.calendarUrl, label: site.calendarLabel || 'Book a call' }
  : null;
