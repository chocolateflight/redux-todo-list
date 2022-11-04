/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    fontSize: {},
    fontFamily: {
      sans: ['Open Sans'],
    },
    colors: {
      blueDark: '#31C3BD',
    },
    extend: {
      gridTemplateColumns: {},
      gridTemplateRows: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
