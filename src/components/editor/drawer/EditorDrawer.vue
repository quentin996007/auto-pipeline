<template>
  <n-drawer v-model:show="active" :placement="'top'" height="51 + 200">
    <n-drawer-content title="处理单元列表">
      <CodeEditorConfig />
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">

import { NDrawer, NDrawerContent } from 'naive-ui'
import { onMounted, Ref, ref } from 'vue'
import CodeEditorConfig from './item/CodeEditorConfig/CodeEditorConfig.vue'

const active = ref(false)

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
</style>