<template>
  <n-drawer v-model:show="active" :placement="'top'" :height="51 + 250">
    <n-drawer-content title="处理单元列表">
      <div class="flex flex-row flex-nowrap items-center overflow-x-auto space-x-4">
        <CodeEditorConfig :close-drawer="closeDrawer" />
        <DataAnalysisConfig :close-drawer="closeDrawer" />
        <DataPreprocessing :close-drawer="closeDrawer" />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">

import { NDrawer, NDrawerContent } from 'naive-ui'
import { onMounted, Ref, ref } from 'vue'
import CodeEditorConfig from './item/CodeEditorConfig/CodeEditorConfig.vue'
import DataAnalysisConfig from './item/DataAnalysisConfig/DataAnalysisConfig.vue'
import DataPreprocessing from './item/DataPreprocessing/DataPreprocessing.vue'



const active = ref(false)

const closeDrawer = () => {
  active.value = false
}

defineExpose({
  openDrawer: () => {
    active.value = true
  },
})

onMounted(() => {
  console.log('mounted')
})
</script>

<style>
.CodeMirror {
  font-family: Arial, monospace;
  font-size: 16px;
}
</style>