import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
    // add yur domain name here
   site: 'https://yoursite.com',
  integrations: [sitemap(), react()]
});