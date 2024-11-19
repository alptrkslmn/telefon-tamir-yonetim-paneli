import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaClock, 
  FaCheckCircle 
} from 'react-icons/fa';
import PublicLayout from '~/components/layout/PublicLayout';
import Button from '~/components/ui/button';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { toast } from 'react-hot-toast';

export const loader = () => {
  return json({ page: 'iletisim' });
};

export default function IletisimPage() {
  const { page } = useLoaderData<typeof loader>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'Whatsapp Destek',
      description: '+90 555 123 45 67',
      color: 'text-green-500'
    },
    {
      icon: FaPhone,
      title: 'Müşteri Hizmetleri',
      description: '0850 123 45 67',
      color: 'text-blue-500'
    },
    {
      icon: FaEnvelope,
      title: 'E-posta Destek',
      description: 'destek@alptariktelefontamir.com',
      color: 'text-red-500'
    },
    {
      icon: FaClock,
      title: 'Çalışma Saatleri',
      description: 'Hafta içi 09:00 - 18:00',
      color: 'text-purple-500'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Detaylı form doğrulama
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      toast.error('Lütfen tüm zorunlu alanları doldurun');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Mesaj gönderilirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      toast.error('Sunucu bağlantısı kurulamadı. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Bize Ulaşın
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Herhangi bir sorunuz, öneriniz veya destek talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1 space-y-6"
            >
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <method.icon className={`text-4xl ${method.color}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* İletişim Formu */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Ad Soyad *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınızı girin"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      E-posta *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="E-posta adresinizi girin"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefon numaranızı girin"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Konu Seçin</option>
                      <option value="destek">Teknik Destek</option>
                      <option value="garanti">Garanti İşlemleri</option>
                      <option value="fiyat">Fiyat Bilgisi</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    Mesaj *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Mesajınızı buraya yazın"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </Button>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <FaCheckCircle className="mr-2" />
                    <span className="text-sm">Güvenli İletişim</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Harita Entegrasyonu */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Bizi Ziyaret Edin
            </h2>
            <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              {/* Harita için placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                <p className="text-xl">Harita Entegrasyonu Yakında</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PublicLayout>
  );
}
