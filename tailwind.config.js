/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      sans: ['sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
