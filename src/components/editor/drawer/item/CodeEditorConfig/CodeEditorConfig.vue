<template>
  <div class="item h-[200px] w-[300px] p-2 flex flex-shrink-0 flex-col justify-between">
    <div class="text-green-900 text-lg font-bold">自定义编码处理</div>
    <div>
      可选语言:
      <div v-for="name in codeTypeNameList" :key="name">{{ name }}</div>
    </div>
    <div class="flex flex-row items-center space-x-2">
      <n-button class="flex-1" type="success" @click="codePreviewRef?.openDrawer()">选择模块</n-button>
      <n-popover :style="{ maxWidth: '300px' }" placement="bottom" trigger="click">
        <template #trigger>
          <n-button strong secondary circle type="warning">
            <n-icon>
              <Question />
            </n-icon>
          </n-button>
        </template>
        <span class="text-gray-900 font-normal">你可以编写自定义处理数据的代码，当您需要清晰地在某个环节插入自定义处理流程，这将会十分有效。</span>
      </n-popover>
    </div>
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
import { Question } from '@vicons/fa'

const codeTypeNameList = CodeTypeList.map(item => item.label)
const codePreviewRef = ref<typeof CodePreview | null>(null)

const store = useDefaultStore()

const props = defineProps<{
  closeDrawer: () => void,
}>()

const confirmData = (item: EditorItem, index?: number) => {
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