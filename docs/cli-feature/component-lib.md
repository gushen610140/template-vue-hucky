# 组件库

## 必要前提

您必须熟悉 [tailwindcss](https://tailwindcss.com/) 的常见用法，这在 hucky 中基本上是不可或缺的。我们选用的是 v4.1 版本，请不要再研究其他旧版本。

## 首选

我们首选 tailwindcss 非常适配的 [daisyui](https://daisyui.com/) 作为我们的主要组件库，这个组件库通过配置 class 为普通的元素添加功能，同时通过 theme 规范主题样式。

当然我们也提供了目前前端最主流的组件库 [shadcn-vue](https://www.shadcn-vue.com/) 在项目中支持，这个组件库同样和 tailwindcss 紧密关联，通过将组件代码直接呈现在项目中，同时适配了 Vue 的组件化开发，您可以深入调整组件细节的同时拥有方便的组件调用。

考虑到国内环境，我们也提供了 [element-plus](https://element-plus.org/) 作为备用组件库，您可以根据项目需求选择使用。

:::tip 提示
我们最不推荐您使用 element-plus，其难以调节的组件样式和重复化的审美使得在现代前端市场中被视为过时技术，尽管这可能是您的熟悉的组件库，我们仍然强烈推荐您学习 tailwindcss 相关的组件库。
:::

## 主题

我们使用 daisyui 内置的 35 种主题，可以通过 `hooks/globalThemeHook` 中的方法来切换主题，我们也封装了 `components/button/ChangeThemeDropdownButton.vue` 下拉框按钮组件来方便切换主题。

如果您需要自定义主题，请查询 [daisyui 主题文档](https://daisyui.com/docs/themes/)，Hucky 规定仅使用这种方式自定义主题。

当您需要调整的是某个具体的组件样式时，请优先使用 tailwindcss 深入组件内部进行覆盖调整，而不是全局调整 css 变量的值。

## 关于 Shadcn

`components/ui` 目录下是 shadcn-vue 提供的组件代码，您可以在项目中直接调用这些组件，同时也可以根据需要进行调整。
