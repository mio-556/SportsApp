<template>
  <div class="content">
    <div v-if="props.svg === ''" style="margin-bottom: 0.5em">
      {{ props.text }} : {{ props.dataText }} {{ props.unit }}
    </div>
    <div v-else style="display: flex; flex-direction: row; align-items: center">
      <MSvg :d="svg" :fill="props.iconFillColor" />
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
  svg: {
    type: String,
    required: false,
    default: '',
  },
  iconFillColor: {
    type: String,
    required: false,
    default: '',
  },
  textColor: {
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
  backgroundColor: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
