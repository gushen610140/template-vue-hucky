import { useEventBus } from "@vueuse/core";
import { keys } from "./index";

export const languageChangeBus = useEventBus<string>(keys.language);
