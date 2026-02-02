<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useLanguageStore } from "./stores/LanguageStore";

onMounted(() => {
  // 加载 i18n
  useI18n().locale.value = useLanguageStore().language;
});
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
