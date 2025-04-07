<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import mUserDropdown from './components/mUserDropdown.vue'
import { useUserStore } from '@/stores/userStore'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { BACKEND_URL } from './constants/api'

const userStore = useUserStore()
const { selectedUserId } = storeToRefs(userStore)

const users = ref([])
// fetch all users from backend
onMounted(async () => getUsers())

//fetch the data from the backend server and save to store
const getUsers = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/users`)
    if (response.data.message === 'No Data') {
      return
    }
    users.value = response.data
  } catch (err) {
    console.log(`${err}`)
  }
}
</script>

<template>
  <div class="mainContainer">
    <div class="mainHeaderContainer">
      <nav class="headerNavigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/activities">Activities</RouterLink>
      </nav>
      <nav class="headerNavigationRight">
        <mUserDropdown
          class="userDropdown"
          v-model:selected-user-id="selectedUserId"
          :user-list="users"
        />
      </nav>
    </div>
    <div class="mainBodyContainer">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.headerNavigationRight {
  margin-right: 1em;
}
</style>
