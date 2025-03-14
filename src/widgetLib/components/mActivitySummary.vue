<template>
  <div class="container">
    <div class="container-header">
      <div class="header-left">
        {{ props.headerText }}
      </div>
      <div class="header-right">
        {{ props.headerDate }}
      </div>
    </div>
    <div class="content-left">
      <MActivitySubItem
        :icon-source="iconSource1"
        :text="props.text1"
        :data-text="props.data1"
        :unit="props.unit1"
      />
      <MActivitySubItem
        :icon-source="iconSource2"
        :text="props.text2"
        :data-text="props.data2"
        :unit="props.unit2"
      />
    </div>
    <div class="content-right">
      <MActivitySubItem
        :icon-source="iconSource3"
        :text="props.text3"
        :data-text="props.data3"
        :unit="props.unit3"
      />
    </div>
  </div>
</template>
<script setup language="ts">
import { onMounted, ref } from 'vue'
import MActivitySubItem from './mActivitySubItem.vue'

const props = defineProps({
  headerText: {
    required: false,
    default: 'header text',
  },
  headerDate: {
    required: false,
    default: 'header date',
  },
  text1: {
    type: String,
    required: false,
    default: '',
  },
  text2: {
    type: String,
    required: false,
    default: '',
  },
  text3: {
    type: String,
    required: false,
    default: '',
  },
  icon1: {
    type: String,
    required: false,
    default: '',
  },
  icon2: {
    type: String,
    required: false,
    default: '',
  },
  icon3: {
    type: String,
    required: false,
    default: '',
  },
  data1: {
    required: false,
    default: '',
  },
  data2: {
    required: false,
    default: '',
  },
  data3: {
    required: false,
    default: '',
  },
  unit1: {
    type: String,
    required: false,
    default: '',
  },
  unit2: {
    type: String,
    required: false,
    default: '',
  },
  unit3: {
    type: String,
    required: false,
    default: '',
  },
})

const iconSource1 = ref('')
const iconSource2 = ref('')
const iconSource3 = ref('')

onMounted(async () => {
  const icons = await import('@mdi/js')

  iconSource1.value = props.icon1 in icons ? icons[props.icon1] : ''
  iconSource2.value = props.icon2 in icons ? icons[props.icon2] : ''
  iconSource3.value = props.icon3 in icons ? icons[props.icon3] : ''
})
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'containerHeader containerHeader'
    'contentLeft contentRight';
  border-radius: 5px;
  border: solid 1px var(--text-color);
  margin-bottom: 1em;
  padding: 0.5em 1em 1em 1em;
  font-weight: bold;
}
.container-header {
  grid-area: containerHeader;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'headerLeft headerRight';
  margin-bottom: 1.5em;
}
.header-left {
  grid-area: headerLeft;
  justify-self: left;
}
.header-right {
  grid-area: headerRight;
  justify-self: right;
}
.content-left {
  grid-area: contentLeft;
}
.content-right {
  grid-area: contentRight;
}
</style>
