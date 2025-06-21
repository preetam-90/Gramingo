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
        'primary-light': '#66BB6A',
        'primary-dark': '#1B5E20',
        secondary: '#2E7D32',
        accent: '#8BC34A',
        background: '#F1F8E9',
        surface: 'rgba(255, 255, 255, 0.55)',
        glass: 'rgba(255,255,255,0.15)',
        'glass-strong': 'rgba(255,255,255,0.25)',
        'text-primary': '#1B5E20',
        'text-inverse': '#FFFFFF',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};