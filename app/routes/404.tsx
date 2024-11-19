import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import PublicLayout from '~/components/layout/PublicLayout';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = () => {
  return json({ page: '404' });
};

export default function NotFoundPage() {
  const { page } = useLoaderData<typeof loader>();

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md p-8 rounded-lg"
        >
          <div className="flex justify-center mb-6">
            <FaExclamationTriangle className="text-8xl text-yellow-500" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sayfa Bulunamadı
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Aradığınız sayfa maalesef mevcut değil veya henüz geliştirilme aşamasında.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaHome />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <Link 
              to="/hizmetler" 
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaExclamationTriangle />
              <span>Hizmetlerimize Göz At</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </PublicLayout>
  );
}
