import { defineStore } from 'pinia';
import { withAuth } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );

  const setUser = (newUserData) => {
    user.value = newUserData;
  };

  const getUser = async () => {
    try {
      const response = await withAuth.get('self/get-info');

      setUser(response.data);

      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };

  const removeUser = () => {
    user.value = '';
    localStorage.removeItem('user');
  };

  return {
    user,
    getUser,
    setUser,
    removeUser,
  };
});
