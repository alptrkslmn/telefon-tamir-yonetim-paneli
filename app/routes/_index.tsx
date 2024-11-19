import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { FaMobile, FaTools, FaClock, FaShieldAlt, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import Button from '~/components/ui/button';
import { ThemeToggle } from '~/components/ThemeToggle';
import { LanguageSelector } from '~/components/LanguageSelector';

export default function Index() {
  const features = [
    {
      icon: FaMobile,
      title: 'Tüm Marka ve Modeller',
      description: 'Her türlü telefon markası ve modeli için profesyonel tamir hizmeti'
    },
    {
      icon: FaTools,
      title: 'Uzman Teknik Servis',
      description: 'Deneyimli teknisyenlerimizle kaliteli ve güvenilir hizmet'
    },
    {
      icon: FaClock,
      title: 'Hızlı Çözüm',
      description: 'Çoğu tamiri aynı gün içinde tamamlıyoruz'
    },
    {
      icon: FaShieldAlt,
      title: 'Garantili Hizmet',
      description: 'Tüm tamir işlemlerimiz garantili ve güvenilir'
    }
  ];

  const services = [
    {
      title: 'Ekran Değişimi',
      description: 'Kırık, çatlak veya arızalı ekranları orijinal parçalarla değiştiriyoruz.',
      image: '/images/screen-repair.jpg'
    },
    {
      title: 'Batarya Değişimi',
      description: 'Şarj sorunu yaşayan telefonlarınız için orijinal batarya değişimi.',
      image: '/images/battery-repair.jpg'
    },
    {
      title: 'Ana Kart Tamiri',
      description: 'Profesyonel ekipmanlarla ana kart tamiri ve chip değişimi.',
      image: '/images/motherboard-repair.jpg'
    }
  ];

  const stats = [
    { number: '10+', text: 'Yıllık Deneyim' },
    { number: '50K+', text: 'Mutlu Müşteri' },
    { number: '100+', text: 'Günlük Tamir' },
    { number: '1000+', text: 'Başarılı Onarım' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Theme and Language Controls - Moved to fixed position */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
        <ThemeToggle />
        <LanguageSelector />
      </div>

      {/* Hero Section - Adjusted padding for fixed navbar */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 mix-blend-multiply" />
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Profesyonel Telefon Tamir Hizmetleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            En son teknoloji ve uzman kadromuzla telefonunuzu yeniden hayata döndürüyoruz
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="mr-4">
                Hemen İletişime Geçin
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Hizmetlerimiz
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white"
          >
            <FaCheckCircle className="text-4xl" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Kaliteli hizmet ve müşteri memnuniyeti önceliğimizdir
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center"
              >
                <feature.icon className="text-5xl text-primary dark:text-primary-light mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Profesyonel ve güvenilir tamir hizmetleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary dark:bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-white/80">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Telefonunuzu Profesyonellere Emanet Edin
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Ücretsiz keşif ve uygun fiyat garantisiyle hizmetinizdeyiz
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Hemen Teklif Alın
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alp Tarık Telefon Tamir</h3>
              <p className="text-gray-400">
                Profesyonel ve güvenilir telefon tamir hizmetleri
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Hizmetler</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>İstanbul, Türkiye</li>
                <li>0850 123 45 67</li>
                <li>info@alptarik.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Çalışma Saatleri</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pazartesi - Cuma: 09:00 - 18:00</li>
                <li>Cumartesi: 10:00 - 16:00</li>
                <li>Pazar: Kapalı</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alp Tarık Telefon Tamir. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
