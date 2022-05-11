module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'landing': "url('/assets/images/background.png')",
       }),
      colors:{
        primary: {
          light: '#eea782',
          DEFAULT: '#FD5C01',
          dark: '#cf3603',
         },
         accent: {
          light: "#ffffff",
          DEFAULT: "#E8EBED",
          dark: "#b1b1b1",
         },
        green: {
          light: "#e1eecf"
        },
        warning:{
          DEFAULT: "#d40505"
        }
      },
      gridTemplateColumns: {
        'details': 'auto minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
