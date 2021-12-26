<template>
  <div class="item h-[150px] p-2 flex flex-col justify-between">
    <div class="flex flex-row justify-between items-center">
      <p class="text-gray-900 text-xl">{{ props.sort + 2 }}</p>
      <p
        class="text-gray-900"
      >{{ `${EditorItemType.description(props.data.type)} - ${props.data.codeType}` }}</p>
    </div>
    <n-button @click="previewCode">预览代码</n-button>
  </div>
  <CodePreview
    ref="codePreviewRef"
    :code="props.data.code"
    :sort="props.sort"
    :code-type="props.data.codeType"
    :confirm-data="confirmData"
  />
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { useDefaultStore } from '../../../store/store';
import CodePreview from '../drawer/item/CodeEditorConfig/CodeEditor/CodePreview.vue';
import { EditorItem } from '../model/EditorItem';
import { EditorItemType } from '../model/EditorItemType';

const codePreviewRef = ref<typeof CodePreview | null>(null)

const store = useDefaultStore()


const props = defineProps<{
  sort: number,
  data: EditorItem
}>()

const previewCode = () => {
  codePreviewRef?.value?.openDrawer()
}

const confirmData = (item: EditorItem) => {
  store.updateEditorItem(item.sort ?? 0, item)
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>