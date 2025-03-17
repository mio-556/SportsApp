<template>
  <!-- <button class="mButton" img="">{{ props.text }}</button> -->
  <div class="mButton" @click="onButtonClicked">{{ props.text }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
const emits = defineEmits(['clicked'])

const onButtonClicked = () => {
  emits('clicked')
}
</script>

<style scoped lang="scss">
@use '../widgets.scss';
</style>
