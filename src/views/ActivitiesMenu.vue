<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="mainBodyLeftContainer">
    <div class="headerNavigationColumn">
      <RouterLink to="/running">Running</RouterLink>
      <RouterLink to="/cycling">Cycling</RouterLink>
    </div>
  </div>
  <RouterView></RouterView>
</template>
