import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import image from '@astrojs/image';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://URL-HERE.com',
  integrations: [react(), tailwind(), sitemap(), compress(), image()],
});
