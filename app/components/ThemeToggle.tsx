import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'light' : 'dark';
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: isDark ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isDark ? (
        <FiMoon className="w-6 h-6 text-yellow-500" />
      ) : (
        <FiSun className="w-6 h-6 text-yellow-500" />
      )}
    </motion.button>
  );
}
