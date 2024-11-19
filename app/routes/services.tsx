import { Link } from '@remix-run/react';
import { FaBatteryFull, FaDesktop, FaWrench, FaMobileAlt, FaMemory, FaPlug } from 'react-icons/fa';
import Button from '~/components/ui/button';
import { ThemeToggle } from '~/components/ThemeToggle';
import { LanguageSelector } from '~/components/LanguageSelector';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      icon: FaDesktop,
      title: 'Ekran Değişimi',
      description: 'Çatlak, kırık veya dokunmatik sorunu olan ekranları profesyonelce değiştirelim.'
    },
    {
      icon: FaBatteryFull,
      title: 'Batarya Değişimi',
      description: 'Düşük performanslı veya şarj sorunu yaşayan bataryaları yenileyelim.'
    },
    {
      icon: FaWrench,
      title: 'Genel Tamir',
      description: 'Her türlü donanımsal ve yazılımsal soruna çözüm üretelim.'
    },
    {
      icon: FaMobileAlt,
      title: 'Su Hasarı Onarımı',
      description: 'Su temasından zarar gören cihazlarınızı kurtaralım.'
    },
    {
      icon: FaMemory,
      title: 'Yazılım Sorunu',
      description: 'Format, yazılım güncellemesi ve performans iyileştirme.'
    },
    {
      icon: FaPlug,
      title: 'Şarj Soketi Tamiri',
      description: 'Bozuk şarj soketlerini hızlıca değiştirelim.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <LanguageSelector />
      
      {/* Navigasyon */}
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary dark:text-primary-light">
            Telefon Tamir
          </div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors">Ana Sayfa</Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors">Hakkımızda</Link>
            <Link to="/services" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors">Servislerimiz</Link>
            <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors">İletişim</Link>
            <Link to="/login">
              <Button variant="primary">Giriş Yap</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Servisler İçeriği */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary dark:text-primary-light mb-4 transition-colors">Sunduğumuz Servisler</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Her marka ve model telefon için profesyonel tamir hizmetleri
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
              variants={itemVariants}
            >
              <service.icon className="mx-auto text-5xl text-primary dark:text-primary-light mb-4 transition-colors" />
              <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6 transition-colors">Fiyat Bilgilendirmesi</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 transition-colors">
            Tüm tamir hizmetlerimiz için ücretsiz keşif ve tanı hizmeti sunuyoruz. 
            Müşterilerimize şeffaf ve adil fiyatlandırma politikası uyguluyoruz.
          </p>
          <Link to="/contact" className="mt-6 inline-block">
            <Button variant="primary" size="lg">
              Teklif Alın
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Telefon Tamir. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
