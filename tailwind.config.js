/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths based on your project
  ],
  theme: {
    extend: {
      colors: {
        'textBg': '#202020'
      },
      screens: {
        'supersmall': '335px'
      }
    },
  },
  plugins: [],
};
