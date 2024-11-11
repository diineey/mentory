import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserTokenStore } from '@/stores/authStore.js'
import { useUserStore } from '@/stores/userStore.js'

export default function useMainHeader() {
  const router = useRouter();
  const route = useRoute();
  const userToken = useUserTokenStore()
  const userStore = useUserStore()

  const user = computed(() => userStore.user);

  const isAuthenticated = computed(() => userToken.isAuthenticated);

  const handleRoute = () => {
    isAuthenticated.value ? router.push('/be-mentor') : router.push('/sign-in')
  }

  const isSignInPage = computed(() => {
    return (
      route.path === '/sign-in' ||
      route.path === '/sign-up' ||
      route.path.startsWith('/confirm-otp')
    );
  });

  const isBeMentorPage = computed(() => route.path === '/be-mentor');

  const goToProfile = () => {
    router.push({
      name: 'profile',
      query: {
        id: user.value.mentorUserEntity.id
      }
    })
  }

  const isMentor = computed(() => {
    return user.value?.role === 'MENTOR'
  });

  return {
    user,
    router,
    isAuthenticated,
    isBeMentorPage,
    isSignInPage,
    isMentor,
    handleRoute,
    goToProfile
  }
}