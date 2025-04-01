<template>
  <input type="text" :value="inputText" @input="emits('update:inputText', $event.target.value)" />
</template>

<script setup lang="ts">
const props = defineProps({
  inputText: {
    type: String,
    default: '',
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
