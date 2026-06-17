import { Navigate } from 'react-router';
import { useAuthStore } from '../stores/authStore';

export default function ProtectedRoute({ children, role = 'USER' }) {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Navigate to='/login' replace />;
  }
  if (user.role !== role) {
    console.log('user.role', user.role);
    if (user.role === 'ADMIN') {
      return <Navigate to='/admin' />;
    }
    if (user.role === 'USER') {
      return <Navigate to='/' />;
    }
  }
  return children;
}
