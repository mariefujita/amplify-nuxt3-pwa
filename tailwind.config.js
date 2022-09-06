/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/assets/**/*.{vue,js,css}',
    './src/components/**/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
