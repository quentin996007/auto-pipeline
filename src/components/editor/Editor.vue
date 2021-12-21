<template>
  <p>编辑器</p>
  <p>{{ dataSource }}</p>
</template>

<script setup lang="ts">

import { computed, onMounted } from 'vue'
import { useStore } from '../../vuex/store';

const store = useStore()

const dataSource = computed(() => {
  const { state } = store;
  return state.dataSource;
})

onMounted(() => {
  console.log('mounted')
})
</script>

<style>
</style>