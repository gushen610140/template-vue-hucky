# 国际化

## 使用 i18n

如果您需要适配国际化，Hucky 提供了 i18n 基础配置，首先您可以先查阅 [i18n 文档](https://vue-i18n.intlify.dev/guide/advanced/composition.html) 其中的 composition api 部分以获取基础知识。

其中您主要需要使用到的是 `useI18n` 函数，它返回一个对象，其中包含了 `t` 方法，用于翻译字符串。

```vue
<template>
  <div>
    <p>{{ t("nav.home") }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
```

关于 t 方法后方的参数，它来自于 `i18n/index.ts` 中的实现 `messagesInterface` 接口的对象。也就是说如果您需要添加新的翻译字符串，您需要首先在 `messagesInterface` 接口中添加新的属性，然后在类似 `zh_CNMessages` 和 `en_USMessages` 等具体语言文件中添加对应的翻译字符串。

## 切换语言

切换语言同样需要用到 `useI18n` 函数，其中包含了 `locale` 属性，您可以通过修改这个属性来切换语言。

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

locale.value = "EN"; // 切换到英文，由 i18n/index.ts 中的 locale 配置决定
</script>
```

Hucky 本身提供了 `ChangeLanguageDropdownButton` 组件以及相对应的一些封装方法，通过使用这个组件您可以让用户自行更改需要的语言。您也可以深入 `hooks/globalLanguageHook` 中的方法来拓展更多功能。
