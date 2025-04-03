<template>
  <widgets.mDialog
    :is-open="isOpen"
    :click-outside-to-close="false"
    @close="emits('update:isOpen', false)"
  >
    <template #header>Add new {{ activityName }} Activity</template>
    <template #body>
      <div class="table-container">
        <div class="table-row">
          <div>Title</div>
          <widgets.mTextInput
            v-model:input-text="newActivity.title"
            :controls-size="widgets.ControlSizes.LARGE"
          />
        </div>

        <div class="table-row">
          <div>Distance [km]</div>
          <widgets.mNumericInput
            v-model:input-value="newActivity.distance"
            :controls-size="widgets.ControlSizes.SMALL"
          />
        </div>
        <div class="table-row">
          <div>Avg.HeartRate [b/m]</div>
          <widgets.mNumericInput
            v-model:input-value="newActivity.avgHeartRate"
            :controls-size="widgets.ControlSizes.SMALL"
          />
        </div>

        <div class="table-row">
          <div>Cadence [s/m]</div>
          <widgets.mNumericInput
            v-model:input-value="newActivity.cadence"
            :controls-size="widgets.ControlSizes.SMALL"
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

import { ref, computed } from 'vue'
import { ActivityNames } from '@/constants/constants'
import type { PropType } from 'vue'
import type { ActivityNamesType, ActivityType } from '@/types/activityTypes'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  ActivityName: {
    type: String as PropType<ActivityNamesType>,
    default: ActivityNames.RUN,
  },
  newActivity: {
    type: Object as PropType<ActivityType>,
    required: true,
  },
})
//needed for two way binding regarding the open state
const emits = defineEmits(['update:isOpen'])

const activityTitle = ref('')
const activityDistance = ref(0)
const activityAvgHR = ref(0)
const activityName = computed(() => {
  return props.ActivityName.charAt(0).toUpperCase() + props.ActivityName.slice(1)
})
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
