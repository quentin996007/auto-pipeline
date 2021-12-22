<template>
  <div class="w-full h-14 bg-white flex flex-col justify-center border-b border-gray-200">
    <n-icon size="40" color="#0e7a0d" class="pl-4">
      <PiedPiperSquare />
    </n-icon>
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