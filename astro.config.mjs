import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://deepdevjose.com",
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 2048
    }
  }
});
