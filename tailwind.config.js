/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      cursor: {
        'ghibliC': "url(./design/images/totoro.cur), pointer",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
