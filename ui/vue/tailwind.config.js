/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/*.{vue,js,ts,jsx,tsx}",
    "./playground/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}