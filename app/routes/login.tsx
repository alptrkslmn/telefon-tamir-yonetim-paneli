import { useState } from 'react';
import { Form, Link, useNavigate } from '@remix-run/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '~/components/ui/button';
import toast, { Toaster } from 'react-hot-toast';

// Login form validation schema
const loginSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır')
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      // Placeholder login logic - replace with actual authentication
      if (data.email === 'admin@alptarik.com' && data.password === 'admin123') {
        toast.success('Giriş Başarılı!');
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate('/dashboard');
      } else {
        toast.error('Kullanıcı adı veya şifre hatalı');
      }
    } catch (error) {
      toast.error('Giriş sırasında bir hata oluştu');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <Toaster position="top-right" />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Alp Tarık Telefon Tamir</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Yönetim Paneline Giriş Yapın</p>
        </div>
        
        <Form method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              E-posta Adresi
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="E-posta adresinizi girin"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary 
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">
              Şifre
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password')}
                placeholder="Şifrenizi girin"
                className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
          >
            Giriş Yap
          </Button>

          <div className="text-center mt-4">
            <Link 
              to="/register" 
              className="text-primary hover:underline"
            >
              Hesabınız yok mu? Kayıt Olun
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
