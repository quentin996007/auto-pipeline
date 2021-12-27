<template>
  <n-drawer v-model:show="active" :placement="'top'" height="51 + 550">
    <n-drawer-content>
      <template #header>
        <div class="flex flex-row justify-between items-center">
          <n-icon size="30" color="#0e7a0d">
            <Writing />
          </n-icon>
          <p>编写代码</p>
        </div>
      </template>
      <CodeEditor
        :code-string="codeString"
        :change-code="changeCode"
        :code-type="props.data?.codeType"
      />
      <template #footer>
        <NButton class="mr-4" type="error" size="large" @click="active = false">取消</NButton>
        <NButton type="info" size="large" @click="confirmHandle">
          <template #icon>
            <n-icon>
              <SaveAltRound />
            </n-icon>
          </template>
          确定保存
        </NButton>
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

import { Writing } from '@vicons/tabler'
import { SaveAltRound } from '@vicons/material'


const props = defineProps<{
  confirmData: (item: EditorItem, index?: number) => void,
  // code?: string,
  sort?: number,
  // codeType?: string,
  data?: EditorItem
}>()

const codeString = ref(props.data?.code ?? `// Write the Code, Change the World
function* fib2(num){
    let [pre, current] = [0, 1];
    for(let i=0;i<num;i++){
        yield current;
        [pre, current] = [current, pre+current];
    }
}
let myFib = fib2(10);
for(let fib of myFib){
    console.log(fib);
};
`);
const codeType = ref(props.data?.codeType ?? "JavaScript")

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
    ...props.data,
    type: EditorItemType.CodeEditorType,
    code: codeString.value,
    codeType: codeType.value,
  }, props.sort)
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>