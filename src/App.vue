<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useLanguageStore } from "./stores/LanguageStore";
import Lenis from "lenis";

// 开启 lenis 平滑滚动
const lenis = new Lenis({
  // 通过添加 data-lenis-prevent 属性来防止 lenis 平滑滚动
  prevent: (node) =>
    node.tagName === "SELECT" || node.hasAttribute("data-lenis-prevent"),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

onMounted(() => {
  // 加载 i18n 初始语言
  useI18n().locale.value = useLanguageStore().language;
});
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style>
/* 接触 scoped 开启全局模式加载字体 */

@font-face {
  font-family: "LXGW";
  src: url("/fonts/LXGWBright-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Harmony";
  src: url("/fonts/HarmonyOS_Sans_Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>
