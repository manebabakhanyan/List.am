/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary:'red',
      grey:'#6b7280',
      lightgrey:'#e5e7eb',
      blue:'#1d4ed8',
      white:'#f8fafc',
    },
    fontSize: {
      '5': '5px',
    },
    extend: {},
  },
  plugins: [],
}

