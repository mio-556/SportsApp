import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  defaultBaseActivity,
  defaultRunActivity,
  defaultBikeActivity,
  defaultSwimActivity,
} from '@/types/activityTypes'
import type { ActivityNamesType, BaseActivity, RunActivity } from '@/types/activityTypes'
import { ActivityNames } from '@/constants/constants'

const createDefaultActivity = <T extends BaseActivity>(activityType: ActivityNamesType): T => {
  if (activityType === ActivityNames.RUN) {
    return defaultRunActivity as T
  } else if (activityType === ActivityNames.BIKE) {
    return defaultBikeActivity as T
  } else if (activityType === ActivityNames.SWIM) {
    return defaultSwimActivity as T
  }
  return defaultBaseActivity as T
}

//creates new ActivityStore that is based on the specific Activity type
export const createActivityStore = <T extends BaseActivity>(storeType: ActivityNamesType) => {
  return defineStore(storeType, () => {
    const activities = ref<T[]>([])
    const totalDistance = computed(() => {
      return activities.value.reduce((total, item) => total + (item.distance ?? 0), 0) ?? 0
    })
    // create newActivity and initialize it by the default object
    const newActivity = ref<T>(createDefaultActivity<T>(storeType))

    return { activities, totalDistance, newActivity }
  })
}
