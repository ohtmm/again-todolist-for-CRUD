export type TUserSign = {
  email: string;
  password: string;
};

export type TIsValid = {
  reason?: 'email' | 'password';
  valid: boolean;
};
