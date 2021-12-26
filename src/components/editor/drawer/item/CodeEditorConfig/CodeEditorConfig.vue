<template>
  <div class="item h-[200px] w-[300px] p-2 flex flex-col justify-between">
    <div class="text-green-900 text-lg font-bold">自定义编码处理</div>
    <div>
      可选语言:
      <div v-for="name in codeTypeNameList" :key="name">{{ name }}</div>
    </div>
    <n-button @click="active = true">选择模块</n-button>
  </div>
  <n-drawer v-model:show="active" :placement="'top'" height="51 + 550">
    <n-drawer-content title="编写代码">
      <CodeEditor :code-string="codeString" :change-code="changeCode" />
      <template #footer>
        <NButton class="mr-4" type="error" size="large" @click="active = false">取消</NButton>
        <NButton type="info" size="large" @click="confirmHandle">确定保存</NButton>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';


import Codemirror from "codemirror-editor-vue3";

import { computed, onMounted, ref } from 'vue'
import { NDrawer, NDrawerContent } from 'naive-ui'
import { DataSourceType } from '../../../../datasource/model/DataSourceType';
import CodeEditor from './CodeEditor/CodeEditor.vue';
import CodeTypeList from './CodeEditor/CodeTypeList';
import { useDefaultStore } from '../../../../../store/store';
import { EditorItemType } from '../../../model/EditorItemType';

const codeTypeNameList = CodeTypeList.map(item => item.label)

const store = useDefaultStore()

const props = defineProps<{
  closeDrawer: () => void,
}>()

const codeString = ref(`// Write the Code, Change the World
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

const codeType = ref("JavaScript")

const changeCode = (code: string, type: string) => {
  codeString.value = code;
  codeType.value = type;
}

const active = ref(false)

const confirmHandle = () => {
  active.value = false
  props.closeDrawer()
  // 将消息发送到store
  store.pushEditorItem({
    type: EditorItemType.CodeEditorType,
    code: codeString.value,
    codeType: codeType.value,
  })
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>