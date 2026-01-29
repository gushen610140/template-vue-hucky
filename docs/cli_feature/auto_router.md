# 自动路由系统

## 背景

前端路由的出现，主要是为了解决 **单页应用（SPA）** 在用户体验和开发模式上的核心痛点，它已经成为现代前端开发的基础能力之一。

单页应用（SPA）的核心特点是只有一个 HTML 文件，所有页面内容都通过 JavaScript 动态切换。如果没有前端路由：

- 用户在不同页面间切换时，浏览器的 URL 不会变化。
- 刷新页面会直接回到应用初始状态，之前的操作和页面状态全部丢失。
- 无法通过浏览器的「前进 / 后退」按钮导航，也不能用书签保存当前页面。

前端路由通过监听 URL 变化（如 /#/home 或 /home），动态渲染对应的组件，让 URL 和页面内容保持同步，彻底解决了这个问题。

## 开启 SPA

脚手架默认自动启用

```vue [App.vue] {5}
<script lang="ts" setup></script>

<template>
  <div>
    <router-view /> // 使用 vue router 依赖作为支持
  </div>
</template>

<style scoped></style>
```

## 常规注册路由

:::tip
注意在 hucky 中不使用常规注册方法
:::

路由器实例是通过调用 `createRouter()` 函数创建的

```ts {7-10}
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

// 通过手动编写 path 和引入 vue 文件来配置路由
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
```

## 组织页面文件

在 Hucky 中，按照文件资源路径自动渲染为路由路径

```plain {7-12}
.
├─ src
│  ├─ apis
│  ├─ assets
│  ├─ components
│  ├─ ...
│  ├─ pages
│  │  ├─ index.vue --> /
│  │  ├─ user
│  │  │  │─ index.vue --> /user
│  │  │  │─ account.vue --> /user/account
│  │  └─ └─ change-password.vue --> /user/change-password
│  ├─ ...
│  └─ App.vue
├─ index.html
└─ package.json
```

::: warning
页面文件统一使用小写+中划线方式命名
:::

## 特殊规则

在 `/src/router/rules` 中通过字符串匹配的方式为 router 中的某个路径添加规则
