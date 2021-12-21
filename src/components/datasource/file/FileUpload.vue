<template>
  <div class="p-4">
    <n-button :disabled="!fileListLengthRef" @click="handleClick" class="mb-4">上传文件</n-button>
    <n-upload
      @change="handleChange"
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      :default-upload="false"
      ref="uploadRef"
    >
      <n-button>选择文件</n-button>
    </n-upload>
    <n-button @click="updateURL">更新地址</n-button>
  </div>
</template>

<script setup lang="ts">

import { NUpload, NButton } from 'naive-ui'
import { FileInfo } from 'naive-ui/lib/upload/src/interface'
import { onMounted, Ref, ref } from 'vue'
import { useStore } from '../../../vuex/store'

const fileListLengthRef = ref(0)
const uploadRef: Ref<typeof NUpload | null> = ref(null)

const handleChange = ({ fileList }: { fileList: FileInfo[] }) => {
  fileListLengthRef.value = fileList.length
}

const handleClick = () => {
  uploadRef?.value?.submit()
}
const store = useStore()
const updateURL = () => {

  store.commit('updateURL', 'https://www.mocky.io/v2/test')
}

onMounted(() => {
  console.log('mounted')
})
</script>

<style>
</style>