import { createI18n } from "vue-i18n";
import { zh_CNMessages } from "./zh_CN";
import { en_USMessages } from "./en_US";

export interface messagesInterface {
  nav: {
    home: string;
    about: string;
    theme: string;
    locale: string;
  };
}

const i18n = createI18n({
  legacy: false,
  locale: "ZH",
  fallbackLocale: "EN",
  messages: {
    ZH: zh_CNMessages,
    EN: en_USMessages,
  },
});

export default i18n;
