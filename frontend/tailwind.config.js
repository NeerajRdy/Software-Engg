/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This includes all the files in the src directory for React apps
    './public/index.html', // Add other paths where Tailwind classes are used
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D54A4',
        secondary: '#6C63AC',

      },
      boxShadow: {
        custom: '0px 0px 24px #5C5696',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
