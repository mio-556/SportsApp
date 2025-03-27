<template>
  <div class="mainBodyCenterContainer">
    <widgets.mActivityHeader
      title="Running"
      :svg="mdiRun"
      :icon-color="iconsColor"
      :total-distance="totalDistance"
      unit="km"
      @add-new-button-clicked="openAddNewRunDialog"
    />

    <div v-if="runItems">
      <div v-for="(item, index) in runItems" :key="item">
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
          :data3="item.avgHr"
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
import { useRunsStore } from '@/stores/running'
import { storeToRefs } from 'pinia'

const iconsColor = 'rgb(0, 168, 64)'
const runsStore = useRunsStore()
const { runItems, totalDistance } = storeToRefs(runsStore)

const openAddNewRunDialog = async () => {
  console.log('TODO: Open Add Run Dialog')
}

onMounted(async () => {
  //fetch the data from the backend server /runs endpoint
  try {
    const response = await axios.get('http://localhost:3000/activities/user/1/runActivities')
    runItems.value = response.data.runActivities
  } catch (err) {
    console.log(`${err}`)
  }
})
</script>
