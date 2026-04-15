// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://kr1x.is-a.dev",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        "meteor-icons": ["*"],
      },
    }),
  ],
});
