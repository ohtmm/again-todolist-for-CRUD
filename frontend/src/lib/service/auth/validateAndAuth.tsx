import { useEffect, useState } from 'react';
import { TUserSign } from '../../../types/user';
import { isValid } from '../../uitls/isValid';
import { authAPIs } from '../api';
import { getToken } from '../../uitls/getToken';

type TAuthName = 'signUp' | 'login';

export const validateAndAuth = async (
  userSign: TUserSign,
  authFunction: TAuthName
) => {
  if (isValid(userSign).validation) {
    authAPIs[`${authFunction}`](userSign);
  } else {
    alert(`${isValid(userSign).reason}을 다시 입력해주세요`);
  }
};
