<template>
  <p>组件</p>
  <n-button @click="handleClick">点击</n-button>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { NButton } from 'naive-ui'

onMounted(() => {
  console.log('mounted')
})

const handleClick = () => {
  console.log('click')
}

</script>

<style>
</style>