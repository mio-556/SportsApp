import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRunsStore = defineStore('runsStore', () => {
  const runItems = ref({})
  const runsTotalDistance = ref(0)

  return { runItems, runsTotalDistance }
})
