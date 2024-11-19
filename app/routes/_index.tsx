import { useState } from 'react';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { FaMobile, FaTools, FaClock, FaShieldAlt, FaChevronLeft, FaChevronRight, FaUserTie, FaCheckCircle, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import Button from '~/components/ui/button';
import PublicLayout from '~/components/layout/PublicLayout';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = () => {
  return json({ page: 'anasayfa' });
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      image: '/images/slider1.jpg',
      title: 'Profesyonel Telefon Tamiri',
      description: 'Tüm marka ve modeller için güvenilir çözümler'
    },
    {
      image: '/images/slider2.jpg',
      title: 'Hızlı ve Kaliteli Hizmet',
      description: 'Kısa sürede profesyonel tamir ve geri teslim'
    },
    {
      image: '/images/slider3.jpg',
      title: 'Garanti Altında Onarım',
      description: 'Tüm tamir işlemlerimiz için kapsamlı garanti'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

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
      title: 'Hızlı Teslimat',
      description: 'Kısa sürede profesyonel tamir ve geri teslim'
    },
    {
      icon: FaShieldAlt,
      title: 'Garanti',
      description: 'Tüm tamir işlemlerimiz için kapsamlı garanti'
    }
  ];

  const stats = [
    { number: '500+', text: 'Mutlu Müşteri' },
    { number: '1000+', text: 'Başarılı Onarım' }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {/* Slider Section */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          {sliderImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white max-w-2xl px-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-6xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-xl md:text-2xl mb-8"
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <feature.icon className="mx-auto text-5xl text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hizmetler Bölümü */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { 
                to: '/destek-talep', 
                icon: FaPhone, 
                title: 'Destek Talebi', 
                description: 'Hızlı destek için talebinizi oluşturun' 
              },
              { 
                to: '/ariza-takip', 
                icon: FaTools, 
                title: 'Arıza Takip', 
                description: 'Cihazınızın tamir durumunu görüntüleyin' 
              },
              { 
                to: '/sss', 
                icon: FaEnvelope, 
                title: 'Sıkça Sorulan Sorular', 
                description: 'Tüm sorularınızın cevapları' 
              },
              { 
                to: '/canli-destek', 
                icon: FaHome, 
                title: 'Canlı Destek', 
                description: 'Anında yardım alın' 
              }
            ].map((link, index) => (
              <Link 
                key={index} 
                to={link.to} 
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <link.icon className="text-4xl text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
