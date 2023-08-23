const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
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
      }
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),
            require('flowbite/plugin')
],
  darkMode: 'class',
};
