<template>
  <div class="mainBodyCenterContainer">
    <h3>Last Activities</h3>
    <div v-if="lastActivitiesItems">
      <div v-for="(item, itemName, index) in lastActivitiesItems" :key="item">
        <widgets.mActivitySummary
          :svg-icon-header="mdiRun"
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
          :background-color="
            index % 2 === 0
              ? 'linear-gradient(283deg, rgba(17,19,22,1) 22%, rgba(0,54,69,1) 62%, rgba(17,19,22,1) 100%)'
              : 'linear-gradient(283deg, rgba(7,16,10,1) 22%, rgba(0,62,21,1) 62%, rgba(7,16,10,1) 100%)'
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useLastActivitiesStore } from '@/stores/lastActivities'
import widgets from '../widgetLib'
import { mdiRun, mdiMapMarkerDistance, mdiShoeSneaker, mdiHeartPulse } from '@mdi/js'

const iconsColor = 'rgb(0, 168, 64)'
const lastActivitiesStore = useLastActivitiesStore()
const { lastActivitiesItems } = storeToRefs(lastActivitiesStore)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/lastActivities')
    lastActivitiesItems.value = response.data
  } catch (err) {
    console.log(err)
  }
})
</script>
