<template>
  <div class="p-4">
    <n-button :disabled="fileArray.length == 0" @click="handleClick" class="mb-4">上传文件</n-button>
    <n-upload
      @finish="handleFinish"
      @change="handleChange"
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      :default-upload="false"
      ref="uploadRef"
    >
      <n-button>选择文件</n-button>
    </n-upload>
  </div>
</template>

<script setup lang="ts">

import { NUpload, NButton } from 'naive-ui'
import { FileInfo, OnChange, OnFinish } from 'naive-ui/lib/upload/src/interface'
import { computed, onMounted, Ref, ref } from 'vue'
import { useDefaultStore } from '../../../store/store'
import { DataSourceType } from '../model/DataSourceType'

const store = useDefaultStore()

const uploadRef: Ref<typeof NUpload | null> = ref(null)
const fileArray = ref<FileInfo[]>([])

const handleChange: OnChange = ({ fileList }) => {
  fileArray.value = fileList
}


const fileName = computed(() => {
  return fileArray.value.map(file => file.name).join(",")
})

const handleClick = () => {
  // 暂不执行上传任务
  // uploadRef?.value?.submit()
  store.setDataSource({
    type: DataSourceType.FILE,
    url: fileName.value
  })
}

const handleFinish: OnFinish = ({ file, event }) => {
  // const ext = file.name.split('.')[1]
  // file.name = `更名.${ext}`
  // file.url = 'https://www.mocky.io/v2/5e4bafc63100007100d8b70f'
  return file
}

onMounted(() => {
  console.log('mounted')
})
</script>

<style>
</style>