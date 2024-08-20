/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        normal: '#919aa2',
        lucha: '#ce416b',
        volador: '#89aae3',
        veneno: '#b567ce',
        tierra: '#d97845',
        roca: '#c5b78c',
        bicho: '#91c12f',
        fantasma: '#5269ad',
        acero: '#5a8ea2',
        fuego: '#ff9d55',
        agua: '#5090d6',
        planta: '#63bc5a',
        electrico: '#f4d23c',
        psiquico: '#fa7179',
        hielo: '#73cec0',
        dragon: '#0b6dc3',
        siniestro: '#5a5465',
        hada: '#ec8fe6'
      
      }
    },
  },
  plugins: [],
}