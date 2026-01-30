<script setup lang="ts">
import { useGlobalThemeHook } from "@/hooks/globalThemeHook";

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
        <svg
          class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path
            d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl max-h-84 overflow-auto mt-6"
      >
        <li class="menu-title text-xs my-1">主题</li>
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
