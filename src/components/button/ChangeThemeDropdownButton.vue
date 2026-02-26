<script setup lang="ts">
import { useGlobalThemeHook } from "@/hooks/globalThemeHook";
import { useI18n } from "vue-i18n";
import Lenis from "lenis";

// 开启 lenis 平滑滚动
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const { t } = useI18n();

const { changeGlobalTheme, curGlobalTheme, optionalThemes } =
  useGlobalThemeHook();
</script>

<template>
  <div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-sm btn-ghost px-1.5">
        <div
          class="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors"
        >
          <div class="bg-base-content size-1 rounded-full" />
          <div class="bg-primary size-1 rounded-full" />
          <div class="bg-secondary size-1 rounded-full" />
          <div class="bg-accent size-1 rounded-full" />
        </div>
        <span class="text-base-content/70">{{ t("nav.theme") }}</span>
        <span
          class="icon-[material-symbols--keyboard-arrow-down-rounded] text-lg text-base-content/70"
        />
      </div>
      <ul
        data-lenis-prevent
        tabindex="-1"
        class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl max-h-84 overflow-auto mt-6"
      >
        <li class="menu-title text-xs my-1">{{ t("nav.theme") }}</li>
        <li
          v-for="optionalTheme in optionalThemes"
          :key="optionalTheme"
          class="my-1"
        >
          <input
            type="radio"
            name="theme-dropdown"
            :class="[
              'theme-controller',
              'btn',
              'btn-sm',
              'btn-block',
              optionalTheme === curGlobalTheme ? 'btn-primary' : 'btn-ghost',
              'justify-start',
            ]"
            :aria-label="optionalTheme"
            :value="optionalTheme"
            :checked="optionalTheme === curGlobalTheme"
            @change="changeGlobalTheme(optionalTheme)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
