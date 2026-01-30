// 存在一个重要问题: 不清楚 daisyui 是怎么替换主题的 目前没有做任何配置
import { useThemeStore, GlobalTheme } from "@/stores/ThemeStore";

const themeStore = useThemeStore();

const optionalThemes = Object.values(GlobalTheme);

// 一定不要通过改变 curGlobalTheme 来改变主题，而要通过 changeGlobalTheme 来改变主题
const curGlobalTheme = computed(() => themeStore.theme);

function changeGlobalTheme(theme: GlobalTheme) {
  themeStore.setTheme(theme);
}

export const useGlobalThemeHook = () => ({
  optionalThemes,
  curGlobalTheme,
  changeGlobalTheme,
});
