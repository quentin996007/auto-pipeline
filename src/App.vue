<template>
  <div
    class="w-full bg-white flex flex-row justify-start items-center border-b border-gray-200 space-x-2 p-4"
  >
    <n-icon size="40" color="#4C1D95">
      <PiedPiperSquare />
    </n-icon>
    <p class="text-2xl font-bold font-mono text-violet-900">AutoPipe</p>
  </div>
  <DataSource v-if="!dataSource"></DataSource>
  <Editor v-if="dataSource"></Editor>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './vuex/store';
import { PiedPiperSquare } from '@vicons/fa'

import DataSource from '@/components/datasource/DataSource.vue'
import Editor from './components/editor/Editor.vue';
const dataSource = computed(() => {
  const { state } = useStore();
  return state.dataSource;
})
</script>

<style>
</style>