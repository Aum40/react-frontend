import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

export const api = axios.create({
  baseURL: 'http://localhost:9999',
});
api.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { logout } = useAuthStore.getState();
    if (error.response?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  },
);
