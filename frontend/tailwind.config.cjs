const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2E7D32',
        accent: '#8BC34A',
        background: '#F1F8E9',
        glass: 'rgba(255,255,255,0.15)',
        'text-primary': '#1B5E20',
        'text-inverse': '#FFFFFF',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};