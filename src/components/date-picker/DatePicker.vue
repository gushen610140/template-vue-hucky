<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import {
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { CalendarIcon } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const defaultPlaceholder = today(getLocalTimeZone());
const date = ref() as Ref<DateValue>;

const df = new DateFormatter("zh-CN", {
  dateStyle: "long",
});
</script>

<template>
  <Popover v-slot="{ close }">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )
        "
      >
        <CalendarIcon />
        {{ date ? df.format(date.toDate(getLocalTimeZone())) : "选择日期" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <Calendar
        v-model="date"
        :default-placeholder="defaultPlaceholder"
        layout="month-and-year"
        initial-focus
        locale="zh-CN"
        @update:model-value="close"
      />
    </PopoverContent>
  </Popover>
</template>
