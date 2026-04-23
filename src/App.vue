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

<style scoped></style>
