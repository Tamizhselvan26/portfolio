/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'Primary' : 'rgb(99, 151, 185)',
        'secondary':'#a8c5db;'
      }
    },
    fontFamily:{
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}

