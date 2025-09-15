<script lang="ts" setup>
import { range } from "radash";
import { usePagination } from "@/utils/pagination";

const merchandise = ref([
  {
    id: 1,
    name: "商品1",
  },
]);

const { currentPage, changePage, pageNumbers, totalPages, getPaginatedData } =
  usePagination(() => merchandise.value);
const handlePageChange = (page: number) => {
  changePage(page);
};

onMounted(async () => {
  await new Promise(() => {
    setTimeout(() => {
      merchandise.value = Array.from(range(1, 50)).map((item) => ({
        id: item,
        name: `商品${item}`,
      }));
    }, 1000);
  });
});
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">帮助</h1>
      </div>
      <div>
        <ul>
          <li v-for="item in getPaginatedData" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <button
        class="join-item btn btn-sm"
        :disabled="currentPage === 1"
        @click="handlePageChange(currentPage - 1)"
      >
        «
      </button>

      <button
        v-for="page in pageNumbers"
        :key="page"
        class="join-item btn btn-sm"
        :class="{
          'btn-active': page === currentPage,
          'btn-disabled': page === '...',
        }"
        @click="page !== '...' && handlePageChange(Number(page))"
      >
        {{ page }}
      </button>

      <button
        class="join-item btn btn-sm"
        :disabled="currentPage === totalPages"
        @click="handlePageChange(currentPage + 1)"
      >
        »
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Component styles */
</style>
