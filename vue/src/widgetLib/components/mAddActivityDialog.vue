<template>
  <MDialog :is-open="isOpen" :click-outside-to-close="false" @close="emits('update:isOpen', false)">
    <template #header>Add new Running Activity</template>
    <template #body>
      <div class="table-container">
        <div class="table-row">
          <div>Title</div>
          <MTextInput v-model:input-text="activityTitle" />
        </div>

        <div class="table-row">
          <div>Distance [km]</div>
          <MNumericInput v-model:input-value="activityDistance" />
        </div></div
    ></template>
    <template #footer>
      <MButton text="Close" @clicked="emits('update:isOpen', false)" />
      <MButton text="Add" @clicked="" />
    </template>
  </MDialog>
</template>
<script setup lang="ts">
import MButton from '../buttons/mButton.vue'
import MDialog from '../dialogs/mDialog.vue'
import MNumericInput from '../inputs/mNumericInput.vue'
import MTextInput from '../inputs/mTextInput.vue'
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
//needed for two way binding regarding the open state
const emits = defineEmits(['update:isOpen'])

const activityTitle = ref('')
const activityDistance = ref(0)
</script>
<style scoped lang="scss">
.table-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 2.5em);
  height: 100%;
}
.table-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .row-left {
  }
  .row-right {
  }
}
</style>
