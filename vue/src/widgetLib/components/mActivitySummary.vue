<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      :class="{ containerSelected: isSelected, container: !isSelected }"
      @click="emits('onClick')"
    >
      <div class="container-header">
        <div class="header-item-left">
          <div class="header-item-left-icon">
            <MSvg v-if="props.svgIconHeader" :d="props.svgIconHeader" :fill="props.iconsColor" />
          </div>
          {{ props.headerText }}
        </div>
        <div class="header-item-right">
          {{ formattedDate }}
        </div>
      </div>
      <div class="content-details">
        <div class="content-details-item">
          <MActivitySubItem
            :svg="props.svgIcon1"
            :icon-fill-color="props.iconsColor"
            :text="props.text1"
            :data-text="props.data1"
            :unit="props.unit1"
          />
        </div>
        <div class="content-details-item">
          <MActivitySubItem
            :svg="props.svgIcon2"
            :icon-fill-color="props.iconsColor"
            :text="props.text2"
            :data-text="props.data2"
            :unit="props.unit2"
          />
        </div>
        <div class="content-details-item">
          <MActivitySubItem
            :svg="props.svgIcon3"
            :icon-fill-color="props.iconsColor"
            :text="props.text3"
            :data-text="props.data3"
            :unit="props.unit3"
          />
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup language="ts">
import { computed, ref, onMounted } from 'vue'
import MActivitySubItem from './mActivitySubItem.vue'
import MSvg from '../images/mSvg.vue'
import { format } from 'date-fns'

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
  svgIconHeader: {
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
  isSelected: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const emits = defineEmits(['onClick'])
const formattedDate = !isNaN(new Date(props.headerDate))
  ? format(new Date(props.headerDate), 'dd-MM-yyyy HH:mm')
  : props.headerDate

const backgroundColor = computed(() => props.backgroundColor)
const isVisible = ref(false)

onMounted(() => (isVisible.value = true))
</script>
<style scoped lang="scss">
@use '../colors.scss';
@use './components.scss';
@use '../widgets.scss';
.container {
  display: grid;
  grid-template-columns: 3em 1fr 1fr 3em;
  grid-template-rows: auto;
  grid-template-areas:
    'containerHeader containerHeader containerHeader containerHeader'
    '. contentDetails contentDetails .';
  border-radius: 5px;
  border: solid 1px;
  border-color: colors.$border-color-container;
  margin-bottom: 1em;
  padding: 0.5em 1em 1em 1em;
  background: v-bind(backgroundColor);
  min-width: 205px;
  max-width: 450px;
  transition: filter 0.3s ease;
}
.container:hover {
  filter: brightness(2.5);
  box-shadow: 0 0 15px 5px rgba(0, 174, 255, 0.1); /* Vibrant glow */
}
.containerSelected {
  @extend .container;
  filter: brightness(2.3);
  box-shadow: 0 0 15px 5px rgba(0, 174, 255, 0.1); /* Vibrant glow */
}
.container-header {
  grid-area: containerHeader;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5em;
  margin-bottom: 1.5em;
  color: colors.$text-color-light;
  .header-item-left {
    display: flex;
    align-items: start;
    .header-item-left-icon {
      min-width: 2.5em;
      align-self: end;
    }
  }
}
.content-details {
  grid-area: contentDetails;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.content-details-item {
  max-width: 50%;
  flex: 50%;
  margin-bottom: 0.5em;
}
@media (max-width: 700px) {
  .container-header {
    flex-direction: column;
    margin-bottom: 2em;
    .header-item-left {
      justify-content: center;
    }
    .header-item-right {
      text-align: center;
    }
  }

  .content-details-item {
    max-width: 100%;
    flex: 100%;
    justify-items: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
