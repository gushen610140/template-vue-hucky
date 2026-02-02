# 图表

## 使用

Hucky 选用 Echarts + Vue Echarts 组件库来为项目绘制图表。首先您需要熟悉如何使用 Echarts 的 option 来绘制一个图表，您可以前往 [Echarts 官方示例站点](https://echarts.apache.org/examples/zh/index.html) 先选择一个参考图表，然后复制其 option 代码。

然后您需要前往 [Vue Echarts 站点](https://vue-echarts.dev/#codegen) 并使用其提供的引入代码生成器来生成 import 代码。将您的 option 对象粘贴并获取对应的 import 代码。注意这里粘贴的是具体的 option 对象，而不是以 option = 开头的赋值语句。

接下来在您需要用到图表的组件中引入 vue echarts 提供的 VChart 组件。并动态绑定 option 到 VChart 组件的 props 中。可参考如下代码。

```vue
<script setup lang="ts">
import VChart from "vue-echarts";
import { type EChartsOption } from "echarts";

// 自动生成的 import 代码
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

const option = ref<EChartsOption>({
  // 此处为您复制的 Echarts 官方示例站点的 option 代码
});
</script>

<template>
  <!-- 必须设置图表容器的高度和宽度 -->
  <div class="h-96 w-96">
    <VChart :option="option" />
  </div>
</template>

<style scoped></style>

```

:::tip 提示
您可以前往 [Vue Echarts 文档](https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh-Hans.md) 查看更多使用方法。
:::
