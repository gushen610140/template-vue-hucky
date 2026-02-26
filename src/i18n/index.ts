import { createI18n } from "vue-i18n";
import { zh_CNMessages } from "./zh_CN";
import { en_USMessages } from "./en_US";

export interface messagesInterface {
  nav: {
    home: string;
    about: string;
    demo: string;
    join: string;
    theme: string;
    locale: string;
    login: string;
    register: string;
    logout: string;
    logout_more_title: string;
    logout_more: string;
    login_more_title: string;
    login_more: string;
  };
  auth: {
    login: string;
    login_password: string;
    login_phone: string;
    register: string;
    email: string;
    password: string;
    remember_me: string;
    forget_password: string;
    no_account: string;
    agree_terms: string;
    have_account: string;
    logout: string;
    scan_qr: string;
    scan_qr_more: string;
    not_open: string;
  };
  home: {
    welcome: string;
    intro_line1: string;
    intro_line2: string;
    intro_line3: string;
    read_doc: string;
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
