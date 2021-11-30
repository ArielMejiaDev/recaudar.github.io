
module.exports = {
  purge: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        128: '32rem',
      },
      colors: {
        primary: '#fe5971',
        secondary: '#66ddbd',
        dark_primary: '#f95367',
        dark_secondary: '#52d2b3',
        dark_blue: '#212939',
      },
    },
    fontFamily: {
      display: ['montserrat', 'sans-serif'],
      body: ['coolvetica', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
}
