import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    is2FAVerified: false
  }),
  actions: {
    login(username, password) {
      if (username && password) {
        this.isLoggedIn = true
        return true
      }
      return false
    },
    verify2FA(code) {
      if (code === '1111') {
        this.is2FAVerified = true
        return true
      }
      return false
    },
    logout() {
      this.isLoggedIn = false
      this.is2FAVerified = false
    }
  }
})
