import React, { createContext, useState, useContext, useEffect } from 'react';
import { useFetcher } from '@remix-run/react';

type Theme = 'light' | 'dark';
type Language = 'tr' | 'en';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  language: 'tr',
  setLanguage: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sunucu tarafında varsayılan değerler kullanılacak
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('tr');

  // İstemci tarafında localStorage'dan değerleri al
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const savedLanguage = localStorage.getItem('language') as Language;

      // Tarayıcı tercihini de kontrol et
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setTheme(savedTheme || (prefersDarkMode ? 'dark' : 'light'));
      setLanguage(savedLanguage || 'tr');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    // HTML elemanına tema sınıfını ekle
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        language, 
        setLanguage: updateLanguage 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
