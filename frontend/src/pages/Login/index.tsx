import React, { useLayoutEffect, useState } from 'react';
import { validateAndAuth } from '../../lib/service/auth/validateAndAuth';
import { isValid } from '../../lib/uitls/isValid';
import { TUserSign } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../lib/uitls/getToken';

export default function Login() {
  const [userSign, setUserSign] = useState<TUserSign>({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigator = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...userSign, [event.target.name]: event.target.value };
    setUserSign(updated);
    if (isValid(updated).validation) {
      setIsDisabled(false);
    }
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    validateAndAuth(userSign, 'login');
  };

  useLayoutEffect(() => {
    if (getToken()) {
      navigator('/');
    }
  }, []);
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>email</label>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='이메일을 입력하세요'
          onChange={handleChange}
        />
        <label htmlFor='password'>password</label>
        <input
          id='password'
          type='password'
          name='password'
          placeholder='비밀번호를 입력하세요'
          onChange={handleChange}
        />

        <button disabled={isDisabled}>로그인</button>
      </form>
    </div>
  );
}
