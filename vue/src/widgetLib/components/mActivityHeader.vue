<template>
  <div class="m-activity-header">
    <h3>{{ props.title }}</h3>
    <MActivitySubItem
      :svg="svg"
      :icon-fill-color="props.iconColor"
      :data-text="String(props.totalDistance)"
      :unit="props.unit"
    />
  </div>
  <div
    style="padding-bottom: 0.5em; margin-bottom: 1em; display: flex; justify-content: space-between"
  >
    <MButton text="Add new" @clicked="addNewButtonClicked" />
    <MButton text="Delete" @clicked="deleteButtonClicked" />
  </div>
</template>

<script setup lang="ts">
import MButton from '../buttons/mButton.vue'
import MActivitySubItem from './mActivitySubItem.vue'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  svg: {
    type: String,
    required: false,
    default: '',
  },
  iconColor: {
    type: String,
    required: false,
    default: '',
  },
  totalDistance: {
    type: Number,
    required: false,
    default: '',
  },
  unit: {
    type: String,
    required: false,
    default: '',
  },
})
const emits = defineEmits(['addNewButtonClicked', 'deleteButtonClicked'])

const addNewButtonClicked = () => {
  emits('addNewButtonClicked')
}

const deleteButtonClicked = () => {
  emits('deleteButtonClicked')
}
</script>
<style scoped lang="scss">
@use './components';
</style>
