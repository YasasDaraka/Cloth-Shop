/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
      }
    },
  },
  plugins: [],
}

