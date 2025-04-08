// Math.round((item.distance / 1000 + Number.EPSILON) * 100) / 100
export const roundTo = (inputValue: number, decimalPlaces: number): number => {
  return Math.round((inputValue + Number.EPSILON) * 10 ** decimalPlaces) / 10 ** decimalPlaces
}
