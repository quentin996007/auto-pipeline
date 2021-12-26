<template>
  <n-drawer v-model:show="active" :placement="'top'" height="51 + 550">
    <n-drawer-content title="编写代码">
      <CodeEditor :code-string="codeString" :change-code="changeCode" :code-type="props.codeType" />
      <template #footer>
        <NButton class="mr-4" type="error" size="large" @click="active = false">取消</NButton>
        <NButton type="info" size="large" @click="confirmHandle">确定保存</NButton>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';

import { ref } from 'vue'
import { NDrawer, NDrawerContent } from 'naive-ui'
import CodeEditor from './CodeEditor.vue';
import { EditorItemType } from '../../../../model/EditorItemType';
import { EditorItem } from '../../../../model/EditorItem';

const props = defineProps<{
  confirmData: (item: EditorItem) => void,
  code?: string,
  sort?: number,
  codeType?: string,
}>()

const codeString = ref(props.code);
const codeType = ref(props.codeType)

const changeCode = (code: string, type: string) => {
  codeString.value = code;
  codeType.value = type;
}

defineExpose({
  openDrawer: () => {
    active.value = true
  },
})

const active = ref(false)

const confirmHandle = () => {
  active.value = false
  props.confirmData({
    type: EditorItemType.CodeEditorType,
    code: codeString.value,
    codeType: codeType.value,
    sort: props.sort,
  })
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>