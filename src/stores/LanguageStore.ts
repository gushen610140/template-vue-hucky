import { ref } from "vue";
import { defineStore } from "pinia";

export enum GlobalLanguage {
  ZH = "ZH",
  EN = "EN",
}

export const languageMap = {
  [GlobalLanguage.ZH]: "简体中文",
  [GlobalLanguage.EN]: "English",
};

export const useLanguageStore = defineStore(
  "language",
  () => {
    const language = ref<GlobalLanguage>(GlobalLanguage.ZH);

    const setLanguage = (newLanguage: GlobalLanguage) => {
      language.value = newLanguage;
    };

    return {
      language,
      setLanguage,
    };
  },
  {
    persist: true,
  },
);
