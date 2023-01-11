import { TOKEN } from '../../constants';

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};
