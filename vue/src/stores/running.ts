import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { BaseActivity } from '@/types/activityTypes'

export const useRunsStore = defineStore('runsStore', () => {
  const runItems = ref<BaseActivity[]>([])
  const totalDistance = computed(() => {
    return runItems.value.reduce((total, item) => total + (item.distance ?? 0), 0)
  })

  return { runItems, totalDistance }
})
