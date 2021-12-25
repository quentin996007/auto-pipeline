<template>
  <div class="item h-[150px] p-2 flex flex-col justify-between">
    <div class="flex flex-row justify-between items-center">
      <p class="text-gray-900 text-xl">{{ props.sort }}</p>
      <p class="text-gray-900">数据源 - {{ dataTypeName }}</p>
    </div>
    <div class="break-words text-gray-900">
      <span>
        {{ dataTypeName }}:
        <span class="underline text-green-700">{{ props.url }}</span>
      </span>
    </div>
    <NPopconfirm @positive-click="changeDataSource">
      <template #trigger>
        <n-button>变更数据源</n-button>
      </template>
      您是否要变更数据源？
    </NPopconfirm>
  </div>
</template>

<script setup lang="ts">

import { NButton, NPopconfirm } from 'naive-ui';
import { computed, onMounted } from 'vue'
import { useDataSourceStore } from '../../../store/store';
import { DataSourceType } from '../../datasource/model/DataSourceType';
const store = useDataSourceStore()

onMounted(() => {
  console.log('mounted')
})

const props = defineProps<{
  sort: number,
  title: string,
  url?: string,
  type?: DataSourceType,
}>()

const dataTypeName = computed(() => {
  return DataSourceType.description(props.type)
})

const changeDataSource = () => {
  console.log('change data source')
  store.setDataSource(null)
};


</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>