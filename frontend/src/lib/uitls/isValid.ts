import { TIsValid, TUserSign } from '../../types/user';

export const isValid = (userSign: TUserSign): TIsValid => {
  const { email, password } = userSign;

  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (email === '' || email === undefined || !emailRegex.test(email)) {
    return { reason: 'email', validation: false };
  }

  if (password.length < 8 || password === '' || password === undefined) {
    return { reason: 'password', validation: false };
  }

  return { validation: true };
};
