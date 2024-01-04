/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glossyblue': '#0D5BE1',
        'secondarytext': '#475569'
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0)"
          },
          to: {
            transform: "translateX(-100%)"
          }
        }
      }
    },
  },
  plugins: [],
}

