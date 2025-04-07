<template>
  <div class="mainContainer">
    User:
    <select
      class="userDropdown"
      name="user"
      :value="selectedUserId"
      @change="emits('update:selectedUserId', Number($event.target.value))"
    >
      <option
        :value="selectedUserId"
        disabled
        selected
        v-if="!userList.some((user) => user.id === selectedUserId)"
      >
        Not selected
      </option>

      <option v-for="(userObj, index) in userList" :key="index" :value="userObj.id">
        {{ userObj.nick_name }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { User } from '@/types/userTypes'

const props = defineProps({
  selectedUserId: {
    type: [Number, String] as PropType<number | string>,
  },
  userList: {
    type: Array as PropType<User[]>,
    required: true,
  },
})
const emits = defineEmits(['update:selectedUserId'])
</script>
<style scoped lang="scss">
.mainContainer {
  margin-left: 0.5em;
  display: flex;
}
.userDropdown {
  margin-left: 0.5em;
  background-color: transparent;
  color: var(--header-text-color);
  font-weight: bold;
  border: none;
}
.userDropdown select option {
  background-color: var(--main-background-color);
}
</style>
