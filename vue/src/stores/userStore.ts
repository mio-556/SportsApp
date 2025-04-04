import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const selectedUser = ref('')
  return { selectedUser }
})
