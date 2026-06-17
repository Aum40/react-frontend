import { api } from './client';

export const register = async (input) => {
  const { data } = await api.post('/auth/register', input);
  return data;
};
export const login = async (input) => {
  const { data } = await api.post('/auth/login', input);
  return data;
};
