<template>
  <div class="item h-[200px] w-[300px] p-2 flex flex-shrink-0 flex-col justify-between">
    <div class="text-green-900 text-lg font-bold">数据分析</div>
    <div>Demo 模型待定</div>
    <div class="flex flex-row items-center space-x-2">
      <n-button class="flex-1" type="success" @click="confirmData">选择模块</n-button>
      <n-popover :style="{ maxWidth: '300px' }" placement="bottom" trigger="click">
        <template #trigger>
          <n-button strong secondary circle type="warning">
            <n-icon>
              <Question />
            </n-icon>
          </n-button>
        </template>
        <span class="text-gray-900 font-normal">
          大数据分析技术主要包括已有数据的分布式统计分析技术和未知数据的分布式挖掘、深度学习技术。分布式统计分析可由数据处理技术完成，分布式挖掘和深度学习技术则在大数据分析阶段完成，包括聚类与分类、关联分析、深度学习等，可挖掘大数据集合中的数据关联性，形成对事物的描述模式或属性规则，可通过构建机器学习模型和海量训练数据提升数据分析与预测的准确性。
          数据分析是大数据处理与应用的关键环节，它决定了大数据集合的价值性和可用性，以及分析预测结果的准确性。在数据分析环节，应根据大数据应用情境与决策需求，选择合适的数据分析技术，提高大数据分析结果的可用性、价值性和准确性质量。
        </span>
      </n-popover>
    </div>
  </div>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard, NPopover } from 'naive-ui';

import { ref } from 'vue'
import { useDefaultStore } from '../../../../../store/store';
import { EditorItem } from '../../../model/EditorItem';
import { EditorItemType } from '../../../model/EditorItemType';
import { Question } from '@vicons/fa'

const store = useDefaultStore()

const props = defineProps<{
  closeDrawer: () => void,
}>()

const confirmData = () => {
  props.closeDrawer()
  // 将消息发送到store
  store.pushEditorItem({
    id: Math.random().toString(36).slice(-8),
    type: EditorItemType.DataAnalysisType,
  })
}

</script>

<style>
.item {
  @apply bg-white shadow-md rounded-lg border border-gray-200;
}
</style>