<template>
  <div class="p-4">
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="12" :y-gap="12">
      <n-grid-item>
        <DataSourceItem :data-source="store.dataSource" />
      </n-grid-item>

      <n-grid-item v-for="(item, index) in store.editorList" :key="item.id">
        <component :is="renderComponentWithType(item.type)" :sort="index" :data="item"></component>
      </n-grid-item>

      <n-grid-item>
        <AddNewEditorItem :click-new-item="clickNewItem" />
      </n-grid-item>
    </n-grid>
  </div>
  <EditorDrawer ref="drawerRef" />
</template>

<script setup lang="ts">

import { NGrid, NGridItem } from 'naive-ui';
import { computed, onMounted, ref, Ref } from 'vue'

import { DataSourceType } from '../datasource/model/DataSourceType';
import CodeEditorItem from './item/CodeEditorItem.vue';
import DataSourceItem from './item/DataSourceItem.vue';
import AddNewEditorItem from './item/AddNewEditorItem.vue';
import EditorDrawer from './drawer/EditorDrawer.vue';
import { useDefaultStore } from '../../store/store';
import { EditorItemType } from './model/EditorItemType';

const store = useDefaultStore()

const drawerRef = ref<typeof EditorDrawer | null>(null)

const clickNewItem = () => {
  drawerRef?.value?.openDrawer()
}

const renderComponentWithType = (type: EditorItemType) => {
  switch (type) {
    case EditorItemType.CodeEditorType:
      return CodeEditorItem
    default:
      return CodeEditorItem
  }
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