<template>
  <div class="q-container">
    <div class="w-96 h-72 border-gray-50 border-2 bg-white rounded-xl shadow-xl">
      <n-tabs default-value="file" size="large" justify-content="space-evenly">
        >
        <n-tab-pane name="file" tab="文件">
          <FileUpload></FileUpload>
        </n-tab-pane>
        <n-tab-pane name="url" tab="URL">
          <URLUpload></URLUpload>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">

import { NTabs, NTabPane, NUpload, NButton } from 'naive-ui'
import { onMounted } from 'vue'
import FileUpload from './file/FileUpload.vue'
import URLUpload from './url/URLUpload.vue'


onMounted(() => {
  console.log('mounted')
})
</script>

<style>
.q-container {
  @apply flex h-screen justify-center items-center;
}
</style>