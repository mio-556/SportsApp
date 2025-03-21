import '@/assets/main.scss'
import '@/assets/layout.scss'
import '@/assets/colors.scss'
import '@fontsource/montserrat' // Defaults to weight 400

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
