/** @type {import('tailwindcss').UserConfig} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xorange: 'hsl(35, 77%, 62%)',
        xred: 'hsl(5, 85%, 63%)',
        xwhitee: 'hsl(36, 100%, 99%)',
        xgrayishblue: 'hsl(233, 8%, 79%)',
        xblue: 'hsl(236, 13%, 42%)',
        xdarkblue: 'hsl(240, 100%, 5%)',
      },
      gradientColorStops: {
        xgradient: {
          'from': 'hsl(240, 100%, 5%)',
          'to': 'hsl(5, 85%, 63%)',
        },
      },
    },
  },
  plugins: [],
};
