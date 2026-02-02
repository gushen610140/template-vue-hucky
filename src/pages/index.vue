<script lang="ts" setup>
import DatePickerDisplayCard from "@/components/card/DatePickerDisplayCard.vue";
import DevelopProgressCard from "@/components/card/DevelopProgressCard.vue";
import NavBar from "@/components/menu/NavBar.vue";
import { navigateTo } from "@/utils/navigator";

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
  <div class="bg-base-200">
    <div class="h-screen flex flex-col">
      <NavBar class="fixed top-0 left-0 z-10" />
      <div class="hero flex-1">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">欢迎加入</h1>
            <p class="py-6">
              超现代化的 Vue3 Based 脚手架<br />
              赋予您高效的开发体验<br />
              使用 bun docs 命令启动 Hucky 的文档服务器
            </p>
            <button
              class="btn btn-primary"
              @click="navigateTo('http://localhost:5174')"
            >
              查阅文档
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 min-h-screen">
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
    <div class="p-4 min-h-screen">
      <h1 class="text-4xl font-bold mb-12 ml-10">组件演示</h1>
      <div class="w-full grid grid-cols-3 gap-4 justify-items-center">
        <DatePickerDisplayCard />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
