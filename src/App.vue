<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div class="q-container">
      <Title />
      <div style="flex:1">
        <DataSource v-if="!dataSource"></DataSource>
        <Editor v-if="dataSource"></Editor>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './vuex/store';
import { NConfigProvider, NButton } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'

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