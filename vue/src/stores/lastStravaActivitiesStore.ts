import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLastStravaActivitiesStore = defineStore('lastStravaActivitiesStore', () => {
  const dummy = ref(0)
  const selectedActivityId = ref(0)
  const activities = ref<Object[]>([])
  return { dummy, selectedActivityId, activities }
})
