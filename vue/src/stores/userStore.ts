import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const selectedUserId = ref(0)
  return { selectedUserId }
})
