<script lang="ts" setup>
import ChangeThemeDropdownButton from "@/components/button/ChangeThemeDropdownButton.vue";
import { useGlobalThemeHook } from "@/hooks/globalThemeHook";

const { curGlobalTheme } = useGlobalThemeHook();
</script>

<template>
  <div class="hero min-h-screen" :data-theme="curGlobalTheme">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hucky</h1>
        <p class="py-6">自动路由系统已加载</p>
        <ChangeThemeDropdownButton />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
