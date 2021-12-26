<template>
  <div class="item h-[200px] w-[300px] p-2 flex flex-col justify-between">
    <div class="text-green-900 text-lg font-bold">自定义编码处理</div>
    <div>
      可选语言:
      <div v-for="name in codeTypeNameList" :key="name">{{ name }}</div>
    </div>
    <n-button @click="codePreviewRef?.openDrawer()">选择模块</n-button>
  </div>
  <CodePreview ref="codePreviewRef" :confirm-data="confirmData" />
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';

import { ref } from 'vue'
import CodeTypeList from './CodeEditor/CodeTypeList';
import { useDefaultStore } from '../../../../../store/store';
import CodePreview from './CodeEditor/CodePreview.vue';
import { EditorItem } from '../../../model/EditorItem';

const codeTypeNameList = CodeTypeList.map(item => item.label)
const codePreviewRef = ref<typeof CodePreview | null>(null)

const store = useDefaultStore()

const props = defineProps<{
  closeDrawer: () => void,
}>()

const confirmData = (item: EditorItem, index: number) => {
  props.closeDrawer()
  // 将消息发送到store
  item.id = Math.random().toString(36).slice(-8)
  item.sort = store.editorList.length
  store.pushEditorItem(item)
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>