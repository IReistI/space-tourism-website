/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1xl': "1440px"
      },
      backgroundImage: {
        'home-mobile': "url('/img/home/background-home-mobile.jpg')",
        'home-tablet': "url('/img/home/background-home-tablet.jpg')",
        'home-desktop': "url('/img/home/background-home-desktop.jpg')",
        'destination-mobile': "url('/img/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/img/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/img/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/img/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/img/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/img/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('/img/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/img/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/img/technology/background-technology-desktop.jpg')"
      },
      colors: {
        'primary': '#0B0D17',
        'secondary': '#D0D6F9',
      },
      fontFamily: {
        'bellefair': ["Bellefair", "sans"],
        'barlowRegular': ["Barlow", "sans-serif"],
        'barlowCondensed': ["Barlow Condensed", "sans-serif"]
      }
    },
  },
  plugins: [],
}

