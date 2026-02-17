<script setup lang="ts">
import { motion, useAnimate } from "motion-v";
import { useI18n } from "vue-i18n";
import { languageChangeBus } from "@/hooks/bus/languageChangeBus";
import type { Key, ResourceKeys } from "vue-i18n";

const { t } = useI18n();

const props = defineProps<{
  text: Key | ResourceKeys;
}>();

const [scope, animate] = useAnimate();

languageChangeBus.on(async () => {
  await animate(scope.current, { opacity: 0, y: "-20px" });
  await animate(scope.current, { opacity: 1, y: "0" });
});
</script>

<template>
  <motion.span ref="scope">
    {{ t(props.text) }}
  </motion.span>
</template>

<style scoped></style>
