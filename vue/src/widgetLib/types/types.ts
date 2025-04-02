import { ControlSizes } from '../constants/constants'

export type ControlSize = (typeof ControlSizes)[keyof typeof ControlSizes]
