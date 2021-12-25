<template>
  <div class="item h-[208px] p-2">
    <div class="flex flex-row justify-between items-center">
      <p class="text-gray-900 text-xl">{{ props.sort }}</p>
      <p class="text-gray-900">{{ EditorItemType.description(props.type) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { EditorItemType } from '../model/EditorItemType';

onMounted(() => {
  console.log('mounted')
})

const props = defineProps<{
  sort: number,
  title: string,
  type: EditorItemType,
  fileName?: string,
  url?: string,
}>()

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>