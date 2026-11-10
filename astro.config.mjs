// @ts-check
import { defineConfig } from 'astro/config';

// User/organization GitHub Pages site: served from the domain root, so no `base` is needed.
// If you later add a custom domain, update `site` and add public/CNAME.
export default defineConfig({
  site: 'https://bobolsky.github.io',
  output: 'static',
  trailingSlash: 'ignore',
});
