<template>
  <div class="p-4">
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="12" :y-gap="12">
      <n-grid-item>
        <DataSourceItem :title="'数据源'" :sort="1" :type="dataSource?.type" :url="dataSource?.url" />
      </n-grid-item>

      <n-grid-item>
        <AddNewEditorItem :click-new-item="clickNewItem" />
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
import DataSourceItem from './item/DataSourceItem.vue';
import AddNewEditorItem from './item/AddNewEditorItem.vue';

const store = useStore()

const dataSource = computed(() => {
  const { state } = store;
  return state.dataSource;
})

const clickNewItem = () => {
  console.log('click new item');
}

</script>

<style>
.light-green {
  height: 150px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 150px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>