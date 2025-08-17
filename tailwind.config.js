/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        recgreen: '#00AAA2',     // Real Estate Care groen
        recblue: '#475E6C',      // Middenblauw uit logo
        recnavy: '#141B1F',      // Donkerblauw achtergrond
        recdark: '#293439',      // Alternatief donker
        reclight: '#F5F8FA'      // Lichte achtergrondkleur
      }
    }
  },
  plugins: []
}
