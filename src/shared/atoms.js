import { atom } from 'recoil';

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false,
});

export const usernameAtom = atom({
  key: 'username',
  default: '',
});
