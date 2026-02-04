<script setup lang="ts">
import NavBar from "@/components/menu/NavBar.vue";
import { navigateTo } from "@/utils/navigator";
import { motion } from "motion-v";
</script>

<template>
  <div class="bg-base-200">
    <NavBar class="fixed top-0 left-0 z-10" />
    <!-- 同高度占位颜色叠加 -->
    <div class="h-16 bg-base-300" />
    <div class="p-4 gap-4 flex flex-col">
      <div class="mockup-browser border-base-300 border w-full">
        <div class="mockup-browser-toolbar">
          <motion.div
            class="input cursor-pointer"
            :while-hover="{ scale: 1.1 }"
            @click="navigateTo('https://daisyui.com')"
          >
            https://daisyui.com
          </motion.div>
        </div>
        <div class="grid place-content-center border-t border-base-300 h-16">
          由 DaisyUI 提供组件库支持
        </div>
      </div>

      <div class="mockup-browser border-base-300 border w-full">
        <div class="mockup-browser-toolbar">
          <motion.div
            class="input cursor-pointer"
            :while-hover="{ scale: 1.1 }"
            @click="navigateTo('https://motion.net.cn/')"
          >
            https://motion.net.cn/
          </motion.div>
        </div>
        <div class="grid place-content-center border-t border-base-300 h-16">
          由 Motion 提供动画库支持
        </div>
      </div>

      <div class="mockup-browser border-base-300 border w-full">
        <div class="mockup-browser-toolbar">
          <motion.div
            class="input cursor-pointer"
            :while-hover="{ scale: 1.1 }"
            @click="navigateTo('https://space.bilibili.com/34875940')"
          >
            https://space.bilibili.com/34875940
          </motion.div>
        </div>
        <div class="grid place-content-center border-t border-base-300 h-16">
          B站搜索谷神神神
        </div>
      </div>

      <div class="mockup-browser border-base-300 border w-full">
        <div class="mockup-browser-toolbar">
          <motion.div
            class="input cursor-pointer"
            :while-hover="{ scale: 1.1 }"
            @click="
              navigateTo(
                'https://www.douyin.com/user/MS4wLjABAAAAf6Q5VoHL_UfFQE8fmH3mgYCgL0tGxlpoSMLM9ZcKbpY?from_tab_name=main',
              )
            "
          >
            https://www.douyin.com/search/谷神神神
          </motion.div>
        </div>
        <div class="grid place-content-center border-t border-base-300 h-16">
          抖音搜索谷神神神
        </div>
      </div>
    </div>

    <div class="mockup-browser border-base-300 border w-full">
      <div class="mockup-browser-toolbar">
        <motion.div
          class="input cursor-pointer"
          :while-hover="{ scale: 1.1 }"
          @click="navigateTo('https://qm.qq.com/q/wt1ukamVJ6')"
        >
          https://qm.qq.com/q/wt1ukamVJ6
        </motion.div>
      </div>
      <div class="p-4 grid place-content-center border-t border-base-300">
        <img src="/qq-rc.jpg" alt="qq" class="h-96" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
