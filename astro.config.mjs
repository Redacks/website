import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), sitemap()],
  site: "https://www.redacks.com"
});