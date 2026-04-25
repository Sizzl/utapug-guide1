<template>
  <div class="app-shell">
    <TheNavigation />
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
</script>
