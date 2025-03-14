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
        :svg="props.svgIcon1"
        :icon-fill-color="props.iconsColor"
        :text="props.text1"
        :data-text="props.data1"
        :unit="props.unit1"
      />
      <MActivitySubItem
        :svg="props.svgIcon2"
        :icon-fill-color="props.iconsColor"
        :text="props.text2"
        :data-text="props.data2"
        :unit="props.unit2"
      />
    </div>
    <div class="content-right">
      <MActivitySubItem
        :svg="props.svgIcon3"
        :icon-fill-color="props.iconsColor"
        :text="props.text3"
        :data-text="props.data3"
        :unit="props.unit3"
      />
    </div>
  </div>
</template>
<script setup language="ts">
import { computed } from 'vue'
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
  svgIcon1: {
    type: String,
    required: false,
    default: '',
  },
  svgIcon2: {
    type: String,
    required: false,
    default: '',
  },
  svgIcon3: {
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
  iconsColor: {
    type: String,
    required: false,
    default: '',
  },
  backgroundColor: {
    type: String,
    required: false,
    default: '',
  },
})

const backgroundColor = computed(() => props.backgroundColor)
</script>
<style scoped lang="scss">
@use './components.scss';
.container {
  display: grid;
  grid-template-columns: 3em 1fr 3em 1fr 3em;
  grid-template-rows: auto;
  grid-template-areas:
    'containerHeader containerHeader containerHeader containerHeader containerHeader'
    '. contentLeft . contentRight .';
  border-radius: 5px;
  border: solid 2px;
  border-color: var(--m-border-color);
  margin-bottom: 1em;
  padding: 0.5em 1em 1em 1em;
  font-weight: bold;
  background-color: v-bind(backgroundColor);
}
.container {
  display: grid;
  grid-template-columns: 3em 1fr 3em 1fr 3em;
  grid-template-rows: auto;
  grid-template-areas:
    'containerHeader containerHeader containerHeader containerHeader containerHeader'
    '. contentLeft . contentRight .';
  border-radius: 5px;
  border: solid 2px;
  border-color: var(--m-border-color);
  margin-bottom: 1em;
  padding: 0.5em 1em 1em 1em;
  font-weight: bold;
  background-color: v-bind(backgroundColor);
}
.container-header {
  grid-area: containerHeader;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
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
