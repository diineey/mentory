import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { addToast } from '@/shared/utils/notifications.js'
import router from '@/router/index.js'
import { jwtDecode } from 'jwt-decode'
import { useUserStore } from '@/stores/userStore.js'

export const useUserTokenStore = defineStore('fingerprint', () => {
  const fingerprint = ref(localStorage.getItem('fingerprint') || null)

  const userStore = useUserStore()

  function isTokenExpired(token) {
    try {
      const decodedToken = jwtDecode(token)

      if (decodedToken.exp) {
        const currentTime = Math.floor(Date.now() / 1000)
        return decodedToken.exp < currentTime
      }

      return true
    } catch (error) {
      console.error('Ошибка при декодировании токена:', error)
      return true
    }
  }

  function isTokenExpiringSoon(token, warningTimeInMinutes = 5) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp) {
        const currentTime = Math.floor(Date.now() / 1000);

        const warningTime = currentTime + warningTimeInMinutes * 60;

        return decodedToken.exp < warningTime;
      }

      return false;
    } catch (error) {
      console.error('Ошибка при декодировании токена:', error);

      return false;
    }
  }

  const isAuthenticated = computed(() => !!(fingerprint.value && !isTokenExpired(fingerprint.value)))

  const setToken = (newToken) => {
    fingerprint.value = newToken
    localStorage.setItem('fingerprint', newToken)
  }

  const clearToken = () => {
    fingerprint.value = null
    localStorage.removeItem('fingerprint')
  }

  // setInterval(() => {
    if (fingerprint.value && isTokenExpired(fingerprint.value)) {
      addToast.error('Токен истек, нужно обновить его')

      localStorage.removeItem('fingerprint')

      userStore.user = null

      localStorage.removeItem('user')

      router.push('/sign-in')

      clearToken()
    }
  // }, 5 * 60 * 1000)

  return {
    fingerprint,
    isAuthenticated,
    isTokenExpired,
    setToken,
    clearToken
  }
})
