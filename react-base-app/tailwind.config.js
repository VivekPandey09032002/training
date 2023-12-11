import daisyui from 'daisyui'
import autoprefixer from 'autoprefixer'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui, autoprefixer],
  daisyui: {
    themes: ["cupcake", "corporate", "dark", "dracula", "night"]
  }
}
