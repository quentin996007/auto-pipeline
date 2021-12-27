<template>
  <div class="item h-[200px] w-[300px] p-2 flex flex-shrink-0 flex-col justify-between">
    <div class="text-green-900 text-lg font-bold">数据预处理</div>
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
          大数据采集过程中通常有一个或多个数据源，这些数据源包括同构或异构的数据库、文件系统、服务接口等，易受到噪声数据、数据值缺失、数据冲突等影响，因此需首先对收集到的大数据集合进行预处理，以保证大数据分析与预测结果的准确性与价值性。
          大数据的预处理环节主要包括数据清理、数据集成、数据归约与数据转换等内容，可以大大提高大数据的总体质量，是大数据过程质量的体现。 数据清理技术包括对数据的不一致检测、噪声数据的识别、数据过滤与修正等方面，有利于提高大数据的一致性、准确性、真实性和可用性等方面的质量;
          数据集成则是将多个数据源的数据进行集成，从而形成集中、统一的数据库、数据立方体等，这一过程有利于提高大数据的完整性、一致性、安全性和可用性等方面质量。
        </span>
      </n-popover>
    </div>
  </div>
</template>

<script setup lang="ts">

import { NButton, NModal, NDropdown, NCard } from 'naive-ui';

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