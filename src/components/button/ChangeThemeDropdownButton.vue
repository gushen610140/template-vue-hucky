<script setup lang="ts">
import { useGlobalThemeHook } from "@/hooks/globalThemeHook";

const { changeGlobalTheme, curGlobalTheme, optionalThemes } =
  useGlobalThemeHook();
</script>

<template>
  <div>
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">
        主题
        <svg
          width="12px"
          height="12px"
          class="inline-block h-2 w-2 fill-current opacity-60"
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
        class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl max-h-84 overflow-auto"
      >
        <li v-for="optionalTheme in optionalThemes" :key="optionalTheme">
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
