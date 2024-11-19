import { Link } from '@remix-run/react'
import { FaHome, FaPhone, FaTools, FaEnvelope, FaMoon, FaSun, FaLanguage } from 'react-icons/fa'
import { useTheme } from '~/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme, language, setLanguage } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
            : 'bg-white dark:bg-gray-900'
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className={`
                text-xl font-bold transition-colors
                ${isScrolled 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-900 dark:text-white'
                }
              `}
            >
              Alp Tarık Telefon Tamir
            </Link>

            {/* Navigation */}
            <nav className="flex-grow ml-8 mr-auto">
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    to="/" 
                    className={`
                      flex items-center transition-colors
                      ${isScrolled 
                        ? 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' 
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      }
                    `}
                  >
                    <FaHome className="mr-2" /> Anasayfa
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/iletisim" 
                    className={`
                      flex items-center transition-colors
                      ${isScrolled 
                        ? 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' 
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      }
                    `}
                  >
                    <FaEnvelope className="mr-2" /> İletişim
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/hizmetler" 
                    className={`
                      flex items-center transition-colors
                      ${isScrolled 
                        ? 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' 
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      }
                    `}
                  >
                    <FaTools className="mr-2" /> Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/destek" 
                    className={`
                      flex items-center transition-colors
                      ${isScrolled 
                        ? 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' 
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      }
                    `}
                  >
                    <FaPhone className="mr-2" /> Destek
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Theme and Language Toggles */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                className={`
                  p-2 rounded-full transition-colors duration-300
                  ${isScrolled 
                    ? 'hover:bg-blue-100 dark:hover:bg-blue-900' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
                aria-label={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
              >
                <FaLanguage 
                  className={`
                    text-xl transition-colors duration-300
                    ${isScrolled 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300'
                    }
                  `} 
                />
              </button>
              <button
                onClick={toggleTheme}
                className={`
                  p-2 rounded-full transition-colors duration-300
                  ${isScrolled 
                    ? 'hover:bg-blue-100 dark:hover:bg-blue-900' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
                aria-label={theme === 'light' ? 'Gece Moduna Geç' : 'Gündüz Moduna Geç'}
              >
                {theme === 'light' ? (
                  <FaMoon 
                    className={`
                      text-xl transition-colors duration-300
                      ${isScrolled 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300'
                      }
                    `} 
                  />
                ) : (
                  <FaSun 
                    className={`
                      text-xl transition-colors duration-300
                      ${isScrolled 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300'
                      }
                    `} 
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Header için boşluk */}
      <div className="h-16"></div>

      <main className="flex-1 container mx-auto px-4 py-8">
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
