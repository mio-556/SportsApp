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

        <div
          v-if="
            props.activityName === ActivityNames.RUN || props.activityName === ActivityNames.BIKE
          "
          class="table-row"
        >
          <div>Distance [km]</div>
          <widgets.mNumericInput
            v-model:input-value="newActivity.distance"
            :controls-size="widgets.ControlSizes.SMALL"
          />
        </div>
        <div
          v-if="
            props.activityName === ActivityNames.RUN ||
            props.activityName === ActivityNames.BIKE ||
            props.activityName === ActivityNames.SWIM
          "
          class="table-row"
        >
          <div>Avg.HeartRate [b/m]</div>
          <widgets.mNumericInput
            v-model:input-value="newActivity.avgHeartRate"
            :controls-size="widgets.ControlSizes.SMALL"
          />
        </div>

        <div v-if="props.activityName === ActivityNames.RUN" class="table-row">
          <div>Shoes</div>
          <widgets.mTextInput
            v-model:input-text="newActivity.shoes"
            :controls-size="widgets.ControlSizes.MEDIUM"
          />
        </div>

        <div v-if="props.activityName === ActivityNames.RUN" class="table-row">
          <div>Cadence [s/m]</div>
          <widgets.mNumericInput
            v-model:input-value="newActivity.cadence"
            :controls-size="widgets.ControlSizes.SMALL"
          />
        </div></div
    ></template>
    <template #footer>
      <widgets.mButton text="Close" @clicked="emits('update:isOpen', false)" />
      <widgets.mButton text="Add" @clicked="addActivityClicked()" />
    </template>
  </widgets.mDialog>
</template>
<script setup lang="ts">
import widgets from '@/widgetLib'

import { ref, computed } from 'vue'
import { ActivityNames } from '@/constants/constants'
import type { PropType } from 'vue'
import type { ActivityNamesType, ActivityType } from '@/types/activityTypes'
import axios from 'axios'
import { BACKEND_URL } from '@/constants/api'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  activityName: {
    type: String as PropType<ActivityNamesType>,
    default: ActivityNames.SWIM,
  },
  newActivity: {
    type: Object as PropType<ActivityType>,
    required: true,
  },
})
//needed for two way binding regarding the open state
const emits = defineEmits(['update:isOpen', 'activityAdded'])

const userStore = useUserStore()
const { selectedUserId } = storeToRefs(userStore)

const activityTitle = ref('')
const activityDistance = ref(0)
const activityAvgHR = ref(0)
const activityName = computed(() => {
  return props.activityName.charAt(0).toUpperCase() + props.activityName.slice(1)
})

const addActivityClicked = async () => {
  try {
    const response = await axios.post(`${BACKEND_URL}/activities/RunActivity/add`, {
      ...props.newActivity,
      userId: selectedUserId.value,
    })
    // when activity added sucessfully close the dialog
    if (response.data.message === 'Success') {
      emits('update:isOpen', false)
      emits('activityAdded')
    }
  } catch (err) {
    console.log(`${err}`)
  }
}
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
