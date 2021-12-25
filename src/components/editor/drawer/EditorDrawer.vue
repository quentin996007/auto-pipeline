<template>
  <n-drawer v-model:show="active" :placement="'top'">
    <n-drawer-content title="处理单元列表">《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。</n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">

import { NDrawer, NDrawerContent } from 'naive-ui'
import { onMounted, Ref, ref } from 'vue'

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