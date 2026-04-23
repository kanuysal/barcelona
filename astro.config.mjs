import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});