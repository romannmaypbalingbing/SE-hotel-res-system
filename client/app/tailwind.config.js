/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maroon': '#930707',
        'dark maroon': '#6a040f',
        'gold': '#f9a825',
        'cream': '#f3f3f3',
      }
    },
  },
  plugins: [],
}