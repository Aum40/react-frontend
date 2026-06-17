import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../stores/authStore';

export default function PublicOnlyRoute() {
  const user = useAuthStore((state) => state.user);
  if (user) {
    return <Navigate to='/' replace />;
  }
  return <Outlet />;
}
