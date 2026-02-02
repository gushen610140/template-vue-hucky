<script lang="ts" setup>
import DevelopProgressCard from "@/components/card/DevelopProgressCard.vue";
import NavBar from "@/components/menu/NavBar.vue";

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
  <div>
    <NavBar />
    <div class="w-full p-4 grid grid-cols-3 gap-4 justify-items-center">
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
</template>

<style scoped></style>
