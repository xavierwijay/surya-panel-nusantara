// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://suryapanelnusantara.com", // Ganti dengan domain asli Anda saat deploy
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
