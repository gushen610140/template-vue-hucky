# 图标

## 使用图标

可以通过 tailwindcss 中的图标 class 来直接使用图标，例如

```html
<span class="icon-[material-symbols--person-outline]"></span>
```

而你需要的图标可以在 [Iconify Material 图标库](https://icon-sets.iconify.design/material-symbols/) 中搜索。

通过点击图标库中的某个图标，你需要在详情栏中选择 CSS - Tailwind Css 栏，其中会告知你该图标对应的 class 名称。

## 调整图标

如果您需要调整颜色，您可以在 class 中添加 `text-<color>` 来调整图标颜色，例如

```html
<span class="icon-[material-symbols--person-outline] text-red-500"></span>
```

如果您需要调整图标大小，您可以在 class 中添加 `text-<size>` 来调整图标大小，例如

```html
<span class="icon-[material-symbols--person-outline] text-2xl"></span>
```

更多的调整方法可以参考 [Iconify 图标库调整](https://iconify.design/docs/usage/css/tailwind/tailwind4/size-color.html)

## 需要更多图标

您可以在 [Iconify 图标库](https://icon-sets.iconify.design/) 中搜索更多图标。

我们为您预装的是 Material Symbols 图标库。如果您需要使用别的图标库，可以通过 `@iconify-json/{prefix}` 来 install，注意 {prefix} 的名称要改成中划线模式，例如您需要安装名为 Material Symbols Light 的图标库

```bash
bun add -D @iconify-json/material-symbols-light
```

更多的安装方法可以参考 [Iconify 图标库安装](https://iconify.design/docs/usage/css/tailwind/tailwind4/)
