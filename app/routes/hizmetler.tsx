import { motion } from 'framer-motion';
import { FaTools, FaMobile, FaTabletAlt, FaLaptop } from 'react-icons/fa';
import PublicLayout from '~/components/layout/PublicLayout';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = () => {
  return json({ page: 'hizmetler' });
};

export default function HizmetlerPage() {
  const { page } = useLoaderData<typeof loader>();

  const services = [
    {
      icon: FaMobile,
      title: 'Cep Telefonu Tamiri',
      description: 'Tüm marka ve model cep telefonları için profesyonel tamir hizmetleri',
      details: [
        'Ekran değişimi',
        'Pil değişimi',
        'Kamera onarımı',
        'Anakart tamiri'
      ]
    },
    {
      icon: FaTabletAlt,
      title: 'Tablet Onarımı',
      description: 'iPad, Samsung, Huawei ve diğer tüm tablet modellerinde uzman çözümler',
      details: [
        'Dokunmatik ekran tamiri',
        'Şarj soketi onarımı',
        'Yazılım problemleri',
        'Performans iyileştirme'
      ]
    },
    {
      icon: FaLaptop,
      title: 'Bilgisayar Destek',
      description: 'Dizüstü ve masaüstü bilgisayarlar için kapsamlı teknik destek',
      details: [
        'Yazılım kurulumu',
        'Virüs temizleme',
        'Donanım onarımı',
        'Performans optimizasyonu'
      ]
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
            Hizmetlerimiz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16"
          >
            Profesyonel ve Güvenilir Teknik Destek
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-16 lg:px-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <service.icon className="text-6xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-center">
                  {service.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-gray-500 dark:text-gray-400 flex items-center justify-center"
                    >
                      <span className="mr-2 text-blue-500 dark:text-blue-400">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
