<template>
  <div class="p-4">
    <n-input
      class="mb-4"
      v-model:value="url"
      type="textarea"
      placeholder="请输入文件的完整 URL 地址"
      :autosize="{
        minRows: 3,
        maxRows: 5
      }"
    />
    <n-button :disabled="url.length == 0" @click="handleClick" class="mb-4">确定</n-button>
    <p>{{ urlData }}</p>
  </div>
</template>

<script setup lang="ts">


import { NInput, NButton } from 'naive-ui'
import { onMounted, ref, watch } from 'vue'
import { useStore } from '../../../vuex/store'

const store = useStore()
const urlData = store.state.url

const url = ref("")

const handleClick = () => {
  console.log("文件地址:", url.value);

}
</script>

<style>
</style>