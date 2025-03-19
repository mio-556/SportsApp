<template>
  <div class="mainBodyCenterContainer">
    <widgets.mActivityHeader
      title="Running"
      :svg="mdiRun"
      :icon-color="iconsColor"
      :total-distance="runsTotalDistance"
      unit="km"
      @add-new-button-clicked="openAddNewRunDialog"
    />

    <div v-if="runItems">
      <div v-for="(item, itemName, index) in runItems" :key="item">
        <widgets.mActivitySummary
          :header-text="item.description"
          :header-date="itemName"
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
          :background-color="index % 2 === 0 ? '#111316' : '#07100a'"
        />
      </div>
    </div>
    <div v-else>Loading data...</div>
  </div>
  <div class="mainBodyRightContainer"></div>
</template>

<script setup>
import { fetchJsonData } from '@/helpers/dataFetch'
import axios from 'axios'
import widgets from '@/widgetLib'
import { onMounted, ref } from 'vue'
import { mdiRun, mdiMapMarkerDistance, mdiShoeSneaker, mdiHeartPulse } from '@mdi/js'
import { useRunsStore } from '@/stores/running'
import { storeToRefs } from 'pinia'

const iconsColor = 'rgb(0, 168, 90)'
const runsStore = useRunsStore()
const { runItems, runsTotalDistance } = storeToRefs(runsStore)

const openAddNewRunDialog = async () => {
  console.log('TODO: Open Add Run Dialog')
}

onMounted(async () => {
  //fetch the data from the backend server /runs endpoint
  try {
    const response = await axios.get('http://localhost:3000/runs')
    runItems.value = response.data
  } catch (err) {
    console.log(`${err}`)
  }

  // claculate total distance
  runsTotalDistance.value = 0
  for (let item in runItems.value) {
    runsTotalDistance.value += runItems.value[item].distance
  }
})
</script>
