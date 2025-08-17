<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

function handleLogin() {
  error.value = ''
  if (auth.login(username.value, password.value)) {
    router.push('/2fa')
  } else {
    error.value = 'Ongeldige gebruikersnaam of wachtwoord'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center rec-bg">
    <div class="w-full max-w-md rec-card p-8 shadow-lg">
      <h1 class="text-2xl font-bold rec-text mb-6 text-center">Login</h1>

      <label for="username" class="block mb-2 rec-text">Gebruikersnaam</label>
      <input
        id="username"
        v-model="username"
        class="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rec-teal"
      />

      <label for="password" class="block mb-2 rec-text">Wachtwoord</label>
      <input
        id="password"
        type="password"
        v-model="password"
        class="w-full mb-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rec-teal"
      />

      <p v-if="error" class="text-red-600 mb-4" role="alert">{{ error }}</p>

      <button
        @click="handleLogin"
        class="w-full rec-btn font-semibold py-2 rounded"
      >
        Inloggen
      </button>
    </div>
  </div>
</template>
