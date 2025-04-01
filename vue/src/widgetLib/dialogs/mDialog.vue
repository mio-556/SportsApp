<template>
  <transition name="fade">
    <div id="mDialog" v-if="isOpen">
      <div class="dialog-backdrop" @click="closeDialog"></div>

      <div class="main-container">
        <div class="dialog-header">
          <slot name="header"></slot>
        </div>
        <div class="dialog-body">
          <slot name="body"></slot>
        </div>
        <div class="dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  clickOutsideToClose: {
    type: Boolean,
    default: true,
  },
})
const emits = defineEmits(['close'])

const closeDialog = () => {
  if (props.clickOutsideToClose) emits('close')
}
</script>

<style scoped lang="scss">
@use '../widgets';
@use '../colors';
$header-hight: 2em;
$footer-heigh: 3em;

#mDialog {
  position: fixed;
  display: inline-block;
}
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.main-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  top: 20vh;
  left: 50vw;
  transform: translateX(-50%);
  width: widgets.$dialog-width;
  height: widgets.$dialog-height;
  border: solid 1px;
  border-color: colors.$border-color-container;
  background-color: var(--main-background-color);
  border-radius: 5px;

  .dialog-header {
    height: $header-hight;
    padding-inline: 1em 1em;
    align-content: center;
    color: var(--header-text-color);
    font-weight: bold;
    border-bottom: 1px colors.$border-color-container solid;
    background-color: var(--main-background-color-darker);
  }
  .dialog-body {
    padding: 0.7em;
    padding-top: 1em;
    flex-grow: 1;
  }
  .dialog-footer {
    display: flex;
    justify-content: space-between;
    height: $footer-heigh;
    padding-inline: 0.5em 0.5em;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
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
