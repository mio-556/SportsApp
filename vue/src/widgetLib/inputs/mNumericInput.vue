<template>
  <input
    type="number"
    :value="inputValue"
    @input="emits('update:inputValue', Number($event.target.value))"
    :class="controlsSize"
  />
</template>

<script setup lang="ts">
import { ControlSizes } from '../constants/constants'
import type { ControlSize } from '../types/types'

const props = defineProps({
  inputValue: {
    type: Number,
    default: '',
  },
  controlsSize: {
    type: String,
    validator(value: ControlSize) {
      return Object.values(ControlSizes).includes(value)
    },
    default: ControlSizes.MEDIUM,
  },
})
const emits = defineEmits(['update:inputValue'])
</script>

<style scoped lang="scss">
@use '../widgets.scss';

input {
  @extend .mInput;
}
</style>
