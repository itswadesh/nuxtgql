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
      animation: {
        float: 'float 6s linear infinite',
        wiggle: 'wiggle 6s linear infinite',
        scale: 'scale 6s ease-in infinite',
        fade: 'fade 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        wiggle: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-20px)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '90%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        fade: {
          '0%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
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
