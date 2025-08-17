<script setup>
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-6xl mx-auto px-4">
      <div class="h-20 flex items-center justify-between">
        
        <!-- Alleen logo -->
        <router-link 
          to="/openstaande" 
          class="flex items-center group" 
          aria-label="Home"
        >
          <img 
            src="../assets/logo.png" 
            alt="RealEstateCare" 
            class="h-6 w-auto object-contain"
          />
        </router-link>

        <!-- Menu -->
        <nav class="flex items-center gap-2" aria-label="Hoofdnavigatie">
          <router-link 
            to="/openstaande" 
            class="nav-link" 
            active-class="nav-link--active"
          >
            Openstaande
          </router-link>
          <router-link 
            to="/uitgevoerde" 
            class="nav-link" 
            active-class="nav-link--active"
          >
            Uitgevoerde
          </router-link>
          <router-link 
            to="/kennisbank" 
            class="nav-link" 
            active-class="nav-link--active"
          >
            Kennisbank
          </router-link>
          <router-link 
            to="/instellingen" 
            class="nav-link" 
            active-class="nav-link--active"
          >
            Instellingen
          </router-link>

          <!-- Uitlogknop alleen tonen als ingelogd en 2FA klaar -->
          <button
            v-if="auth.isLoggedIn && auth.is2FAVerified"
            @click="handleLogout"
            class="px-4 py-2 rounded-md text-sm font-medium text-white bg-[var(--rec-teal)] hover:brightness-95 transition-colors"
          >
            Uitloggen
          </button>
        </nav>

      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors;
}
.nav-link--active {
  color: white !important;
  background: var(--rec-teal) !important;
}
</style>
