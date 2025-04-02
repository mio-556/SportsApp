<template>
  <MAddActivityDialog v-model:is-open="isNewPostDialogOpen" :activity-type="ActivityNames.RUN" />

  <div class="mainBodyCenterContainer">
    <widgets.mActivityHeader
      title="Running"
      :svg="mdiRun"
      :icon-color="iconsColor"
      :total-distance="runsStore.totalDistance"
      unit="km"
      @add-new-button-clicked="openAddNewRunDialog"
    />

    <div v-if="activities">
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
    <div v-else>Loading data...</div>
  </div>
  <div class="mainBodyRightContainer"></div>
</template>

<script setup>
import axios from 'axios'
import widgets from '@/widgetLib'
import { onMounted, ref } from 'vue'
import { mdiRun, mdiMapMarkerDistance, mdiShoeSneaker, mdiHeartPulse } from '@mdi/js'
import { useRunsStore } from '@/stores/runsStore'
import { storeToRefs } from 'pinia'
import MAddActivityDialog from '@/components/mAddActivityDialog.vue'
import { ActivityNames } from '@/constants/constants'

const iconsColor = 'rgb(0, 168, 64)'
const runsStore = useRunsStore()
const { activities, newActivity } = storeToRefs(runsStore)
const isNewPostDialogOpen = ref(false)

const openAddNewRunDialog = () => {
  isNewPostDialogOpen.value = true
}

onMounted(async () => {
  //fetch the data from the backend server
  try {
    const response = await axios.get('http://localhost:3000/activities/user/1/runActivities')
    activities.value = response.data.runActivities
  } catch (err) {
    console.log(`${err}`)
  }
})
</script>
