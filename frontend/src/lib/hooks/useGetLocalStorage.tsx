import { TOKEN } from '../../constants';
import { useState, useEffect } from 'react';

export const useGetLocalStorage = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const jwt = localStorage.getItem(TOKEN);
    if (jwt) {
      setToken(jwt);
    }
  }, [token]);
  return token;
};
