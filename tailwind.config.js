/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          50: "#fdf6f3",
          100: "#fce8e0",
          200: "#fad1c1",
          300: "#f5b69e",
          400: "#e8937a",
          500: "#d97358",
          600: "#c55a42",
          700: "#a54532",
        }
      }
    },
  },
  plugins: [],
}