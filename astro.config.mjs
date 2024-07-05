import { defineConfig } from "astro/config";
//import db from "@astrojs/db";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
});
