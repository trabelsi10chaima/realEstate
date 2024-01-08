/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#1a4577",
        secondary : "#f8f9fa",
        accent : "#a7598e"
      }
    },
  },
  plugins: [],
}

