import { TUserSign } from '../../../types/user';
import { isValid } from '../../uitls/isValid';
import { toast } from 'react-toastify';
import { authAPI } from './api/index';

type TAuthAction = 'signUp' | 'login';

export const validateAndAuth = async (
  userSign: TUserSign,
  authFunction: TAuthAction
) => {
  if (isValid(userSign).valid) {
    authAPI[`${authFunction}`](userSign);
  } else {
    toast.error(`${isValid(userSign).reason}을 다시 입력해주세요`);
  }
};
