import { useUserTokenStore } from '@/stores/authStore.js';

export default function useMainFooter() {
  const { isAuthenticated } = useUserTokenStore();

  return {
    isAuthenticated,
  };
}
