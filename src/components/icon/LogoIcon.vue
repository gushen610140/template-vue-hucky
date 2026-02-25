<script setup lang="ts"></script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    stroke="currentColor"
    width="100%"
    height="100%"
  >
    <g
      fill="none"
      stroke-width="8"
      stroke-linejoin="miter"
      stroke-linecap="square"
    >
      <!-- Bottom horizontal line has been removed -->

      <!-- Left Angle Bracket <   ─ farther left + shorter -->
      <polyline points="60,80 30,100 60,120" />

      <!-- Right Angle Bracket >   ─ farther right + shorter -->
      <polyline points="140,80 170,100 140,120" />

      <!-- Ladder Vertical Rails ─ unchanged width -->
      <line x1="80" y1="50" x2="80" y2="150" />
      <line x1="120" y1="50" x2="120" y2="150" />

      <!-- Ladder Rungs ─ unchanged -->
      <line x1="80" y1="75" x2="120" y2="75" />
      <line x1="80" y1="100" x2="120" y2="100" />
      <line x1="80" y1="125" x2="120" y2="125" />
    </g>
  </svg>
</template>

<style scoped></style>
