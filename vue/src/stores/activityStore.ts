import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { BaseActivity } from '@/types/activityTypes'

export const createActivityStore = <T extends BaseActivity>(storeId: string) => {
  return defineStore(storeId, () => {
    const activities = ref<T[]>([])
    const totalDistance = computed(() => {
      return activities.value.reduce((total, item) => total + (item.distance ?? 0), 0)
    })
    const newActivity = ref<T>()

    return { activities, totalDistance, newActivity }
  })
}
