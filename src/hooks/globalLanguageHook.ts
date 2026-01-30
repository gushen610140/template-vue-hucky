import {
  useLanguageStore,
  GlobalLanguage,
  languageMap,
} from "@/stores/LanguageStore";

const languageStore = useLanguageStore();

export const optionalLanguages = Object.entries(languageMap).map(
  ([key, value]) => ({
    label: key as GlobalLanguage,
    value,
  }),
);

// 一定不要通过改变 curGlobalLanguage 来改变语言，而要通过 changeGlobalLanguage 来改变语言
const curGlobalLanguage = computed(() => languageStore.language);

function changeGlobalLanguage(language: GlobalLanguage) {
  languageStore.setLanguage(language);
}

export const useGlobalLanguageHook = () => ({
  optionalLanguages,
  curGlobalLanguage,
  changeGlobalLanguage,
});
