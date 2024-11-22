/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-Azul': '#001425', //Tom do principal
        'c-creme': '#F8ECCE', //Tom rpincipal 2
        'c-cinza': '#212121',
        'c-branco': '#FFF'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },

    },
  },
  plugins: [],
}

