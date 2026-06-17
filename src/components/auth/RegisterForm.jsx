import { Link } from 'lucide-react';
import FormField from '../common/FormField.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../schema/auth.js';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../hooks/useAuth.js';
import { useNavigate } from 'react-router';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  });

  const navigate = useNavigate();
  const registerUser = useRegister();
  console.dir(registerUser.error);

  const onSubmit = async (data) => {
    registerUser.mutate(data, { onSuccess: () => navigate('/login') });
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      {registerUser.error && (
        <div className='rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700'>
          {registerUser.error.response.data.message}
        </div>
      )}

      <FormField
        label='Email'
        type='email'
        placeholder='you@example.com'
        {...register('email')}
        //name='email'
        //onBlur={fn}
        //onChange={fn}
        //ref={from useRef}
        error={errors.email?.message}
      />
      <FormField
        label='Password'
        type='password'
        placeholder='••••••••'
        {...register('password')}
        error={errors.password?.message}
      />
      <FormField
        label='Confirm Password'
        type='password'
        placeholder='••••••••'
        {...register('confirm')}
        error={errors.confirm?.message}
      />
      <button className='w-full rounded-lg bg-teal-500 px-4 py-2 font-medium text-white hover:bg-teal-600 disabled:opacity-50'>
        Create account
      </button>
      <p className='text-center text-sm text-gray-500'>
        Already have an account?{' '}
        <Link to='/login' className='font-medium text-teal-600 hover:underline'>
          Log in
        </Link>
      </p>
    </form>
  );
}
