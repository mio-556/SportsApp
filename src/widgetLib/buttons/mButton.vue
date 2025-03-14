<template>
  <!-- <button class="mButton" img="">{{ props.text }}</button> -->
  <div class="mButton">{{ props.text }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
@use '../widgets.scss';
</style>
