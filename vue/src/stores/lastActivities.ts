import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLastActivitiesStore = defineStore('lastActivitiesStore', () => {
  const lastActivitiesItems = ref({})

  return { lastActivitiesItems }
})
