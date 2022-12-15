const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'dono-green': '#00CD9C',
      'dono-orange': '#ff9700',
      'dono-purple': '#ce82ff',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)', ...fontFamily.sans],
      },
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'up': {
          '0%': { transform: 'translateY(0%)' },
          '5%': { transform: 'translateY(10%)' },
          '10%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(-300%)', animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)' },
        }
      },
      animation: {
        'up-down': 'up-down 2s infinite',
        'up': 'up 2s'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
