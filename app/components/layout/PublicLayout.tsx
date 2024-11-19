import React, { useState, useEffect } from 'react'
import { Link, useLocation } from '@remix-run/react'
import { 
  FaHome, 
  FaPhone, 
  FaTools, 
  FaEnvelope, 
  FaMoon, 
  FaSun, 
  FaLanguage 
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '~/context/ThemeContext'

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme, language, setLanguage } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { 
      to: '/', 
      icon: FaHome, 
      label: 'Anasayfa',
      active: location.pathname === '/'
    },
    { 
      to: '/hizmetler', 
      icon: FaTools, 
      label: 'Hizmetler',
      active: location.pathname === '/hizmetler'
    },
    { 
      to: '/iletisim', 
      icon: FaEnvelope, 
      label: 'İletişim',
      active: location.pathname === '/iletisim'
    },
    { 
      to: '/destek', 
      icon: FaPhone, 
      label: 'Destek',
      active: location.pathname === '/destek'
    }
  ]

  const languageOptions = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  // Dışarıya tıklandığında dil menüsünü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const languageButton = event.target as HTMLElement
      if (isLanguageMenuOpen && !languageButton.closest('.language-dropdown')) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLanguageMenuOpen])

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
            : 'bg-white dark:bg-gray-900'
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Alp Tarık Telefon Tamir
            </Link>

            <nav className="flex-grow flex justify-start ml-8">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className={`
                        flex items-center space-x-2 
                        transition-colors duration-300
                        ${link.active 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                        }
                      `}
                    >
                      <link.icon className="text-lg" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4 relative">
              {/* Dil Seçici */}
              <div className="relative language-dropdown">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                  aria-label="Dil Seçimi"
                >
                  <FaLanguage 
                    className={`
                      text-xl mr-2
                      ${language === 'tr' 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300'
                      }
                    `} 
                  />
                  <span className="text-sm">
                    {language === 'tr' ? 'TR' : 'EN'}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700"
                    >
                      {languageOptions.map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setLanguage(lang.code)
                            setIsLanguageMenuOpen(false)
                          }}
                          className={`
                            w-full px-4 py-2 flex items-center justify-between 
                            hover:bg-gray-100 dark:hover:bg-gray-700 
                            ${language === lang.code 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                              : 'text-gray-700 dark:text-gray-300'
                            }
                          `}
                        >
                          <span>{lang.name}</span>
                          <span>{lang.flag}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Tema Değiştirici */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={`Tema ${theme === 'light' ? 'Karanlık' : 'Açık'} olarak değiştirilsin`}
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="light-icon"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                    >
                      <FaMoon className="text-xl text-gray-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="dark-icon"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                    >
                      <FaSun className="text-xl text-yellow-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16"></div>

      <main className="flex-1 w-full max-w-full px-0">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Alp Tarık Telefon Tamir. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default PublicLayout
