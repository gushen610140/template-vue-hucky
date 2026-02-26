<script setup lang="ts">
import NavBar from "@/components/menu/NavBar.vue";
import FooterBarV2 from "@/components/layout/FooterBarV2.vue";
import ModelViewer from "@/components/three/ModelViewer.vue";
</script>

<template>
  <div class="lg:pb-102 md:pb-122 pb-154">
    <!-- 这里开 relative 形成 stack context -->
    <div class="bg-base-200 relative z-2">
      <div class="h-screen flex flex-col">
        <NavBar class="fixed top-0 left-0 z-10" />
        <!-- 同高度占位颜色叠加 -->
        <div class="h-16 bg-base-300" />
        <ModelViewer />
      </div>
    </div>
    <FooterBarV2 class="fixed bottom-0 left-0 z-1" />
  </div>
</template>

<style scoped></style>
