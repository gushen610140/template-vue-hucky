<script setup lang="ts">
import AnimText from "@/components/special/AnimText.vue";
import { navigateTo } from "@/utils/navigator";
</script>

<template>
  <div class="hero flex-1">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          <AnimText text="home.welcome" />
        </h1>
        <div class="py-6">
          <AnimText text="home.intro_line1" /><br />
          <AnimText text="home.intro_line2" /><br />
          <AnimText text="home.intro_line3" />
        </div>
        <button
          class="btn btn-primary"
          @click="navigateTo('http://localhost:5174')"
        >
          <AnimText text="home.read_doc" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
