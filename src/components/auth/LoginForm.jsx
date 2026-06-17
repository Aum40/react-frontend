import { Link, useNavigate } from 'react-router';
import FormField from '../common/FormField.jsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schema/auth.js';
import { useLogin } from '../../hooks/useAuth.js';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });
  const login = useLogin();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    login.mutate(data, { onSuccess: () => navigate('/') });
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      {login.error && (
        <div className='rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700'>
          {login.error.response?.data?.message}
        </div>
      )}

      <FormField
        label='Email'
        type='email'
        placeholder='you@example.com'
        {...register('email')}
        error={errors.email?.message}
      />
      <FormField
        label='Password'
        type='password'
        placeholder='••••••••'
        {...register('password')}
        error={errors.password?.message}
      />
      <button
        type='submit'
        className='w-full rounded-lg bg-teal-500 px-4 py-2 font-medium text-white hover:bg-teal-600 disabled:opacity-50'
      >
        Log in
      </button>
      <p className='text-center text-sm text-gray-500'>
        Don't have an account?{' '}
        <Link
          to='/register'
          className='font-medium text-teal-600 hover:underline'
        >
          Register
        </Link>
      </p>
    </form>
  );
}
