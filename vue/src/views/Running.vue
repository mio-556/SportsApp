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

    <div v-if="runsData">
      <div v-for="(item, itemName, index) in runsData" :key="item">
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

const iconsColor = 'rgb(0, 168, 90)'
const runsData = ref()
const runsTotalDistance = ref(0)

const openAddNewRunDialog = async () => {
  console.log('TODO: Open Add Run Dialog')
}

onMounted(async () => {
  // runsData.value = await fetchJsonData('runsData.json')

  //fetch the data from the backend server /runs endpoint
  try {
    const response = await axios.get('http://192.168.0.104:3000/runs')
    runsData.value = response.data
  } catch (err) {
    console.log(`${err}`)
  }

  // claculate total distance
  for (let item in runsData.value) {
    runsTotalDistance.value += runsData.value[item].distance
  }
})
</script>
