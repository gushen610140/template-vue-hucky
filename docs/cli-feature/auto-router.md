# 自动路由系统

自动路由系统是现代前端脚手架中基于 **约定大于配置** 理念实现的高效路由方案，它通过扫描指定目录下的页面文件，自动生成对应的路由映射关系。

## 背景

前端路由的出现，主要是为了解决 **单页应用（SPA）** 在用户体验和开发模式上的核心痛点。

单页应用（SPA）的核心特点是只有一个核心HTML文件，应用启动后所有页面内容都通过JavaScript动态获取、渲染和切换，整个应用的运行都在浏览器端完成，无需频繁向服务器请求完整HTML页面。如果没有前端路由的支撑，SPA会面临一系列难以解决的用户体验和开发维护问题：

- 用户在不同页面间切换时，浏览器的URL不会发生任何变化，用户无法感知当前所处的「页面」位置，也无法向他人分享当前页面的链接。
- 刷新浏览器页面时，会直接重新加载唯一的核心HTML文件，应用回到初始启动状态，用户之前的操作步骤、填写的表单数据、页面滚动位置等状态会全部丢失，严重影响使用体验。
- 无法正常使用浏览器的「前进 / 后退」按钮进行页面导航，用户只能通过应用内部的自定义按钮切换页面，违背了用户的浏览器使用习惯；同时也无法将当前页面添加到浏览器书签，方便后续快速访问。
- 从开发角度来说，需要手动编写大量DOM操作逻辑来控制页面内容的显示与隐藏，难以实现复杂的页面层级切换，代码维护成本会随着页面数量的增加急剧上升。

## 开启 SPA

在Hucky框架中，脚手架已经完成了SPA模式的默认自动启用，核心依赖于 `vue-router` 。

```vue [App.vue] {5}
<script lang="ts" setup></script>

<template>
  <div class="app-container">
    <router-view /> // 路由出口组件：由vue-router提供
  </div>
</template>

<style scoped></style>
```

需要补充说明的是，`<router-view />` 的作用是作为页面组件的渲染容器。在Hucky框架中，由于启用了自动路由系统，该组件会自动匹配`src/pages`目录下生成的路由规则，无需开发者手动引入路由器实例或配置路由映射。

