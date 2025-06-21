/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3AA855', // green primary
          light: '#5FCF79',
          dark: '#2C7A3E',
        },
        secondary: {
          DEFAULT: '#A1C181',
          light: '#C4E3A3',
          dark: '#799C5F',
        },
        accent: '#FFD670',
        background: '#F5FFF7',
        glass: 'rgba(255,255,255,0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};