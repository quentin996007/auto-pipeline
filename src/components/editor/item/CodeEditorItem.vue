<template>
  <div class="item h-[150px] p-2 flex flex-col justify-between">
    <div class="flex flex-row justify-between items-center">
      <n-dropdown @select="handleSelectUpdateIndex" trigger="click" :options="indexOptions">
        <n-button circle>{{ props.sort + 2 }}</n-button>
      </n-dropdown>
      <p
        class="text-gray-900"
      >{{ `${EditorItemType.description(props.data.type)} - ${props.data.codeType}` }}</p>
    </div>
    <div class="flex flex-row justify-between items-center">
      <n-button strong secondary round type="success" @click="previewCode">预览代码</n-button>
      <NPopconfirm @positive-click="removeEditorItem">
        <template #trigger>
          <n-button type="error" size="small" circle>
            <template #icon>
              <n-icon>
                <Close />
              </n-icon>
            </template>
          </n-button>
        </template>
        您是否要移除该处理单元？
      </NPopconfirm>
    </div>
  </div>
  <CodePreview
    ref="codePreviewRef"
    :data="props.data"
    :sort="props.sort"
    :confirm-data="confirmData"
  />
</template>

<script setup lang="ts">

import { NButton, NDropdown, NPopconfirm } from 'naive-ui';
import { computed, onMounted, ref } from 'vue'
import { useDefaultStore } from '../../../store/store';
import CodePreview from '../drawer/item/CodeEditorConfig/CodeEditor/CodePreview.vue';
import { EditorItem } from '../model/EditorItem';
import { EditorItemType } from '../model/EditorItemType';

import { Close } from '@vicons/ionicons5'


const codePreviewRef = ref<typeof CodePreview | null>(null)

const store = useDefaultStore()


const props = defineProps<{
  sort: number,
  data: EditorItem
}>()

const indexOptions = computed(() => {
  return store.editorList.map((item, index) => ({
    label: `${index + 2}`,
    key: index,
    disabled: index == props.sort,
  }))
})

const handleSelectUpdateIndex = (index: number) => {
  store.changeEditorItemIndex(props.sort, index)
}

const previewCode = () => {
  codePreviewRef?.value?.openDrawer()
}

const removeEditorItem = () => {
  store.removeEditorItem(props.sort)
}

const confirmData = (item: EditorItem, index?: number) => {
  store.updateEditorItem(index ?? 0, item)
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>