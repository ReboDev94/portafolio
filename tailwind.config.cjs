/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Nunito', 'serif'],
      },
      colors: {
        'r-dark': '#393e41',
        'r-primary': '#fffc31',
        'r-white': '#f6f7eb',
        'r-red': '#e94f37',
        'r-blue': '#28536b'
      }
    },
  },
  plugins: [],
}
