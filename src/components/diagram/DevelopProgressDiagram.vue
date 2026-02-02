<script setup lang="ts">
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
import { type EChartsOption } from "echarts";

use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

const props = defineProps<{
  completed: number;
  pending: number;
}>();

const option = ref<EChartsOption>({
  color: ["#52c41a", "#ff4d4f"],
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "开发进度",
      type: "pie",
      radius: ["40%", "70%"],
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 32,
          fontWeight: "bold",
          formatter: "{d}%",
        },
      },
      data: [
        { value: props.completed, name: "已完成" },
        { value: props.pending, name: "待开发" },
      ],
    },
  ],
});
</script>

<template>
  <div class="h-96 w-96">
    <VChart :option="option" />
  </div>
</template>

<style scoped></style>
