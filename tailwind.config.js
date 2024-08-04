/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #0b004e, #1d152f, #002834)',
        'crypto-bg': 'linear-gradient(rgba(84,3,255,0.15), rgba(105,2,153,0.15))'
      },
    },
  },
  plugins: [],
}

