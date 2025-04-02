<template>
  <input
    type="text"
    :value="inputText"
    @input="emits('update:inputText', $event.target.value)"
    :class="controlsSize"
  />
</template>

<script setup lang="ts">
import { ControlSizes } from '../constants/constants'
import type { ControlSize } from '../types/types'

const props = defineProps({
  inputText: {
    type: String,
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
const emits = defineEmits(['update:inputText'])
</script>

<style scoped lang="scss">
@use '../widgets.scss';

input {
  @extend .mInput;
}
</style>
