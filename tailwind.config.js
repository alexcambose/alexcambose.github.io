const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './theme/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#0f0',
        'primary-dark': '#0f0',
        'background-light': colors.slate[100],
        'background-dark': colors.indigo[950],
        'page-frame-color-light': '',
        'page-frame-color-dark': colors.black[950],
      },
      textColor: {
        'default-dark': colors.gray[400],
        'default-light': '',
        'highlighted-dark': colors.gray[100],
        // 'text-highlighted-dark': colors.gray[400],
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      spacing: {
        200: '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
