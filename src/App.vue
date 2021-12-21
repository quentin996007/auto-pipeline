<template>
  <DataSource v-if="!dataSource"></DataSource>
  <Editor v-if="dataSource"></Editor>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './vuex/store';
import DataSource from '@/components/datasource/DataSource.vue'
import Editor from './components/editor/Editor.vue';
const dataSource = computed(() => {
  const { state } = useStore();
  return state.dataSource;
})
</script>

<style>
</style>