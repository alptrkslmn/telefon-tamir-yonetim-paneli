import { motion } from 'framer-motion';
import { FaQuestionCircle, FaTools, FaPhoneAlt, FaComments } from 'react-icons/fa';
import PublicLayout from '~/components/layout/PublicLayout';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = () => {
  return json({ page: 'destek' });
};

export default function DestekPage() {
  const { page } = useLoaderData<typeof loader>();

  const supportOptions = [
    {
      icon: FaQuestionCircle,
      title: 'Sıkça Sorulan Sorular',
      description: 'Hızlıca cevap bulabileceğiniz detaylı SSS sayfamız',
      link: '/sss'
    },
    {
      icon: FaTools,
      title: 'Arıza Takibi',
      description: 'Cihazınızın tamir durumunu anlık olarak takip edin',
      link: '/ariza-takip'
    },
    {
      icon: FaPhoneAlt,
      title: 'Destek Hattı',
      description: 'Uzman personelimizle doğrudan iletişime geçin',
      link: 'tel:0850-123-45-67'
    },
    {
      icon: FaComments,
      title: 'Canlı Destek',
      description: 'Hemen yanıt alabileceğiniz online destek kanalı',
      link: '/canli-destek'
    }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div className="w-full px-4 py-16">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          >
            Müşteri Destek Merkezi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16"
          >
            Size nasıl yardımcı olabiliriz?
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 lg:px-32">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <option.icon className="text-5xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {option.description}
                </p>
                <a 
                  href={option.link} 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Devamını Görüntüle
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
