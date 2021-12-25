<template>
  <div class="item w-[300px] p-2 flex flex-col justify-between">
    <div class="flex flex-row justify-between items-center">
      <div>占位</div>
    </div>
    <div class="break-words text-gray-900">
      <span>
        <span class="underline text-green-700">占位</span>
      </span>
    </div>
    <n-button>编写代码</n-button>
  </div>
  <div class="w-[300px] h-[200px]">
    <CodeEditor :code-string="codeString" :change-code-string="changeCodeString" />
  </div>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';
import Codemirror from "codemirror-editor-vue3";

import { computed, onMounted, ref } from 'vue'
import { DataSourceType } from '../../../../datasource/model/DataSourceType';
import CodeEditor from './CodeEditor/CodeEditor.vue';

const codeString = ref(`
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

const changeCodeString = (value: string) => {
  codeString.value = value;
  console.log(codeString.value)
}


</script>

<style>
.item {
  height: 150px;
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>