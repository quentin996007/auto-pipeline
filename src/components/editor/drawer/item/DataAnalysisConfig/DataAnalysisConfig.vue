<template>
  <div class="item h-[200px] w-[300px] p-2 flex flex-shrink-0 flex-col justify-between">
    <div class="text-green-900 text-lg font-bold">数据分析</div>
    <div>包括聚类与分类、关联分析、深度学习等，Demo 模型待定</div>
    <n-button type="success" @click="confirmData">选择模块</n-button>
  </div>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';

import { ref } from 'vue'
import { useDefaultStore } from '../../../../../store/store';
import { EditorItem } from '../../../model/EditorItem';
import { EditorItemType } from '../../../model/EditorItemType';

const store = useDefaultStore()

const props = defineProps<{
  closeDrawer: () => void,
}>()

const confirmData = () => {
  props.closeDrawer()
  // 将消息发送到store
  store.pushEditorItem({
    id: Math.random().toString(36).slice(-8),
    type: EditorItemType.DataAnalysisType,
  })
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>