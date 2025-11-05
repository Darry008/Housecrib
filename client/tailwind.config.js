/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34A264', 
        'primary-dark': '#2B8351',
        'gray-input': '#F5F5F5', 
      },
      spacing: {
        '15': '3.75rem', // 60px
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
