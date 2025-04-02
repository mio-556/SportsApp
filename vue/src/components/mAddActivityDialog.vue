<template>
  <widgets.mDialog
    :is-open="isOpen"
    :click-outside-to-close="false"
    @close="emits('update:isOpen', false)"
  >
    <template #header>Add new Running Activity</template>
    <template #body>
      <div class="table-container">
        <div class="table-row">
          <div>Title</div>
          <widgets.mTextInput
            v-model:input-text="activityTitle"
            :controls-size="widgets.ControlsSizes.LARGE"
          />
        </div>

        <div class="table-row">
          <div>Distance [km]</div>
          <widgets.mNumericInput
            v-model:input-value="activityDistance"
            :controls-size="widgets.ControlsSizes.SMALL"
          />
        </div>
        <div class="table-row">
          <div>Avg.HeartRate [b/m]</div>
          <widgets.mNumericInput
            v-model:input-value="activityAvgHR"
            :controls-size="widgets.ControlsSizes.SMALL"
          />
        </div></div
    ></template>
    <template #footer>
      <widgets.mButton text="Close" @clicked="emits('update:isOpen', false)" />
      <widgets.mButton
        text="Add"
        @clicked="
          console.log(
            `New activity add request: title: ${activityTitle}, distance: ${activityDistance}, avgHR: ${activityAvgHR}`,
          )
        "
      />
    </template>
  </widgets.mDialog>
</template>
<script setup lang="ts">
import widgets from '@/widgetLib'

import { ref } from 'vue'
import type { RunActivity } from '@/types/activityTypes'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
//needed for two way binding regarding the open state
const emits = defineEmits(['update:isOpen'])

const activityTitle = ref('')
const activityDistance = ref(0)
const activityAvgHR = ref(0)
</script>
<style scoped lang="scss">
.table-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 2.5em);
  height: 100%;
}
.table-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .row-left {
  }
  .row-right {
  }
}
</style>
