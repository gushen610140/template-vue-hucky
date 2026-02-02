import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hucky 操作指南",
  description: "帮助您快速入门",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/quick-start/dependencies" },
    ],

    sidebar: [
      {
        text: "快速上手",
        items: [{ text: "依赖项介绍", link: "/quick-start/dependencies" }],
      },
      {
        text: "脚手架特色",
        items: [
          { text: "自动路由", link: "/cli-feature/auto-router" },
          { text: "组件库", link: "/cli-feature/component-lib" },
          { text: "国际化", link: "/cli-feature/international" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/gushen610140/template-vue-hucky",
      },
      {
        icon: "gitea",
        link: "http://113.46.158.62:3000/gushen/template-vue-hucky",
      },
    ],
  },
  markdown: {
    config: (md) => {
      // 使用插件为代码块丰富样式
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
});
