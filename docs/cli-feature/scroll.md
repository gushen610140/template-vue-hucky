# 滚动

## 平滑滚动

Hucky 选择了 [Lenis](https://lenis.darkroom.engineering/) 为项目提供平滑滚动，您可以在 `App.vue` 中控制平滑滚动的开关。

## 滚动失效

如果您遇到了滚动失效的情况，这是因为 Lenis 和普通滚动冲突，您可以通过添加 `data-lenis-prevent` 属性来防止 lenis 平滑滚动。例如：

```html
<div data-lenis-prevent></div>
```
