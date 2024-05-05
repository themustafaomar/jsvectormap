const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node/**/*.js',
    './vite.config.js',
    './index.html',
    './docs/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
