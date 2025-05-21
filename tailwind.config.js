/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'heading-xl': ['64px', {
          lineHeight: '80px',
          letterSpacing: '-0.02em',
        }],
      },
    },
  },
  plugins: [],
}