此外，Hucky 规定只在此处使用 `<router-view />` ，若子组件需要用到类似的路由渲染功能，请使用 [动态组件](https://cn.vuejs.org/api/built-in-special-elements.html#component) 平替。

## 常规注册路由

:::tip 提示
注意在 hucky 中不使用常规注册方法，该方法仅作为 vue-router 基础用法参考。
:::

路由器实例通过调用 `createRouter()` 函数创建的。

```ts {7-11}
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// 手动引入页面组件，每个页面组件都需要单独import
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

// 通过手动编写 path 和引入 vue 文件来配置路由，每个页面对应一个路由对象
const routes = [
  { path: '/', component: HomeView }, // 根路径 / 对应 HomeView 组件
  { path: '/about', component: AboutView }, // 路径 /about 对应 AboutView 组件
]

const router = createRouter({
  // 配置路由的历史模式，createMemoryHistory 适用于非浏览器环境（如SSR、测试）
  // 浏览器环境更常用 createWebHistory（history模式）或 createWebHashHistory（hash模式）
  history: createMemoryHistory(),
  routes, // 传入手动定义的路由配置数组
})

// 最终需要将 router 实例注入到 Vue 应用中（Hucky 中已自动完成，无需手动编写）
// createApp(App).use(router).mount('#app')
```

常规注册路由的核心局限性在于「手动配置」，当项目页面数量逐渐增加（如超过20个）时，会暴露一系列问题：

1. 路由配置数组会变得异常冗长，难以查阅和维护；
2. 新增页面时，需要同时完成「创建页面文件」「import组件」「添加路由对象」三步操作，流程繁琐且容易遗漏；
3. 页面文件路径或文件名修改时，需要同步修改import路径和路由 `path` ，容易出现拼写错误导致404页面；
4. 嵌套路由需要手动配置 `children` 数组，层级越深配置越复杂，出错概率越高。这也是Hucky框架采用自动路由系统的核心原因，通过「约定」替代「配置」，规避上述所有问题。

## 组织页面文件

在 Hucky 中，自动路由系统遵循「文件即路由」的核心约定，框架会自动扫描 `/src/pages` 目录下的所有 `.vue` 结尾的文件（包括子目录中的文件），并按照文件资源的目录路径和文件名，自动渲染为对应的路由路径。

```plain {7-12}
.
├─ src
│  ├─ apis
│  ├─ assets
│  ├─ components
│  ├─ ...
│  ├─ pages                     // 自动路由核心扫描目录：所有页面组件都放置在此处
│  │  ├─ index.vue              // 映射为根路由 /
│  │  ├─ user
│  │  │  │─ index.vue           // 映射为 /user
│  │  │  │─ account.vue         // 映射为 /user/account
│  │  └─ └─ change-password.vue // 映射为 /user/change-password
│  ├─ ...
│  └─ App.vue
├─ index.html
└─ package.json
```

::: warning 警告
页面文件统一使用小写+中划线方式命名（即kebab-case命名法，如 change-password.vue），禁止使用以下命名方式：

1. 大写字母（如 ChangePassword.vue）：URL路径不区分大小写，容易导致路由匹配异常；
2. 下划线（如 change_password.vue）：不符合URL路径的主流命名规范，可读性较差；
3. 空格或特殊字符（如 change&password.vue）：会导致URL编码异常，无法正常访问；
4. 中文命名：兼容性差，且不利于团队协作和项目维护。
:::

## 路由跳转

Hucky 封装了 `utils/navigator.ts` 模块，提供了 `navigateTo` 函数，用于在 Vue 组件中进行路由跳转。

如果您以 `/` 开头，将会跳转到前端路由，如果您以 `http` 开头，将会跳转到外部链接。通过设定 `replace` 参数为 `true`，可以在跳转外部链接时，替换当前页面而不是打开新标签页。

## 特殊规则

:::danger 危险
这一部分内容还未完善，请自行编码解决
:::

在 `/src/router/rules` 目录中，开发者可以通过字符串匹配的方式为自动生成的某个路由路径添加额外路由规则，满足实际开发中的特殊需求——虽然自动路由遵循「约定大于配置」，但在部分场景下（如路由重定向、设置路由守卫、添加路由元信息、修改路由别名等），需要对特定路由进行精细配置，该目录就是为了解决这类需求而设计。

具体使用说明和核心特点如下：

1. 配置文件格式：支持创建多个`.ts`或`.js`配置文件，框架会自动扫描该目录下的所有配置文件并合并规则，无需手动导入，方便按业务模块拆分配置；
2. 字符串匹配方式：支持三种匹配模式，精确匹配（如`/user/account`，仅匹配该路由）、模糊匹配（如`/user/*`，匹配所有以`/user/`开头的子路由）、通配符匹配（如`*`，匹配所有未定义的路由，常用于404页面配置）；
3. 支持的配置项：与`vue-router`的路由对象配置项完全兼容，包括`redirect`（路由重定向）、`meta`（路由元信息，可存储页面标题、权限要求等数据）、`beforeEnter`（路由独享守卫）、`alias`（路由别名）等；
4. 配置示例：若需要将`/user/profile`重定向到`/user/account`，并给`/user/*`所有路由添加「需要登录」的元信息，可在该目录下创建`user-rules.ts`进行配置，框架会自动将这些规则合并到自动生成的路由中；
5. 执行优先级：特殊规则的优先级高于自动生成的路由规则，若配置的规则与自动路由存在冲突，以`/src/router/rules`目录下的配置为准。
