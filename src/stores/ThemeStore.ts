import { ref } from "vue";
import { defineStore } from "pinia";

export enum GlobalTheme {
  Light = "light",
  Dark = "dark",
  Cupcake = "cupcake",
  Bumblebee = "bumblebee",
  Emerald = "emerald",
  Corporate = "corporate",
  Synthwave = "synthwave",
  Retro = "retro",
  Cyberpunk = "cyberpunk",
  Valentine = "valentine",
  Halloween = "halloween",
  Garden = "garden",
  Forest = "forest",
  Aqua = "aqua",
  Lofi = "lofi",
  Pastel = "pastel",
  Fantasy = "fantasy",
  Wireframe = "wireframe",
  Black = "black",
  Luxury = "luxury",
  Dracula = "dracula",
  Cmyk = "cmyk",
  Autumn = "autumn",
  Business = "business",
  Acid = "acid",
  Lemonade = "lemonade",
  Night = "night",
  Coffee = "coffee",
  Winter = "winter",
  Dim = "dim",
  Nord = "nord",
  Sunset = "sunset",
  Caramellatte = "caramellatte",
  Abyss = "abyss",
  Silk = "silk",
}

export const useThemeStore = defineStore(
  "theme",
  () => {
    const theme = ref<GlobalTheme>(GlobalTheme.Light);

    const setTheme = (newTheme: GlobalTheme) => {
      theme.value = newTheme;
    };

    return {
      theme,
      setTheme,
    };
  },
  {
    persist: true,
  },
);
