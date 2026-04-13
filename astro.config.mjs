// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kr1xm0.github.io",
  base: "/Portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
