import fs from "fs";
import path from "path";
import { defineConfig } from "vitepress";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { mdPlugin } from "./utils/mdPlugins";

export default defineConfig({
  title: "Vui",
  appearance: false,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  rewrites: {
    'components/:pkg/(.*)': 'components/:pkg.md'
  },
  themeConfig: {
    nav: [
      {
        text: "Components",
        link: "/components/components",
        activeMatch: "/components/",
      },
      { text: 'Sounds', link: 'https://vui-sounds.vercel.app/' }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/meedfine/vui-design" }],
    sidebar: {
      "/components/": [
        { text: 'Components', link: '/components/components' },
        {
          text: "Base",
          items: [
            { text: "Button", link: "/components/button" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright:
        '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备19009226号-1</a>',
    },
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
});
