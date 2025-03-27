export type BaseActivity = {
  // TODO: add more items
  title: string
  distance?: number
}

export type RunActivity = BaseActivity & {
  shoes?: string
  runType?: string
}

export type BikeActivity = BaseActivity & {
  bikeType?: string
  rideType?: string
}

export type SwimActivity = BaseActivity & {
  waterTemperature?: Number
  swimType?: string
}
