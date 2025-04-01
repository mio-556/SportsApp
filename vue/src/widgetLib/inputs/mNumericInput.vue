<template>
  <input
    type="number"
    :value="inputValue"
    @input="emits('update:inputValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  inputValue: {
    type: Number,
    default: '',
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
