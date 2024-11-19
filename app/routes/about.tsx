import { Link } from '@remix-run/react';
import { FaUserTie, FaFlag, FaEye } from 'react-icons/fa';
import Button from '~/components/ui/button';
import { ThemeToggle } from '~/components/ThemeToggle';
import { LanguageSelector } from '~/components/LanguageSelector';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <LanguageSelector />

      {/* Navigasyon */}
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary dark:text-primary-light transition-colors">
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

      {/* Hakkımızda İçeriği */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary dark:text-primary-light mb-4 transition-colors">Biz Kimiz?</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Teknolojiye tutkuyla bağlı, müşteri memnuniyetini her şeyin üstünde tutan bir ekibiz.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <FaUserTie className="mx-auto text-4xl text-primary dark:text-primary-light mb-4 transition-colors" />
            <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors">Profesyonel Ekip</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors">
              Alanında uzman, deneyimli teknisyenlerimizle hizmetinizdeyiz.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <FaFlag className="mx-auto text-4xl text-primary dark:text-primary-light mb-4 transition-colors" />
            <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors">Misyonumuz</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors">
              Müşterilerimizin teknoloji ile sorunsuz iletişim kurmasına destek olmak.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <FaEye className="mx-auto text-4xl text-primary dark:text-primary-light mb-4 transition-colors" />
            <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors">Vizyonumuz</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors">
              Türkiye'nin en güvenilir ve yenilikçi telefon tamir hizmeti olmak.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6 transition-colors">Neden Bizi Tercih Etmelisiniz?</h2>
          <motion.div 
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-left"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md dark:text-gray-200 transition-colors"
              variants={fadeInUp}
            >
              ✓ Hızlı ve güvenilir tamir hizmeti
            </motion.div>
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md dark:text-gray-200 transition-colors"
              variants={fadeInUp}
            >
              ✓ Tüm marka ve model cihazlarda çözüm
            </motion.div>
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md dark:text-gray-200 transition-colors"
              variants={fadeInUp}
            >
              ✓ Uygun fiyat garantisi
            </motion.div>
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md dark:text-gray-200 transition-colors"
              variants={fadeInUp}
            >
              ✓ Profesyonel ve deneyimli ekip
            </motion.div>
          </motion.div>
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
