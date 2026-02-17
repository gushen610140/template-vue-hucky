import {
  useLanguageStore,
  GlobalLanguage,
  languageMap,
} from "@/stores/LanguageStore";
import { languageChangeBus } from "./bus/languageChangeBus";

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
  // 延迟切换先通知其他组件播放动画
  languageChangeBus.emit("language changed");

  setTimeout(() => {
    languageStore.setLanguage(language);
    locale.value = language;
  }, 300);
}

export const useGlobalLanguageHook = () => ({
  optionalLanguages,
  curGlobalLanguage,
  changeGlobalLanguage,
});
