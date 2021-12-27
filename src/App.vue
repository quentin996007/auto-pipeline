<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div class="q-container">
      <Title :show-data-flow-btn="dataSource != null" />
      <div style="flex:1">
        <DataSource v-if="!dataSource"></DataSource>
        <Editor v-if="dataSource"></Editor>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { NConfigProvider, NButton } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'

import DataSource from '@/components/datasource/DataSource.vue'
import Editor from './components/editor/Editor.vue';
import Title from './components/title/Title.vue';
import { useDefaultStore } from './store/store';
import CodeTypeList from './components/editor/drawer/item/CodeEditorConfig/CodeTypeList';

const store = useDefaultStore()

const dataSource = computed(() => {
  return store.dataSource;
})

</script>

<style>
.q-container {
  @apply flex h-screen w-full flex-col;
}
</style>