import { useState } from 'react';
import { Link } from '@remix-run/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Button from '~/components/ui/button';
import { ThemeToggle } from '~/components/ThemeToggle';
import { LanguageSelector } from '~/components/LanguageSelector';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Gerçek form gönderme işlemi
    console.log(formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mesajınız alınmıştır. En kısa sürede dönüş yapacağız.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
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

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-primary dark:text-primary-light mb-6 transition-colors">İletişim</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors">
              Herhangi bir soru, öneri veya destek talebi için bizimle iletişime geçebilirsiniz.
            </p>

            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <FaMapMarkerAlt className="text-primary dark:text-primary-light mr-4 text-2xl transition-colors" />
                <span className="dark:text-gray-200 transition-colors">İstanbul, Türkiye</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <FaPhone className="text-primary dark:text-primary-light mr-4 text-2xl transition-colors" />
                <span className="dark:text-gray-200 transition-colors">0850 123 45 67</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <FaEnvelope className="text-primary dark:text-primary-light mr-4 text-2xl transition-colors" />
                <span className="dark:text-gray-200 transition-colors">destek@telefontamir.com</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white transition-colors">Çalışma Saatlerimiz</h3>
              <p className="dark:text-gray-300 transition-colors">Pazartesi - Cuma: 09:00 - 18:00</p>
              <p className="dark:text-gray-300 transition-colors">Cumartesi: 10:00 - 16:00</p>
              <p className="dark:text-gray-300 transition-colors">Pazar: Kapalı</p>
            </motion.div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6 transition-colors">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-colors"
                  placeholder="Adınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-colors"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-colors"
                  placeholder="Telefon numaranızı girin"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-colors"
                  placeholder="Mesajınızı yazın"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </Button>
            </form>
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
