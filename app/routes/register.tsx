import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, UserRole } from '~/lib/auth';
import Button from '~/components/ui/button';
import { Link } from '@remix-run/react';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(RegisterSchema)
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      // TODO: Gerçek kullanıcı kayıt işlemi
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Kayıt Ol
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Adınızı girin"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="ornek@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Şifrenizi girin"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Kullanıcı Rolü
            </label>
            <select
              id="role"
              {...register('role')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value={UserRole.CUSTOMER}>Müşteri</option>
              <option value={UserRole.TECHNICIAN}>Teknisyen</option>
            </select>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Zaten hesabınız var mı? {' '}
            <Link 
              to="/login" 
              className="text-primary hover:underline"
            >
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
