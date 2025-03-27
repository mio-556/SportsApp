import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type Activity = {
  // TODO: add more items
  distance?: number
}

export const useRunsStore = defineStore('runsStore', () => {
  const runItems = ref<Activity[]>([])
  const totalDistance = computed(() => {
    return runItems.value.reduce((total, item) => total + (item.distance ?? 0), 0)
  })

  return { runItems, totalDistance }
})
