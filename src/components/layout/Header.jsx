import { LogOut } from 'lucide-react';
import { ListTodo } from 'lucide-react';
import { NavLink } from 'react-router';
import { useAuthStore } from '../../stores/authStore';

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  return (
    <header className='border-b border-gray-200 bg-white'>
      <div className='mx-auto flex max-w-2xl items-center justify-between px-4 py-3'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-lg font-bold text-teal-600'
        >
          <ListTodo size={20} />
          DevNest Todo List
        </NavLink>

        <div className='flex items-center gap-1'>
          <>
            <span className='ml-2 hidden text-sm text-gray-500 sm:inline'>
              Welcome, {user.email}
            </span>
            <button
              type='button'
              className='ml-1 flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50'
              onClick={logout}
            >
              <LogOut size={16} />
              Logout
            </button>
          </>
        </div>
      </div>
    </header>
  );
}
