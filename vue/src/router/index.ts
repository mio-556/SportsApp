import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivitiesMenu from '../views/ActivitiesMenu.vue'
import Activities from '../views/Activities.vue'
import Running from '../views/Running.vue'
import Cycling from '../views/Cycling.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/activities',
      component: ActivitiesMenu,
      children: [
        { path: '/activities', component: Activities },
        { path: '/running', component: Running },
        { path: '/cycling', component: Cycling },
      ],
    },
  ],
})

export default router
