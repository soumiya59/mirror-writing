/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whitish: '#f9f4f0',
        redish : '#f41415',
        dark : '#37352c'
      }
    },
  },
  plugins: [],
}
