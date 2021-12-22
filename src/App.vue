<template>
  <div class="q-container">
    <Title />
    <div style="flex:1">
      <DataSource v-if="!dataSource"></DataSource>
      <Editor v-if="dataSource"></Editor>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './vuex/store';
import { PiedPiperSquare } from '@vicons/fa'

import DataSource from '@/components/datasource/DataSource.vue'
import Editor from './components/editor/Editor.vue';
import Title from './components/title/Title.vue';
const dataSource = computed(() => {
  const { state } = useStore();
  return state.dataSource;
})
</script>

<style>
.q-container {
  @apply flex h-screen w-full flex-col;
}
</style>