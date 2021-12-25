<template>
  <div class="h-[500px]">
    <Codemirror
      v-model:value="code"
      :options="cmOptions"
      border
      placeholder="在此处编辑您的代码"
      @change="onChange"
    />
  </div>
  <div class="flex flex-row justify-between items-center h-[50px]">
    <n-dropdown
      trigger="click"
      @select="handleSelectCodeType"
      :options="CodeTypeList"
      :show-arrow="true"
    >
      <n-button>当前语言：{{ codeType }}</n-button>
    </n-dropdown>
    <n-dropdown
      trigger="click"
      @select="handleSelectCodeTheme"
      :options="CodeThemeList"
      :show-arrow="true"
    >
      <n-button>当前主题：{{ codeTheme }}</n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';
import Codemirror from "codemirror-editor-vue3";

import { computed, onMounted, reactive, ref, toRef } from 'vue'

// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/sql/sql.js";
import "codemirror/mode/r/r.js";
import "codemirror/mode/python/python.js";
// theme
import "codemirror/theme/dracula.css";
import "codemirror/theme/abbott.css";
import "codemirror/theme/idea.css";


import CodeTypeList from './CodeTypeList';
import CodeThemeList from './CodeThemeList';

const codeType = ref("JavaScript")
const codeTheme = ref("abbott")

const props = defineProps<{
  codeString: string,
  changeCodeString: (codeString: string) => void,
}>()

const code = ref(props.codeString)

const mapLanguageType = (type: string) => {
  switch (type) {
    case "SQL":
      return "sql"
    case "JavaScript":
      return "javascript"
    case "Python":
      return "python"
    case "R":
      return "r"
    default:
      return "sql"
  }
}

const currentLanguageType = computed(() => {
  return mapLanguageType(codeType.value)
})

const cmOptions = reactive({
  mode: currentLanguageType.value, // 语言模式
  theme: codeTheme.value, // 主题
  lineNumbers: true, // 显示行号
  smartIndent: true, // 智能缩进
  indentUnit: 2, // 智能缩进单位为4个空格长度
  foldGutter: true, // 启用行槽中的代码折叠
  styleActiveLine: true, // 显示选中行的样式
})


const handleSelectCodeType = (key: string) => {
  codeType.value = key
  cmOptions.mode = currentLanguageType.value
}

const handleSelectCodeTheme = (key: string) => {
  codeTheme.value = key
  cmOptions.theme = key
}

const onChange = (val: string, cm: any) => {
  props.changeCodeString(val)
}

</script>

<style>
</style>