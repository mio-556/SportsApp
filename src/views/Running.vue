<template>
  <div class="mainBodyCenterContainer">
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      "
    >
      <h3>Running</h3>
      <widgets.mActivitySubItem :icon-source="mdiRun" :data-text="runsTotalDistance" unit="km" />
    </div>
    <div
      style="border-bottom: solid 1px var(--text-color); padding-bottom: 0.5em; margin-bottom: 1em"
    >
      <widgets.mButton text="Add new" />
    </div>

    <div v-if="runsData">
      <div v-for="(item, itemName) in runsData" :key="item">
        <widgets.mActivitySummary
          :header-text="item.description"
          :header-date="itemName"
          text1="Distance"
          icon1="mdiMapMarkerDistance"
          :data1="item.distance"
          unit1="km"
          text2="Shoes"
          icon2="mdiShoeSneaker"
          :data2="item.shoes"
          text3="Avg hr"
          icon3="mdiHeartPulse"
          :data3="item.avgHr"
          unit3="b/m"
        />
      </div>
    </div>
    <div v-else>Loading data...</div>
  </div>
  <div class="mainBodyRightContainer"></div>
</template>

<script setup>
import { fetchJsonData } from '@/helpers/dataFetch'
import widgets from '@/widgetLib'
import { onMounted, ref } from 'vue'
import { mdiRun } from '@mdi/js'

const runsData = ref()
const runsTotalDistance = ref(0)

onMounted(async () => {
  runsData.value = await fetchJsonData('runsData.json')
  // claculate total distance
  for (let item in runsData.value) {
    runsTotalDistance.value += runsData.value[item].distance
  }
})
</script>
