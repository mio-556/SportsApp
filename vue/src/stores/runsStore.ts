import { createActivityStore } from './activityStore'
import type { RunActivity } from '@/types/activityTypes'

export const useRunsStore = createActivityStore<RunActivity>('runsStore')
