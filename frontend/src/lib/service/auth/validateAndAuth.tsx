import { useEffect, useState } from 'react';
import { TUserSign } from '../../../types/user';
import { isValid } from '../../uitls/isValid';
import { authAPIs } from '../api';

type TAuthAction = 'signUp' | 'login';

export const validateAndAuth = async (
  userSign: TUserSign,
  authFunction: TAuthAction
) => {
  if (isValid(userSign).validation) {
    authAPIs[`${authFunction}`](userSign);
  } else {
    // TODO: toast로 수정해야 함
    alert(`${isValid(userSign).reason}을 다시 입력해주세요`);
  }
};
