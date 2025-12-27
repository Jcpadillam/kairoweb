/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1220',
        secondary: '#0C1730',
        accent: '#2F80ED',
        info: '#38BDF8',
        softblue: '#6BA7FF',
        check: '#69A7FF',
        lightblue: '#CFE5FF',
        light: '#eee',
        dark: '#333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
