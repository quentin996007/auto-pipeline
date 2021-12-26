<template>
  <div class="p-4">
    <n-input
      class="mb-4"
      v-model:value="url"
      type="textarea"
      placeholder="请输入文件的完整 URL 地址"
      :autosize="{
        minRows: 3,
        maxRows: 3
      }"
    />
    <n-button :disabled="url.length == 0" @click="handleClick" class="mb-4">确定</n-button>
  </div>
</template>

<script setup lang="ts">


import { NInput, NButton } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { useDefaultStore } from '../../../store/store'
import { DataSourceType } from '../model/DataSourceType'

const store = useDefaultStore()

const url = ref("http://www.baidu.com/test/file.csv")

const handleClick = () => {
  store.setDataSource({
    type: DataSourceType.URL,
    url: url.value
  })
}
</script>

<style>
</style>