// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://block-open-source.github.io",
  base: "ospo/projects-dashboard",
  integrations: [mdx(), sitemap()],
});
