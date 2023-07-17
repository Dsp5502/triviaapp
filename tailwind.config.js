/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        'steel-gray': {
          DEFAULT: '#1B1827',
          50: '#6A5E99',
          100: '#61568C',
          200: '#4F4773',
          300: '#3E375A',
          400: '#2C2840',
          500: '#1B1827',
          600: '#030304',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};
