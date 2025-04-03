import { ActivityNames } from '@/constants/constants'
import { createActivityStore } from './activityStore'
import type { BikeActivity } from '@/types/activityTypes'

export const useBikeStore = createActivityStore<BikeActivity>(ActivityNames.BIKE)
