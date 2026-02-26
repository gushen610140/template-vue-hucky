<script setup lang="ts">
import BiliBiliIcon from "../icon/BiliBiliIcon.vue";
import DouYinIcon from "../icon/DouYinIcon.vue";
import LogoIcon from "../icon/LogoIcon.vue";
import RedBookIcon from "../icon/RedBookIcon.vue";
</script>

<template>
  <footer
    class="w-full pt-16 pb-10 px-6 md:px-12 lg:px-20 text-sm font-[LXGW] lg:h-102 md:h-122 h-154"
  >
    <!-- Background overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-(--color-primary)/50 via-(--color-primary)/20 to-(--color-base-200) pointer-events-none"
    />

    <div
      class="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6"
    >
      <!-- Left column - Logo + slogan -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="text-4xl font-bold tracking-tight">
            <LogoIcon class="h-16" />
          </div>
          <div>
            <div class="text-lg font-medium tracking-wide">Hucky</div>
            <div class="text-xs text-gray-500">专注于开发体验提升</div>
          </div>
        </div>
        <div class="text-lg">重塑下一代前端脚手架</div>
      </div>

      <!-- Middle scattered contact blocks -->
      <div class="space-y-8 md:space-y-10 lg:col-start-2">
        <!-- Email & resume -->
        <div>
          <div class="mb-1 text-gray-500">简历投递：</div>
          <a href="mailto:w56038009@outlook.com" class="font-bold underline">
            w56038009@outlook.com
          </a>
        </div>

        <!-- WeChat / phone -->
        <div>
          <div class="mb-1 text-gray-500">业务联系：(微信)</div>
          <div class="font-bold">gushen622140</div>
          <!-- QR Code area -->
          <div class="mt-3">
            <div
              class="inline-block bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <img src="/contact/wechat.png" alt="wechat" class="h-22" />
            </div>
          </div>
        </div>

        <!-- Phone & address (right side feel) -->
        <div class="lg:hidden">
          <div class="font-bold">15381666371</div>
          <div class="text-gray-500 mt-1 text-xs leading-relaxed">
            浙江省金华市婺城区迎宾大道 667 号浙江师范大学<br />
            667, Zhejiang Normal University<br />
            Jinhua, Zhejiang, China
          </div>
        </div>
      </div>

      <!-- Right column - Phone + Address (desktop layout) -->
      <div class="hidden lg:block space-y-2">
        <div>
          <div class="font-bold text-lg">15381666371</div>
        </div>
        <div class="text-gray-500 leading-relaxed text-xs">
          浙江省金华市婺城区迎宾大道 667 号浙江师范大学<br />
          667, Zhejiang Normal University<br />
          Jinhua, Zhejiang, China
        </div>
        <div class="flex mt-4 gap-2">
          <a
            title="小红书"
            href="https://www.xiaohongshu.com/user/profile/61cf083b000000001000c7b2"
            target="_blank"
            rel="nofollow"
          >
            <RedBookIcon class="h-6 w-6" />
          </a>
          <a
            title="B站"
            href="https://space.bilibili.com/34875940"
            target="_blank"
            rel="nofollow"
          >
            <BiliBiliIcon class="h-6 w-6" />
          </a>
          <a
            title="抖音"
            href="https://www.douyin.com/user/MS4wLjABAAAAf6Q5VoHL_UfFQE8fmH3mgYCgL0tGxlpoSMLM9ZcKbpY"
            target="_blank"
            rel="nofollow"
          >
            <DouYinIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom legal line -->
    <div class="mt-8 text-xs text-gray-500 text-left">
      <div class="max-w-7xl mx-auto">
        Copyright © 2026 sunway.icu | 备案号：浙ICP备2023010223号 |
        增值电信业务经营许可证：浙B2-20110004
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
