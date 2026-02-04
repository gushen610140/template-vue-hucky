# 动画

## 使用

:::warning 警告
motion-v 的自动引入系统经过测试无法使用，您仍需要手动引入
:::

Hucky 安装了 [motion-v](https://motion.net.cn/docs/vue) 库，您可以在组件中使用它来添加动画效果。

简单来看，您只需要引入 motion-v 的 `motion` 组件，并使用它来包裹需要添加动画效果的元素，然后编写 :animate 指令即可。

```html
<motion.div :animate="{ rotate: 360 }" />
```

您也可以通过设置 :initial 指令来设置元素的初始状态。

```html
<motion.div :animate="{ rotate: 360 }" :initial="{ rotate: 0 }" />
```

通过 `AnimatePresence` 组件，您可以在元素进入或退出时添加动画效果。

```html
<AnimatePresence>
  <motion.div v-if="show" :exit="{ opacity: 0 }" />
</AnimatePresence>
```

:::tip 提示
exit 会自动为元素的进入也添加动画效果。
:::
