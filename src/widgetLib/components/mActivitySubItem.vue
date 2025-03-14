<template>
  <div class="content">
    <div v-if="props.iconSource === ''" style="margin-bottom: 0.5em">
      {{ props.text }} : {{ props.dataText }} {{ props.unit }}
    </div>
    <div v-else style="display: flex; flex-direction: row; align-items: center">
      <MSvg :d="iconSource" />
      <div style="margin-left: 1em">{{ props.dataText }} {{ props.unit }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MSvg from '../images/mSvg.vue'

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  iconSource: {
    type: String,
    required: false,
    default: '',
  },
  dataText: {
    required: false,
    default: 'dataText',
  },
  unit: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
<style scoped>
.content {
  font-weight: bold;
}
</style>
