import axios from 'axios';
import { redirect } from 'react-router-dom';
import { TOKEN } from '../../../constants';
import { TUserSign } from '../../../types/user';
export const API_HOST = import.meta.url;

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(TOKEN);
  if (accessToken && config.headers) {
    config.headers['Authorization'] = accessToken;
  }
  return config;
});

export const authAPIs = {
  signUp: (userSign: TUserSign) =>
    api.post('users/create', userSign).then((res) => {
      localStorage.setItem(TOKEN, res.data.token);
      redirect('/login');
    }),
  login: (userSign: TUserSign) =>
    api.post('users/login', userSign).then((res) => {
      localStorage.setItem(TOKEN, res.data.token);
      window.location.replace('/');
    }),
};
