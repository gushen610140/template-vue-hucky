# 字体

## 自定义字体

脚手架提供了两种自定义字体

- [HarmonyOS_Sans_Regular.woff2](https://developer.huawei.com/consumer/cn/design/resource-V1/)
- [LXGWBright-Regular.woff2](https://github.com/lxgw/LxgwWenKai)

## 使用字体

您可以通过 tailwindcss 的类来调整局部字体，例如：

```html
<div class="font-Harmony">
  这是 Harmony 字体
</div>

<div class="font-LXGW">
  这是落霞孤鹜字体
</div>
```

您可以在 `style.css` 中定义全局字体，例如：

```css
@plugin "daisyui/theme" {
  name: "light";
  --color-primary: #5092d4;
  --color-secondary: #bfd7f1;
  --color-accent: #76b9ef;
  /* 自定义字体在 App.vue 中加载 */
  --font-sans: '"Harmony", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'; 
}
```

如果您需要其他自定义字体，请在 `App.vue` 中定义 font-face，例如：

```vue
<style>
@font-face {
  font-family: "LXGW";
  src: url("/fonts/LXGWBright-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>
```

## 后续目标

后续我们将推出能够实时修改全局字体的组件
