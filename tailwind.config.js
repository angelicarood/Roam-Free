/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include source files for Tailwind to purge unused styles
    './public/index.html', // Include index.html to ensure Tailwind classes are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
