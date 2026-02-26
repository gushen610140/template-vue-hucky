<script lang="ts" setup>
import DatePickerDisplayCard from "@/components/card/DatePickerDisplayCard.vue";
import DevelopProgressCard from "@/components/card/DevelopProgressCard.vue";
import FooterBarV2 from "@/components/layout/FooterBarV2.vue";
import NavBar from "@/components/menu/NavBar.vue";
import AnimText from "@/components/special/AnimText.vue";
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
  <div class="lg:pb-102 md:pb-122 pb-154">
    <!-- 这里开 relative 形成 stack context -->
    <div class="bg-base-200 relative z-2">
      <div class="h-screen flex flex-col">
        <NavBar class="fixed top-0 left-0 z-10" />
        <!-- 同高度占位颜色叠加 -->
        <div class="h-16 bg-base-300" />
        <div class="hero flex-1">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <!-- <h1 class="text-5xl font-bold">{{ $t("home.welcome") }}</h1> -->
              <h1 class="text-5xl font-bold">
                <AnimText text="home.welcome" />
              </h1>
              <div class="py-6">
                <!-- {{ $t("home.intro_line1") }}<br />
              {{ $t("home.intro_line2") }}<br />
              {{ $t("home.intro_line3") }} -->
                <AnimText text="home.intro_line1" /><br />
                <AnimText text="home.intro_line2" /><br />
                <AnimText text="home.intro_line3" />
              </div>
              <button
                class="btn btn-primary"
                @click="navigateTo('http://localhost:5174')"
              >
                <!-- {{ $t("home.read_doc") }} -->
                <AnimText text="home.read_doc" />
              </button>
            </div>
          </div>
        </div>
      </div>
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
      <div class="p-4">
        <h1 class="text-4xl font-bold mb-12 ml-10">组件演示</h1>
        <div class="w-full grid grid-cols-3 gap-4 justify-items-center">
          <DatePickerDisplayCard />
        </div>
      </div>
    </div>
    <FooterBarV2 />
  </div>
</template>

<style scoped></style>
