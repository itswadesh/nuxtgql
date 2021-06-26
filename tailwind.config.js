module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './shared/components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FB7801', // brown
        },
        secondary: {
          100: '#dff7d5', // very light green
          200: '#32CD32', // green
          400: '#78f547', // light green
          500: '#000000', // black
        },
        accent: {
          100: '#faebeb', // very light red
          500: '#ff8c00', // light-orange
          600: '#C53193;', // pink
          700: '#ff4500', // orange
          800: '#c30b4e', // dark-pink
          900: '#FF461B;', // red
        },
      },
      height: {
        125: '500px',
      },
      fontFamily: {
        sans: ['sofia-pro'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-rtl'),
    require('@tailwindcss/typography'),
  ],
}
