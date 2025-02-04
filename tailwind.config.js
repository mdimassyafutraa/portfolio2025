/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Caladea', 'serif'],
        paragraf: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        dark: '#18181b',
        light: '#fafafa',
      },
    },
  },
  plugins: [tailwindScrollbar],
};
