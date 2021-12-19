<template>
  <p>组件</p>
  <n-config-provider :theme="theme">
    <n-card>
      <n-space>
        <n-button @click="theme = darkTheme">深色</n-button>
        <n-button @click="theme = null">浅色</n-button>
      </n-space>
    </n-card>
  </n-config-provider>

  <h1 class="text-3xl font-bold underline text-red-600">Hello world!</h1>
</template>

<script setup lang="ts">

import { onMounted, Ref, ref } from 'vue'
import { NButton, darkTheme } from 'naive-ui'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'

const theme: Ref<BuiltInGlobalTheme | null> = ref(null)

onMounted(() => {
  console.log('mounted')
})

const handleClick = () => {
  console.log('click')
}

</script>

<style>
</style>