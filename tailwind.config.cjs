
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
            './node_modules/flowbite/**/*.js' 
],
  theme: {
    extend: {
      colors: {
        primarybase: 'var(--aw-color-primary)',
        secondarybase: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        secondary: {
          10: "#fffaf7", //Generated using https://mdigi.tools/lighten-color/#fff3ea
          25: "#fff3ea",
          50: "#fff7f4",
          100: "#fff0e9",
          200: "#fed9c7",
          300: "#fdc1a5",
          400: "#fc9362",
          500: "#fb651e",
          600: "#e25b1b",
          700: "#bc4c17",
          800: "#973d12",
          900: "#7b310f",
        },
        tangerine: "#ff7342",
        primary: { //purple
        10: "#f9f7fd",
        25: "#f0ecf9",
        50: "#EAE2F8",
        100: "#CFBCF2",
        200: "#A081D9",
        300: "#8662C7",
        400: "#724BB7",
        500: "#653CAD",
        600: "#51279B",
        700: "#421987",
        800: "#34126F",
        900: "#240754",  
      },
      grey : { //blue-grey
        50: "#F0F4F8",
        100: "#D9E2EC",
        200: "#BCCCDC",
        300: "#9FB3C8",
        400: "#829AB1",
        500: "#627D98",
        600: "#486581",
        700: "#334E68",
        800: "#243B53",
        900: "#102A43",  
      },
      red : { //red-vivid-
        50: "#FFE3E3",
        100: "#FFBDBD",
        200: "#FF9B9B",
        300: "#F86A6A",
        400: "#EF4E4E",
        500: "#E12D39",
        600: "#CF1124",
        700: "#AB091E",
        800: "#8A041A",
        900: "#610316", 
      },
      green : { //green-vivid
        50: "#E3F9E5",
        100: "#C1F2C7",
        200: "#91E697",
        300: "#51CA58",
        400: "#31B237",
        500: "#18981D",
        600: "#0F8613",
        700: "#0E7817",
        800: "#07600E",
        900: "#014807",  
      

      },
      blue : { //light-blue-vivid
        50: "#E3F8FF",
        100: "#B3ECFF",
        200: "#81DEFD",
        300: "#5ED0FA",
        400: "#40C3F7",
        500: "#2BB0ED",
        600: "#1992D4",
        700: "#127FBF",
        800: "#0B69A3",
        900: "#035388",

      },
      yellow : { //yellow-vivid
        50: "#FFFBEA",
        100: "#FFF3C4",
        200: "#FCE588",
        300: "#FADB5F",
        400: "#F7C948",
        500: "#F0B429",
        600: "#DE911D",
        700: "#CB6E17",
        800: "#B44D12",
        900: "#8D2B0B",

},
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),
            require('flowbite/plugin'),
           // starlightPlugin()
],
  darkMode: 'class',
};
