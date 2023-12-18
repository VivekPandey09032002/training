/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
import autoprefixer from 'autoprefixer'
import { tailwindThemes } from "./src/utils/constants.ts"

console.log("tailwind themes", tailwindThemes);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Neucha'],
        poppins: ["Poppins", 'Neucha']
      }
    },
  },
  plugins: [daisyui, autoprefixer],
  daisyui: {
    themes: tailwindThemes
  }
}

