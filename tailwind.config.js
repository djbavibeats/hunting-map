/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'tungsten': [ 'Tungsten', 'sans-serif' ],
      'geizer': [ 'Geizer' ],
    },
    letterSpacing: {
      'wide': '0.125rem',
    },
    colors: {
      'yellow': '#f4ed3f',
      'black': '#000000',
      'white': '#ffffff'
    },
    extend: {
    },
  },
  plugins: [],
}

