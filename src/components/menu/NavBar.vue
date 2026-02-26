<script setup lang="ts">
import ChangeLanguageDropdownButton from "@/components/button/ChangeLanguageDropdownButton.vue";
import ChangeThemeDropdownButton from "@/components/button/ChangeThemeDropdownButton.vue";
import { useI18n } from "vue-i18n";
import { throttle } from "radash";
import { AnimatePresence, motion } from "motion-v";
import { navigateTo } from "@/utils/navigator";
import UserAuthNavButton from "../button/UserAuthNavButton.vue";

const { t } = useI18n();

const showNavBar = ref(true);
const curScrollY = ref(0);

const handleThrottleScroll = throttle(100, () => {
  const scrollY = window.scrollY;
  if (scrollY > curScrollY.value) {
    showNavBar.value = false;
  } else {
    showNavBar.value = true;
  }
  curScrollY.value = scrollY;
});

window.addEventListener("scroll", handleThrottleScroll);

const navPageByResetScroll = (path: string) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  navigateTo(path);
};

const menuItems = ref([
  {
    path: "/",
    label: "nav.home",
  },
  {
    path: "/about",
    label: "nav.about",
  },
  {
    path: "/demo",
    label: "nav.demo",
  },
  {
    path: "/join",
    label: "nav.join",
  },
]);
</script>

<template>
  <div class="w-full">
    <AnimatePresence>
      <motion.div
        v-show="showNavBar"
        class="navbar glass shadow-sm h-16"
        :exit="{
          y: -100,
          transition: {
            duration: 0.3,
          },
        }"
      >
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <span class="icon-[material-symbols--menu-rounded] text-2xl" />
            </div>
            <ul
              tabindex="-1"
              class="menu dropdown-content bg-base-100 rounded-box z-1 mt-5 w-48 p-2 shadow"
            >
              <li v-for="item in menuItems" :key="item.path">
                <a @click="navPageByResetScroll(item.path)">{{
                  t(item.label)
                }}</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Hucky</a>
          <ul class="menu menu-horizontal pl-6 hidden lg:flex gap-3">
            <li v-for="item in menuItems" :key="item.path">
              <a @click="navPageByResetScroll(item.path)">{{
                t(item.label)
              }}</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end gap-2">
          <ChangeThemeDropdownButton />
          <ChangeLanguageDropdownButton />
          <UserAuthNavButton />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<style scoped></style>
