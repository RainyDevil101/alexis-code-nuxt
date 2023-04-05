/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
],
theme: {
  colors: {
    // DARK
    'dark-121212': '#121212',
    'dark-primary': '#424242',
    'black': '#000000',

    //COOl GREY
    'cool-gray-100': '#E4E7EB',
    'cool-gray-200': '#CBD2D9',
    'cool-gray-300': '#9AA5B1',
    'cool-gray-400': '#7B8794',
    'cool-gray-500': '#616E7C',
    'cool-gray-600': '#52606D',
    'cool-gray-700': '#3E4C59',
    'cool-gray-800': '#323F4B',
    'cool-gray-900': '#1F2933',
    'white': '#FFFFFF',

    'transparent': 'transparent',

  },
  minHeight: {
    '100vh': '100vh',
    '36rem': '36rem'
  },
  extend: {
    backgroundImage: {
      'home-image': "url('/img/image-4.JPG')"
    }
  },
  inset: {
    'left-100': '-100%',
    'left-0': '0px',
    'right-0': '0px',
    'top-0': '0px',
    'bottom-0': '0px',
    'right-6': '6px',
    'top-1.5': '1.5px',
    'top-14': '3.4rem'
  }
},
plugins: [
  require('flowbite')
],
darkMode: 'media'
}
