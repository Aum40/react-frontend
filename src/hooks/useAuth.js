import { useMutation } from '@tanstack/react-query';
import { login, register } from '../api/auth';
import { useAuthStore } from '../stores/authStore';

export function useRegister() {
  return useMutation({ mutationFn: register });
}
export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);
  return useMutation({
    mutationFn: login,
    onSuccess: ({ access_token, user }) =>
      setAuth({ user, token: access_token }),
  });
}
