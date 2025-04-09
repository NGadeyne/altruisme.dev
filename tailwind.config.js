/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.{html,js}",
    "./static/js/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fdf4ff","100":"#fae8ff","200":"#f5d0fe","300":"#f0abfc","400":"#e879f9","500":"#d946ef","600":"#c026d3","700":"#a21caf","800":"#86198f","900":"#701a75","950":"#4a044e"}
      }
    },
    fontFamily: {
      'body': [
        'Roboto', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
      ],
      'sans': [
        'Roboto', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
      ]
      },
  },
  plugins: [],
}