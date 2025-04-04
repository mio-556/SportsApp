<template>
  <MAddActivityDialog
    v-model:is-open="isNewPostDialogOpen"
    :activity-name="ActivityNames.RUN"
    :new-activity="newActivity"
    @activity-added="getActivities"
  />

  <div class="mainBodyCenterContainer">
    <widgets.mActivityHeader
      title="Running"
      :svg="mdiRun"
      :icon-color="iconsColor"
      :total-distance="runStore.totalDistance"
      unit="km"
      @add-new-button-clicked="openAddNewRunDialog"
    />

    <div v-if="activityLoaded && activities.length > 0">
      <div v-for="(item, index) in activities" :key="item">
        <widgets.mActivitySummary
          :header-text="item.title"
          :header-date="item.dateTime"
          text1="Distance"
          :svgIcon1="mdiMapMarkerDistance"
          :data1="item.distance"
          unit1="km"
          text2="Shoes"
          :svgIcon2="mdiShoeSneaker"
          :data2="item.shoes"
          text3="Avg hr"
          :svgIcon3="mdiHeartPulse"
          :data3="item.avgHeartRate"
          unit3="b/m"
          :icons-color="iconsColor"
          :background-color="
            index % 2 === 0
              ? 'linear-gradient(283deg, rgba(17,19,22,1) 22%, rgba(0,54,69,1) 62%, rgba(17,19,22,1) 100%)'
              : 'linear-gradient(283deg, rgba(7,16,10,1) 22%, rgba(0,62,21,1) 62%, rgba(7,16,10,1) 100%)'
          "
        />
      </div>
    </div>
    <div v-else-if="!activityLoaded">Loading data...</div>
    <div v-else>No activities.</div>
  </div>
  <div class="mainBodyRightContainer"></div>
</template>

<script setup>
import axios from 'axios'
import widgets from '@/widgetLib'
import { onMounted, ref, watch } from 'vue'
import { mdiRun, mdiMapMarkerDistance, mdiShoeSneaker, mdiHeartPulse } from '@mdi/js'
import { useRunStore } from '@/stores/runStore'
import { storeToRefs } from 'pinia'
import MAddActivityDialog from '@/components/mAddActivityDialog.vue'
import { ActivityNames } from '@/constants/constants'
import { BACKEND_URL } from '@/constants/api'
import { useUserStore } from '@/stores/userStore'

const iconsColor = 'rgb(0, 168, 64)'
const userStore = useUserStore()
const runStore = useRunStore()
const { selectedUser } = storeToRefs(userStore)
const { activities, newActivity } = storeToRefs(runStore)
const isNewPostDialogOpen = ref(false)
const activityLoaded = ref(false)

const openAddNewRunDialog = () => {
  isNewPostDialogOpen.value = true
}

//fetch the data from the backend server and save to store
const getActivities = async () => {
  // reset the states first
  activityLoaded.value = false
  // clear activity store first
  if (activities.value?.length > 0) {
    activities.value.length = 0
  }

  try {
    const response = await axios.get(
      `${BACKEND_URL}/activities/user/${selectedUser.value}/runActivities`,
    )
    activityLoaded.value = true
    if (response.data.message === 'No Data') {
      return
    }
    activities.value = response.data?.runActivities
  } catch (err) {
    activityLoaded.value = true
    console.log(`${err}`)
  }
}

watch(selectedUser, async () => {
  await getActivities()
})

onMounted(async () => {
  await getActivities()
})
</script>
