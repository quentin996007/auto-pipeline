<template>
  <div class="p-4">
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="12" :y-gap="12">
      <n-grid-item>
        <EditorItem :title="'数据源'" :sort="1" :type="dataSourceType" />
      </n-grid-item>
      <n-grid-item>
        <div class="light-green">1</div>
      </n-grid-item>
      <n-grid-item>
        <div class="green">2</div>
      </n-grid-item>
      <n-grid-item>
        <div class="light-green">3</div>
      </n-grid-item>
      <n-grid-item>
        <div class="green">4</div>
      </n-grid-item>
      <n-grid-item>
        <div class="light-green">5</div>
      </n-grid-item>
      <n-grid-item>
        <div class="green">6</div>
      </n-grid-item>
      <n-grid-item>
        <div class="light-green">7</div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">

import { NGrid, NGridItem } from 'naive-ui';
import { computed, onMounted, Ref } from 'vue'

import { useStore } from '../../vuex/store';
import { DataSourceType } from '../datasource/model/DataSourceType';
import EditorItem from './item/EditorItem.vue';
import { EditorItemType } from './model/EditorItemType';

const store = useStore()

const dataSource = computed(() => {
  const { state } = store;
  return state.dataSource;
})

const dataSourceType: Ref<EditorItemType> = computed(() => {
  const { state } = store;
  switch (state.dataSource?.type) {
    case DataSourceType.URL:
      return EditorItemType.URLDataSource;
    case DataSourceType.FILE:
      return EditorItemType.FileDataSource;
    default:
      return EditorItemType.URLDataSource;
  }
})
</script>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>