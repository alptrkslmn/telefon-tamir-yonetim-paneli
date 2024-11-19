/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#ff4081',
        'accent': '#7928ca',
      },
    },
  },
  plugins: [],
}
