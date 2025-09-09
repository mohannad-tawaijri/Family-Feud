/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'feud-blue': '#1B4F72',
        'feud-yellow': '#F7DC6F',
        'feud-red': '#E74C3C',
        'feud-green': '#28B463',
      },
      fontFamily: {
        'feud': ['Arial Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
