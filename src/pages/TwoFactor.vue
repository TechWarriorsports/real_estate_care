<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const code = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

function handleVerify() {
  error.value = ''
  if (auth.verify2FA(code.value)) {
    router.push('/openstaande')
  } else {
    error.value = 'Ongeldige code'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center rec-bg">
    <div class="rec-card p-8 shadow max-w-md w-full">
      <h1 class="text-2xl font-bold rec-text mb-6 text-center">Voer 2FA-code in</h1>
      
      <label for="twofa-code" class="block mb-2 rec-text">2FA-code</label>
      <input
        id="twofa-code"
        v-model="code"
        placeholder="2FA-code"
        class="w-full mb-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rec-teal"
      />

      <p v-if="error" class="text-red-600 mb-4" role="alert">{{ error }}</p>
      
      <button
        @click="handleVerify"
        class="w-full rec-btn py-2 rounded font-semibold"
      >
        Verifiëren
      </button>
    </div>
  </div>
</template>
