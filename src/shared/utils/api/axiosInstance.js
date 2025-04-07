import axios from 'axios';
import { useUserTokenStore } from '@/stores/authStore';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const axiosBase = axios.create({
  baseURL: baseUrl,
});

const withAuth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

withAuth.interceptors.request.use(
  (config) => {
    const userTokenStore = useUserTokenStore();
    const token = userTokenStore.fingerprint;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const publicApi = axiosBase;

export {
  withAuth, publicApi
};
