import {
  useLanguageStore,
  GlobalLanguage,
  languageMap,
} from "@/stores/LanguageStore";
import { Locale } from "vue-i18n";

const languageStore = useLanguageStore();

export const optionalLanguages = Object.entries(languageMap).map(
  ([key, value]) => ({
    label: key as GlobalLanguage,
    value,
  }),
);

// 一定不要通过改变 curGlobalLanguage 来改变语言，而要通过 changeGlobalLanguage 来改变语言
const curGlobalLanguage = computed(() => languageStore.language);

function changeGlobalLanguage(
  language: GlobalLanguage,
  locale: WritableComputedRef<string>,
) {
  languageStore.setLanguage(language);
  locale.value = language;
}

export const useGlobalLanguageHook = () => ({
  optionalLanguages,
  curGlobalLanguage,
  changeGlobalLanguage,
});
