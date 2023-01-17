import axios from 'axios';
import { TOKEN } from '../../../constants';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(TOKEN);
  if (accessToken && config.headers) {
    config.headers['Authorization'] = accessToken;
  }
  return config;
});
