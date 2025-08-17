<template>
  <div id="app" class="min-h-screen bg-rec-bg text-rec-ink">
    <!-- Navbar alleen tonen als route niet login of 2fa is -->
    <Navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'

const route = useRoute()
const showNavbar = computed(() => !['/login', '/2fa'].includes(route.path))
</script>

<style>
/* Basis reset of extra stijlen als nodig */
html, body, #app {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}
</style>
