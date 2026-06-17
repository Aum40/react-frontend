import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';
import TodoPage from '../pages/TodoPage';
import CreateTodoPage from '../pages/CreateTodoPage';
import EditTodoPage from '../pages/EditTodoPage';
import ProtectedRoute from './ProtectedRoute';
import PublicOnlyRoute from './PublicOnlyRoute';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <PublicOnlyRoute />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
        ],
      },
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <AuthLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <TodoPage /> },
          { path: '/todo/create', element: <CreateTodoPage /> },
          {
            path: '/todo/:id/edit',
            element: <EditTodoPage />,
          },
        ],
      },
    ],
  },
]);
