import { ActivityNames } from '@/constants/constants'
import { createActivityStore } from './activityStore'
import type { RunActivity } from '@/types/activityTypes'

export const useRunStore = createActivityStore<RunActivity>(ActivityNames.RUN)
