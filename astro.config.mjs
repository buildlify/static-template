import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://URL-HERE.com',
  integrations: [tailwind(), sitemap(), compress(), image()],
});
