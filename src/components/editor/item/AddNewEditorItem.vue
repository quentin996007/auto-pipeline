<template>
  <button class="add-item group text-gray-600" @click="props.clickNewItem">
    <svg
      class="group-hover:text-blue-500 mb-1 text-gray-400"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
      />
    </svg>
    添加处理单元
  </button>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'

const props = defineProps<{
  clickNewItem: () => void,
}>()

onMounted(() => {
  console.log('mounted')
})

</script>

<style>
.add-item {
  height: 150px;
  @apply hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-900 font-medium;
}
</style>