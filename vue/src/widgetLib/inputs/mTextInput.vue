<template>
  <input
    type="text"
    :value="inputText"
    @input="emits('update:inputText', $event.target.value)"
    :class="controlsSize"
  />
</template>

<script setup lang="ts">
import { ControlsSizes } from '../constants/constants'
import type { ControlsSize } from '../types/types'

const props = defineProps({
  inputText: {
    type: String,
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
const emits = defineEmits(['update:inputText'])
</script>

<style scoped lang="scss">
@use '../widgets.scss';

input {
  @extend .mInput;
}
</style>
