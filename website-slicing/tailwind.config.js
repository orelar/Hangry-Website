/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-hangry" : "#A30926",
        "black-hangry" : "#303030",
        "black-secondary-hangry" : "#707070",
      }
    },
  },
  plugins: [],
}

