<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="mainContainer">
    <div class="mainHeaderContainer">
      <nav class="headerNavigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/activities">Activities</RouterLink>
      </nav>
    </div>
    <div class="mainBodyContainer">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
