import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { defaultBaseActivity, type BaseActivity } from '@/types/activityTypes'

export const createActivityStore = <T extends BaseActivity>(storeId: string) => {
  return defineStore(storeId, () => {
    const activities = ref<T[]>([])
    const totalDistance = computed(() => {
      return activities.value.reduce((total, item) => total + (item.distance ?? 0), 0)
    })
    // create generic newActivity and initialize it by the default object, otherwise it will be empty
    const newActivity = ref<T>({ ...defaultBaseActivity } as T)

    return { activities, totalDistance, newActivity }
  })
}
