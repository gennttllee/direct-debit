/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0275D8',
        secondary: '#5F738C',
        tertiary: '#F3F5F6'
      }
    },
  },
  plugins: [],
}

