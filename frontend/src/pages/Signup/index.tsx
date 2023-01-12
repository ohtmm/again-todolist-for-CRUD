import React, { useState } from 'react';
import { validateAndAuth } from '../../lib/service/auth/validateAndAuth';
import { isValid } from '../../lib/uitls/isValid';
import { TUserSign } from '../../types/user';

export default function Signup() {
  const [userSign, setUserSign] = useState<TUserSign>({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...userSign, [event.target.name]: event.target.value };
    setUserSign(updated);
    if (isValid(updated).validation) {
      setIsDisabled(false);
    }
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    validateAndAuth(userSign, 'signUp');
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
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
        <button disabled={isDisabled}>회원가입</button>
      </form>
    </div>
  );
}
