import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getToken } from '../../lib/uitls/getToken';

export default function AuthChecker() {
  const navigator = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigator('/login');
    }
  }, []);
  return <Outlet />;
}
