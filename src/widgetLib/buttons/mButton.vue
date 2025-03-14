<template>
  <button class="mButton" img="">{{ props.text }}</button>
</template>

<script setup lang="ts">
import MSvg from '../images/mSvg.vue'

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
