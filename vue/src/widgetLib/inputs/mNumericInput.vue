<template>
  <input
    type="number"
    :value="inputValue"
    @input="emits('update:inputValue', Number($event.target.value))"
    :class="controlsSize"
  />
</template>

<script setup lang="ts">
import { ControlsSizes } from '../constants/constants'
import type { ControlsSize } from '../types/types'

const props = defineProps({
  inputValue: {
    type: Number,
    default: '',
  },
  controlsSize: {
    type: String,
    validator(value: ControlsSize) {
      return Object.values(ControlsSizes).includes(value)
    },
    default: ControlsSizes.MEDIUM,
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
