import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Ubuntu', 
          'Ubuntu Mono', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      colors: {
        dark: {
          background: '#121212',
          text: '#ffffff',
          primary: '#3b82f6',
          secondary: '#6b7280',
        },
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      boxShadow: {
        'header': '0 2px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    typography
  ],
} satisfies Config
