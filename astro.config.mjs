// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Dev Foundry Docs",
      customCss: ["./src/styles/globals.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/thedevfoundry/docs",
        },
      ],
      sidebar: [
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
        {
          label: "Get Involved",
          autogenerate: { directory: "get-involved" },
        },
        {
          label: "Community",
          autogenerate: { directory: "community" },
        },
      ],
    }),
  ],
});
