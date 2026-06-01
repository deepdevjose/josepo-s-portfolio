import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://deepdevjose.com",
  output: "static",
  integrations: [mdx()],
  vite: {
    build: {
      assetsInlineLimit: 2048
    }
  }
});
