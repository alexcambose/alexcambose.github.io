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
      fontSize: {
        xxs: '0.6rem',
      },
      // https://coolors.co/palette/0a1128-001f54-034078-1282a2-fefcfb
      colors: {
        'primary-light': '#0f0',
        'primary-dark': '#0f0',
        'background-light': colors.slate[100],
        'background-dark': '#0A1128',
        'page-frame-color-light': '',
        'page-frame-color-dark': '#001F54',
        'accent-color-dark': '#034078',
      },
      textColor: {
        'default-dark': colors.slate[400],
        'default-light': colors.gray[750],
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
