<template>
  <div
    class="w-full bg-white flex flex-row justify-between items-center border-b border-gray-200 space-x-2 p-4"
  >
    <div class="flex flex-row items-center space-x-2">
      <n-icon size="40" color="#4C1D95">
        <PiedPiperSquare />
      </n-icon>
      <p class="text-2xl font-bold font-mono text-violet-900">AutoPipe</p>
    </div>
    <NButton type="info" v-if="props.showDataFlowBtn" @click="showModal = true">展示数据流结构</NButton>
  </div>
  <n-modal v-model:show="showModal">
    <n-card style="width: 600px; height: 600px;" title="当前数据流结构" :bordered="true" size="huge">
      <div class="overflow-y-scroll h-[500px]">
        <p class="whitespace-pre overflow-hidden overflow-ellipsis">{{ dataFlow }}</p>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { PiedPiperSquare } from '@vicons/fa'
import { NButton, NModal, NCard } from 'naive-ui';
import { computed, defineProps, ref } from 'vue'
import { useDefaultStore } from '../../store/store';

const props = defineProps<{
  showDataFlowBtn: boolean
}>()

const showModal = ref(false)

const store = useDefaultStore()

const dataFlow = computed(() => {
  const flowDataList = store.editorList.map((editor, index) => {
    editor.sort = index + 1
    return {
      ...editor
    }
  })
  const finalFlowDataList = [
    {
      type: "DataSource",
      data: store.dataSource,
    },
    ...flowDataList
  ]
  return JSON.stringify(finalFlowDataList, null, 2)
})

</script>