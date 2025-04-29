import '@/assets/main.scss'
import '@/assets/layout.scss'
import '@/assets/colors.scss'
import '@fontsource/montserrat' // Defaults to weight 400

import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'

import App from './App.vue'
import router from './router'

import { useUserStore } from '@/stores/userStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
  const userStore = useUserStore()
  const { selectedUserId } = storeToRefs(userStore)
  // Retrieve selectedUserId from the lastSession data
  try {
    let retrievedUserId = sessionStorage.getItem('selectedUserId')
    if (retrievedUserId) {
      selectedUserId.value = Number(retrievedUserId)
      //   console.log('selectedUserId saved to store:', selectedUserId.value)
    }
  } catch (error) {
    console.log('Unable to retrieve the UserId from sessionStorage!')
  }
})

app.mount('#app')
