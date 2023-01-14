import { redirect } from 'react-router-dom';
import { TOKEN } from '../../../constants';
import { TUserSign } from '../../../types/user';
import { api } from './api';

export const authAPI = {
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
