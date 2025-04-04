/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B21A8',
          dark: '#581C87',
        },
        secondary: {
          DEFAULT: '#111111',
          light: '#1F1F1F',
        }
      }
    },
  },
  plugins: [],
};