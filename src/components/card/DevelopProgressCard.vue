<script setup lang="ts">
import DevelopProgressDiagram from "../diagram/DevelopProgressDiagram.vue";

const props = defineProps<{
  completed: number;
  pending: number;
  title: string;
  intro: string;
}>();
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <DevelopProgressDiagram
      :completed="props.completed"
      :pending="props.pending"
    />
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>
        {{ props.intro }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
