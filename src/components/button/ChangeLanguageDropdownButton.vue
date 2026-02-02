<script setup lang="ts">
import { useGlobalLanguageHook } from "@/hooks/globalLanguageHook";
import { useI18n } from "vue-i18n";

const { changeGlobalLanguage, curGlobalLanguage, optionalLanguages } =
  useGlobalLanguageHook();

const { locale, t } = useI18n();

const onClickChangeLocal = (newLanguage: string) => {
  changeGlobalLanguage(newLanguage, locale);
};
</script>

<template>
  <div class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn btn-sm btn-ghost gap-1 px-1.5 font-bold"
      aria-label="Language"
      title="Change Language"
    >
      <svg
        class="text-base-content/70 size-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
          d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
        />
      </svg>
      <svg
        class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
      </svg>
    </div>
    <div
      tabindex="0"
      class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-14 w-56 overflow-y-auto border-[length:var(--border)] border-white/5 shadow-2xl outline-[length:var(--border)] outline-black/5"
    >
      <ul class="menu menu-sm w-full">
        <li class="menu-title text-xs">{{ t("nav.locale") }}</li>
        <li
          v-for="optionalLanguage in optionalLanguages"
          :key="optionalLanguage.label"
        >
          <button
            :class="[
              curGlobalLanguage === optionalLanguage.label ? 'menu-active' : '',
            ]"
            @click="onClickChangeLocal(optionalLanguage.label)"
          >
            <span class="pe-4 font-mono font-bold opacity-40">
              {{ optionalLanguage.label }}
            </span>
            <span class="font-[sans-serif]">{{ optionalLanguage.value }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
