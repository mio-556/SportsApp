import { ActivityNames } from '@/constants/constants'

export type BaseActivity = {
  // TODO: add more items
  title: string
  distance?: number
  avgHeartRate?: number
}
// for initializing purpose
export const defaultBaseActivity: BaseActivity = {
  title: '',
  distance: 0,
  avgHeartRate: 0,
}

export type RunActivity = BaseActivity & {
  shoes?: string
  runType?: string
  cadence?: number
}

export const defaultRunActivity: RunActivity = {
  ...defaultBaseActivity,
  shoes: '',
  runType: '',
  cadence: 0,
}

export type BikeActivity = BaseActivity & {
  bikeType?: string
  rideType?: string
}

export const defaultBikeActivity: BikeActivity = {
  ...defaultBaseActivity,
  bikeType: '',
  rideType: '',
}

export type SwimActivity = BaseActivity & {
  waterTemperature?: Number
  swimType?: string
}

export const defaultSwimActivity: SwimActivity = {
  ...defaultBaseActivity,
  waterTemperature: 0,
  swimType: '',
}

export type ActivityNamesType = (typeof ActivityNames)[keyof typeof ActivityNames]
export type ActivityType = RunActivity | BikeActivity | SwimActivity
