module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter',
    },
    extend: {
      spacing: {
        200: '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
