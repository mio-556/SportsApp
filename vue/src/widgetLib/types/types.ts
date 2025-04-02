import { ControlsSizes } from '../constants/constants'

export type ControlsSize = (typeof ControlsSizes)[keyof typeof ControlsSizes]
