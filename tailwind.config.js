/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hebrew: ['IBM Plex Sans Hebrew', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
      },
      colors: {
        'vivid-purple': '#9617C7',
        'golden-yellow': '#EDCA0C',
        'light-purple': '#DB9EF2',
        grey: '#C0C7C9',
        charcoal: '#707070',
        lavender: '#F1EAF4',
        'blue-grey': '#6D8791',
        'light-lavender': '#b45bd6',
        'fire-red': '#D00C0C',
        silver: '#C9C9C9',
        'pinkish-purple': '#D876FF'
      },
      borderRadius: {
        small: '5px'
      },
      backgroundImage: {
        yellowPurple: 'url("/images/home-background.svg")',
        purpleShade: 'url("/images/purple-bg.svg")'
      },
      backgroundPosition: {
        'bottom-4': 'center bottom -4rem'
      }
    },
    container: {
      center: true,
      screens: {
        sm: '1366px',
        md: '1366px',
        lg: '1366px',
        xl: '1366px',
        '2xl': '1366px'
      }
    }
  },
  plugins: []
}
