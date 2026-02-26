<script lang="ts" setup>
import BasicIntroCard from "@/components/card/BasicIntroCard.vue";
import DatePickerDisplayCard from "@/components/card/DatePickerDisplayCard.vue";
import DevelopProgressCard from "@/components/card/DevelopProgressCard.vue";
import FooterBarV2 from "@/components/layout/FooterBarV2.vue";
import NavBar from "@/components/menu/NavBar.vue";
import LogoModel from "@/components/three/LogoModel.vue";

const progress = ref([
  {
    name: "auto-router",
    completed: 80,
    pending: 20,
    title: "自动路由开发进度",
    intro: "自动将 pages 目录下的所有 vue 文件转换为路由",
  },
  {
    name: "component-list",
    completed: 95,
    pending: 5,
    title: "组件库开发进度",
    intro: "自动加载项目所需要的组件库",
  },
  {
    name: "international",
    completed: 95,
    pending: 5,
    title: "国际化开发进度",
    intro: "有序地组织项目翻译文件",
  },
  {
    name: "chart",
    completed: 95,
    pending: 5,
    title: "图表开发进度",
    intro: "使用精美的图表呈现内容",
  },
]);
</script>

<template>
  <div class="lg:pb-102 md:pb-122 pb-154">
    <!-- 主内容区域，在 footer 上方 -->
    <div class="bg-base-200 relative z-5">
      <!-- 顶部与首页内容 -->
      <div class="h-screen flex flex-col">
        <NavBar class="fixed top-0 left-0 z-10" />
        <!-- 同高度占位颜色叠加 -->
        <div class="h-16 bg-base-300" />
        <BasicIntroCard class="isolate z-8" />
      </div>

      <!-- fixed three js 背景 -->
      <LogoModel class="fixed left-0 top-0 h-screen w-full z-7" />

      <!-- 脚手架开发进度 -->
      <div class="p-4">
        <h1 class="text-4xl font-bold mb-12 ml-10">脚手架开发进度</h1>
        <div class="w-full grid grid-cols-3 gap-4 justify-items-center">
          <DevelopProgressCard
            v-for="item in progress"
            :key="item.title"
            :completed="item.completed"
            :pending="item.pending"
            :title="item.title"
            :intro="item.intro"
          />
        </div>
      </div>

      <!-- 组件演示 -->
      <div class="p-4">
        <h1 class="text-4xl font-bold mb-12 ml-10">组件演示</h1>
        <div class="w-full grid grid-cols-3 gap-4 justify-items-center">
          <DatePickerDisplayCard />
        </div>
      </div>
    </div>

    <!-- fixed footer -->
    <FooterBarV2 class="fixed bottom-0 left-0 z-1" />
  </div>
</template>

<style scoped></style>
